# Release Process

## Versioning

The portfolio uses Semantic Versioning:

- Major: material redesign, architecture change, or career-positioning reset
- Minor: a new section, role, metric group, or user-facing capability
- Patch: copy correction, accessibility fix, dependency update, or layout repair

The version must match in:

- `VERSION`
- `package.json`
- `package-lock.json`
- `CHANGELOG.md`
- Git tag
- GitHub release

## Release checklist

1. Review every changed and untracked file.
2. Scan the staged content for credentials and private data.
3. Update the README and operating documentation.
4. Update `CHANGELOG.md`.
5. Run `npm run validate`.
6. Verify the local static export in a browser.
7. Commit on a focused release branch with a Conventional Commit message and open a pull request.
8. Wait for GitHub Actions, CodeQL, and Vercel Preview before merging to `main`.
9. Confirm production is serving the exact merge commit.
10. Run production canary checks.
11. Tag the exact validated and deployed commit.
12. Publish the GitHub release.
13. Update the GitHub wiki if operating guidance changed.

## Release notes

Release notes should answer:

- What changed for a visitor?
- What career or résumé facts changed?
- What changed for maintainers?
- How was the release verified?
- Are there any known limitations?

Avoid copying raw commit messages without explaining user impact.

## Tagging

Use an annotated tag:

```bash
git tag -a vX.Y.Z -m "Neil Mitchell Portfolio vX.Y.Z"
git push origin vX.Y.Z
```

Do not move or reuse a published version tag.

## Hotfix

For a production defect:

1. Branch from the current production tag.
2. Make the smallest safe fix.
3. Add a changelog entry.
4. Run the full validation suite.
5. Release the next patch version.

## Release ownership

Neil Mitchell approves career content, résumé changes, and production publication. Automated tools
may validate and publish only with explicit release authorization.
