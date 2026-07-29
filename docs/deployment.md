# Deployment

## Production target

- Platform: Vercel
- Production URL: <https://neilmitchell.ca>
- Production branch: `main`
- Build command: `npm run build`
- Output: static export in `out/`

## Before deployment

Run:

```bash
npm ci
npm run validate
```

Confirm:

- The working tree contains only intended source and documentation changes.
- No environment files, credentials, caches, or generated build folders are staged.
- The résumé opens and its metadata names Neil Mitchell as author and modifier.
- Visible changes have been reviewed at phone, tablet, desktop, and wide-screen widths.
- `CHANGELOG.md`, `VERSION`, and `package.json` agree.

## GitHub delivery

1. Commit the validated release on `main`.
2. Push `main` to GitHub.
3. Wait for the `CI` workflow and the automatic Vercel production deployment.
4. Confirm the ready Vercel deployment uses the pushed `main` commit.
5. Run the production verification checklist.
6. Create an annotated version tag on that exact commit.
7. Publish the matching GitHub release.
8. Synchronize the checked-in `docs/wiki/` pages to the GitHub wiki when operating guidance changes.

A manual production deployment may be used only when the Git integration is unavailable. Never tag
or publish a release when CI or production verification has failed.

## Production verification

After Vercel reports a ready deployment:

1. Confirm the root page returns HTTP 200.
2. Confirm `www.neilmitchell.ca` redirects to the canonical apex domain.
3. Confirm Open Graph and X metadata use `https://neilmitchell.ca`.
4. Confirm `/opengraph-image.png` returns HTTP 200 as a 1200 x 630 PNG.
5. Confirm `/robots.txt`, `/sitemap.xml`, and `/manifest.webmanifest` return HTTP 200.
6. Confirm the page advertises the round headshot favicon and the icon returns `image/png`.
7. Confirm `/resume.pdf` returns HTTP 200 and `application/pdf`.
8. Check the browser console for runtime errors.
9. Confirm the hero shows the current role and no decorative TD logo.
10. Confirm all five experience entries retain their official employer markers.
11. Confirm navigation, theme switching, résumé, LinkedIn, and email actions work.
12. Check phone and desktop screenshots for clipping or horizontal overflow.

## Rollback

If production verification fails:

1. Promote the previous healthy Vercel deployment, or revert the release commit.
2. Verify the production URL again.
3. Record the rollback in `CHANGELOG.md` and the GitHub release.
4. Fix the issue on a branch and repeat the full validation path.

Never delete the last known healthy Vercel deployment.
