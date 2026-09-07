# Brand, metadata, and sharing-preview audit

Author: Neil Mitchell
Last modified by: Neil Mitchell
Audit date: 6 September 2026
Baseline: `1f98f8dcfd01c97da34bed77828712b3ecc77831` (`v3.0.4`)

## Finding

The homepage's social card and GitHub's uploaded repository card still used the previous compact
career-card composition. That image is consistent with the outdated link preview in the supplied
example. The current website uses a photographic hero, Manrope, dark forest and pale lime, and
“Complex work. Clear direction.” The mismatch exists in the source assets as well as the shared
preview; refreshing a platform cache alone would not replace the old artwork.

This change prepares matching website and repository cards, route metadata, current README imagery,
and maintenance guidance. It does not by itself establish production deployment, an updated GitHub
social-preview setting, published wiki changes, or refreshed previews inside messaging applications.

## Scope and findings

| Surface                             | Baseline observation                                                                                                                                                                                                                                  | Remediation or retained boundary                                                                                                                                                                                                            |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Homepage Open Graph and X card      | `/opengraph-image.png` still held the old compact career card; social description did not use the current hero statement.                                                                                                                             | Introduce `/social/portfolio-v3.png`, align social copy with the hero, and refresh the old path as a compatibility copy. Retain the descriptive professional page title.                                                                    |
| Works collection                    | Collection metadata reused the first project's image and generic collection copy.                                                                                                                                                                     | Use `/social/works-v3.png` and the collection's “Ideas, made practical.” positioning.                                                                                                                                                       |
| Case-study card                     | The Deep Live Cam image is reviewed source-project artwork with a locked hash and separate licence terms.                                                                                                                                             | Preserve the artwork, attribution, and source terms. Verify the case study keeps its own metadata.                                                                                                                                          |
| Route metadata                      | Shared layout metadata can flow into child routes; child Open Graph and X declarations were incomplete.                                                                                                                                               | Declare child locale/site name and large-image X card explicitly. Validate each exported route's title, description, canonical, Open Graph, X card, keywords, and structured data together.                                                 |
| Structured data                     | The homepage described a Person, the collection lacked its project list, and the case-study identity could be more explicit.                                                                                                                          | Add linked WebSite/ProfilePage identity and GitHub profile identity, list actual projects in CollectionPage, and give the CreativeWork a stable identity and preview image while retaining source and licence links.                        |
| Canonical identity                  | `data/profile.ts` declares `https://neilmitchell.ca`; the public `www` homepage redirects to the apex with HTTP 308.                                                                                                                                  | Retain the apex URL in canonicals, Open Graph URLs, discovery metadata, README links, and package homepage. Recheck after deployment.                                                                                                       |
| README                              | Its main screenshot already showed the photographic redesign; the introduction and asset inventory did not fully describe the new sharing surfaces.                                                                                                   | Refresh the screenshot against the current site, align the introduction with the hero, and document separate website, collection, and repository assets.                                                                                    |
| Legacy README screenshot            | `docs/assets/readme-screenshot.jpg` is a separate compatibility asset.                                                                                                                                                                                | Refresh it alongside the README PNG so the two references cannot advertise different designs.                                                                                                                                               |
| GitHub repository social preview    | GitHub reports a custom uploaded image; inspection shows the old career-card artwork. The existing image URL ends in `d3010184-cfb0-46cf-8563-639a0c7fe137`.                                                                                          | Prepare a 1280 x 640 repository card. Upload and public `og:image` verification remain separate publication steps.                                                                                                                          |
| Repository About                    | Description: “Neil Mitchell's career portfolio for applied AI/ML project delivery, grounded in seven years of TD Insurance experience.” Homepage is correct. Topics cover the portfolio, applied AI/ML, project management, and implementation stack. | The professional description and existing topics are relevant. Keep any future About edits aligned with the same evidence and personal-site positioning.                                                                                    |
| Favicon and installed-app identity  | Round portrait favicon and versioned portrait install icons already identify Neil. The manifest uses the personal name, canonical root scope, and forest colours.                                                                                     | Add explicit manifest ID, language, and text direction. Retain the existing assets and native icon behaviour; validate their advertised paths, sizes, and metadata. See [installed-app guidance](installed-app.md) for device-check limits. |
| Résumé and links                    | The public PDF matches the repository file. PDF author, creator, producer, and modifier and DOCX creator and last modifier name Neil Mitchell. README badges return HTTP 200.                                                                         | Preserve the approved résumé facts and document files. Retain working badges and destination links.                                                                                                                                         |
| Package and operating documentation | Preview paths needed updating; wiki Home hard-coded `v3.0.2` despite the repository being at `v3.0.4`.                                                                                                                                                | Align package description and guides with the current positioning; link the wiki to the latest release instead of duplicating a version. Historical release notes remain historical.                                                        |
| Authorship and licensing            | Neil's portrait and portfolio artwork are distinct from employer marks and the reviewed project preview.                                                                                                                                              | Set generated asset author/creator and modifier to Neil Mitchell. Preserve the portrait, Manrope licence, employer-use boundary, résumé facts, and project-preview provenance.                                                              |

