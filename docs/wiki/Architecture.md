# Architecture

The portfolio is a Next.js 16 application exported as static HTML, CSS, and JavaScript.

## Data flow

```text
data/*.ts
    |
sections/*.tsx + components/*.tsx
    |
app/page.tsx + app/globals.css
    |
Next.js static export
    |
Vercel
```

## Key boundaries

- `data/` owns career content.
- `sections/` owns page-level compositions.
- `components/` owns shared and interactive UI.
- `app/globals.css` owns design tokens and responsive layouts.
- `app/icon.png` provides the round headshot favicon.
- `app/opengraph-image.png` provides the 1200 x 630 social preview.
- `app/manifest.ts`, `app/robots.ts`, and `app/sitemap.ts` emit discovery metadata.
- `scripts/validate-content.mjs` protects high-risk career facts.
- `scripts/build-resume.py` creates the résumé source and finalizes document metadata.

There is no database, application API, authentication layer, or server-side contact form.

For the full technical record, see
[docs/architecture.md](https://github.com/CRSD-Lau/Personal-Site/blob/main/docs/architecture.md).
