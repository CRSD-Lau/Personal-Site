# Career Portfolio Design System

Author: Neil Mitchell
Last modified by: Neil Mitchell

## Creative concept

The v3.0.0 portfolio presents Neil's career as a progression through TD Insurance and into applied
AI/ML delivery. A large delivery statement and Neil's real portrait introduce the person behind
the work. Thin connection paths frame the portrait; subsequent sections alternate narrative,
career chronology, independent projects, and a direct contact invitation.

The result remains a career portfolio. Current responsibilities, dates, measured outcomes, and
project evidence establish the professional context. The forest palette is personal and unofficial,
separate from the TD design system. See [DESIGN.md](../DESIGN.md) for the visual direction.

## Colour system

Warm near-white surfaces and forest ink form the light theme. Forest charcoal and pale text form
the dark theme. The refreshed semantic values are defined in `app/redesign.css`, which overrides
the original foundation tokens in `app/globals.css`.

| Token                 | Light                    | Dark                     | Use                 |
| --------------------- | ------------------------ | ------------------------ | ------------------- |
| `--color-canvas`      | `oklch(96.8% 0.008 115)` | `oklch(20.5% 0.017 170)` | Page background     |
| `--color-canvas-deep` | `oklch(93% 0.012 150)`   | `oklch(23% 0.02 170)`    | Section contrast    |
| `--color-surface`     | `oklch(98% 0.005 130)`   | `oklch(24.5% 0.02 170)`  | Grouped content     |
| `--color-ink`         | `oklch(24% 0.021 170)`   | `oklch(96% 0.012 135)`   | Headings and body   |
| `--color-signal`      | `oklch(39% 0.072 165)`   | `oklch(86% 0.105 132)`   | Action and emphasis |
| `--color-focus`       | `oklch(45% 0.1 165)`     | `oklch(86% 0.105 132)`   | Keyboard focus      |

The hero and contact use fixed tokens in both screen themes: `--hero-canvas: #111e1a`,
`--hero-ink: #f1f6eb`, `--hero-muted: #b7c6bd`, and `--hero-accent: #c8ed9a`.
Print styles provide a separate light palette.

Status is always paired with text or position. Colour is never the only signal.

## Typography

- Manrope variable, weights 400–800, is hosted locally as a roughly 25 KB Latin WOFF2.
- `app/layout.tsx` preloads the font; `@font-face` uses `font-display: swap`. Segoe UI and the
  generic sans-serif family provide fallbacks without an external font-service dependency.
- Primary, display, and metadata font tokens all use Manrope. The retained `--font-mono` token
  names a metadata role; its refreshed value is not a monospace family.
- The original SIL Open Font License is retained in `public/fonts/OFL-Manrope.txt`.
- Display type uses tight tracking and fluid `clamp()` sizing.
- Body copy has generous line height and bounded reading widths that vary by composition.

## Spacing and grid

- Main content width: `1280px`
- Page gutters: `clamp(1.25rem, 4.5vw, 5rem)`
- Section spacing: `clamp(4.5rem, 7.5vw, 7.5rem)`
- Major compositions use asymmetric grids. Mobile layouts return to a single readable column.
- The current role receives a larger panel; previous roles retain their dates and complete summaries
  in native disclosure controls. Works follows Experience on the homepage.

## Borders, radii, and shadow

- Fine one-pixel borders define connections and reading order.
- Shared radius tokens are `8px`, `14px`, and `24px`; specific controls and mobile panels use
  component-level values where needed.
- Large panels use restrained rounded corners and spacious theme-aware surfaces.
- Primary and contact actions use pill shapes; project case-study buttons use a smaller radius.
- Shadows and the portrait's soft background accent are restrained.

## Motion

- Hero and portrait content render immediately.
- Finite CSS entrance motion moves the hero copy and portrait into place and draws one connection
  path. The composition does not depend on opacity reveals or an animation framework.
- Impact metrics count up once when they enter the viewport.
- Buttons and links use brief interaction feedback, generally around `180ms` to `220ms`.
- There is no scroll hijacking, parallax, cursor replacement, or continuous glow.
- Reduced-motion mode shows the completed hero composition and final metric values immediately,
  while disabling or shortening nonessential transitions.

