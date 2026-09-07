import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const productionUrl = "https://neilmitchell.ca";
const title = "Neil Mitchell | Applied AI/ML Project Manager";
const pageDescription =
  "Project Manager II leading applied AI/ML engineering initiatives from planning through production readiness.";
const socialDescription =
  "Complex work. Clear direction. I connect business context, technical teams, and the decisions that move applied AI/ML work forward.";
const worksDescription =
  "Ideas, made practical. Independent projects by Neil Mitchell, with the decisions, delivery work, and evidence behind them.";
const socialImageUrl = `${productionUrl}/social/portfolio-v3.png`;
const worksImageUrl = `${productionUrl}/social/works-v3.png`;
const projectImageUrl = `${productionUrl}/works/deep-live-cam/social-preview.png`;
const employerTerms = ["TD Bank Group", "TD Insurance"];
const requiredProjectLinks = [
  "https://github.com/CRSD-Lau/deep-live-cam",
  "https://github.com/CRSD-Lau/deep-live-cam/releases/latest",
  "https://github.com/CRSD-Lau/deep-live-cam/blob/windows-obs-virtualcam-runtime/LICENSE",
  "https://github.com/CRSD-Lau/deep-live-cam/blob/windows-obs-virtualcam-runtime/COMPLIANCE.md",
  "https://github.com/hacksider/Deep-Live-Cam",
];
const retiredProductionHost = ["neil-mitchell", ".vercel.app"].join("");
const html = readFileSync("out/index.html", "utf8");
const worksOutput = ["out/works/index.html", "out/works.html"].find(existsSync);
const caseStudyOutput = ["out/works/deep-live-cam/index.html", "out/works/deep-live-cam.html"].find(
  existsSync,
);
const worksHtml = worksOutput ? readFileSync(worksOutput, "utf8") : "";
const caseStudyHtml = caseStudyOutput ? readFileSync(caseStudyOutput, "utf8") : "";
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function decodeHtml(value) {
  return value.replace(/&(?:amp|quot|apos|lt|gt|#39|#x27);/g, (entity) => {
    const entities = {
      "&amp;": "&",
      "&quot;": '"',
      "&apos;": "'",
      "&lt;": "<",
      "&gt;": ">",
      "&#39;": "'",
      "&#x27;": "'",
    };
    return entities[entity];
  });
}

function readTags(source, tagName) {
  return Array.from(source.matchAll(new RegExp(`<${tagName}(?=[\\s/>])[^>]*>`, "gi")), ([tag]) =>
    Object.fromEntries(
      Array.from(tag.matchAll(/([\w:-]+)=(?:"([^"]*)"|'([^']*)')/g), ([, key, double, single]) => [
        key.toLowerCase(),
        decodeHtml(double ?? single),
      ]),
    ),
  );
}

function readMeta(key) {
  return readMetaFrom(html, key);
}

function readLink(rel) {
  return readLinkFrom(html, rel);
}

function readMetaFrom(source, key) {
  return readTags(source, "meta").find((tag) => tag.name === key || tag.property === key)?.content;
}

function readLinkFrom(source, rel) {
  return readTags(source, "link").find((tag) => tag.rel === rel)?.href;
}

