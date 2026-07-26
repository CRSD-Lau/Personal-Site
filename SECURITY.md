# Security Policy

## Supported version

Security fixes are applied to the current production release on `main`.

| Version          | Supported |
| ---------------- | --------- |
| 2.x              | Yes       |
| Earlier versions | No        |

## Reporting a vulnerability

Do not open a public issue for a suspected security problem.

Use
[GitHub private vulnerability reporting](https://github.com/CRSD-Lau/Personal-Site/security/advisories/new)
and include:

- A clear description of the issue
- The affected URL, file, or dependency
- Reproduction steps
- Expected and observed behaviour
- Any suggested mitigation

Please avoid accessing data that is not yours, disrupting the production site, or publishing the
issue before a fix is available.

## Scope

Useful reports include:

- Exposed secrets or private files
- Unsafe dependency behaviour
- Cross-site scripting or content injection
- Incorrect security headers with a practical impact
- Build or deployment configuration that exposes protected data

General content corrections and visual bugs belong in the public issue tracker.
