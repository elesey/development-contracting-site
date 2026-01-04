# Homepage Spec — Development Contracting (Rebuild)

**Page:** Home (`/`)
**Stack:** Astro (static-first) + shadcn/ui (structure) + Aceternity UI (tasteful motion accents)
**Mode:** Light-mode only (no theme toggle)
**Primary Goal:** High-intent leads → **CALL NOW** (single dominant CTA)
**Last updated:** 2026-01-04

---

## 1) Purpose and success criteria

### What this homepage must achieve

1. **Instant clarity:** "We do remodeling + additions (primary), restoration (secondary), and commercial (available)."
2. **High trust in 5 seconds:** Licensing + accreditation + proof numbers + real reviews visible above the fold.
3. **One obvious action:** **CALL NOW** (Copper), always easy to find; no competing filled CTA.

### Conversion KPI targets (implementation-ready)

- Primary: clicks on `tel:(503)470-7007`
- Secondary: "Browse Services" / "Contact / Estimate" page clicks
- Supporting: scroll depth (reaches Services + Testimonials)

**Phone to use everywhere:** **(503) 470-7007**

---

## 2) Non-negotiable brand and UI rules (from your agent doc)

### Theme + vibe

- Light-mode only.
- "Warm craftsman + boutique home," but premium and capable.
- Remodeling + additions dominate visuals and homepage hierarchy.

### CTA rules

- **Only filled/high-attention button on the entire page:** **CALL NOW** (Copper).
- All other CTAs must be **outline** or **text**.

### Restoration isolation

- Restoration is present but visually secondary.
- Do not use restoration-specific highlight color on primary homepage sections.

---

## 3) Tooling strategy (tasteful usage)

### Astro (foundation)

- Render the majority of the page as fast static HTML.
- Use **islands** only for interactive pieces (marquee, service hover effects, testimonials). Astro's islands architecture is specifically designed for mostly static pages with small interactive "islands," reducing monolithic JS payloads.
- Use Astro layouts for a consistent page shell (header/footer shared across pages).
- Configure Astro `site` properly so canonical URLs and sitemaps can be generated correctly.

### shadcn/ui (structure + consistency)

- Use shadcn for: header/nav, buttons, cards, tabs, badges, forms, sheet menu, accordions.
- Theme via **CSS variables** and semantic token classes (recommended by shadcn theming docs).
- Button variants exist (`default`, `outline`, `ghost`, etc.)—we will map **CALL NOW** to the only "default/filled" usage.

### Aceternity UI (moments of delight, not everywhere)

Use Aceternity only where it improves clarity/trust without gimmicks:

- **Brand marquee**: Infinite Moving Cards
- **Service showcase**: Bento Grid (or hover feature layout)
- **Testimonials**: Animated Testimonials

Motion requirements:

- Must respect `prefers-reduced-motion` (fallback to static grid/stack).

---

## 4) Information architecture and page flow

### Section order (final)

1. Sticky Header
2. Hero (H1 + primary CTA + immediate trust)
3. "Trusted by" scrolling brand marquee (links to internal pages)
4. Services showcase (Remodeling + Additions primary, Restoration secondary)
5. Awards & Certificates (BBB + licensing + insured + lead-safe)
6. Testimonials (real quotes) + proof stats
7. Final CTA band (Call + optional secondary form)
8. Footer (NAP-style business info, license, navigation)

---

## 5) SEO and semantic requirements (homepage)

These rules are "must pass" before launch.

### Titles, headings, and snippet control

- **One clear H1** (hero), visually the most prominent text on the page. Google recommends making the main title distinctive and avoiding multiple large/prominent headings that compete.
- Use **keywords in prominent locations** (title + main heading + descriptive link text + alt text).
- Meta description: write a unique, descriptive summary; Google may use page content and sometimes the meta description if it better describes the page.
- Page `<title>` should be unique, clear, and reflect the page purpose (Google SEO starter guidance).

### Crawlable, internal linking

- All marquee logos and service cards must be real `<a>` links (crawlable).

### Structured data

- Include LocalBusiness/GeneralContractor schema (JSON-LD), but **only for information visible on the page** (Google structured data guidance).

### JavaScript SEO

- Don't rely on client-side JS to set critical metadata after load (titles/descriptions should be server-rendered).

---

## 6) Global layout system (design + spacing)

### Grid and width

- Max content width: 1200–1280px
- Gutters: 24px mobile, 32px tablet/desktop
- Section vertical padding: 56–72px mobile, 80–104px desktop

### Typography (readability-first)

- Base body: 16–18px (older audience)
- Line-height: generous (1.5–1.7)
- Headings: clear hierarchy (H1 > H2 > H3)