assert(html.includes(`<title>${title}</title>`), "The exported page title is incorrect.");
assert(readMeta("description") === pageDescription, "The exported page description is incorrect.");
assert(readLink("canonical") === productionUrl, "The canonical URL is incorrect.");
assert(readMeta("og:title") === title, "og:title is incorrect.");
assert(readMeta("og:description") === socialDescription, "og:description is incorrect.");
assert(readMeta("og:url") === productionUrl, "og:url is incorrect.");
assert(readMeta("og:site_name") === "Neil Mitchell", "og:site_name is incorrect.");
assert(readMeta("og:locale") === "en_CA", "og:locale is incorrect.");
assert(readMeta("og:type") === "website", "og:type is incorrect.");
assert(readMeta("og:image") === socialImageUrl, "og:image is incorrect.");
assert(readMeta("og:image:width") === "1200", "og:image:width is incorrect.");
assert(readMeta("og:image:height") === "630", "og:image:height is incorrect.");
assert(readMeta("twitter:card") === "summary_large_image", "twitter:card is incorrect.");
assert(readMeta("twitter:title") === title, "twitter:title is incorrect.");
assert(readMeta("twitter:description") === socialDescription, "twitter:description is incorrect.");
assert(readMeta("twitter:image") === socialImageUrl, "twitter:image is incorrect.");
assert(!html.includes("twitter:site"), "A Twitter site handle must not be emitted.");
assert(!html.includes("twitter:creator"), "A Twitter creator handle must not be emitted.");
assert(!html.includes(retiredProductionHost), "The exported page contains the retired URL.");
assert(
  readLink("icon")?.split("?")[0] === "/favicon.ico",
  "The stable root favicon link is missing.",
);
assert(readLink("manifest") === "/manifest.webmanifest", "The manifest link is missing.");
assert(
  readLink("apple-touch-icon") === "/icons/apple-touch-v2.png",
  "The dedicated Apple touch icon is missing.",
);
const installManifest = JSON.parse(readFileSync("out/manifest.webmanifest", "utf8"));
assert(installManifest.id === "/", "The install manifest needs a stable root identity.");
assert(
  installManifest.name === "Neil Mitchell" && installManifest.short_name === "Neil Mitchell",
  "The install manifest name is incorrect.",
);
assert(
  installManifest.description === pageDescription,
  "The install manifest description is stale.",
);
assert(
  installManifest.lang === "en-CA" && installManifest.dir === "ltr",
  "The install manifest language is incorrect.",
);
assert(
  installManifest.start_url === "/" && installManifest.scope === "/",
  "The install manifest route scope is incorrect.",
);
assert(
  installManifest.background_color === "#111e1a" && installManifest.theme_color === "#111b19",
  "The install manifest colours must match the current launch screen and dark canvas.",
);
for (const [src, size, purpose] of [
  ["/icons/install-v2-192.png", 192, "any"],
  ["/icons/install-v2-512.png", 512, "any"],
  ["/icons/install-maskable-v2-512.png", 512, "maskable"],
  ["/icons/apple-touch-v2.png", 180, null],
]) {
  if (purpose) {
    assert(
      installManifest.icons.some(
        (icon) => icon.src === src && icon.sizes === `${size}x${size}` && icon.purpose === purpose,
      ),
      `Missing install manifest entry: ${src}`,
    );
  }
  const outputPath = `out${src}`;
  assert(existsSync(outputPath), `Missing install icon: ${src}`);
  if (existsSync(outputPath)) {
    const png = readFileSync(outputPath);
    assert(
      png.readUInt32BE(16) === size && png.readUInt32BE(20) === size,
      `Install icon must be square at its declared size: ${src}`,
    );
    assert(png[25] === 2, `Install icon must use opaque RGB pixels: ${src}`);
  }
}
assert(worksHtml.length > 0, "The exported works index is missing.");
assert(caseStudyHtml.length > 0, "The exported project case study is missing.");
assert(
  worksHtml.includes("<title>Works | Neil Mitchell</title>"),
  "The works page title is incorrect.",
);
assert(
  readLinkFrom(worksHtml, "canonical") === `${productionUrl}/works`,
  "The works canonical URL is incorrect.",
);
assert(
  readMetaFrom(worksHtml, "og:url") === `${productionUrl}/works`,
  "The works Open Graph URL is incorrect.",
);
assert(readMetaFrom(worksHtml, "og:type") === "website", "The works Open Graph type is incorrect.");
assert(readMetaFrom(worksHtml, "og:image") === worksImageUrl, "Works social image is incorrect.");
assert(readMetaFrom(worksHtml, "description") === worksDescription, "Works description is stale.");
assert(
  readMetaFrom(worksHtml, "og:description") === worksDescription,
  "Works Open Graph description is stale.",
);
assert(
  readMetaFrom(worksHtml, "twitter:title") === "Works | Neil Mitchell",
  "Works Twitter title is incorrect.",
);
assert(worksHtml.includes("CollectionPage"), "The works structured data is missing.");
assert(
  employerTerms.every((term) => !(readMetaFrom(worksHtml, "keywords") ?? "").includes(term)),
  "Works metadata contains an employer keyword.",
);
assert(
  caseStudyHtml.includes("<title>Deep Live Cam Studio | Neil Mitchell</title>"),
  "The project case-study title is incorrect.",
);
assert(
  readLinkFrom(caseStudyHtml, "canonical") === `${productionUrl}/works/deep-live-cam`,
  "The project case-study canonical URL is incorrect.",
);
assert(
  readMetaFrom(caseStudyHtml, "og:url") === `${productionUrl}/works/deep-live-cam`,
  "The project case-study Open Graph URL is incorrect.",
);
assert(
  readMetaFrom(caseStudyHtml, "og:type") === "article",
  "The project case-study Open Graph type is incorrect.",
);
assert(
  readMetaFrom(caseStudyHtml, "og:image") === projectImageUrl,
  "Project case-study social image is incorrect.",
);
assert(
  readMetaFrom(caseStudyHtml, "twitter:title") === "Deep Live Cam Studio | Neil Mitchell",
  "Project case-study Twitter title is incorrect.",
);
assert(caseStudyHtml.includes("CreativeWork"), "The project structured data is missing.");
assert(
  caseStudyHtml.includes("SoftwareSourceCode"),
  "The project repository structured-data node is missing.",
);
assert(caseStudyHtml.includes("AGPL-3.0"), "The project licence label is missing.");
assert(caseStudyHtml.includes("Problem"), "The project Problem section is missing.");
assert(
  employerTerms.every((term) => !(readMetaFrom(caseStudyHtml, "keywords") ?? "").includes(term)),
  "Project metadata contains an employer keyword.",
);