## Breakpoints

| Breakpoint | Behaviour                                                         |
| ---------- | ----------------------------------------------------------------- |
| `1120px`   | Compact desktop navigation and hero proportions                   |
| `1050px`   | Project feature changes to a stacked artwork/body composition     |
| `820px`    | Works and case-study introductions become single-column           |
| `800px`    | Career context and history adapt to narrower layouts              |
| `760px`    | Mobile navigation, stacked hero, and single-column section intros |
| `600px`    | Project card body stacks and case-study links use two columns     |
| `560px`    | Delivery stages become vertical and expertise lists stack         |
| `320px`    | Minimum verified viewport                                         |

These are the principal layout changes. The CSS also includes intermediate refinements for
portrait proportions, typography, and narrow controls. See [the review record](website-review.md)
for the browser matrix and its limits.

## Component types

- Hero: real portrait, delivery statement, finite connection-path decoration, and primary career action
- Current-role card: featured date/context column beside full responsibilities and capabilities
- Career history: native disclosures with dates, titles, and complete summaries visible when closed
- Experience employer marker: the supplied `public/logo.png` TD asset
- Delivery approach: six practical stages with quiet visual connectors
- Expertise board: labelled capability rows with non-numeric experience groups
- Impact field: verified metrics with explanatory context
- Project card: large reviewed preview, dated evidence, technologies, and a case-study action
- Evidence visuals: original release-flow and growth graphics with complete semantic text
- Governance panel: deep-green attribution and responsible-use surface with clearly separated
  repository actions
- Contact panel: direct email, LinkedIn, copy-email, and résumé actions

## Buttons and navigation

- The hero's primary action uses pale lime; shared action colours follow their theme and surface.
- Quiet actions retain a visible border and focus state.
- Button and pill links have no arrows. Simple horizontal arrows may accompany text links.
- Decorative arrows, the hero scroll prompt, and the standalone About signature are omitted.
- Navigation has an active text underline and a page progress line.
- The navigation wordmark uses Neil's name. The portrait is part of the hero.
- Primary destinations are About, Experience, Works, and Contact. Mobile navigation and the footer
  retain the complete section list, and the header links to the résumé.
- The mobile menu is conditionally rendered so hidden links cannot receive focus.
- Project and collection links use native document navigation for portable static routes.
- Primary controls and navigation links use touch-sized targets; text links retain visible focus.

## Accessibility decisions

- The page uses semantic landmarks, headings, lists, definition lists, and articles.
- A skip link is the first focusable element.
- The hero portrait has descriptive alternative text and a text caption.
- Career and impact values exist in static HTML.
- Shared focus rings use a two-pixel high-contrast outline with a six-pixel offset.
- Core content does not rely on JavaScript or motion.
- Native career disclosures work without JavaScript, and section navigation has a no-JavaScript
  fallback. Theme switching still works when browser storage is unavailable.
- Project metrics use definition-list semantics, and evidence graphics retain text equivalents.
- Action and chart foreground colours follow their surfaces to retain contrast in both themes.
- The reviewed current résumé is linked from the header, hero, and contact panel.
- Print styles switch to light surfaces, hide navigation and action controls, and expose historical
  career responsibilities. Chromium print behaviour is covered by the review evidence.
- The former contact form was removed because it reported success without sending a message.

## Decorative and meaningful elements

Subtle gradients and dividing lines are decorative. The headshot, role titles, employer context,
career sequence, delivery stages, metrics, status, and contact information are meaningful and remain
available as semantic text.

## CSS ownership

`app/layout.tsx` loads the layers in this order:

1. `app/globals.css`: normalization, shared primitives, and existing case-study foundations.
2. `app/redesign.css`: refreshed tokens, local font, navigation, hero, About, Impact, Contact, footer,
   and accessibility states.
3. `app/career.css`: career chronology, approach, and expertise.
4. `app/works-refresh.css`: project feature, Works index, and case-study presentation.

Update the owning layer when changing a component. Earlier foundation values are not the final
computed design where the refreshed layers override them.
