# Deployment

Author: Neil Mitchell
Last modified by: Neil Mitchell

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
- Changed sharing cards have been reviewed at full size and a narrow message-preview size.
- `CHANGELOG.md`, `VERSION`, and `package.json` agree.

## GitHub delivery

1. Commit the validated release on a focused branch and open a pull request to `main`.
2. Wait for the pull-request `CI`, CodeQL, and Vercel Preview checks.
3. Merge only after the required checks and preview review pass.
4. Wait for the automatic Vercel production deployment from the merge commit.
5. Confirm the ready deployment uses that exact `main` commit and run the production checklist.
6. Create an annotated version tag on that exact verified commit.
7. Publish the matching GitHub release.
8. Synchronize the checked-in `docs/wiki/` pages to the GitHub wiki when operating guidance changes.

A manual production deployment may be used only when the Git integration is unavailable. Never tag
or publish a release when CI or production verification has failed.

## Production verification

After Vercel reports a ready deployment:

1. Confirm the root page returns HTTP 200.
2. Confirm `www.neilmitchell.ca` redirects to the canonical apex domain.
3. Confirm Open Graph and X metadata use `https://neilmitchell.ca`.
4. Confirm the homepage advertises `/social/portfolio-v3.png`, the Works index advertises
   `/social/works-v3.png`, and both return HTTP 200 as 1200 x 630 PNGs. Confirm the compatibility
   `/opengraph-image.png` returns the current homepage image.
5. Confirm `/robots.txt`, `/sitemap.xml`, and `/manifest.webmanifest` return HTTP 200.
6. Confirm the page advertises the round headshot favicon and the icon returns `image/png`.
7. Confirm `/resume.pdf` returns HTTP 200 and `application/pdf`.
8. Check the browser console for runtime errors.
9. Confirm the hero shows the current role and no decorative TD logo.
10. Confirm all five experience entries retain their official employer markers.
11. Confirm navigation, theme switching, résumé, LinkedIn, and email actions work.
12. Check phone and desktop screenshots for clipping or horizontal overflow.
13. Confirm `/works` and `/works/deep-live-cam` return HTTP 200 and navigate to the intended top or
    home-page section.
14. Confirm both Works pages emit the expected canonical URL, Open Graph type, social preview, and
    valid CollectionPage or CreativeWork structured data.
15. Confirm `/works/deep-live-cam/social-preview.png` returns HTTP 200 and the case study links to the
    repository, latest release, licence, compliance notes, and original upstream project.
16. Confirm the independent project metadata contains no employer keywords and the case study shows
    its fixed snapshot date, attribution, consent guidance, and technical-summary disclaimer.

## Regenerating the brand assets

The generator reads the local site's rendered hero and Works copy and colours, then uses the
existing portrait and Manrope font to create the cards. It also captures the current homepage
for both README image formats. Playwright and Sharp are development dependencies.

Install Chromium once and build and serve the export:

```bash
npx playwright install chromium
npm run build
npm run preview
```

With that server running, use a second terminal:

```bash
npm run previews:build -- http://127.0.0.1:4174
npm run validate
```

The command only accepts a local host. Review the generated images and their diff before staging.
The public cards have versioned filenames; update the generator, metadata, validators, and guides
together when introducing the next version. The compatibility homepage image is copied from the
new homepage card automatically.

## Sharing previews and repository branding

Website Open Graph and X metadata and GitHub's repository social preview are separate surfaces.
Changing `public/social/` or the README does not change GitHub's uploaded repository image.

After an authorised release:

1. Fetch the live HTML for `/`, `/works`, and each case study. Check the canonical URL, title,
   description, Open Graph URL/type/image, X card type/image, and structured data. Repeat the root
   request with a social crawler user agent to check that its initial HTML carries the same metadata.
2. Fetch each advertised image directly. Confirm status, content type, dimensions, and bytes against
   the reviewed release. Verify the `www` link redirects to the canonical apex domain.
3. Review the live repository README. Check its image, live-site and résumé links, release badge,
   About description, homepage, and topics against the same professional positioning.
4. Upload `docs/assets/repository-social-preview.png` under repository **Settings → Social preview →
   Edit**. The image is 1280 x 640 with a solid background and must remain under 1 MB. See
   [GitHub's social-preview documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview).
5. Read the public repository page's `og:image`, fetch the resulting repository-hosted image, and
   verify it is the reviewed new card. A file committed to `docs/assets/` alone does not prove this
   setting has changed.
6. Publish the checked-in wiki pages if operating guidance changed, and verify their public content.
7. For LinkedIn, inspect the live URL using [Post Inspector](https://www.linkedin.com/post-inspector/).
   LinkedIn states that refreshing affects new posts; existing posts retain their prior preview.
   See [LinkedIn's cache-refresh guidance](https://www.linkedin.com/help/linkedin/answer/a6233775).

Versioned website image paths avoid reusing the old image URL when a platform next reads the page.
They cannot guarantee when a third-party service will refresh its cached HTML or rewrite a previously
sent message. Record the live metadata, GitHub image, and actual platform-preview checks separately;
do not mark an Instagram or other messaging preview verified from HTTP checks alone.

The current asset inventory and any remaining publication checks are in
[the brand and preview audit](brand-preview-audit.md).

## Rollback

If production verification fails:

1. Promote the previous healthy Vercel deployment, or revert the release commit.
2. Verify the production URL again.
3. Record the rollback in `CHANGELOG.md` and the GitHub release.
4. Fix the issue on a branch and repeat the full validation path.

Never delete the last known healthy Vercel deployment.
