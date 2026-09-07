# Deployment and Releases

Author: Neil Mitchell
Last modified by: Neil Mitchell

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

## Sharing-preview release checks

Verify the live homepage, Works collection, and case-study metadata and image bytes. The homepage
and collection use versioned files in `public/social/`; the case study retains its reviewed project
artwork. The legacy `/opengraph-image.png` remains a current homepage compatibility copy.

GitHub hosts its uploaded social preview separately. After release authorisation, upload
`docs/assets/repository-social-preview.png` in repository settings, then inspect the public
repository's `og:image` and the image it serves. Also review About text, homepage, topics, the README,
and these wiki pages. A committed image alone does not confirm the repository setting changed.

Social services may keep a cached page or old message preview. Verify actual new link previews
separately from live HTTP metadata. Follow the
[sharing-preview procedure](https://github.com/CRSD-Lau/Personal-Site/blob/main/docs/deployment.md#sharing-previews-and-repository-branding)
for platform refresh guidance and the
[audit](https://github.com/CRSD-Lau/Personal-Site/blob/main/docs/brand-preview-audit.md) for status.

## Rollback

Promote the previous healthy Vercel deployment or revert the release commit. Keep the last known
healthy deployment available until production verification passes.

See the complete
[deployment guide](https://github.com/CRSD-Lau/Personal-Site/blob/main/docs/deployment.md)
and
[release process](https://github.com/CRSD-Lau/Personal-Site/blob/main/docs/release-process.md).