## Asset inventory

| Asset                                           | Purpose                                   | Size and ownership                                                    |
| ----------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------- |
| `public/social/portfolio-v3.png`                | Homepage Open Graph and X preview         | 1200 x 630 PNG; Neil Mitchell portfolio artwork                       |
| `public/social/works-v3.png`                    | Works collection Open Graph and X preview | 1200 x 630 PNG; Neil Mitchell portfolio artwork                       |
| `public/opengraph-image.png`                    | Compatibility path for older references   | Same current homepage card                                            |
| `docs/assets/repository-social-preview.png`     | GitHub repository social-preview upload   | 1280 x 640 PNG, under 1 MB; Neil Mitchell portfolio artwork           |
| `docs/assets/portfolio-preview.png`             | Current README homepage screenshot        | Rendered website screenshot                                           |
| `docs/assets/readme-screenshot.jpg`             | Compatibility README screenshot           | Same current website composition                                      |
| `public/works/deep-live-cam/social-preview.png` | Deep Live Cam case study                  | Existing 1280 x 640 reviewed artwork; unchanged source terms and hash |
| `app/icon.png` and `app/favicon.ico`            | Browser and search identity               | Existing portrait favicon assets                                      |
| `public/icons/*v2*.png`                         | Installed app and Apple touch icons       | Existing versioned opaque portrait variants                           |

The new portfolio cards follow the current hero's local Manrope font, `#111e1a` forest,
`#f1f6eb` pale text, and `#c8ed9a` lime accent. Essential content stays inset so the name, statement,
portrait where used, and destination remain readable in a small message preview.

`npm run previews:build` uses `scripts/build-brand-previews.mjs` to render the cards and capture
README screenshots from a running local export, with the existing portrait and font. It applies
Neil Mitchell's authorship metadata and preserves the compatibility homepage copy. See
[the generator workflow](deployment.md#regenerating-the-brand-assets).

GitHub's upload dimensions and size limit follow its
[official social-preview guidance](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview).

## Verification record

The baseline live audit confirmed:

- All three public routes, crawler requests, manifest, and icon requests returned HTTP 200.
- HTTP and `www` requests permanently redirected to the canonical HTTPS apex.
- The public website and GitHub repository served byte-identical old social artwork: 1200 x 630 PNG,
  147,410 bytes.
- The README PNG on GitHub matched the repository's already-modern screenshot.
- The live résumé matched the repository PDF, document metadata identified Neil Mitchell, and
  README badge endpoints returned HTTP 200.
- The repository's custom all-rights-reserved licence remained intentional; GitHub's `NOASSERTION`
  classification does not replace the terms in `LICENSE.md`.

Repair validation completed locally:

- `npm run validate` passed: formatting, lint, type checking, content checks across 92 files, and
  the production static export with all route metadata checks.
- The homepage and Works PNGs are 1200 x 630; the GitHub card is 1280 x 640. All are under 1 MB.
  Generated PNG/JPEG assets identify Neil Mitchell in EXIF and XMP creator/modifier fields.
- The compatibility image exactly matches the new homepage image; the reviewed Deep Live Cam
  artwork and both resume files are unchanged.
- The three new cards and refreshed README screenshot were visually reviewed at their native sizes; the cards were also reviewed at 390 CSS pixels.
- Four isolated export mutations were rejected: missing Works locale, wrong image width, malformed
  JSON-LD, and a Works canonical pointing to the homepage. The restored scratch export passed.

- Browser checks passed all 12 local route/viewport/theme combinations (three routes at 390 and 1440 pixels in both themes), plus six hosted preview combinations. No JavaScript errors, failed requests, broken loaded images, horizontal overflow, or theme mismatches were found.
- All three hosted preview image responses returned PNGs whose dimensions and bytes match source.
- The public wiki matched the baseline source; all stale references are covered by the five updated pages.

Exact final-commit hosted checks are recorded on the proposed pull request.
Those checks remain distinct from production publication and third-party cache refresh.

## Publication and cache status

At preparation, the following remain separate from the checked-in repairs:

- Production publication and exact deployed-commit verification.
- Live homepage and Works image bytes matching the reviewed files.
- GitHub repository social-preview upload and verification of the public repository's `og:image`.
- Publication and verification of the updated GitHub wiki pages.
- A newly composed link preview in the affected messaging application.

New website image filenames prevent reuse of the old image URL after a platform re-reads the page.
They do not control when a service refreshes its cached HTML or whether an existing message changes.
For LinkedIn, its [Post Inspector guidance](https://www.linkedin.com/help/linkedin/answer/a6233775)
explains that refreshed information applies to new posts; existing posts retain their preview.
No Instagram preview refresh has been verified as part of this source audit.

Use [the deployment procedure](deployment.md#sharing-previews-and-repository-branding) to complete
and record each external check after release authorisation.
