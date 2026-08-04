# Content Guide

## Source of truth

Update portfolio content in `data/` first. Avoid placing career facts directly inside React
components.

| Content               | File                                                            |
| --------------------- | --------------------------------------------------------------- |
| Current role and hero | `data/profile.ts` and the current entry in `data/experience.ts` |
| Career history        | `data/experience.ts`                                            |
| Delivery approach     | `data/approach.ts`                                              |
| Expertise             | `data/skills.ts`                                                |
| Impact measures       | `data/impact.ts`                                                |
| Independent projects  | `data/projects.ts`                                              |
| Résumé                | `documents/Neil-Mitchell-Resume.docx` and `public/resume.pdf`   |

## Voice

- Use first person when Neil is speaking.
- Prefer short sentences and direct verbs.
- Name the work, team, platform, or decision where the record supports it.
- Keep the tone senior and practical.
- Remove copy that explains or defends how the portfolio was written.
- Avoid repeated words such as `context` when a specific label works better.

## Evidence rules

- Never invent savings, percentages, adoption, cycle-time gains, or team size.
- Retain a historical figure only when the underlying record supports it.
- Use exact totals where they are known.
- Use `MM` for millions in finance-related figures.
- Distinguish work led, delivered, supported, and coordinated.
- Current-role copy may describe responsibilities without claiming unfinished outcomes.

The current supported impact measures are:

- More than 80,000 invoices processed in a quarterly cycle
- More than $55MM in quarterly accounts receivable activity
- More than seven years at TD
- 11 product initiatives delivered across Digital Service Performance and SPARK

## Employer references

- Use the supplied `public/logo.png` asset beside actual TD career roles.
- Do not redraw, approximate, or decorate with invented TD marks.
- Do not use the TD logo as general page decoration.
- Keep the personal and unofficial website disclaimer visible.
- Do not imply endorsement by TD Bank Group or TD Insurance.

## Independent project evidence

- Keep project facts in `data/projects.ts`; do not place audit numbers directly in page components.
- Label repository-derived numbers with their fixed audit date and commit. Do not present them as live counters.
- Credit upstream projects and link to the source repository, licence, compliance notes, and original
  upstream project where a project is a derivative.
- Do not copy models, binaries, third-party licence bodies, personal media, or unverified external artwork into
  this repository.
- Keep private audit folders and source reports outside the public site. Publish only a concise, original summary
  when the evidence and wording are safe to share.
- State responsible-use and legal boundaries where a project's subject matter requires them. Do not present the
  portfolio as legal advice.
- `public/works/deep-live-cam/social-preview.png` is an exact copy of the repository artwork introduced by Neil
  Mitchell in deep-live-cam commit `255fab3`. Its SHA-256 is locked by site validation. It contains an illustrated
  interface rather than a face, model output, third-party photo, or application binary. `LICENSE.md` explicitly
  excludes it from the portfolio's all-rights-reserved terms and records its source-project terms and provenance.

## Role update checklist

When adding or changing a role:

1. Update `data/experience.ts`.
2. Confirm only one role has `current: true`.
3. Update résumé source and published PDF.
4. Review `data/profile.ts` for current-role copy.
5. Review tenure and role-count metrics.
6. Update `CHANGELOG.md`.
7. Run `npm run validate`.
8. Review phone, tablet, desktop, and wide layouts.

## Impact update checklist

Before publishing a metric:

1. Confirm the number and unit.
2. Confirm whether it represents delivered work, active work, or historical operations.
3. Write a short label that can stand alone.
4. Add one sentence explaining scope.
5. Confirm the count-up animation parses the chosen format.
6. Test the final value with reduced motion enabled.

## Résumé metadata

Both the DOCX and PDF must contain:

- Author: `Neil Mitchell`
- Last Modified By or Modifier: `Neil Mitchell`
- Title: `Neil Mitchell Resume`

The helper in `scripts/build-resume.py` applies these values.
