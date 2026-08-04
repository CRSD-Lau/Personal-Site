# Content Editing

## Where to edit

| Change                | Source                                                        |
| --------------------- | ------------------------------------------------------------- |
| Current role and hero | `data/profile.ts` and `data/experience.ts`                    |
| Career history        | `data/experience.ts`                                          |
| Delivery approach     | `data/approach.ts`                                            |
| Expertise             | `data/skills.ts`                                              |
| Impact figures        | `data/impact.ts`                                              |
| Independent projects  | `data/projects.ts`                                            |
| Résumé                | `documents/Neil-Mitchell-Resume.docx` and `public/resume.pdf` |

## Copy rules

- Use direct first-person language.
- State responsibilities and completed work precisely.
- Do not invent outcomes or percentages.
- Use exact totals when they are known.
- Use `MM` for millions.
- Avoid generic phrases that could describe anyone.
- Keep employer names and product groups separate from role titles.

## Employer marks

Use `public/logo.png` only beside real TD roles in the experience section. Do not use it as a
decorative page or hero element.

## Independent projects

- Publish fixed, dated evidence snapshots rather than live counters.
- Link the repository, latest release, licence, compliance notes, and original upstream project.
- Keep private analysis, models, binaries, faces, media, and third-party licence bodies out of the
  portfolio.
- Record preview provenance and preserve separately licensed asset terms.
- State consent, lawful-use, attribution, and technical-summary boundaries where needed.

## Before publishing

1. Update the website and résumé together.
2. Confirm role dates and organisations.
3. Confirm every impact figure and project evidence label.
4. Run `npm run validate`.
5. Review the static export on phone and desktop.

See the
[full content guide](https://github.com/CRSD-Lau/Personal-Site/blob/main/docs/content-guide.md).
