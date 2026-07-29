# Development

## Requirements

- Node.js 24.x
- npm 11 or newer

TypeScript 7 provides the native `tsc` command. The `typescript` package name intentionally resolves
to the official TypeScript 6 compatibility API required by Next.js and `typescript-eslint`.

## Setup

```bash
git clone https://github.com/CRSD-Lau/Personal-Site.git
cd Personal-Site
npm ci
npm run dev
```

Open <http://localhost:3000>.

## Release gate

```bash
npm run validate
```

The command checks formatting, linting, TypeScript, career content, and the static production
build.

## Static preview

```bash
npm run build
npm run preview
```

Open <http://localhost:4174>.

## Visual coverage

Review at:

- 320px phone
- 768px tablet
- 1280px desktop
- 1600px wide desktop
- Light and dark themes
- Reduced-motion mode

See
[CONTRIBUTING.md](https://github.com/CRSD-Lau/Personal-Site/blob/main/CONTRIBUTING.md)
before proposing a change.
