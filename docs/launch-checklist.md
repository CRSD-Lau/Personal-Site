# Launch checklist disposition

Author: Neil Mitchell
Last modified by: Neil Mitchell

Reviewed and implemented for v3.0.6. This checklist records the applicable controls for the
portfolio; optional features are explicit decisions rather than unfinished implementation.

| Item               | Disposition                                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Privacy notice     | `/privacy`, linked from the footer and sitemap; explains hosting, browser preferences, email and external services.                                                 |
| Terms              | Not added: the site is an informational personal portfolio without accounts, sales, or on-site service delivery. Reassess if those features change.                 |
| Frontend secrets   | Application has no credential-based integrations; source/public bundle checks remain part of release review.                                                        |
| HTTPS              | Verify HTTP and www redirects plus HSTS on production.                                                                                                              |
| Cookie consent     | No advertising, client analytics or tracking cookies. Theme and installed-launch preferences stay in browser storage. Reassess consent before introducing tracking. |
| Metadata           | Build validates titles, descriptions, canonicals, social objects and structured data on every public page.                                                          |
| Social previews    | Original PNG artwork and its existing public URLs preserved; dimensions and hashes checked.                                                                         |
| Favicon            | Existing browser, Apple and install icons preserved.                                                                                                                |
| Sitemap and robots | Exact exported-route coverage, including privacy and excluding 404 pages.                                                                                           |
| Alt text           | Descriptive text for meaningful images; decorative assets hidden or empty-alt.                                                                                      |
| Image compression  | Static responsive WebP variants; explicit dimensions, sizes and preload behavior; original assets preserved.                                                        |
| Speed              | Compare local, preview and production runs with the original live baseline; lab scores are not field certification.                                                 |
| Contrast           | Axe plus sampled composited-background contrast checks cover text that axe cannot evaluate over gradients and pseudo-elements.                                      |
| Mobile             | 320, 390, 768, 1440 and 1920px layout checks in both themes; navigation, disclosures and keyboard recovery tests.                                                   |
| 404                | Branded recovery page, real 404 status, noindex, no canonical and no sitemap entry.                                                                                 |
| Links              | Check internal routes, fragments, assets and recovery links. LinkedIn can reject automated requests; do not classify that as a confirmed dead link.                 |
| Form validation    | Not applicable: no contact form or other submission UI.                                                                                                             |
| Spam controls      | No website submission endpoint. Email inbox protection is separate.                                                                                                 |
| Analytics          | Not added: no traffic/engagement measurement requirement. Reassess privacy disclosure before adding it.                                                             |
| Call to action     | Existing experience-first hero, résumé access and contact options retained.                                                                                         |

## Repeatable checks

Run `npm run validate`, start `node scripts/serve-static.mjs 4176`, then run
`npm run test:browser` and `npm run test:interactions`. Both browser scripts accept a base URL and
an optional artifact directory as their first and second arguments. They use isolated browser
contexts, make no form submissions, and do not send email or contact external profiles.

`test:browser` runs axe in mobile/desktop light/dark contexts for the four content pages and a
missing page. For incomplete text contrast checks, it captures each text run's foreground colour,
opacity and rectangles; hides glyph paint without changing layout or the background; samples the
composited background every two pixels; and compares the resulting ratios against 4.5:1 for normal
text and 3:1 for large text. Decorative aria-hidden text is excluded. Saved JSON includes individual
targets, sample counts and ratios. This complements visual review and does not replace a complete
screen-reader or physical-device accessibility audit.

`test:interactions` checks narrow and wide layouts, footer privacy access, mobile navigation,
Escape/focus restoration, 404 recovery and removal of noindex after navigation, career disclosures,
theme persistence, skip navigation, no-JavaScript rendering, and simulated installed-app launch
behavior. The installed-app image must load during the introduction and must not load during an
ordinary browser visit. Simulation does not establish physical OS install/splash behavior.

Regenerate display variants with `npm run images:build`. The byte and metadata checks run against
the exported files. The social-preview PNG is never overwritten; its resized display derivatives
retain the licensing documented in `LICENSE.md`.

## Privacy evidence boundaries

The notice is based on application behavior and Vercel's published hosting/privacy documentation:

- https://vercel.com/legal/privacy-notice
- https://vercel.com/docs/observability

The connected Vercel tool could not read this project's account settings (403). No project-specific
log-retention period, inbox retention period, legal compliance determination, or absence of all
infrastructure processing is claimed. GitHub deployment records and direct production checks are
used to verify releases when that connector is unavailable.
