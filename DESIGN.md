# Portfolio visual system

Author: Neil Mitchell
Last modified by: Neil Mitchell

## Direction

A photographic career portfolio. The opening pairs a large, direct delivery statement
with Neil's real portrait and thin connection paths. The rest of the site alternates
quiet narrative sections, a structured career chronology, illustrated independent work,
and a strong closing invitation.

## Typography

Manrope variable, weights 400 to 800, locally hosted as a 25 KB Latin WOFF2.
The font's SIL Open Font License is retained in public/fonts/OFL-Manrope.txt.
Display headings use large fluid sizes and close tracking; body copy has generous line
height and a bounded reading width.

## Colour

Warm near-white canvas and forest ink in light mode. Forest charcoal and pale neutral
text in dark mode. The photographic hero and contact use a fixed dark forest canvas
with pale lime accents. Shared semantic colours are defined in app/redesign.css.

## Composition

1280 px maximum shell, fluid outer gutters, and deliberate mobile stacking.
The current role receives more space; previous roles use native disclosures.
Projects use large original artwork beside concise evidence and a case-study link.
Primary navigation contains About, Experience, Works, and Contact; the complete
section navigation remains in the footer and mobile menu.

Keep button and pill links free of arrows. Simple horizontal arrows may accompany
text links. Omit decorative arrows, the hero scroll prompt, and the standalone
signature beneath the About heading.

## Motion and access

Finite CSS entrance motion and a drawn connection path. No scroll interception,
perpetual motion, custom cursor, or animation framework. Reduced-motion preference
shows the completed composition. Server-rendered copy remains available without
JavaScript.

## CSS ownership

app/globals.css retains the shared foundation and existing case-study primitives.
app/redesign.css defines the refreshed palette, typography, navigation, hero, about,
impact, contact, and footer. app/career.css owns career, approach, and expertise.
app/works-refresh.css owns the project feature, works index, and case study.
