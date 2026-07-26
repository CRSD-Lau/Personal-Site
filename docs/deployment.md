# Deployment

## Production target

- Platform: Vercel
- Production URL: <https://neil-mitchell.vercel.app>
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
3. Wait for the `CI` workflow to pass.
4. Create an annotated version tag.
5. Publish the matching GitHub release.

Vercel should deploy the production branch automatically. A manual production deployment may be
used when the Git integration is not available.

## Production verification

After Vercel reports a ready deployment:

1. Confirm the root page returns HTTP 200.
2. Confirm `/resume.pdf` returns HTTP 200 and `application/pdf`.
3. Check the browser console for runtime errors.
4. Confirm the hero shows the current role and no decorative TD logo.
5. Confirm all five experience entries retain their official employer markers.
6. Confirm navigation, theme switching, résumé, LinkedIn, and email actions work.
7. Check phone and desktop screenshots for clipping or horizontal overflow.

## Rollback

If production verification fails:

1. Promote the previous healthy Vercel deployment, or revert the release commit.
2. Verify the production URL again.
3. Record the rollback in `CHANGELOG.md` and the GitHub release.
4. Fix the issue on a branch and repeat the full validation path.

Never delete the last known healthy Vercel deployment.
