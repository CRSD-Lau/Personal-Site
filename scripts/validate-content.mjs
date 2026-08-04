import { createHash } from "node:crypto";
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

function collectAllFiles(path) {
  if (statSync(path).isFile()) return [path];

  return readdirSync(path).flatMap((entry) => collectAllFiles(join(path, entry)));
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
const projectsSource = readFileSync("data/projects.ts", "utf8");
const homePageSource = readFileSync("app/page.tsx", "utf8");
const layoutSource = readFileSync("app/layout.tsx", "utf8");
const globalStylesSource = readFileSync("app/globals.css", "utf8");
const sitemapSource = readFileSync("app/sitemap.ts", "utf8");
const resumeBuilderSource = readFileSync("scripts/build-resume.py", "utf8");
const systemGraphSource = readFileSync("components/SystemGraph.tsx", "utf8");
const navigationSource = readFileSync("components/Navigation.tsx", "utf8");
const routeScrollResetSource = readFileSync("components/RouteScrollReset.tsx", "utf8");
const worksPageSource = readFileSync("app/works/page.tsx", "utf8");
const worksLayoutSource = readFileSync("app/works/layout.tsx", "utf8");
const caseStudySource = readFileSync("app/works/[slug]/page.tsx", "utf8");
const worksSectionSource = readFileSync("sections/Works.tsx", "utf8");
const projectPreviewSource = readFileSync("components/ProjectPreview.tsx", "utf8");
const projectGrowthSource = readFileSync("components/ProjectGrowthChart.tsx", "utf8");
const contactSource = readFileSync("sections/Contact.tsx", "utf8");
const licenceSource = readFileSync("LICENSE.md", "utf8");
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
assert(
  layoutSource.includes('data-scroll-behavior="smooth"'),
  "Smooth scrolling must be declared so route changes reset to the top.",
);
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
assert(
  profileSource.includes('email: "neil_mitchell89@hotmail.com"'),
  "The public contact email is incorrect.",
);
assert(!profileSource.includes("@tdinsurance.com"), "The public contact still uses a TD email.");
assert(
  !resumeBuilderSource.includes("506-639-9083"),
  "The public résumé builder still includes the private phone number.",
);
assert(existsSync("public/resume.pdf"), "Current résumé PDF is missing.");
assert(existsSync("app/icon.png"), "Round headshot favicon is missing.");
assert(existsSync("app/favicon.ico"), "Stable root favicon is missing.");
assert(!existsSync("app/icon.svg"), "Legacy initials favicon is still present.");
assert(existsSync("app/manifest.ts"), "Web app manifest route is missing.");
assert(existsSync("app/robots.ts"), "Robots route is missing.");
assert(existsSync("app/sitemap.ts"), "Sitemap route is missing.");
assert(existsSync("public/opengraph-image.png"), "Social preview image is missing.");
assert(existsSync("app/works/page.tsx"), "Works index route is missing.");
assert(existsSync("app/works/[slug]/page.tsx"), "Project case-study route is missing.");
assert(existsSync("sections/Works.tsx"), "Home-page Works section is missing.");
assert(
  existsSync("public/works/deep-live-cam/social-preview.png"),
  "Deep Live Cam Studio social preview is missing.",
);
const approvedProjectAssets = ["public/works/deep-live-cam/social-preview.png"];
const publishedProjectAssets = existsSync("public/works")
  ? collectAllFiles("public/works")
      .map((file) => file.replaceAll("\\", "/"))
      .sort()
  : [];
assert(
  JSON.stringify(publishedProjectAssets) === JSON.stringify(approvedProjectAssets),
  `Unexpected public project asset found: ${publishedProjectAssets.join(", ")}`,
);
assert(profileSource.includes('label: "Works"'), "Works is missing from shared navigation.");
assert(
  profileSource.includes('href: "#works"'),
  "Works navigation must flow to the home-page section.",
);
assert(
  !navigationSource.includes('if (!isHome && href === "#works") return "/works";') &&
    navigationSource.includes("return isHome ? href : `/${href}`;"),
  "Works must return subpages to the home-page section instead of the Works index.",
);
assert(homePageSource.includes("<Works />"), "Works is missing from the home-page sequence.");
assert(worksSectionSource.includes('id="works"'), "Works section anchor is missing.");
assert(
  !worksSectionSource.includes("priority"),
  "The below-the-fold home project preview must not be preloaded.",
);
assert(contactSource.includes("07 / Contact"), "Contact section numbering must follow Works.");
assert(
  !/\.case-study__governance\s*\{[^}]*padding-top:\s*0/.test(globalStylesSource),
  "The governance panel must retain the shared section top spacing.",
);
assert(
  /\.project-card\s*\{[^}]*border-radius:\s*var\(--radius-large\)/.test(globalStylesSource),
  "Project cards must use the shared large panel radius.",
);
assert(
  projectsSource.includes('slug: "deep-live-cam"'),
  "Deep Live Cam Studio project data is missing.",
);
assert(projectsSource.includes("problem: {"), "The project problem statement is missing.");
assert(
  projectsSource.includes('label: "authored post-fork commits"'),
  "Authored post-fork commit label is missing.",
);
assert(
  projectsSource.includes('label: "merged pull requests"'),
  "Merged pull-request label is missing.",
);
assert(projectsSource.includes('label: "automated tests"'), "Automated-test label is missing.");
assert(
  projectsSource.includes('label: "Windows release profiles"'),
  "Windows release-profile label is missing.",
);
assert(projectsSource.includes('value: "158"'), "Authored-commit evidence is missing.");
assert(projectsSource.includes('value: "20"'), "Merged-pull-request evidence is missing.");
assert(projectsSource.includes('value: "510"'), "Automated-test evidence is missing.");
assert(projectsSource.includes('value: "CUDA + DirectML"'), "Accelerator evidence is missing.");
assert(projectsSource.includes("AGPL-3.0"), "Project licence label is missing.");
const requiredProjectLinks = [
  "https://github.com/CRSD-Lau/deep-live-cam",
  "https://github.com/CRSD-Lau/deep-live-cam/releases/latest",
  "https://github.com/CRSD-Lau/deep-live-cam/blob/windows-obs-virtualcam-runtime/LICENSE",
  "https://github.com/CRSD-Lau/deep-live-cam/blob/windows-obs-virtualcam-runtime/COMPLIANCE.md",
  "https://github.com/hacksider/Deep-Live-Cam",
];

for (const link of requiredProjectLinks) {
  assert(projectsSource.includes(link), `Required project link is missing: ${link}`);
}
assert(
  projectsSource.includes("original Deep-Live-Cam project"),
  "Upstream attribution is missing.",
);
assert(
  projectsSource.includes("only with consent and for lawful purposes"),
  "Responsible-use statement is missing.",
);
assert(
  !projectsSource.includes("TD Bank Group") && !projectsSource.includes("TD Insurance"),
  "Independent project content must not imply an employer relationship.",
);
assert(!projectsSource.includes("analysis/"), "Private analysis paths must not be published.");
assert(
  !projectsSource.includes("model weights"),
  "Model assets must not be presented as site content.",
);
assert(worksPageSource.includes("CollectionPage"), "Works structured data is missing.");
assert(caseStudySource.includes("CreativeWork"), "Case-study structured data is missing.");
assert(
  caseStudySource.includes("SoftwareSourceCode"),
  "The project repository structured-data node is missing.",
);
assert(
  caseStudySource.includes('type: "article"') && worksPageSource.includes('type: "website"'),
  "Works Open Graph types are missing.",
);
assert(
  caseStudySource.includes("case-study__problem"),
  "The case study is missing its explicit Problem section.",
);
assert(caseStudySource.includes("ProjectGrowthChart"), "Original growth visual is missing.");
assert(caseStudySource.includes("ProjectReleaseFlow"), "Original release-flow visual is missing.");
assert(
  caseStudySource.includes("ProjectPreview"),
  "Project social preview is missing from the case study.",
);
assert(
  projectPreviewSource.includes("project.preview.src"),
  "Reusable project preview is missing.",
);
assert(
  projectsSource.includes("/works/deep-live-cam/social-preview.png"),
  "Project preview path is missing from project data.",
);
assert(sitemapSource.includes("/works"), "Works URLs are missing from the sitemap.");
assert(
  sitemapSource.includes("projects.map"),
  "Project sitemap routes must come from project data.",
);
assert(
  !worksLayoutSource.includes("TD Bank Group") && !worksLayoutSource.includes("TD Insurance"),
  "Works metadata must remain independent of employer keywords.",
);
assert(
  navigationSource.includes('isHome ? ", back to top" : ", home"'),
  "The wordmark accessible name must describe its route-aware destination.",
);
assert(
  worksLayoutSource.includes("<RouteScrollReset />") &&
    routeScrollResetSource.includes("useLayoutEffect") &&
    routeScrollResetSource.includes("window.scrollTo(0, 0)"),
  "Works route changes must synchronously reset retained mobile scroll positions.",
);
assert(
  /@media \(max-width: 560px\)[\s\S]*?\.delivery-map__stages li[\s\S]*?grid-template-columns:\s*2\.5rem 1fr;/.test(
    globalStylesSource,
  ) &&
    /@media \(max-width: 560px\)[\s\S]*?\.delivery-map__stages li::after[\s\S]*?inset:\s*0 auto 0 0\.32rem;/.test(
      globalStylesSource,
    ),
  "The mobile delivery map must reserve a rail column so its divider cannot overlap copy.",
);
assert(
  navigationSource.includes("{menuOpen && (") && navigationSource.includes("closeMenu();"),
  "The mobile menu must remain conditionally rendered and close after navigation.",
);
assert(globalStylesSource.includes(".skip-link:focus"), "The skip link focus state is missing.");
assert(
  globalStylesSource.includes("@media (prefers-reduced-motion: reduce)"),
  "Reduced-motion styling is missing.",
);
assert(
  projectGrowthSource.includes('role="img"') && projectGrowthSource.includes("aria-label="),
  "The growth chart needs a complete text alternative.",
);
assert(
  licenceSource.includes("public/works/deep-live-cam/social-preview.png") &&
    licenceSource.includes("AGPL-3.0"),
  "The reused project preview needs an explicit licensing carve-out.",
);

if (existsSync("public/works/deep-live-cam/social-preview.png")) {
  const projectPreview = readFileSync("public/works/deep-live-cam/social-preview.png");
  const isPng =
    projectPreview.length >= 24 &&
    projectPreview.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  const projectPreviewHash = createHash("sha256").update(projectPreview).digest("hex");

  assert(isPng, "The project social preview is not a PNG.");
  assert(
    isPng && projectPreview.readUInt32BE(16) === 1280 && projectPreview.readUInt32BE(20) === 640,
    "The project social preview must remain 1280 x 640.",
  );
  assert(
    projectPreviewHash === "e41192ba45d80507807b66090a85c201341e038ab82ebb9bf1a4fe7291772486",
    "The project social preview no longer matches the reviewed repository artwork.",
  );
}

if (existsSync("public/opengraph-image.png")) {
  const socialImage = readFileSync("public/opengraph-image.png");
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

if (existsSync("app/favicon.ico")) {
  const favicon = readFileSync("app/favicon.ico");
  const isIco =
    favicon.length >= 6 && favicon.readUInt16LE(0) === 0 && favicon.readUInt16LE(2) === 1;
  const imageCount = isIco ? favicon.readUInt16LE(4) : 0;
  const dimensions = [];

  for (let index = 0; index < imageCount; index += 1) {
    const entryOffset = 6 + index * 16;
    if (entryOffset + 16 > favicon.length) break;

    dimensions.push({
      width: favicon[entryOffset] || 256,
      height: favicon[entryOffset + 1] || 256,
    });
  }

  assert(isIco, "The stable root favicon is not a valid ICO file.");
  assert(
    dimensions.some(({ width, height }) => width === height && width >= 48),
    "The stable root favicon needs a square image at least 48 x 48.",
  );
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
assert(
  existsSync(`docs/release-notes/v${releaseVersion}.md`),
  `Release notes are missing for ${releaseVersion}.`,
);

if (failures.length > 0) {
  console.error("Content validation failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Content validation passed across ${files.length} files.`);
}
