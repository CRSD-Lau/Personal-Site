# Deployment and Releases

## Production

- Platform: Vercel
- URL: <https://neil-mitchell.vercel.app>
- Branch: `main`
- Build: `npm run build`
- Output: `out/`

## Release sequence

1. Review changed and untracked files.
2. Confirm no credentials or local caches are staged.
3. Update `VERSION`, package metadata, and `CHANGELOG.md`.
4. Run `npm run validate`.
5. Commit and push `main`.
6. Wait for GitHub Actions CI.
7. Create the annotated version tag.
8. Publish the GitHub release.
9. Deploy the tagged commit to Vercel.
10. Verify the live page, headshot favicon, résumé, browser console, and responsive layouts.

## Rollback

Promote the previous healthy Vercel deployment or revert the release commit. Keep the last known
healthy deployment available until production verification passes.

See the complete
[deployment guide](https://github.com/CRSD-Lau/Personal-Site/blob/main/docs/deployment.md)
and
[release process](https://github.com/CRSD-Lau/Personal-Site/blob/main/docs/release-process.md).