for (const link of requiredProjectLinks) {
  assert(caseStudyHtml.includes(link), `The exported case study is missing link: ${link}`);
}
assert(
  caseStudyHtml.includes("only with consent and for lawful purposes"),
  "Responsible-use copy is missing.",
);
assert(
  !caseStudyHtml.includes("analysis/"),
  "Private analysis path leaked into the exported case study.",
);
assert(
  html.includes('id="works"') && html.includes(projectImageUrl.replace(productionUrl, "")),
  "The exported home page is missing the integrated Works preview.",
);
assert(
  existsSync("out/works/deep-live-cam/social-preview.png"),
  "The exported project social preview is missing.",
);

if (existsSync("out/works/deep-live-cam/social-preview.png")) {
  const projectPreview = readFileSync("out/works/deep-live-cam/social-preview.png");
  const projectPreviewHash = createHash("sha256").update(projectPreview).digest("hex");
  assert(
    projectPreviewHash === "e41192ba45d80507807b66090a85c201341e038ab82ebb9bf1a4fe7291772486",
    "The exported project social preview does not match its reviewed source.",
  );
}

for (const path of [
  "out/favicon.ico",
  "out/icon.png",
  "out/manifest.webmanifest",
  "out/opengraph-image.png",
  "out/robots.txt",
  "out/sitemap.xml",
]) {
  assert(existsSync(path), `Missing exported metadata asset: ${path}`);
}

if (existsSync("out/opengraph-image.png")) {
  const socialImage = readFileSync("out/opengraph-image.png");
  const isPng =
    socialImage.length >= 24 &&
    socialImage.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));

  assert(isPng, "The exported social preview is not a PNG.");

  if (isPng) {
    assert(
      socialImage.readUInt32BE(16) === 1200 && socialImage.readUInt32BE(20) === 630,
      "The exported social preview is not 1200 x 630.",
    );
  }
}

