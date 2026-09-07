# Design System

Author: Neil Mitchell
Last modified by: Neil Mitchell

The portfolio combines a photographic opening with an editorial career narrative.
Neil's portrait and a large delivery statement introduce the site, followed by a featured current
role, a concise career chronology, independent work, and a direct contact invitation.

## Foundations

- Warm near-white surfaces and forest ink in light mode; forest charcoal and pale text in dark mode.
- A fixed dark forest canvas and pale lime accents in the hero and contact section.
- Manrope variable, weights 400–800, hosted locally as a roughly 25 KB Latin WOFF2, with its
  SIL Open Font License retained in `public/fonts/OFL-Manrope.txt`.
- A 1280 px maximum content shell, fluid gutters and typography, and deliberate mobile stacking.
- A spacious current-role panel and native disclosures for previous-role responsibilities.
- Large reviewed project artwork, dated evidence, and semantic release-flow and growth visuals.
- Finite hero entrance and connection-path motion, interaction feedback, and impact count-up.

## Navigation and actions

Primary navigation contains About, Experience, Works, and Contact. The mobile menu and footer
retain all section destinations, and the header provides résumé access. On the homepage, Works
follows Experience. Project-page navigation returns to homepage anchors; case-study back links
open the Works index.

Keep button and pill links free of arrows. Simple horizontal arrows may accompany text links.
Omit decorative arrows, the hero scroll prompt, and the standalone signature beneath the About
heading. The wordmark uses Neil's name; the portrait belongs to the hero composition.

## Breakpoints

| Width  | Behaviour                                                         |
| ------ | ----------------------------------------------------------------- |
| 1120px | Compact desktop navigation and hero proportions                   |
| 1050px | Project feature changes to a stacked artwork/body composition     |
| 820px  | Works and case-study introductions become single-column           |
| 800px  | Career context and history adapt to narrower layouts              |
| 760px  | Mobile navigation, stacked hero, and single-column section intros |
| 600px  | Project card body stacks and case-study links use two columns     |
| 560px  | Delivery stages become vertical and expertise lists stack         |
| 320px  | Minimum verified viewport                                         |

## CSS ownership

- `app/globals.css`: shared foundations and existing case-study primitives.
- `app/redesign.css`: refreshed palette, typography, navigation, hero, About, Impact, Contact,
  footer, and accessibility states.
- `app/career.css`: career chronology, approach, and expertise.
- `app/works-refresh.css`: project feature, Works index, and case-study presentation.

## Accessibility and motion

Core career and project content remains in static HTML. Native career disclosures work without
JavaScript; section navigation has a no-JavaScript fallback. Metrics include static text
equivalents, and reduced-motion preference shows the completed hero composition and final values.
Visible focus, meaningful portrait alternative text, touch-sized controls, and colour-independent
labels are part of the shared system. No scroll interception, custom cursor, perpetual motion, or
animation framework is used.

## Brand boundary

Sharing cards carry the same portrait, Manrope, forest canvas, and pale lime accents as the hero.
The homepage and repository use “Complex work. Clear direction.”; the Works collection uses
“Ideas, made practical.”. Website cards are 1200 x 630 PNGs and the separate repository card is
1280 x 640, under 1 MB. Review their essential text and portrait at a narrow message-card width.
The README shows a rendered homepage screenshot instead of the cropped sharing artwork.

The site is personal and does not reproduce the TD design system. Official TD employer markers
appear only beside actual career roles.

Works pages preserve source attribution, dated evidence, licensing links, and responsible-use
context. Their governance panel uses deep green, and foreground colours follow the surface so
both themes retain readable contrast.

See the [visual direction](https://github.com/CRSD-Lau/Personal-Site/blob/main/DESIGN.md) and
[docs/design-system.md](https://github.com/CRSD-Lau/Personal-Site/blob/main/docs/design-system.md)
for tokens, spacing, accessibility, motion, and component guidance.
