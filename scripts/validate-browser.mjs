/* global window, document, getComputedStyle, NodeFilter, requestAnimationFrame */
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { chromium } from "playwright";
import sharp from "sharp";

const base = new URL(process.argv[2] ?? "http://127.0.0.1:4176");
const output = resolve(process.argv[3] ?? "artifacts/browser-checks");
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = [];
const failures = [];
const luminance = (rgb) =>
  rgb
    .map((v) => {
      const s = v / 255;
      return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
    })
    .reduce((n, v, i) => n + v * [0.2126, 0.7152, 0.0722][i], 0);
const ratio = (a, b) => (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
try {
  for (const route of [
    "/",
    "/works",
    "/works/deep-live-cam",
    "/privacy",
    "/missing-checklist-page",
  ]) {
    for (const theme of ["light", "dark"]) {
      for (const width of [390, 1440]) {
        const context = await browser.newContext({
          viewport: { width, height: 960 },
          colorScheme: theme,
          reducedMotion: "reduce",
        });
        const page = await context.newPage();
        const errors = [];
        page.on("pageerror", (error) => errors.push(error.message));
        const response = await page.goto(new URL(route, base).href, { waitUntil: "networkidle" });
        await page.locator("main h1").waitFor();
        await page.evaluate(() => document.fonts.ready);
        for (const image of await page.locator("main img").all()) {
          if (!(await image.isVisible())) continue;
          await image.scrollIntoViewIfNeeded();
          await image.evaluate((img) => img.decode());
        }
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.addScriptTag({ path: resolve("node_modules/axe-core/axe.min.js") });
        const accessibility = await page.evaluate(async () => {
          const result = await window.axe.run(document, {
            runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa"] },
          });
          return {
            violations: result.violations.map((v) => ({
              id: v.id,
              nodes: v.nodes.map((n) => ({ target: n.target, summary: n.failureSummary })),
            })),
            incomplete: result.incomplete.map((v) => ({
              id: v.id,
              nodes: v.nodes.map((n) => ({
                target: n.target,
                reasons: n.any.map((a) => a.data?.messageKey),
              })),
            })),
          };
        });
        const key = `${route === "/" ? "home" : route.slice(1).replaceAll("/", "-")}-${theme}-${width}`;
        await page.screenshot({ path: `${output}/${key}.png`, fullPage: true });
        const layout = await page.evaluate(() => ({
          width: window.innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
        }));
        const selectors = [
          ...new Set(
            accessibility.incomplete
              .filter((v) => v.id === "color-contrast")
              .flatMap((v) => v.nodes)
              .flatMap((n) => n.target),
          ),
        ];
        // Axe cannot resolve gradients/pseudo-elements. Measure the actual composited
        // background behind every text rectangle, retaining layout and paint effects.
        const textRuns = await page.evaluate((selectors) => {
          const runs = [];
          const seen = new Set();
          const canvas = document.createElement("canvas");
          canvas.width = canvas.height = 1;
          const ctx = canvas.getContext("2d", { willReadFrequently: true });
          for (const selector of selectors) {
            const target = document.querySelector(selector);
            if (!target) throw new Error(`Unresolved contrast target: ${selector}`);
            const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);
            while (walker.nextNode()) {
              const node = walker.currentNode;
              if (!node.textContent.trim() || seen.has(node)) continue;
              seen.add(node);
              const el = node.parentElement;
              if (el.closest('[aria-hidden="true"]')) continue;
              const style = getComputedStyle(el);
              if (style.visibility !== "visible" || style.display === "none") continue;
              const range = document.createRange();
              range.selectNodeContents(node);
              const rects = [...range.getClientRects()]
                .filter((r) => r.width > 0 && r.height > 0)
                .map((r) => ({
                  x: r.x + window.scrollX,
                  y: r.y + window.scrollY,
                  width: r.width,
                  height: r.height,
                }));
              if (!rects.length) continue;
              ctx.clearRect(0, 0, 1, 1);
              ctx.fillStyle = style.color;
              ctx.fillRect(0, 0, 1, 1);
              const rgba = [...ctx.getImageData(0, 0, 1, 1).data];
              let opacity = 1;
              for (let p = el; p; p = p.parentElement)
                opacity *= Number(getComputedStyle(p).opacity);
              runs.push({
                selector,
                text: node.textContent.trim(),
                rgba,
                opacity,
                rects,
                threshold:
                  parseFloat(style.fontSize) >= 24 ||
                  (parseFloat(style.fontSize) >= 18.6667 && Number(style.fontWeight) >= 700)
                    ? 3
                    : 4.5,
              });
            }
          }
          return runs;
        }, selectors);
        const mask = await page.addStyleTag({
          content:
            "* { -webkit-text-fill-color: transparent !important; text-shadow: none !important; caret-color: transparent !important; }",
        });
        await page.evaluate(
          () => new Promise((done) => requestAnimationFrame(() => requestAnimationFrame(done))),
        );
        const background = await page.screenshot({ fullPage: true });
        await mask.evaluate((el) => el.remove());
        const { data, info } = await sharp(background)
          .removeAlpha()
          .raw()
          .toBuffer({ resolveWithObject: true });
        const contrast = textRuns.map((run) => {
          let minimum = Infinity;
          let samples = 0;
          for (const rect of run.rects) {
            for (
              let y = Math.max(0, Math.ceil(rect.y) + 1);
              y < Math.min(info.height, Math.floor(rect.y + rect.height) - 1);
              y += 2
            ) {
              for (
                let x = Math.max(0, Math.ceil(rect.x) + 1);
                x < Math.min(info.width, Math.floor(rect.x + rect.width) - 1);
                x += 2
              ) {
                const offset = (y * info.width + x) * info.channels;
                const bg = [...data.subarray(offset, offset + 3)];
                const alpha = (run.rgba[3] / 255) * run.opacity;
                const fg = run.rgba
                  .slice(0, 3)
                  .map((value, i) => value * alpha + bg[i] * (1 - alpha));
                minimum = Math.min(minimum, ratio(luminance(fg), luminance(bg)));
                samples++;
              }
            }
          }
          return {
            selector: run.selector,
            text: run.text,
            minimum,
            threshold: run.threshold,
            samples,
            pass: samples > 0 && minimum >= run.threshold,
          };
        });
        const row = {
          route,
          theme,
          width,
          status: response.status(),
          layout,
          errors,
          accessibility,
          contrast,
          minimumContrast: contrast.length ? Math.min(...contrast.map((r) => r.minimum)) : null,
        };
        results.push(row);
        if (
          row.status !== (route.startsWith("/missing") ? 404 : 200) ||
          errors.length ||
          layout.scrollWidth > width ||
          accessibility.violations.length ||
          contrast.some((r) => !r.pass)
        )
          failures.push(key);
        console.log(
          JSON.stringify({
            key,
            status: row.status,
            violations: accessibility.violations,
            contrastChecks: contrast.length,
            contrastFailures: contrast.filter((r) => !r.pass),
            overflow: layout.scrollWidth > width,
          }),
        );
        await context.close();
      }
    }
  }
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
if (failures.length) throw new Error(`Browser checks failed: ${failures.join(", ")}`);