for (const path of ["out/manifest.webmanifest", "out/robots.txt", "out/sitemap.xml"]) {
  if (existsSync(path)) {
    assert(
      !readFileSync(path, "utf8").includes(retiredProductionHost),
      `${path} contains the retired URL.`,
    );
  }
}

if (existsSync("out/sitemap.xml")) {
  const sitemap = readFileSync("out/sitemap.xml", "utf8");
  assert(sitemap.includes(`${productionUrl}/works`), "The works URL is missing from the sitemap.");
  assert(
    sitemap.includes(`${productionUrl}/works/deep-live-cam`),
    "The project case-study URL is missing from the sitemap.",
  );
}

// Validate every exported public route so newly added pages cannot inherit stale
// home canonicals, incomplete social objects, or unavailable preview assets.
function collectHtml(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name.startsWith("_")) return [];
    const path = join(directory, entry.name);
    return entry.isDirectory() ? collectHtml(path) : path.endsWith(".html") ? [path] : [];
  });
}

function pngSize(path) {
  const bytes = readFileSync(path);
  const isPng =
    bytes.length >= 24 &&
    bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  assert(isPng, `Preview is not a valid PNG: ${path}`);
  return isPng ? [bytes.readUInt32BE(16), bytes.readUInt32BE(20)] : [];
}

function readSchemas(source, route) {
  const schemas = [];
  for (const [, openingTag, body] of source.matchAll(
    /(<script(?=[\s>])[^>]*>)([\s\S]*?)<\/script\s*>/gi,
  )) {
    if (readTags(openingTag, "script")[0]?.type?.toLowerCase() !== "application/ld+json") continue;
    try {
      const value = JSON.parse(body);
      assert(value["@context"] === "https://schema.org", `${route}: JSON-LD context is incorrect.`);
      schemas.push(...(value["@graph"] ?? [value]));
    } catch {
      assert(false, `${route}: JSON-LD must be valid JSON.`);
    }
  }
  assert(schemas.length > 0, `${route}: structured data is missing.`);
  return schemas;
}

const publicRoutes = collectHtml("out").filter(
  (path) => path.replaceAll("\\", "/") !== "out/404.html",
);
const exportedUrls = [];
const schemasByRoute = new Map();

