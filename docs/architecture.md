# Architecture

Author: Neil Mitchell
Last modified by: Neil Mitchell

## Purpose

The portfolio is a statically exported Next.js application. It keeps career content separate from
presentation, requires no application server, and deploys as versioned static files on Vercel.

## Runtime model

```mermaid
flowchart TD
  Profile["data/profile.ts"]
  Experience["data/experience.ts"]
  Approach["data/approach.ts"]
  Skills["data/skills.ts"]
  Impact["data/impact.ts"]
  Projects["data/projects.ts"]

  Profile --> Sections["React section components"]
  Experience --> Sections
  Approach --> Sections
  Skills --> Sections
  Impact --> Sections
  Projects --> Works["Works index and case studies"]

  Shared["Shared components"] --> Sections
  CSS["Design tokens and responsive CSS"] --> Sections
  Sections --> Page["app/page.tsx"]
  Works --> Export["Next.js static export"]
  Page --> Export["Next.js static export"]
  Export --> CDN["Vercel CDN"]
```

The production artifact is the `out/` directory created by `npm run build`.

## Main layers

### Application shell

- `app/layout.tsx` owns document metadata, canonical URL, theme bootstrap, and viewport behaviour.
- `app/page.tsx` composes the single-page portfolio, including the Works preview section, and emits Person structured data.
- `app/works/page.tsx` renders the independent-project index; `app/works/[slug]/page.tsx` statically
  renders each declared case study with page-specific metadata and a CreativeWork schema whose
  software subject carries repository and licence data.
- `app/globals.css` provides shared layout primitives and existing case-study foundations.
- `app/redesign.css` owns the refreshed tokens, local font, hero, navigation, about, impact,
  contact, and accessibility states. `app/career.css` and `app/works-refresh.css` provide
  the career and project presentation layers.
- `app/icon.png` provides the round headshot favicon.
- `public/social/portfolio-v3.png` and `public/social/works-v3.png` provide distinct 1200 x 630
  homepage and Works collection previews. `public/opengraph-image.png` is a compatibility copy
  of the homepage card.
- `docs/assets/repository-social-preview.png` is the separate GitHub repository upload asset;
  GitHub's repository setting is not controlled by Next.js metadata.
- `scripts/build-brand-previews.mjs` renders cards and README screenshots with Playwright and Sharp,
  taking brand copy and colours from a running local static export and using the existing portrait
  and Manrope font. It also applies Neil Mitchell's author and modifier metadata.
- `app/manifest.ts`, `app/robots.ts`, and `app/sitemap.ts` emit static discovery metadata.

### Content model

The files in `data/` are the source of truth for visible career content:

- `profile.ts`: identity, current role, links, and contact copy
- `experience.ts`: role order, dates, organisations, and responsibilities
- `approach.ts`: delivery stages and working principles
- `skills.ts`: capability groups and technology literacy
- `impact.ts`: measured outcomes and supporting stories
- `projects.ts`: independent project content, fixed evidence snapshots, preview provenance, external links, and attribution

The current role is derived from `experience.ts` instead of repeated manually.

### Presentation

Files in `sections/` own page-level compositions. Files in `components/` own reusable or interactive
elements such as navigation, theme preference, impact counters, icons, project evidence visuals, and the
current-role card.

### Build toolchain

- Node.js 24 is used for local development, GitHub Actions, and Vercel production builds.
- TypeScript 7 supplies the native compiler invoked by the project's explicit type-check command.
- The standard TypeScript 6 package provides the compiler API used by Next.js and
  `typescript-eslint` until TypeScript 7 exposes its replacement API.
- The design system is purpose-built CSS. Tailwind CSS and Autoprefixer are not part of the runtime
  or build pipeline.
- Next.js's transitive PostCSS dependency is pinned to a patched release through npm overrides.

### Client behaviour

The exported page works without client-side data fetching. Small client components provide:

- Theme persistence
- Mobile navigation
- Scroll progress
- Email copying
- Viewport-triggered impact counters

The Works pages use no client-side data fetching. Their project routes are produced from
`generateStaticParams`, and the same typed project list supplies the index and sitemap. On the home page,
Works follows Experience as a normal section anchor; from project routes, the header navigation returns to
that home-page section while the case-study back link and footer open the full Works index.

Core content remains present in static HTML.

Project and collection links use native document navigation. This avoids framework
prefetch requests that require host-specific RSC rewrite rules and keeps the exported
HTML routes portable across static hosts. The preview server supports gzip for text
assets and retains no-store headers for reliable local iteration.

Historical career responsibilities use native HTML disclosures, retaining their role summaries
and dates in the initial view. They work without JavaScript. The hero uses finite CSS entrance
animation; reduced motion shows the completed composition. Manrope is served locally and has
no runtime dependency on an external font service.

## Quality controls

`npm run validate` runs five gates:

1. Prettier formatting
2. ESLint with zero warnings
3. TypeScript compilation
4. Domain-specific content validation
5. Production static build

The content validator protects high-risk facts such as current role dates, organisation labels,
career tenure, impact figures, résumé availability, project evidence labels, exact external targets,
preview provenance, licensing boundaries, and prohibited employer claims in independent work.

The static-build validator also checks the exported metadata and referenced image assets. Inspect
the generated HTML when changing route metadata: metadata inherited from the application shell can
otherwise give an independent-work page career keywords or a generic card. Current brand and preview
coverage is recorded in [the audit](brand-preview-audit.md).

## Accessibility

- Semantic landmarks and heading order
- Skip link and visible keyboard focus
- Static text equivalents for animated metrics
- Reduced-motion support
- Meaningful image alternative text
- Touch targets sized for phone use
- Colour-independent state and labels

## Deployment boundary

Vercel serves the static export. There is no database, API, authentication layer, or server-side
contact form. Contact actions open the user's email client or LinkedIn.

This narrow runtime reduces operational and security risk.
