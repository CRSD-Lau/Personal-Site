# Portfolio review and redesign

Author: Neil Mitchell
Last modified by: Neil Mitchell
Review date: 5 September 2026

## Outcome

Redesigned the homepage, Works index, and Deep Live Cam Studio case study. The new
presentation keeps the career portfolio central, with a photographic opening,
clearer reading order, a more useful career chronology, and stronger project presentation.
Changes are prepared locally on `codex/portfolio-redesign`. Production has not been deployed.

## Review findings and changes

| Finding                                                                     | Change                                                                                                                     |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| The opening repeated the role and employer in multiple panels.              | A concise delivery statement, one primary role description, and an integrated portrait composition.                        |
| Seven numbered desktop links competed with the identity and contact action. | Four primary destinations, visible résumé access, and full section navigation in the footer/mobile menu.                   |
| Five fully expanded career records made the opening read long.              | A featured current role and native disclosures for previous responsibilities, retaining dates and complete summaries.      |
| Independent work appeared near the end.                                     | The featured case study now follows Experience, with a direct entry from the hero.                                         |
| Repeated layouts and system typography flattened the visual hierarchy.      | Locally served Manrope, a forest/lime photographic hero, warm light surfaces, and distinct section compositions.           |
| The Works index repeated introductory copy.                                 | A concise curated introduction and a large project feature with dated evidence.                                            |
| The case study's navigation and narrative were difficult to scan.           | Larger artwork, section links, earlier problem/contribution content, and a clearer evidence sequence.                      |
| The contact section repeated availability and invitation copy.              | A direct email invitation, LinkedIn, copy-email, and résumé actions.                                                       |
| Edge cases affected storage, narrow screens, and printing.                  | Guarded theme persistence, corrected overflow, accessible metric text, full print palettes, and native career disclosures. |
| Framework prefetch requests failed on a plain static host.                  | Native document links now navigate between exported project routes.                                                        |
| The development dependency audit reported a moderate filesystem issue.      | Updated `@humanfs/node` to 0.16.8 and its required support packages.                                                       |

The design direction was reviewed through three independent same-model council opinions
and two anonymized peer reviews. The strongest shared findings informed the implementation;
rendered browser checks determined the final refinements.

## Content and asset integrity

- Career dates, supported metrics, current role, project audit figures, and attribution remain sourced from the existing data.
- The résumé and approved Deep Live Cam Studio artwork were preserved.
- Project evidence remains dated and explicitly attributed, with original source, licence,
  compliance, and responsible-use links.
- The existing untracked image in the repository root was left untouched.
- Manrope is hosted locally, with its original SIL Open Font License retained.
- No animation or UI framework was added.

## Verification

The clean install, formatting, ESLint, TypeScript, content rules, production export, and
exported metadata/assets were checked. The dependency audit reports zero known vulnerabilities.

Browser verification used Chromium against the local production export:

| Check                                                                        | Result     |
| ---------------------------------------------------------------------------- | ---------- |
| Three routes at 320, 390, 768, 1024, 1440, and 1920 px, in both themes       | 36 passed  |
| Expanded career disclosures across sizes and themes                          | 12 passed  |
| Screen accessibility scans                                                   | 12 passed  |
| JavaScript-disabled routes at phone and desktop widths                       | 6 passed   |
| Reduced-motion routes                                                        | 3 passed   |
| Print visibility and contrast in both themes                                 | 6 passed   |
| Theme switching with storage denied                                          | 2 passed   |
| Local routes and resources, including résumé PDF                             | 7 passed   |
| Keyboard skip link, menu/Escape/focus, theme persistence, clipboard readback | Passed     |
| Horizontal overflow and browser runtime/console errors                       | None found |

A targeted supplement checked 240 text samples that the automated scanner could not
resolve over gradients or pseudo-elements. All passed; the lowest sampled contrast
was 5.52:1 against a 4.5:1 requirement.

Final automated browser evidence: `artifacts/qa-final-v2/report.json`.
Full-page screenshots, expanded career views, and print previews are in the same directory.
The harness and evidence are local review artifacts, not site assets.

## Performance and accessibility

Lighthouse 13.4.1 was run on the exported site with gzip-enabled local serving. These are
simulated laboratory results, not measurements of production visitors.

| Category                 | Mobile      | Desktop     |
| ------------------------ | ----------- | ----------- |
| Performance              | 89          | 100         |
| Accessibility            | 100         | 100         |
| Best practices           | 100         | 100         |
| SEO                      | 100         | 100         |
| Largest contentful paint | 3.8 seconds | 0.8 seconds |
| Layout shift             | 0           | 0           |

The preceding mobile run scored 90; the one-point variation illustrates the limits of
single local runs. Remaining opportunities are a smaller responsive portrait rendition
and reducing the framework's unused client JavaScript. Critical hero content is visible
immediately, the portrait is preloaded at high priority, and decorative motion is finite.

Detailed reports: `artifacts/lighthouse-final-home-mobile.report.html` and
`artifacts/lighthouse-final-home-desktop.report.html`.

Automated accessibility results do not replace a full assistive-technology audit.
Browser testing covered Chromium; Safari, Firefox, and physical devices were not tested.

## Preview

The prepared export can be served with `npm run preview`. The review session uses
`http://127.0.0.1:4318/`.

Deployment and production verification remain separate from this local redesign.