for (const path of publicRoutes) {
  const source = readFileSync(path, "utf8");
  const route =
    `/${path
      .replaceAll("\\", "/")
      .replace(/^out\//, "")
      .replace(/(?:^|\/)index\.html$/, "")
      .replace(/\.html$/, "")}`.replace(/\/$/, "") || "/";
  const canonical = route === "/" ? productionUrl : `${productionUrl}${route}`;
  exportedUrls.push(canonical);
  const metas = readTags(source, "meta");
  const links = readTags(source, "link");
  const pageTitle = decodeHtml(source.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");

  assert(
    links.filter((tag) => tag.rel === "canonical").length === 1,
    `${route}: expected exactly one canonical.`,
  );
  assert(
    readLinkFrom(source, "canonical") === canonical,
    `${route}: canonical does not match its route.`,
  );
  assert(!source.includes(retiredProductionHost), `${route}: the retired domain is present.`);
  assert(source.includes('<html lang="en-CA"'), `${route}: document language is incorrect.`);
  assert(readMetaFrom(source, "author") === "Neil Mitchell", `${route}: author is incorrect.`);
  assert(readMetaFrom(source, "creator") === "Neil Mitchell", `${route}: creator is incorrect.`);
  assert(
    readMetaFrom(source, "publisher") === "Neil Mitchell",
    `${route}: publisher is incorrect.`,
  );
  assert(
    !readMetaFrom(source, "robots")?.includes("noindex"),
    `${route}: public page must be indexable.`,
  );
  assert(readMetaFrom(source, "og:url") === canonical, `${route}: Open Graph URL is incorrect.`);
  assert(
    readMetaFrom(source, "og:title") === pageTitle,
    `${route}: Open Graph title differs from page title.`,
  );
  assert(
    readMetaFrom(source, "twitter:title") === pageTitle,
    `${route}: X title differs from page title.`,
  );
  assert(
    readMetaFrom(source, "og:site_name") === "Neil Mitchell",
    `${route}: Open Graph site name is missing.`,
  );
  assert(readMetaFrom(source, "og:locale") === "en_CA", `${route}: Open Graph locale is missing.`);
  assert(
    readMetaFrom(source, "twitter:card") === "summary_large_image",
    `${route}: large X card is missing.`,
  );
  assert(
    !readMetaFrom(source, "twitter:site") && !readMetaFrom(source, "twitter:creator"),
    `${route}: an unowned X handle is present.`,
  );
  assert(
    readLinkFrom(source, "manifest") === "/manifest.webmanifest",
    `${route}: install manifest is missing.`,
  );
  assert(
    readLinkFrom(source, "apple-touch-icon") === "/icons/apple-touch-v2.png",
    `${route}: Apple icon is stale.`,
  );
  assert(
    links.some((tag) => tag.rel === "icon" && tag.href?.split("?")[0] === "/favicon.ico"),
    `${route}: stable favicon is missing.`,
  );

  for (const key of [
    "description",
    "og:title",
    "og:description",
    "og:image",
    "og:image:alt",
    "twitter:title",
    "twitter:description",
    "twitter:image",
    "twitter:image:alt",
  ]) {
    const matching = metas.filter((tag) => tag.name === key || tag.property === key);
    assert(
      matching.length === 1 && Boolean(matching[0].content?.trim()),
      `${route}: expected one nonempty ${key}.`,
    );
  }
  assert(
    readMetaFrom(source, "twitter:description") === readMetaFrom(source, "og:description"),
    `${route}: X and Open Graph descriptions differ.`,
  );
  assert(
    readMetaFrom(source, "twitter:image:alt") === readMetaFrom(source, "og:image:alt"),
    `${route}: social image alternatives differ.`,
  );
  const imageUrl = readMetaFrom(source, "og:image");
  assert(
    readMetaFrom(source, "twitter:image") === imageUrl,
    `${route}: X and Open Graph images differ.`,
  );
  assert(
    readMetaFrom(source, "og:image:type") === "image/png",
    `${route}: social image media type is missing.`,
  );
  assert(
    imageUrl?.startsWith(`${productionUrl}/`),
    `${route}: social image must use the canonical HTTPS origin.`,
  );
  if (imageUrl?.startsWith(`${productionUrl}/`)) {
    const asset = `out${new URL(imageUrl).pathname}`;
    assert(existsSync(asset), `${route}: social image is not exported.`);
    if (existsSync(asset)) {
      const [width, height] = pngSize(asset);
      assert(
        String(width) === readMetaFrom(source, "og:image:width") &&
          String(height) === readMetaFrom(source, "og:image:height"),
        `${route}: social image dimensions do not match its PNG.`,
      );
    }
  }
  schemasByRoute.set(route, readSchemas(source, route));
}

const homeSchemas = schemasByRoute.get("/") ?? [];
const person = homeSchemas.find((schema) => schema["@type"] === "Person");
const website = homeSchemas.find((schema) => schema["@type"] === "WebSite");
const profilePage = homeSchemas.find((schema) => schema["@type"] === "ProfilePage");
assert(
  person?.name === "Neil Mitchell" && person?.jobTitle === "Project Manager II",
  "Person structured data must preserve the current name and role.",
);
assert(
  person?.["@id"] === `${productionUrl}/#person` && person?.url === productionUrl,
  "Person structured data identity is incorrect.",
);
assert(
  Array.isArray(person?.sameAs) &&
    JSON.stringify([...person.sameAs].sort()) ===
      JSON.stringify([
        "https://github.com/CRSD-Lau",
        "https://www.linkedin.com/in/neil-mitchell-a6038b171",
      ]),
  "Person structured data must contain exactly the two public profile URLs.",
);
assert(
  person?.image === `${productionUrl}/profile.webp` && existsSync("out/profile.webp"),
  "Person portrait is missing.",
);
assert(
  website?.url === productionUrl && website?.publisher?.["@id"] === person?.["@id"],
  "WebSite structured data must identify its publisher.",
);
assert(
  profilePage?.mainEntity?.["@id"] === person?.["@id"] && profilePage?.image === socialImageUrl,
  "ProfilePage structured data must link the person and current preview.",
);

const collection = (schemasByRoute.get("/works") ?? []).find(
  (schema) => schema["@type"] === "CollectionPage",
);
assert(
  collection?.image === worksImageUrl && collection?.description === worksDescription,
  "Works structured data is stale.",
);
const listedWorks = collection?.mainEntity?.itemListElement?.map((item) => item.url) ?? [];
const expectedWorks = exportedUrls.filter((url) => url.startsWith(`${productionUrl}/works/`));
assert(
  JSON.stringify([...listedWorks].sort()) === JSON.stringify([...expectedWorks].sort()),
  "Works structured data must list every exported case study.",
);
for (const [route, schemas] of schemasByRoute) {
  if (!route.startsWith("/works/")) continue;
  const work = schemas.find((schema) => schema["@type"] === "CreativeWork");
  assert(
    work?.url === `${productionUrl}${route}` && work?.author?.name === "Neil Mitchell",
    `${route}: case-study structured data identity is incorrect.`,
  );
  assert(
    work?.about?.["@type"] === "SoftwareSourceCode" &&
      Boolean(work.about.codeRepository) &&
      Boolean(work.about.license) &&
      Boolean(work.about.isBasedOn),
    `${route}: repository structured data must retain source, licence and upstream attribution.`,
  );
  assert(
    work?.image?.startsWith(`${productionUrl}/works/`) && Boolean(work?.dateModified),
    `${route}: case-study image or evidence date is missing.`,
  );
}

for (const path of ["out/social/portfolio-v3.png", "out/social/works-v3.png"]) {
  assert(existsSync(path), `Missing branded social preview: ${path}`);
  if (existsSync(path))
    assert(pngSize(path).join("x") === "1200x630", `${path}: branded preview must be 1200 x 630.`);
}
if (existsSync("out/social/portfolio-v3.png") && existsSync("out/opengraph-image.png")) {
  assert(
    readFileSync("out/social/portfolio-v3.png").equals(readFileSync("out/opengraph-image.png")),
    "The compatibility preview must match the current portfolio card.",
  );
}
if (existsSync("out/sitemap.xml")) {
  const sitemapUrls = Array.from(
    readFileSync("out/sitemap.xml", "utf8").matchAll(/<loc>([^<]+)<\/loc>/g),
    ([, url]) => decodeHtml(url),
  );
  assert(
    JSON.stringify([...sitemapUrls].sort()) === JSON.stringify([...exportedUrls].sort()),
    "Sitemap URLs must exactly match exported public pages and exclude 404 routes.",
  );
}
if (existsSync("out/robots.txt")) {
  const robots = readFileSync("out/robots.txt", "utf8");
  assert(
    /^User-Agent: \*$/im.test(robots) && /^Allow: \/$/im.test(robots),
    "Robots must allow public pages.",
  );
  assert(
    robots.includes(`Sitemap: ${productionUrl}/sitemap.xml`) &&
      robots.includes(`Host: ${productionUrl}`),
    "Robots must advertise the canonical sitemap and host.",
  );
  assert(!/^Disallow: \/$/im.test(robots), "Robots must not block the site.");
}
assert(existsSync("out/404.html"), "The exported 404 page is missing.");
if (existsSync("out/404.html")) {
  const errorMetas = readTags(readFileSync("out/404.html", "utf8"), "meta");
  assert(
    errorMetas.some((tag) => tag.name === "robots" && tag.content?.includes("noindex")),
    "The 404 page must be marked noindex.",
  );
}

if (failures.length > 0) {
  console.error("Export validation failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log("Exported metadata and social assets passed validation.");
}