### Color usage

- Background: Bone
- Header/Footer anchors: Evergreen
- Surfaces: Clean White cards
- CTA: Copper only for CALL NOW
- Premium accents: Aged Brass sparingly (icons/dividers/badges)

---

## 7) Section-by-section specifications

### 7.1 Sticky Header (global)

**Purpose:** Navigation + instant call conversion + trust microcopy.

**Structure (semantic)**

- `<header>` containing:
  - Utility bar (optional but recommended)
  - `<nav aria-label="Primary">`

**Desktop layout**

- Left: Logo
- Center: nav links (priority order):
  1. Remodeling (primary)
  2. Additions (primary)
  3. Residential (optional umbrella)
  4. Commercial
  5. Restoration (secondary styling)
  6. About
  7. Contact

- Right: **CALL NOW** filled button (Copper) + visible phone number

**Utility bar content (small text)**

- "Serving Oregon + Washington" (current site language)
- "Licensed • Bonded • Insured • CCB #221238" (CCB appears on site footer; licensing details in About/BBB)

**Mobile**

- Collapsed menu using shadcn "Sheet"
- Top of the sheet: phone number + CALL NOW button first

**Accessibility**

- Visible focus states
- Tap targets ≥ 44px
- Include "Skip to content" link

---

### 7.2 Hero (above the fold)

**Purpose:** Make the offer unmistakable + deliver trust + drive the call.

**Semantic requirements**

- Hero lives inside `<main>`.
- The hero headline is the **only H1**.

**Layout**

- Two-column (desktop), stacked (mobile)
- Left: text + CTAs + trust badges
- Right: one premium project photo (kitchen or addition preferred)

**Content requirements**

- Eyebrow: location/service area (placeholder copy) aligned with "Serving Oregon and Washington."
- H1 must include: **Remodeling + Additions + location intent** (copy can be refined later)
- Subhead: 1–2 lines (benefit + craftsmanship)
- CTAs:
  - Primary filled: **CALL NOW**
  - Secondary outline: "Browse Services" (or similar)

**Trust badges (directly under CTAs)**
Use 3–4 small badges (Evergreen text, Brass icons):

- "BBB Accredited • A+ Rated" + link to BBB profile
- "CCB #221238" + verify link
- "Licensed in OR + WA"
- "Lead-safe certified (EPA RRP)"

**Aceternity usage (tasteful)**

- Optional: a subtle headline highlight treatment (only 1–2 words). Keep motion minimal and readable.

---

### 7.3 "Trusted by" scrolling brand marquee (immediately below hero)

**Purpose:** Build credibility fast + create internal link pathways.

**Component**

- Aceternity **Infinite Moving Cards** configured as a slow marquee of logo cards.

**Design**

- Background band: Warm Stone
- Row of logo "chips" in white mini-cards (consistent height)
- Logos grayscale by default; optional hover reveals color

**Linking requirements**

- Each logo is an `<a>` to a relevant internal page (e.g., Projects, Commercial, Remodeling category).
- Include accessible name per logo (alt or visually hidden brand name).

**Reduced motion**

- If reduced motion: show a static responsive logo grid (same links).

---

### 7.4 Services showcase (primary: Remodeling + Additions)

**Purpose:** Rank for high-intent services while keeping the UI premium and scannable.

**Semantic structure**

- `<section aria-labelledby="services">`
- H2: "Remodeling & Home Additions" (or "in [region]" later)
- H3s: each service card title

**Interaction pattern**

- shadcn Tabs (clarity + accessibility) with three tabs:
  1. Remodeling (default)
  2. Additions
  3. Restoration (secondary style)

**Remodeling tab (cards)**
Use Aceternity **Bento Grid** for a premium "feature wall."
Seed services from current Residential page:

- Kitchen Remodel
- Bathroom Remodel
- Whole Home Renovation
- Interior Renovation
- Exterior Renovation

**Additions tab (cards + "types" strip)**
Seed services from current Residential page:

- In Law Addition
- Room Addition
  Also include a top "Home Additions Overview" card (future page).

**Restoration tab (secondary treatment)**
Seed services from current Residential page:

- Water Damage
- Fire Damage
- Exterior Damage
- General Restoration
  Visual rule: smaller cards, less emphasis, no homepage hero dominance.

**Card requirements**
Each service card includes:

- H3 title (keyword-strong)
- 1–2 line description (placeholder OK)
- "Learn more" text link (Evergreen)
- Optional thumbnail (optimized)

---

### 7.5 Awards & Certificates (trust stack)

**Purpose:** Make verification easy and immediate.

