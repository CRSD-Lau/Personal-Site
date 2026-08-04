# Architecture

The portfolio is a Next.js 16 application exported as static HTML, CSS, and JavaScript.

## Data flow

```text
data/*.ts
    |
sections/*.tsx + components/*.tsx
    |
app/page.tsx + app/works/* + app/globals.css
    |
Next.js static export
    |
Vercel
```

## Key boundaries

- `data/` owns career content and typed independent-project records.
- `sections/` owns page-level compositions.
- `components/` owns shared and interactive UI.
- `app/globals.css` owns design tokens and responsive layouts.
- `app/icon.png` provides the round headshot favicon.
- `public/opengraph-image.png` provides the 1200 x 630 root-page social preview.
- `public/works/` contains reviewed project preview assets with provenance recorded in the repository
  licence and content guide.
- `app/manifest.ts`, `app/robots.ts`, and `app/sitemap.ts` emit discovery metadata.
- `scripts/validate-content.mjs` protects high-risk career facts, project evidence, external targets,
  and publication boundaries.
- `scripts/build-resume.py` creates the résumé source and finalizes document metadata.

## Toolchain

- Node.js 24 is shared across local development, GitHub Actions, and Vercel.
- TypeScript 7 provides the native compiler.
- The official TypeScript 6 compatibility API supports Next.js and `typescript-eslint` during the
  TypeScript 7 transition.
- Purpose-built CSS provides normalization, tokens, and responsive layouts without Tailwind CSS.

There is no database, application API, authentication layer, or server-side contact form.

The home page, `/works`, and typed `/works/[slug]` routes all export as static HTML. Project routes
and sitemap entries are generated from `data/projects.ts`.

For the full technical record, see
[docs/architecture.md](https://github.com/CRSD-Lau/Personal-Site/blob/main/docs/architecture.md).
