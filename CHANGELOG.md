# Changelog

All notable changes to this portfolio are recorded here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and releases use
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.0.7] - 2026-09-09

### Improved

- Replaced the visible contact email address and pill buttons with accessible icons ordered as
  email, copy email, résumé, LinkedIn, and GitHub.
- Removed duplicate social icons from the footer and centered the copyright beneath its content.
- Kept contact icons on one row across phone, tablet, and desktop layouts, with 48px touch targets.

## [3.0.6] - 2026-09-08

### Added

- A privacy notice with footer navigation, route metadata, structured data, and sitemap coverage.
- A branded 404 with home and Works recovery links and noindex metadata.
- Browser accessibility checks with rendered-background measurements for text over gradients,
  plus validation of responsive image files, byte budgets, and author/modifier metadata.

### Improved

- Replaced on-page project PNG downloads with responsive WebP copies and added smaller portrait
  variants, while preserving original artwork, social cards, and licensing attribution.
- Limited the installed-app introduction portrait download to installed-app visits.
- Made the local static preview serve the exported custom 404 with the correct status.

## [3.0.5] - 2026-09-06

### Fixed

- Replaced the previous homepage sharing card with the current photographic forest-and-lime
  branding and gave the Works collection its own preview and introduction.
- Completed Open Graph and X metadata on every public route, including image alternative text,
  locale, site name, and large-image cards; strengthened structured data and manifest identity.
- Refreshed README screenshots, prepared a separate GitHub repository card, and corrected preview
  maintenance guidance and stale wiki release references.

### Added

- A reproducible browser-based preview generator using the exported site's typography, colours,
  portrait, and heading copy, with Neil Mitchell embedded as creator and modifier.
- Build checks for complete route metadata, structured data, social image dimensions, compatibility
  copies, crawler assets, and preserved project artwork.

## [3.0.4] - 2026-09-06

### Fixed

- Added opaque install icons, an Android maskable icon, and an Apple touch icon to avoid the
  platform-added white surround around the transparent headshot favicon.
- Added a borderless, circular portrait centered in the installed app's launch screen, with an
  approximately two-second introduction that runs once per session and respects reduced motion.

## [3.0.3] - 2026-09-06

### Fixed

- Aligned the About, Experience, Works, Approach, Expertise, Impact, and Contact menu destinations with
  their introductions below the sticky header, matching the requested mobile positions.
- Preserved normal section spacing, native hash navigation, and the larger navigation
  fallback when JavaScript is disabled.
- Aligned mobile delivery-step headings and list copy with their numbered, round, and square markers.
- Centered hamburger and close icons and evenly spaced the right-aligned mobile header controls.
- Centered the footer title, removed the LinkedIn icon border, and added a GitHub profile link.

## [3.0.2] - 2026-09-06

### Fixed

- Corrected Vendor Analyst experience and impact metrics from accounts receivable to
  accounts payable, reflecting the payment of overdue bills owed to the vendor network.
- Updated the Word and PDF résumés, their source wording, and the résumé update date.

## [3.0.1] - 2026-09-05

### Fixed

- Removed the leftover shaded background behind the contact disclaimer so the text
  blends into the contact section in both themes.

## [3.0.0] - 2026-09-05

### Changed

- Redesigned all portfolio routes with locally hosted Manrope typography, a photographic hero,
  pale lime and forest colours, and responsive light and dark themes.
- Simplified primary navigation, made résumé access prominent, and moved independent work
  immediately after the career section.
- Featured the current role and made earlier role responsibilities available through native
  disclosures while retaining complete summaries and dates.
- Reworked the delivery approach, capability rows, project feature, case-study navigation,
  and closing contact section.
- Simplified link buttons and removed decorative arrows, the hero scroll prompt, and the
  standalone About signature after the final visual review.

### Fixed

- Kept theme switching functional when browser storage is unavailable.
- Retained meaningful metric values before their entrance animation.
- Added readable print colours and a navigation fallback without JavaScript.
- Corrected the capability label to ML Engineering Delivery.

### Security

- Updated the ESLint filesystem dependency to the patched `@humanfs/node` 0.16.8 release
  and its required support packages; the clean dependency audit reports no known vulnerabilities.

## [2.2.2] - 2026-08-04

### Changed

- Updated Next.js and its matching ESLint integration to 16.3.0 while keeping React and React DOM
  on their current 19.2.8 releases.
- Updated the React, React DOM, browser-global, and TypeScript ESLint development definitions to
  their current compatible releases.
- Made the TypeScript 7 native type-check command explicit while retaining the TypeScript 6
  compiler API required by Next.js and `typescript-eslint`.
- Kept production, CI, and local contracts on Node.js 24 LTS and prevented Dependabot from proposing
  mismatched Node or TypeScript major-version definitions.
- Added release validation for the split TypeScript compiler and API contract.

### Security

- Re-ran the clean dependency audit after the toolchain refresh with zero known vulnerabilities.

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

[Unreleased]: https://github.com/CRSD-Lau/Personal-Site/compare/v3.0.2...HEAD
[3.0.2]: https://github.com/CRSD-Lau/Personal-Site/compare/v3.0.1...v3.0.2
[3.0.1]: https://github.com/CRSD-Lau/Personal-Site/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/CRSD-Lau/Personal-Site/compare/v2.2.2...v3.0.0
[2.2.2]: https://github.com/CRSD-Lau/Personal-Site/compare/v2.2.1...v2.2.2
[2.2.1]: https://github.com/CRSD-Lau/Personal-Site/compare/v2.2.0...v2.2.1
[2.2.0]: https://github.com/CRSD-Lau/Personal-Site/compare/v2.1.1...v2.2.0
[2.1.1]: https://github.com/CRSD-Lau/Personal-Site/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/CRSD-Lau/Personal-Site/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/CRSD-Lau/Personal-Site/releases/tag/v2.0.0
