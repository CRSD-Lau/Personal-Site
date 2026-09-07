# Architecture

Author: Neil Mitchell
Last modified by: Neil Mitchell

The portfolio is a Next.js 16 application exported as static HTML, CSS, and JavaScript.
This page describes the current photographic portfolio.

## Data flow

```text
data/*.ts
    |
sections/*.tsx + components/*.tsx
    |
app/page.tsx + app/works/* + app/*.css
    |
Next.js static export
    |
Vercel
```

## Key boundaries

- `data/` owns career content and typed independent-project records.
- `sections/` owns page-level compositions.
- `components/` owns shared and interactive UI.
- `app/layout.tsx` owns metadata, theme bootstrap, font preloading, and the CSS import order.
- `app/globals.css` retains shared layout primitives and existing case-study foundations.
- `app/redesign.css` owns the refreshed tokens, local font, navigation, hero, About, Impact,
  Contact, footer, and accessibility states.
- `app/career.css` owns career, approach, and expertise presentation.
- `app/works-refresh.css` owns the project feature, Works index, and case study.
- `app/icon.png` provides the round headshot favicon.
- `public/social/portfolio-v3.png` and `public/social/works-v3.png` provide separate 1200 x 630
  homepage and Works collection previews. `public/opengraph-image.png` retains a compatibility copy
  of the homepage card.
- `docs/assets/repository-social-preview.png` is a separate 1280 x 640 GitHub upload asset. Updating
  that file does not update the repository's social-preview setting.
- `public/works/` contains reviewed project preview assets with provenance recorded in the repository
  licence and content guide.
- `public/fonts/` contains the locally hosted Manrope WOFF2 and its SIL Open Font License.
- `app/manifest.ts`, `app/robots.ts`, and `app/sitemap.ts` emit discovery metadata.
- `scripts/validate-content.mjs` protects high-risk career facts, project evidence, external targets,
  and publication boundaries.
- `scripts/build-resume.py` creates the résumé source and finalizes document metadata.
- `scripts/build-brand-previews.mjs` uses Playwright and Sharp to generate sharing cards and README
  screenshots from the local static export, applying Neil Mitchell's image metadata.

## Toolchain

- Node.js 24 is shared across local development, GitHub Actions, and Vercel.
- TypeScript 7 provides the native compiler used by the explicit type-check command.
- The standard TypeScript 6 package provides the compiler API used by Next.js and
  `typescript-eslint` during the TypeScript 7 transition.
- Purpose-built CSS provides normalization, tokens, and responsive layouts without Tailwind CSS.

There is no database, application API, authentication layer, or server-side contact form.

The home page, `/works`, and typed `/works/[slug]` routes all export as static HTML. Project routes
and sitemap entries are generated from `data/projects.ts`.

## Navigation and client behaviour

The homepage places Works directly after Experience. Primary navigation contains About,
Experience, Works, and Contact; the mobile menu and footer retain the complete section list.
Navigation from project pages returns to the corresponding homepage anchor. Case-study back
links and the footer open the full Works index.

Project and collection links use native document navigation so exported HTML routes work on
static hosts without framework-specific prefetch rewrite rules. The production artifact is `out/`.
The local preview server supports gzip for text assets and uses no-store headers during iteration.

Small client components provide theme persistence, mobile navigation, scroll progress, email
copying, and impact counters. Core content is present in static HTML. Previous-role responsibilities
use native disclosures, while role summaries and dates remain visible when those disclosures are
closed. Section navigation also has a no-JavaScript fallback, and theme switching still works when
browser storage is unavailable.

Manrope has no external font-service dependency. Hero entrance motion is finite CSS animation;
reduced-motion mode shows the completed composition and final impact values.

For the full technical record, see
[docs/architecture.md](https://github.com/CRSD-Lau/Personal-Site/blob/main/docs/architecture.md).
