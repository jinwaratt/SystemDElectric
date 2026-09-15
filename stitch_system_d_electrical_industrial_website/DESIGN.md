---
name: Industrial ElectroTech
colors:
  surface: '#fcf9f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#3f493f'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#6f7a6e'
  outline-variant: '#becabc'
  surface-tint: '#176c36'
  primary: '#00602b'
  on-primary: '#ffffff'
  primary-container: '#1b7a3e'
  on-primary-container: '#abffb9'
  inverse-primary: '#87d896'
  secondary: '#934b00'
  on-secondary: '#ffffff'
  secondary-container: '#fe8e27'
  on-secondary-container: '#653200'
  tertiary: '#2e5b3d'
  on-tertiary: '#ffffff'
  tertiary-container: '#2f5c3e'
  on-tertiary-container: '#a1d3ac'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a2f5b0'
  primary-fixed-dim: '#87d896'
  on-primary-fixed: '#00210a'
  on-primary-fixed-variant: '#005224'
  secondary-fixed: '#ffdcc4'
  secondary-fixed-dim: '#ffb782'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#703800'
  tertiary-fixed: '#bcefc7'
  tertiary-fixed-dim: '#a1d2ac'
  on-tertiary-fixed: '#00210e'
  on-tertiary-fixed-variant: '#224f32'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e6e1e1'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
Industrial ElectroTech embodies industrial reliability, precision engineering, and technical compliance. The visual identity reflects rigorous standards (IEEE, EIT, วสท.) designed for heavy industry, enterprise facilities, and infrastructure contractors.

The aesthetic blends **Corporate / Modern** engineering structure with subtle **Technical Tactile** details (subtle dot grid patterns, metric badges, and high-legibility typographic hierarchy). Clean light surfaces create a trustworthy foundation, while deep forest green denotes power safety, and high-visibility industrial orange highlights critical electrical cues and calls to action.

## Colors
The palette is rooted in industrial electrical engineering:
- **Primary (`#00602b`) & Primary Container (`#1b7a3e`)**: Signifies stability, electrical earth/ground standards, verified safety, and certified authority.
- **Secondary Container (`#fe8e27`) & Secondary (`#934b00`)**: Derived from safety warning amber/orange, designating electrical caution, energetic action triggers, and active status indicators.
- **Tertiary Fixed (`#bcefc7`)**: Used for soft validation tags, engineer credentials, and low-contrast technical indicator backgrounds.
- **Neutrals**: Scaled from off-white (`#fcf9f8`) to slate carbon (`#1c1b1b`) to ensure high contrast and outdoor/industrial tablet legibility.

## Typography
Typographic precision is delivered through **Inter** across all roles. Tight negative tracking on headlines communicates industrial rigor and modern efficiency. Letter-spaced uppercase tags in `label-sm` and `label-md` mimic industrial equipment specification plates and engineering schematics.

## Layout & Spacing
- **Container**: Max width capped at `1280px` centered with responsive gutter padding (`px-gutter`).
- **Grid Strategy**: Multi-column responsive grid (12-column desktop grid for asymmetrical hero and KPI layouts; 6-column for workflow steps; 4-column for service matrices; 3-column for portfolios).
- **Rhythm**: Spacing follows a structured 4px/8px modular scale (`space-xs` = 4px, `space-sm` = 8px, `space-md` = 16px, `space-lg` = 24px, `space-xl` = 40px). Section blocks use consistent vertical padding (`py-space-xl`).

## Elevation & Depth
Elevation is maintained using subtle tonal contrasts paired with soft, low-spread ambient shadows:
- **Level 0 (Flat)**: Baseline background (`#fcf9f8`) or container backgrounds (`#f6f3f2`).
- **Level 1 (Cards & Inputs)**: Pure white (`#ffffff`) surfaces with `shadow-sm` (`0 1px 2px 0 rgba(0,0,0,0.05)`).
- **Level 2 (Hover & Interactive Cards)**: `shadow-md` paired with a `-translate-y-1` smooth micro-interaction.
- **Level 3 (Floats & Modals)**: Navbars and floating badges use translucent surfaces (`bg-surface/90` or `bg-surface/95`) combined with `backdrop-blur-xl` and `shadow-[0_1px_8px_rgba(0,0,0,0.04)]`.
- **Level 4 (Hero Media)**: High-impact media containers feature deep industrial drops (`shadow-2xl`).
- **Technical Overlays**: A subtle radial grid pattern (`radial-gradient(#1b7a3e 1px, transparent 1px)`) sized at 24px by 24px adds layered architectural depth behind hero sections.

## Shapes
A disciplined, soft radius style (`roundedness: 1`) reflects structural durability and equipment housing:
- **Base Components (Badges, small buttons, tags)**: `rounded` (0.25rem / 4px).
- **Inputs & Standard Action Buttons**: `rounded-lg` (0.5rem / 8px).
- **Cards, Service Blocks, and Dialogs**: `rounded-xl` (0.75rem / 12px) to `rounded-2xl` (1rem / 16px).
- **Pills**: Strictly reserved for live status indicators, pulse dots, or floating counters.

## Components

### Buttons
- **Primary Action**: Solid green (`bg-primary`), text white (`text-on-primary`), `rounded-lg`, `px-6 py-3.5`, `font-label-lg`. Hover transforms to darker tertiary green (`hover:bg-tertiary`) with active press scale (`active:scale-98`).
- **Secondary Action (Direct Alert / CTA)**: Solid industrial amber (`bg-secondary-container`), text white (`text-on-secondary`), `shadow-sm hover:shadow-md`.
- **Utility / Quick Action**: Compact header buttons use `bg-surface-container` with subtle icon pairing, padded at `px-3 py-2`.

### Cards & Service Tiles
- **Capabilities Card**: White base (`bg-surface`), `rounded-xl`, subtle padding (`p-5`), equipped with an 48x48px icon badge (`w-12 h-12 rounded-lg bg-tertiary-fixed text-primary`). On hover, tile shifts upward (`-translate-y-1`) and inverts icon background to primary solid.
- **Portfolio Showcase Card**: Two-part architecture: fixed aspect ratio image (`h-48`) with categorical pill overlaid top-right, followed by a padded content container (`p-5`) and a structured metadata footer separated by a borderless alignment bar.

### Badges & Technical Indicators
- **System Eyebrow Badge**: Low-profile badge using `bg-surface-container-high` or `bg-tertiary-fixed`, styled with `font-label-sm uppercase tracking-wider`, containing a pulsing indicator dot (`w-2 h-2 rounded-full bg-secondary-container animate-pulse`).

### Metric & Stat Displays
- Clean engineering KPI format: border-left accent (`border-l-2 border-secondary-container`) with `pl-3`, featuring large numbers in `font-headline-xl` and two-tier descriptions in `label-sm` and `body-sm`.

### Partner Brand Strips
- Monochromatic / minimal container tiles (`bg-surface`, `rounded-lg`, `p-3.5`) designed to frame partner and supplier marks with uniform structural presence.