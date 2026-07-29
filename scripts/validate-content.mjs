import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const textExtensions = new Set([".css", ".json", ".md", ".mjs", ".ts", ".tsx", ".yaml", ".yml"]);
const roots = ["app", "components", "data", "sections", "docs", "scripts"];
const rootFiles = [
  "README.md",
  "CHANGELOG.md",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "CODE_OF_CONDUCT.md",
  "LICENSE.md",
  "VERSION",
  "package.json",
  "package-lock.json",
  "next.config.ts",
  "tsconfig.json",
  "eslint.config.mjs",
  ".github/PULL_REQUEST_TEMPLATE.md",
  ".github/dependabot.yml",
  ".github/workflows/ci.yml",
  ".github/ISSUE_TEMPLATE/bug-report.yml",
  ".github/ISSUE_TEMPLATE/content-correction.yml",
  ".github/ISSUE_TEMPLATE/config.yml",
];

function collectFiles(path) {
  if (statSync(path).isFile()) return [path];

  return readdirSync(path)
    .flatMap((entry) => collectFiles(join(path, entry)))
    .filter((file) => textExtensions.has(extname(file)));
}

const files = [...roots.flatMap(collectFiles), ...rootFiles];
const contents = files.map((file) => ({ file, text: readFileSync(file, "utf8") }));
const combined = contents.map(({ text }) => text).join("\n");
const failures = [];
const retiredProductionHost = ["neil-mitchell", ".vercel.app"].join("");

function assert(condition, message) {
  if (!condition) failures.push(message);
}

assert(!combined.includes("\u2014"), "Found a prohibited U+2014 em dash.");

const stalePhrases = [
  ["August 2025", "to Present"].join(" "),
  ["Aug 2025", "to Present"].join(" "),
  ["6+", "Years"].join(" "),
  ["4", "Roles"].join(" "),
  ["Open", "to new opportunities"].join(" "),
  ["Shaping product intent", "into platform reality"].join(" "),
  ["Platform", "Product", "Ownership"].join(" "),
];

for (const phrase of stalePhrases) {
  assert(!combined.includes(phrase), `Found stale phrase: ${phrase}`);
}

const experienceSource = readFileSync("data/experience.ts", "utf8");
const impactSource = readFileSync("data/impact.ts", "utf8");
const profileSource = readFileSync("data/profile.ts", "utf8");
const layoutSource = readFileSync("app/layout.tsx", "utf8");
const systemGraphSource = readFileSync("components/SystemGraph.tsx", "utf8");
const experienceComponentSource = readFileSync("sections/Experience.tsx", "utf8");
const ciSource = readFileSync(".github/workflows/ci.yml", "utf8");
const currentRoleCount = experienceSource.match(/current:\s*true/g)?.length ?? 0;
const releaseVersion = readFileSync("VERSION", "utf8").trim();
const packageManifest = JSON.parse(readFileSync("package.json", "utf8"));
const packageLock = JSON.parse(readFileSync("package-lock.json", "utf8"));
const devDependencies = packageManifest.devDependencies ?? {};

