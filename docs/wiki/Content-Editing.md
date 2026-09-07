# Content Editing

Author: Neil Mitchell
Last modified by: Neil Mitchell

## Where to edit

| Change                 | Source                                                        |
| ---------------------- | ------------------------------------------------------------- |
| Current role and hero  | `data/profile.ts` and `data/experience.ts`                    |
| Career history         | `data/experience.ts`                                          |
| Delivery approach      | `data/approach.ts`                                            |
| Expertise              | `data/skills.ts`                                              |
| Impact figures         | `data/impact.ts`                                              |
| Independent projects   | `data/projects.ts`                                            |
| Search and social copy | `data/profile.ts` and route metadata in `app/`                |
| Résumé                 | `documents/Neil-Mitchell-Resume.docx` and `public/resume.pdf` |

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
   Review title, description, social images, structured data, and image alternative text when identity
   or role copy changes.
4. Run `npm run validate`.
5. Review the static export on phone and desktop.

## Brand and sharing previews

Use the current photographic hero, Manrope, forest canvas, pale lime accents, and
“Complex work. Clear direction.” statement across homepage and repository artwork. The Works
collection has a separate “Ideas, made practical.” card. Retain the reviewed project image for
its individual case study.

Update the README screenshot and introduction, package description, website cards, and repository
upload asset together. Review GitHub's About text, homepage, and topics. Website image changes need
a new versioned path; GitHub's social preview needs a separate upload after release authorisation.
Generated image and document metadata must name `Neil Mitchell` as author/creator and modifier.

See the
[full content guide](https://github.com/CRSD-Lau/Personal-Site/blob/main/docs/content-guide.md).
