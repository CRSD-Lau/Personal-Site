/* global document, getComputedStyle */
import { copyFile, mkdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { chromium } from "playwright";
import sharp from "sharp";

// Render the real site's typography, copy and portrait into share-sized layouts.
// Build and serve the static export first, then run npm run previews:build.
const baseUrl = new URL(process.argv[2] ?? "http://127.0.0.1:4174");
if (!["127.0.0.1", "localhost", "[::1]"].includes(baseUrl.hostname)) {
  throw new Error("Use a local static export so preview assets match the reviewed source.");
}
const author = "Neil Mitchell";
const xmp = `<?xpacket begin="\uFEFF" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
<rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xmp="http://ns.adobe.com/xap/1.0/" xmlns:portfolio="https://neilmitchell.ca/ns/metadata/1.0/">
<dc:creator><rdf:Seq><rdf:li>${author}</rdf:li></rdf:Seq></dc:creator>
<xmp:CreatorTool>${author}</xmp:CreatorTool><portfolio:LastModifiedBy>${author}</portfolio:LastModifiedBy>
</rdf:Description></rdf:RDF></x:xmpmeta><?xpacket end="w"?>`;
const escape = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");
const font = (await readFile("public/fonts/manrope-latin-variable.woff2")).toString("base64");
const portrait = (await readFile("public/profile.webp")).toString("base64");
await mkdir("public/social", { recursive: true });
await mkdir("docs/assets", { recursive: true });
const browser = await chromium.launch({
  ...(process.env.PREVIEW_CHROMIUM ? { executablePath: process.env.PREVIEW_CHROMIUM } : {}),
});

async function saveImage(buffer, path) {
  let pipeline = sharp(buffer)
    .removeAlpha()
    .withExif({ IFD0: { Artist: author, Software: author } })
    .withXmp(xmp);
  pipeline = path.endsWith(".jpg")
    ? pipeline.jpeg({ quality: 90 })
    : pipeline.png({ compressionLevel: 9 });
  const result = await pipeline.toFile(path);
  const metadata = await sharp(path).metadata();
  if (
    !metadata.exif?.includes(Buffer.from(author)) ||
    !metadata.xmp?.includes(Buffer.from(author))
  ) {
    throw new Error(`Author metadata missing from ${path}`);
  }
  if (!path.endsWith(".jpg") && result.size >= 1_000_000) {
    throw new Error(`Preview exceeds the 1 MB budget: ${path}`);
  }
  console.log(`${path}: ${result.width} x ${result.height}, ${result.size} bytes`);
}

try {
  const site = await browser.newPage({
    viewport: { width: 1440, height: 960 },
    deviceScaleFactor: 1,
    colorScheme: "dark",
    reducedMotion: "reduce",
  });
  await site.goto(baseUrl.toString(), { waitUntil: "networkidle" });
  await site.evaluate(() => document.fonts.ready);
  const brand = await site.evaluate(() => {
    const style = getComputedStyle(document.documentElement);
    return {
      name: document.querySelector('meta[name="author"]').content,
      heading: [...document.querySelectorAll(".hero__statement > span:not(.sr-only)")].map(
        (line) => line.textContent,
      ),
      role: document.querySelector(".hero__role").textContent,
      domain: new URL(document.querySelector('link[rel="canonical"]').href).hostname,
      canvas: style.getPropertyValue("--hero-canvas").trim(),
      ink: style.getPropertyValue("--hero-ink").trim(),
      accent: style.getPropertyValue("--hero-accent").trim(),
      muted: style.getPropertyValue("--hero-muted").trim(),
    };
  });
  if (brand.name !== author || brand.heading.length !== 2 || !brand.role || !brand.canvas) {
    throw new Error("The homepage brand source is incomplete; review its selectors.");
  }
  await site.locator(".portrait-scene__image img").evaluate((img) => img.decode());
  const screenshot = await site.screenshot({ animations: "disabled" });
  await saveImage(screenshot, "docs/assets/portfolio-preview.png");
  await saveImage(screenshot, "docs/assets/readme-screenshot.jpg");
  await site.goto(new URL("/works", baseUrl).toString(), { waitUntil: "networkidle" });
  const works = await site.evaluate(() => ({
    heading: document.querySelector("#works-title").innerText.split("\n").filter(Boolean),
    description: document.querySelector(".works-hero__intro > p").textContent,
  }));
  if (works.heading.length !== 2)
    throw new Error("The Works heading needs a preview layout review.");

  function card({ width, height, kind }) {
    const isWorks = kind === "works";
    const isRepo = kind === "repository";
    const heading = isWorks ? works.heading : brand.heading;
    const caption = isWorks
      ? "Independent work / Selected case studies"
      : isRepo
        ? "Career portfolio / Source repository"
        : "Project & Delivery Leadership";
    const role = isWorks ? "The things I build. The decisions behind them." : brand.role;
    return `<!doctype html><html lang="en-CA"><head><meta charset="utf-8">
<meta name="author" content="${author}"><title>${escape(brand.name)} - ${kind} preview</title>
<style>
@font-face { font-family: Manrope; src: url(data:font/woff2;base64,${font}) format('woff2'); font-weight:400 800; }
* { box-sizing:border-box; } html,body { margin:0; width:${width}px; height:${height}px; overflow:hidden; }
body { background:${brand.canvas}; color:${brand.ink}; font-family:Manrope,sans-serif; }
.card { position:relative; width:100%; height:100%; padding:48px 58px; }
.masthead { display:flex; align-items:center; gap:15px; position:relative; z-index:2; }
.name { font-size:32px; font-weight:750; letter-spacing:-1.2px; } .dot { color:${brand.accent}; }
.eyebrow { margin:9px 0 0; color:${brand.muted}; font-size:17px; font-weight:500; }
.statement { position:absolute; z-index:2; top:181px; left:56px; margin:0; font-size:${isWorks ? 87 : 76}px; line-height:1.09; font-weight:550; letter-spacing:-4.8px; }
.statement span { display:block; } .statement span:last-child { color:${brand.accent}; }
.role { position:absolute; z-index:2; left:59px; top:387px; width:575px; margin:0; font-size:21px; line-height:1.6; font-weight:600; }
.role .line { display:block; }
.footer { position:absolute; z-index:2; bottom:45px; left:59px; right:59px; display:flex; align-items:end; justify-content:space-between; }
.domain { font-size:20px; font-weight:650; letter-spacing:-.2px; }
.note { color:${brand.muted}; font-size:16px; }
.scene { position:absolute; right:24px; top:106px; width:470px; height:470px; }
.portrait { position:absolute; top:18px; left:59px; width:352px; height:418px; border-radius:48% 48% 43% 43%; overflow:hidden; }
.portrait img { width:100%; height:100%; object-fit:cover; object-position:50% 42%; }
.orbits { position:absolute; inset:0; width:100%; height:100%; color:${brand.accent}; }
.monogram { position:absolute; top:166px; left:117px; font-size:131px; font-weight:650; letter-spacing:-9px; }
.scene--works { right:29px; top:91px; }
.scene--works .orbits { opacity:.7; }
</style></head><body><main class="card">
<header class="masthead"><div><div class="name">${escape(brand.name)}<span class="dot">.</span></div><p class="eyebrow">${escape(caption)}</p></div></header>
<h1 class="statement">${heading.map((line) => `<span>${escape(line)}</span>`).join("")}</h1>
<p class="role">${isWorks ? escape(role) : escape(role).replace(", ", '<br class="line">')}</p>
<div class="scene${isWorks ? " scene--works" : ""}">
${isWorks ? '<div class="monogram">nm<span class="dot">.</span></div>' : `<div class="portrait"><img alt="Portrait of ${escape(brand.name)}" src="data:image/webp;base64,${portrait}"></div>`}
<svg class="orbits" viewBox="0 0 470 470" fill="none" aria-hidden="true">
<ellipse cx="235" cy="236" rx="216" ry="177" transform="rotate(-40 235 236)" stroke="currentColor" stroke-opacity=".25"/>
<ellipse cx="235" cy="236" rx="211" ry="181" transform="rotate(28 235 236)" stroke="currentColor" stroke-opacity=".24"/>
<circle cx="235" cy="236" r="203" stroke="currentColor" stroke-opacity=".22"/>
<path d="M58 359 C-5 211 96 39 255 32 C396 23 462 165 421 299" stroke="currentColor"/>
<circle cx="58" cy="359" r="4" fill="currentColor"/><circle cx="421" cy="299" r="4" fill="currentColor"/>
</svg></div>
<footer class="footer"><span class="domain">${escape(brand.domain)}${isWorks ? "/works" : ""}</span><span class="note">${isRepo ? "github.com/CRSD-Lau/Personal-Site" : isWorks ? "Neil Mitchell / Works" : "People. Perspective. Progress."}</span></footer>
</main></body></html>`;
  }

  for (const [path, width, height, kind] of [
    ["public/social/portfolio-v3.png", 1200, 630, "portfolio"],
    ["public/social/works-v3.png", 1200, 630, "works"],
    ["docs/assets/repository-social-preview.png", 1280, 640, "repository"],
  ]) {
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
    await page.setContent(card({ width, height, kind }));
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => Promise.all([...document.images].map((img) => img.decode())));
    const overlap = await page.evaluate(() => {
      const heading = document.querySelector(".statement").getBoundingClientRect();
      const scene = document.querySelector(".scene").getBoundingClientRect();
      return heading.right > scene.left + 40;
    });
    if (overlap) throw new Error(`Heading overlaps artwork in ${kind}; review the layout.`);
    await saveImage(await page.screenshot({ animations: "disabled" }), path);
    await page.close();
  }
  await copyFile("public/social/portfolio-v3.png", "public/opengraph-image.png");
  console.log(`Preview assets generated from ${baseUrl} into ${resolve("public/social")}.`);
} finally {
  await browser.close();
}
