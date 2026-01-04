# Frontend Agent Instructions — Warm Craftsman Premium (Light Mode Only)

These instructions define the **frontend brand system**, **UI rules**, and **accessibility requirements** for this project.

## Brand intent and constraints (non‑negotiables)

- **Light-mode only.** Do not implement dark mode, theme toggles, or `.dark` token sets.
- Brand vibe: **warm craftsman + boutique home**, but **premium** (not rustic), and still signals “we can handle hard jobs.”
- Primary business perception goal:
  - **Lead with remodeling + additions**.
  - **Restoration is secondary** and should not dominate visuals or homepage hierarchy.
- Primary CTA:
  - **“CALL NOW” is the primary CTA everywhere**.
  - It should be the **only** filled/high-attention button sitewide.

## Color system (use these roles, not random colors)

### Palette roles

| Role           | Name        | Hex     | Use it for                                                      |
| -------------- | ----------- | ------- | --------------------------------------------------------------- |
| Brand Anchor   | Evergreen   | #06392F | Nav, footer, section headers, badges, strong “quality” moments  |
| Background     | Bone        | #FAF7F2 | Whole-page background (warm white)                              |
| Surface        | Clean White | #FFFFFF | Cards, forms, gallery tiles                                     |
| Primary CTA    | Copper      | #B1593B | **CALL NOW** button, phone highlights, key links                |
| Premium Accent | Aged Brass  | #8A6A2E | Subtle premium cues: icons, dividers, “Licensed/Bonded/Insured” |
| Section Alt    | Warm Stone  | #E7E1D9 | Alternating sections for rhythm and separation                  |
| Soft Accent    | Sage Mist   | #E6F0ED | Testimonials band, “process” section backgrounds                |
| Body Text      | Charcoal    | #1B1B1B | Primary text                                                    |
| Secondary Text | Slate       | #334155 | Meta text, labels, helper copy                                  |
| Borders/Inputs | Driftwood   | #8F877D | Input borders, subtle separators (still visible)                |

### Restoration visual isolation (important)

Use a separate restoration-only highlight that **must not** appear on remodeling/additions pages:

- **Restoration Amber:** `#A35F10`
  - Allowed only for: restoration service chips, emergency callouts, restoration page hero accents.
  - Do not use on the homepage primary hero, remodeling/additions service cards, or global nav.

## CTA rules (CALL NOW)

- **Copper (#B1593B) is the only filled button.**
- All other buttons must be:
  - Outline (Evergreen border + text), or
  - Text buttons (Evergreen text).
- Ensure the “CALL NOW” CTA uses:
  - `tel:` link on web
  - prominent placement in header
  - large tap target on mobile
- Avoid competing CTAs near CALL NOW (no second filled button, no loud contrasting accent).

## Layout + section theming

- Default page background: **Bone**.
- Use **Warm Stone** as the alternating section background for rhythm.
- Use **Sage Mist** for softer “supporting” bands (testimonials, process steps, FAQs).
- Cards/forms should sit on **Clean White** surfaces.
- Evergreen should anchor structural elements: **header/nav/footer** and strong headings.

## Accessibility + legibility (must pass)

Audience skews older → prioritize readability and clarity.

- Contrast:
  - Meet or exceed **WCAG AA** contrast for text and UI components.
  - Avoid trendy low-contrast gray-on-light-gray for body copy or navigation.
- Typography:
  - Prefer comfortable base text sizing (avoid tiny helper text).
  - Maintain clear hierarchy (H1/H2/H3) and generous line-height.
- Interactive elements:
  - Visible focus states (use the theme ring color).
  - Buttons/links must look clickable (don’t rely on color alone).
- Text over images:
  - If placing text over photos, ensure an overlay/gradient so text remains readable.

## shadcn/ui theming (tokens are the source of truth)

If using shadcn/ui + Tailwind, theme via **CSS variables** and semantic tokens.

- Define tokens in `globals.css` under `:root`.
- Do **not** create a `.dark` theme.
- Use semantic token classes (`bg-background`, `text-foreground`, `bg-primary`, etc.) rather than hardcoding hex values in component markup.

### Theme tokens (Option A: Warm Craftsman Premium)

```css
:root {
  --background: 38 44% 96%; /* #FAF7F2 */
  --foreground: 0 0% 11%; /* #1B1B1B */

  --card: 0 0% 100%; /* #FFFFFF */
  --card-foreground: 0 0% 11%;

  /* PRIMARY = your main CTA (Call Now) */
  --primary: 15 50% 46%; /* #B1593B */
  --primary-foreground: 0 0% 100%;

  /* Secondary surfaces */
  --secondary: 34 23% 88%; /* #E7E1D9 */
  --secondary-foreground: 168 81% 12%; /* #06392F */

  --muted: 162 25% 92%; /* #E6F0ED */
  --muted-foreground: 215 25% 27%; /* #334155-ish */

  --accent: 162 25% 92%; /* #E6F0ED */
  --accent-foreground: 168 81% 12%; /* #06392F */

  --border: 33 7% 53%; /* #8F877D */
  --input: 33 7% 53%;
  --ring: 168 81% 12%; /* #06392F */

  /* brand extras */
  --brand-evergreen: 168 81% 12%; /* #06392F */
  --brand-brass: 39 50% 36%; /* #8A6A2E */
  --brand-restoration: 32 82% 35%; /* #A35F10 (use sparingly) */
}
```

## Component styling guardrails

### Buttons

- **Primary button** (filled): only for CALL NOW
  - background: primary (Copper)
  - text: primary-foreground (white)

- **Secondary button** (outline):
  - border/text: Evergreen (or `secondary-foreground`)
  - background: transparent

- **Tertiary**:
  - text button (Evergreen) only

### Links

- Standard links: Evergreen or Copper based on importance
- Phone numbers / “Call” inline links: Copper, but do not style everything as Copper (keep it special)

### Forms / Inputs

- Input borders: Driftwood (`--input`)
- Focus ring: Evergreen (`--ring`)
- Error states: keep readable and high-contrast (do not use pale reds)

### Icons / dividers / micro-accents

- Use **Aged Brass** sparingly for premium cues (don’t turn the UI gold).

## Content + messaging (frontend hierarchy rules)

When structuring UI (hero, service cards, navigation labels):

- Prioritize “Remodeling”, “Additions”, “Renovations” first.
- Keep “Restoration” present but **secondary** in:
  - visual weight
  - color emphasis
  - placement (below primary services on the homepage)
