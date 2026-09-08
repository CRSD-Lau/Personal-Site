/* global window, document */
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { chromium } from "playwright";

const base = new URL(process.argv[2] ?? "http://127.0.0.1:4176");
const output = resolve(process.argv[3] ?? "artifacts/interactions");
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = [];
const failures = [];
function check(condition, message) {
  if (!condition) failures.push(message);
}
try {
  for (const theme of ["light", "dark"]) {
    for (const width of [320, 390, 768, 1440, 1920]) {
      const context = await browser.newContext({
        viewport: { width, height: 960 },
        colorScheme: theme,
        reducedMotion: "reduce",
      });
      const page = await context.newPage();
      for (const route of [
        "/",
        "/works",
        "/works/deep-live-cam",
        "/privacy",
        "/missing-checklist-page",
      ]) {
        await page.goto(new URL(route, base).href, { waitUntil: "networkidle" });
        await page.locator("main h1").waitFor();
        const clippedText = await page.evaluate(() => {
          const clipped = [];
          for (const el of document.querySelectorAll("h1,h2,h3,main p,footer a")) {
            if (!el.checkVisibility() || el.closest('[aria-hidden="true"],.sr-only')) continue;
            for (const node of el.childNodes) {
              if (node.nodeType !== 3 || !node.textContent.trim()) continue;
              const range = document.createRange();
              range.selectNodeContents(node);
              if (
                [...range.getClientRects()].some(
                  (r) => r.left < -1 || r.right > window.innerWidth + 1,
                )
              )
                clipped.push(el.textContent.trim().slice(0, 80));
            }
          }
          return clipped;
        });
        check(!clippedText.length, `${route}/${theme}/${width}: text clipped: ${clippedText}`);
        const privacy = page
          .getByRole("navigation", { name: "Footer navigation" })
          .getByRole("link", { name: "Privacy", exact: true });
        check(
          (await privacy.getAttribute("href")) === "/privacy",
          `${route}: privacy footer link missing`,
        );
        if (width === 320) {
          const menu = page.getByRole("button", { name: "Open navigation", exact: true });
          await menu.click();
          check(
            await page
              .getByRole("navigation", { name: "Mobile navigation", exact: true })
              .isVisible(),
            `${route}: menu failed`,
          );
          await page.keyboard.press("Escape");
          check((await menu.getAttribute("aria-expanded")) === "false", `${route}: Escape failed`);
          check(
            await menu.evaluate((el) => el === document.activeElement),
            `${route}: Escape focus not restored`,
          );
          await menu.click();
          await page
            .getByRole("navigation", { name: "Mobile navigation", exact: true })
            .getByRole("link", { name: "Contact", exact: true })
            .click();
          await page.waitForURL(new URL("/#contact", base).href);
          check(
            await page.locator("#contact-title").isVisible(),
            `${route}: Contact navigation failed`,
          );
        }
        results.push({ route, theme, width, clippedText });
      }
      await context.close();
    }
  }
  for (const destination of [
    { text: "Back to home", path: "/" },
    { text: "Explore my work", path: "/works" },
  ]) {
    const page = await browser.newPage();
    const response = await page.goto(new URL("/missing-checklist-page", base).href);
    check(response.status() === 404, "Missing page must return real HTTP 404");
    await page.getByRole("link", { name: destination.text, exact: true }).click();
    await page.waitForURL(new URL(destination.path, base).href);
    await page.waitForFunction(
      () =>
        ![...document.querySelectorAll('meta[name="robots"]')].some((m) =>
          m.content.includes("noindex"),
        ),
    );
    await page.close();
  }
  const regular = await browser.newContext({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce",
  });
  const page = await regular.newPage();
  const requests = [];
  page.on("request", (request) => requests.push(request.url()));
  await page.goto(base.href, { waitUntil: "networkidle" });
  check(
    !requests.some((url) => new URL(url).pathname === "/icon.png"),
    "Regular visits must not download the installed-app portrait",
  );
  check(
    !requests.some((url) => url.includes("social-preview.png")),
    "Regular visits must not download the full project PNG",
  );
  await page.keyboard.press("Tab");
  check(
    await page
      .getByRole("link", { name: "Skip to main content", exact: true })
      .evaluate((el) => el === document.activeElement),
    "Skip link must be first keyboard target",
  );
  await page.keyboard.press("Enter");
  check(
    await page.locator("main").evaluate((el) => el === document.activeElement),
    "Skip link must focus main content",
  );
  for (const disclosure of await page.locator("details").all()) {
    await disclosure.locator("summary").click();
    check((await disclosure.getAttribute("open")) !== null, "Career disclosure must open");
    await disclosure.locator("summary").click();
  }
  const toggle = page.getByRole("button", { name: /Switch to .* mode/ });
  await toggle.click();
  check(
    await page.evaluate(() => ["light", "dark"].includes(localStorage.getItem("theme"))),
    "Theme must persist locally",
  );
  await regular.close();

  // Simulate iOS standalone detection without a physical install; retain real CSS,
  // image loading, user dismissal, once-per-session state, and reduced motion.
  const installed = await browser.newContext({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce",
  });
  await installed.addInitScript(() =>
    Object.defineProperty(navigator, "standalone", { get: () => true }),
  );
  const app = await installed.newPage();
  const iconResponse = app.waitForResponse(
    (response) => new URL(response.url()).pathname === "/icon.png",
  );
  await app.goto(base.href, { waitUntil: "domcontentloaded" });
  check((await iconResponse).status() === 200, "Installed app must load its original portrait");
  check(await app.locator(".mobile-launch").isVisible(), "Installed launch screen must appear");
  await app.keyboard.press("Escape");
  await app.waitForFunction(() => !document.documentElement.hasAttribute("data-mobile-launch"));
  await app.reload({ waitUntil: "networkidle" });
  check(
    await app.evaluate(
      () =>
        sessionStorage.getItem("neil-mobile-launch-seen") === "1" &&
        !document.documentElement.hasAttribute("data-mobile-launch"),
    ),
    "Installed introduction must run once per session",
  );
  await installed.close();
  const noJS = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 320, height: 844 },
  });
  const fallback = await noJS.newPage();
  await fallback.goto(base.href);
  check(await fallback.locator("main h1").isVisible(), "No-JS content must remain visible");
  check(
    await fallback.getByRole("navigation", { name: "Section navigation", exact: true }).isVisible(),
    "No-JS navigation must remain visible",
  );
  await fallback.locator("#works img").scrollIntoViewIfNeeded();
  await fallback.waitForFunction(() => {
    const image = document.querySelector("#works img");
    return image.complete && image.naturalWidth > 0;
  });
  await noJS.close();
} finally {
  await writeFile(
    `${output}/results.json`,
    JSON.stringify(
      { author: "Neil Mitchell", modifiedBy: "Neil Mitchell", results, failures },
      null,
      2,
    ),
  );
  await browser.close();
}
if (failures.length) throw new Error(failures.join("\n"));
console.log(
  `Interaction checks passed, including ${results.length} responsive route/theme/width checks.`,
);
