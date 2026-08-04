import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";

const productionUrl = "https://neilmitchell.ca";
const title = "Neil Mitchell | Applied AI/ML Project Manager";
const pageDescription =
  "Project Manager II leading applied AI/ML engineering initiatives from planning through production readiness.";
const socialDescription =
  "Project and delivery leadership for applied AI/ML engineering initiatives.";
const socialImageUrl = `${productionUrl}/opengraph-image.png`;
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

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function readMeta(key) {
  const escapedKey = escapeRegExp(key);
  const match = html.match(
    new RegExp(`<meta[^>]+(?:name|property)="${escapedKey}"[^>]+content="([^"]*)"[^>]*>`),
  );

  return match?.[1];
}

function readLink(rel) {
  const escapedRel = escapeRegExp(rel);
  const match = html.match(new RegExp(`<link[^>]+rel="${escapedRel}"[^>]+href="([^"]*)"[^>]*>`));

  return match?.[1];
}

function readMetaFrom(source, key) {
  const escapedKey = escapeRegExp(key);
  const match = source.match(
    new RegExp(`<meta[^>]+(?:name|property)="${escapedKey}"[^>]+content="([^"]*)"[^>]*>`),
  );

  return match?.[1];
}

function readLinkFrom(source, rel) {
  const escapedRel = escapeRegExp(rel);
  const match = source.match(new RegExp(`<link[^>]+rel="${escapedRel}"[^>]+href="([^"]*)"[^>]*>`));

  return match?.[1];
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
assert(readMeta("og:image")?.startsWith(socialImageUrl), "og:image is incorrect.");
assert(readMeta("og:image:width") === "1200", "og:image:width is incorrect.");
assert(readMeta("og:image:height") === "630", "og:image:height is incorrect.");
assert(readMeta("twitter:card") === "summary_large_image", "twitter:card is incorrect.");
assert(readMeta("twitter:title") === title, "twitter:title is incorrect.");
assert(readMeta("twitter:description") === socialDescription, "twitter:description is incorrect.");
assert(readMeta("twitter:image")?.startsWith(socialImageUrl), "twitter:image is incorrect.");
assert(!html.includes("twitter:site"), "A Twitter site handle must not be emitted.");
assert(!html.includes("twitter:creator"), "A Twitter creator handle must not be emitted.");
assert(!html.includes(retiredProductionHost), "The exported page contains the retired URL.");
assert(
  readLink("icon")?.split("?")[0] === "/favicon.ico",
  "The stable root favicon link is missing.",
);
assert(readLink("manifest") === "/manifest.webmanifest", "The manifest link is missing.");
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
assert(readMetaFrom(worksHtml, "og:image") === projectImageUrl, "Works social image is incorrect.");
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

if (failures.length > 0) {
  console.error("Export validation failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log("Exported metadata and social assets passed validation.");
}
