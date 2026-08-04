# Deployment and Releases

## Production

- Platform: Vercel
- URL: <https://neilmitchell.ca>
- Branch: `main`
- Build: `npm run build`
- Output: `out/`

## Release sequence

1. Review changed and untracked files.
2. Confirm no credentials or local caches are staged.
3. Update `VERSION`, package metadata, and `CHANGELOG.md`.
4. Run `npm run validate`.
5. Commit on a release branch and open a pull request to `main`.
6. Wait for GitHub Actions CI, CodeQL, and Vercel Preview before merging.
7. Confirm production serves the exact merged `main` commit.
8. Verify the root page, Works index and case study, social metadata and previews, structured data,
   favicon, résumé, browser console, and responsive layouts.
9. Create the annotated version tag on the verified commit.
10. Publish the GitHub release.
11. Synchronize these operating pages to the GitHub wiki.

## Rollback

Promote the previous healthy Vercel deployment or revert the release commit. Keep the last known
healthy deployment available until production verification passes.

See the complete
[deployment guide](https://github.com/CRSD-Lau/Personal-Site/blob/main/docs/deployment.md)
and
[release process](https://github.com/CRSD-Lau/Personal-Site/blob/main/docs/release-process.md).
