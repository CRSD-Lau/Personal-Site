# Contributing

Thank you for helping improve Neil Mitchell's portfolio. Changes should keep the site factual,
accessible, responsive, and easy to maintain.

## Before you start

1. Open an issue for a material feature, content change, or design change.
2. Create a branch from `main`.
3. Keep the change focused and avoid unrelated formatting or content edits.
4. Never add private employer information, customer information, credentials, or unpublished
   business data.

## Local setup

```bash
npm ci
npm run dev
```

Node.js 24.x and npm 11 or newer are required.

## Content standards

- Write in first person where Neil is speaking.
- Use direct language and concrete responsibilities.
- Do not invent outcomes, percentages, savings, volume, or scope.
- Keep employer names, role titles, dates, and product groups aligned with `data/experience.ts`.
- Use `MM` for millions in finance-related figures.
- Use official supplied employer assets only. Do not recreate or approximate brand marks.
- Keep the personal-site disclaimer visible.

See [docs/content-guide.md](./docs/content-guide.md) for the full editing checklist.

## Code standards

- Keep TypeScript strict and avoid `any`.
- Preserve semantic HTML and keyboard access.
- Respect `prefers-reduced-motion`.
- Use the existing design tokens in `app/globals.css`.
- Keep content in `data/` unless markup or behaviour must change.
- Avoid new dependencies when the browser or React already provides the needed behaviour.

## Required validation

Run the full release gate before opening a pull request:

```bash
npm run validate
```

This checks formatting, linting, TypeScript, portfolio content, and the production build.

For visual changes, test at minimum:

- 320px phone
- 768px tablet
- 1280px desktop
- 1600px wide desktop
- Light and dark themes
- Reduced-motion mode

## Résumé changes

When a career detail changes, update the website and résumé together.

- Source: `documents/Neil-Mitchell-Resume.docx`
- Published file: `public/resume.pdf`
- Generator: `scripts/build-resume.py`

Before commit, verify both files identify `Neil Mitchell` as author and modifier.

## Commits and pull requests

Use concise Conventional Commit messages:

```text
feat: add current role
fix: align mobile timeline nodes
docs: update release guide
chore: refresh dependencies
```

Pull requests should explain:

- What changed
- Why it changed
- How it was tested
- Any content or résumé updates
- Screenshots for visible changes

The checklist in `.github/PULL_REQUEST_TEMPLATE.md` is required.