**Must include (verified sources)**

- BBB: Accredited, A+ rating, "BBB Accredited Since: 12/19/2025"
- Licensed/bonded/insured with Oregon CCB #221238 (BBB licensing + site footer)
- Licensed in Oregon + Washington (About page)
- Lead-safe (EPA RRP) mention (BBB licensing)
- Insured (About page)

**Design**

- Clean "official" grid (4–6 cards)
- Each card includes: icon/seal, label, one-liner, and a verification link

**Component**

- shadcn Cards + small Badges
- Hover effects subtle only (premium, not flashy)

---

### 7.6 Testimonials + proof stats

**Purpose:** Social proof + legitimacy.

**Source reviews**
The current homepage already lists multiple Google review quotes with reviewer names (e.g., Lingyan Kong, Vincent Gold, etc.).

**Component**

- Aceternity **Animated Testimonials** as the primary display.
- Keep motion slow; reduced motion fallback is a static stacked list.

**Design**

- Background band: Sage Mist
- Title (H2): trust-oriented (can reuse the "Don't just take our word for it" section concept)
- Optional link: "Read more reviews" (outline/text link only)

**Proof stats (directly below testimonials)**
Pull the existing metrics shown on current homepage:

- 200+ Loyal Clients
- 10+ Years of Experience
- 230+ Total Projects
- 100k+ Client Savings

Style:

- Large numerals, small labels, evergreen/brass dividers

---

### 7.7 Final CTA band (the "close")

**Purpose:** Give the visitor a final, confident action.

**Design**

- Background: Evergreen
- Left: short summary + service area
- Right: **CALL NOW** (Copper filled) + phone number visible

**Optional secondary form (if included)**

- White card on evergreen background
- Submit button must NOT be filled Copper (outline/text only)
- Include privacy policy link (current site already references privacy policy in contact forms).

---

### 7.8 Footer

**Purpose:** SEO utility + trust + navigation.

**Must include**

- Phone number and email (email on contact page: [info@developmentcontracting.com](mailto:info@developmentcontracting.com))
- CCB #221238 (present in current footer)
- Links: Remodeling, Additions, Residential, Commercial, Restoration, About, Contact
- Social links (current site shows Facebook/Instagram)

---

## 8) Homepage metadata requirements (implementation checklist)

### Required head items

- Unique `<title>` following a pattern like:
  "Remodeling & Home Additions | Development Contracting | Oregon & Washington"
  (Final wording later; must be concise + descriptive.)
- Meta description: unique, helpful summary for the homepage.
- Canonical URL
- Open Graph + Twitter card tags (for share previews)
- Sitemap generation + canonical correctness via Astro `site` config
- Robots meta where appropriate (Google-supported meta tags guidance)

### Structured data

- LocalBusiness / GeneralContractor schema for:
  - name
  - phone
  - service area
  - licensing (if displayed)

- Must match visible content (no hidden markup).

---

## 9) Accessibility requirements (must pass)

- WCAG AA contrast for text and interactive elements
- Visible keyboard focus states
- No important info conveyed by color alone
- Motion:
  - Respect reduced motion
  - Avoid rapid autoplay/scroll effects

- Text over images:
  - Always apply overlay/gradient so text remains readable

---

## 10) Performance requirements (Astro-first)

- Default to server-rendered/static HTML.
- Interactive elements only as islands (marquee/testimonials/services hover).
- Keep motion libraries scoped only to the components that need them.

---

## 11) Content inventory (what we can safely use now)

- Phone: (503) 470-7007
- Service area: Oregon + Washington
- License: Oregon CCB #221238
- BBB: Accredited, A+ rating, Accredited Since 12/19/2025
- Residential services list (seed items): Kitchen/Bath/Whole Home/Interior/Exterior + Room & In-Law Additions + Restoration categories
- Testimonials (seed quotes + reviewer names): from homepage
- Proof stats: 200+ / 10+ / 230+ / 100k+

---

## 12) Acceptance checklist (definition of done)

### Design/brand

- [ ] Light-mode only; no dark tokens
- [ ] Only filled button is CALL NOW
- [ ] Restoration is visually secondary

### SEO

- [ ] One H1; no competing "headline-sized" elements
- [ ] Unique title + meta description
- [ ] Crawlable internal links (services + marquee)
- [ ] Structured data matches visible content

### Accessibility

- [ ] Keyboard navigable header + menu
- [ ] Reduced motion works (marquee/testimonials)
- [ ] Contrast checks pass

### Performance

- [ ] Only islands where needed (marquee/services/testimonials)
- [ ] Images optimized + dimensions set

---
