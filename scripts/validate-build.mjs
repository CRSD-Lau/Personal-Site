import { existsSync, readFileSync } from "node:fs";

const productionUrl = "https://neilmitchell.ca";
const title = "Neil Mitchell | Applied AI/ML Project Manager";
const pageDescription =
  "Project Manager II leading applied AI/ML engineering initiatives from planning through production readiness.";
const socialDescription =
  "Project and delivery leadership for applied AI/ML engineering initiatives.";
const socialImageUrl = `${productionUrl}/opengraph-image.png`;
const retiredProductionHost = ["neil-mitchell", ".vercel.app"].join("");
const html = readFileSync("out/index.html", "utf8");
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

if (failures.length > 0) {
  console.error("Export validation failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log("Exported metadata and social assets passed validation.");
}
