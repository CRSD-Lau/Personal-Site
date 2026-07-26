# Career Portfolio Design System

Owner: Neil Mitchell

## Creative concept

The portfolio presents Neil's career as a clear progression through TD Insurance and into applied
AI/ML delivery. The interface combines an editorial portfolio with the clarity of a professional
career profile. It uses green as an employer-adjacent accent while remaining personal, unofficial,
and separate from the TD design system.

The memorable element is the portrait-led current-role card. It puts the person first, then connects
the role to the broader career context without technical-diagram decoration.

## Colour system

The palette is based on soft neutral surfaces, deep green, and a brighter green accent. The result is
professional and familiar without reproducing official employer assets.

| Token        | Light     | Dark      | Use                        |
| ------------ | --------- | --------- | -------------------------- |
| Canvas       | `#f5f7f3` | `#101612` | Page background            |
| Deep canvas  | `#e9efe8` | `#151e18` | Section contrast           |
| Surface      | `#fbfcfa` | `#17221b` | Grouped content            |
| Primary text | `#1d2924` | `#eff7f1` | Headings and body          |
| Signal       | `#087f3f` | `#72d18d` | Employer and action accent |
| Deep green   | `#0d4929` | `#0b3d23` | Contact surface            |

Status is always paired with text or position. Colour is never the only signal.

## Typography

- A system-native variable sans-serif stack keeps the primary voice crisp with no font download.
- A system-native monospace stack is limited to dates, small indices, and compact metadata.
- Display type uses tight tracking and fluid `clamp()` sizing.
- Body copy targets a readable 55 to 75 character line length.

## Spacing and grid

- Main content width: `1280px`
- Page gutters: fluid from `16px` to `56px`
- Section spacing: fluid from `88px` to `160px`
- Major compositions use asymmetric grids. Mobile layouts return to a single readable column.

## Borders, radii, and shadow

- Fine one-pixel borders define connections and reading order.
- Radius tokens are `8px`, `14px`, and `20px`.
- Large panels use restrained rounded corners and spacious white surfaces.
- Raised shadows are soft and reserved for portrait and current-role emphasis.

## Motion

- Hero and portrait content render immediately.
- Impact metrics count up once when they enter the viewport.
- Buttons and links respond between `180ms` and `220ms`.
- There is no scroll hijacking, parallax, cursor replacement, or continuous glow.
- Reduced-motion mode shows final metric values immediately and shortens transitions to near zero.

## Breakpoints

| Breakpoint | Behaviour                                            |
| ---------- | ---------------------------------------------------- |
| `1120px`   | Compact navigation and stacked hero                  |
| `820px`    | Single-column section intros and simplified matrices |
| `560px`    | Vertical content flow and full-width actions         |
| `320px`    | Minimum supported viewport                           |

## Component types

- Current-role card: portrait and concise role focus without decorative employer branding
- Career path: connected vertical sequence with one current node
- Experience employer marker: the supplied `public/logo.png` TD asset
- Delivery approach: six practical stages with quiet visual connectors
- Capability matrix: labelled rows with non-numeric confidence groups
- Impact field: verified metrics with explanatory context
- Contact panel: topics, direct links, and résumé state

## Buttons and navigation

- Primary actions use the green signal colour.
- Quiet actions retain a visible border and focus state.
- Navigation has an active text underline and a page progress line.
- The navigation identity uses Neil's headshot rather than an initials tile.
- The mobile menu is conditionally rendered so hidden links cannot receive focus.
- All interactive targets are at least 42 pixels in one dimension.

## Accessibility decisions

- The page uses semantic landmarks, headings, lists, definition lists, and articles.
- A skip link is the first focusable element.
- The current-role portrait has descriptive alternative text and a text caption.
- Career and impact values exist in static HTML.
- Focus rings use a three-pixel high-contrast outline.
- Core content does not rely on JavaScript or motion.
- The reviewed current résumé is linked from the hero and contact panel.
- The former contact form was removed because it reported success without sending a message.

## Decorative and meaningful elements

Subtle gradients and dividing lines are decorative. The headshot, role titles, employer context,
career sequence, delivery stages, metrics, status, and contact information are meaningful and remain
available as semantic text.