assert(currentRoleCount === 1, `Expected one current role, found ${currentRoleCount}.`);
assert(
  packageManifest.engines?.node === "24.x",
  "The local and production Node runtime must be 24.x.",
);
assert(ciSource.includes("node-version: 24"), "GitHub Actions must use Node 24.");
assert(
  devDependencies["@typescript/native"]?.startsWith("npm:typescript@"),
  "The TypeScript 7 native compiler alias is missing.",
);
assert(
  devDependencies.typescript?.startsWith("npm:@typescript/typescript6@"),
  "The TypeScript 6 compatibility API alias is missing.",
);
assert(!("tailwindcss" in devDependencies), "Unused Tailwind CSS is still installed.");
assert(!("autoprefixer" in devDependencies), "Unused Autoprefixer is still installed.");
assert(
  !("postcss" in devDependencies),
  "PostCSS should remain a transitive override, not a direct tool.",
);
assert(!existsSync("tailwind.config.ts"), "Legacy Tailwind configuration is still present.");
assert(!existsSync("postcss.config.js"), "Legacy PostCSS configuration is still present.");
assert(experienceSource.includes('title: "Project Manager II"'), "Current role title is missing.");
assert(
  experienceSource.includes('startDate: "2026-07"'),
  "Current role start date is not July 2026.",
);
assert(experienceSource.includes('endDate: "2026-07"'), "Previous role end date is not July 2026.");
assert(
  experienceSource.includes('functionalArea: "Applied AI/ML Engineering"'),
  "Applied AI/ML Engineering context is missing.",
);
assert(
  experienceSource.includes('organization: "AI2, TD Bank Group"'),
  "AI2 organisation context is missing.",
);
assert(
  (experienceSource.match(/organization: "GIJ, TD Insurance"/g) ?? []).length === 2,
  "Expected GIJ context on both Journey roles.",
);
assert(
  (experienceSource.match(/organization: "CFLVS, TD Insurance"/g) ?? []).length === 2,
  "Expected CFLVS context on the Vendor Analyst and Claims roles.",
);
assert(
  experienceSource.includes('supportingOrganization: "TD Insurance"'),
  "TD Insurance support context is missing.",
);
assert(profileSource.includes('value: "7+"'), "Seven-year tenure statistic is missing.");
assert(profileSource.includes('value: "5"'), "Five-role career statistic is missing.");
assert(
  profileSource.includes('export const siteUrl = "https://neilmitchell.ca"'),
  "The canonical production domain is incorrect.",
);
assert(
  profileSource.includes('title: "Neil Mitchell | Applied AI/ML Project Manager"'),
  "The required page and social title is missing.",
);
assert(
  profileSource.includes(
    '"Project Manager II leading applied AI/ML engineering initiatives from planning through production readiness."',
  ),
  "The required page description is missing.",
);
assert(
  profileSource.includes(
    '"Project and delivery leadership for applied AI/ML engineering initiatives."',
  ),
  "The required social description is missing.",
);
assert(layoutSource.includes('type: "website"'), "Open Graph type must be website.");
assert(layoutSource.includes('card: "summary_large_image"'), "The X card type is incorrect.");
assert(!combined.includes(retiredProductionHost), "Found the retired Vercel production URL.");
assert(impactSource.includes('value: "11"'), "Eleven-initiative impact metric is missing.");
assert(
  impactSource.includes('label: "Product initiatives delivered"'),
  "Product initiatives delivered label is missing.",
);
assert(
  impactSource.includes("Led initiatives from discovery through delivery"),
  "Initiative delivery context is missing.",
);
const resumeHrefJsx = ["href=", '"/resume.pdf"'].join("");
const resumeHrefObject = ["href:", ' "/resume.pdf"'].join("");
assert(
  combined.includes(resumeHrefJsx) || combined.includes(resumeHrefObject),
  "The current résumé is not linked.",
);
assert(profileSource.includes("available: true"), "Current résumé status is not explicit.");
assert(profileSource.includes('lastUpdated: "July 2026"'), "Résumé update date is stale.");
assert(existsSync("public/resume.pdf"), "Current résumé PDF is missing.");
assert(existsSync("app/icon.png"), "Round headshot favicon is missing.");
assert(!existsSync("app/icon.svg"), "Legacy initials favicon is still present.");
assert(existsSync("app/manifest.ts"), "Web app manifest route is missing.");
assert(existsSync("app/robots.ts"), "Robots route is missing.");
assert(existsSync("app/sitemap.ts"), "Sitemap route is missing.");
assert(existsSync("app/opengraph-image.alt.txt"), "Social preview alternative text is missing.");
assert(existsSync("app/opengraph-image.png"), "Social preview image is missing.");

if (existsSync("app/opengraph-image.png")) {
  const socialImage = readFileSync("app/opengraph-image.png");
  const isPng =
    socialImage.length >= 24 &&
    socialImage.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));

  assert(isPng, "Social preview must be a PNG.");

  if (isPng) {
    assert(
      socialImage.readUInt32BE(16) === 1200 && socialImage.readUInt32BE(20) === 630,
      "Social preview must be exactly 1200 x 630.",
    );
  }
}

assert(!systemGraphSource.includes('src="/logo.png"'), "Hero card still contains the TD logo.");
assert(
  experienceComponentSource.includes('src="/logo.png"'),
  "Official TD employer markers are missing from experience.",
);
assert(!/level:\s*\d+/.test(combined), "Found an arbitrary numeric skill score.");
const progressBarRole = ["role=", '"progressbar"'].join("");
assert(!combined.includes(progressBarRole), "Found a percentage-based skill bar.");
assert(releaseVersion === packageManifest.version, "VERSION and package.json do not match.");
assert(
  releaseVersion === packageLock.version && releaseVersion === packageLock.packages?.[""]?.version,
  "VERSION and package-lock.json do not match.",
);
assert(
  readFileSync("CHANGELOG.md", "utf8").includes(`## [${releaseVersion}]`),
  `CHANGELOG.md is missing release ${releaseVersion}.`,
);

if (failures.length > 0) {
  console.error("Content validation failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Content validation passed across ${files.length} files.`);
}
