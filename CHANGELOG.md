# Changelog

All notable changes to this portfolio are recorded here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and releases use
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.2.1] - 2026-08-04

### Fixed

- Reserved a dedicated mobile rail for the six-stage delivery map so its divider no longer crosses
  headings or body copy.
- Added an explicit Works-route scroll reset so mobile navigation opens `/works` and project case
  studies at the top instead of retaining the previous page's position.
- Cleared inherited desktop padding from every mobile case-study timeline step so `Responsible use`
  aligns with the shared rail.
- Added regression validation for the mobile rail and route-reset contracts.

## [2.2.0] - 2026-08-03

### Added

- Added an integrated Works section to the main portfolio and a reusable `/works` project index.
- Published the Deep Live Cam Studio case study with fixed audit metrics, original evidence visuals,
  repository artwork, technical methodology, transferable skills, attribution, and responsible-use
  guidance.
- Added project-specific canonical metadata, social previews, CreativeWork structured data, and
  sitemap coverage.
- Added release validation for project content, static routes, metadata, attribution boundaries,
  preview provenance, and exported assets.
- Added a stable root favicon for search engines and crawlers.

### Changed

- Made shared navigation route-aware while preserving home-page section highlighting and mobile
  keyboard behaviour.
- Extended the static preview server to resolve exported nested routes without trailing slashes.
- Documented the typed project-content model, publication boundaries, and future-project workflow.
- Expanded the public technical profile and résumé to reflect hands-on AI workflows, software
  development, automation, and the portfolio URL.

### Fixed

- Reset cross-route case-study navigation to the top while keeping smooth home-page anchor scrolling.
- Returned the Works header link on subpages to the main portfolio's Works section.
- Matched the case-study governance spacing and project-card corners to the site's shared panel system.
- Renumbered Contact after inserting Works into the home-page sequence.
- Removed the private phone number from the published résumé.

### Security

- Updated the transitive `brace-expansion` dependency to `5.0.9`, resolving the high-severity
  denial-of-service advisory reported by `npm audit`.

## [2.1.1] - 2026-07-29

### Fixed

- Made the Open Graph and X social image URL explicitly absolute.
- Served the social image as a stable public asset so Vercel Preview and Production builds emit
  consistent production-domain metadata.
- Restored reliable branch previews without weakening the production metadata checks.

## [2.1.0] - 2026-07-29

### Added

- Added a 1200 x 630 editorial social preview with complete Open Graph and X metadata for
  `https://neilmitchell.ca`.
- Added native App Router manifest, robots, and sitemap routes.
- Added release checks for the Node 24 runtime, TypeScript 7 compiler transition, and removal of
  obsolete CSS tooling.

### Changed

- Moved canonical, social, and repository links to `https://neilmitchell.ca`.
- Replaced the initials favicon with a round crop of Neil's headshot.
- Refined the header Connect action and refreshed the repository preview.
- Standardized local development, GitHub Actions, and Vercel builds on Node.js 24.
- Adopted the TypeScript 7 native compiler with the official TypeScript 6 compatibility API for
  Next.js and `typescript-eslint`.
- Replaced Tailwind's unused base layer with explicit CSS normalization while preserving the
  rendered design.
- Simplified repository configuration, dependency management, and operating documentation.

### Removed

- Tailwind CSS, Autoprefixer, direct PostCSS tooling, and their obsolete configuration files.
- Obsolete deployment state, copied development-tool bundles, cached bytecode, and an unused source
  image.

### Security

- Pinned Next.js's transitive PostCSS dependency to `8.5.24` and verified a zero-vulnerability npm
  audit.

## [2.0.0] - 2026-07-26

### Added

- Current Project Manager II role in Applied AI/ML Engineering at AI2, TD Bank Group.
- Updated résumé in editable DOCX and published PDF formats.
- Portrait-led current-role card and headshot identity in the site header.
- Six-stage delivery approach, capability matrix, impact ledger, and contact panel.
- Count-up animation for impact metrics with reduced-motion support.
- Official TD employer markers beside each TD role.
- Structured data, social metadata, canonical URL, and search indexing metadata.
- Automated content checks for role dates, titles, impact figures, and résumé availability.
- GitHub Actions CI, Dependabot, issue templates, pull request template, and repository policies.
- Architecture, content, deployment, release, and design-system documentation.

### Changed

- Rebuilt the portfolio with a restrained editorial direction centred on TD career progression.
- Replaced the former journey-focused hero with current applied AI/ML delivery positioning.
- Updated both former journey roles to Senior Product Analyst.
- Updated business-area labels to AI2, GIJ, and CFLVS where applicable.
- Reworked page spacing and responsive behaviour across phone, tablet, desktop, and wide screens.
- Refined career, expertise, impact, and contact copy for directness and factual precision.
- Upgraded the application and lint toolchain to Next.js 16 and ESLint 10.
- Updated the impact metric to 11 product initiatives delivered across Digital Service Performance
  and SPARK.
- Standardized the accounts receivable measure as `$55MM+`.
- Moved the personal-site disclaimer into the contact panel footer.
- Replaced the initials avatar and decorative TD branding with Neil's headshot.

### Removed

- Decorative futuristic UI treatments that competed with the career story.
- The TD logo from the hero current-role card.
- The non-functional contact form.
- Percentage skill bars and unsupported performance claims.
- Obsolete journey-role wording and stale six-year career references.

[Unreleased]: https://github.com/CRSD-Lau/Personal-Site/compare/v2.2.1...HEAD
[2.2.1]: https://github.com/CRSD-Lau/Personal-Site/compare/v2.2.0...v2.2.1
[2.2.0]: https://github.com/CRSD-Lau/Personal-Site/compare/v2.1.1...v2.2.0
[2.1.1]: https://github.com/CRSD-Lau/Personal-Site/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/CRSD-Lau/Personal-Site/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/CRSD-Lau/Personal-Site/releases/tag/v2.0.0
