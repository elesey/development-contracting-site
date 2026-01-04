# Homepage Rebuild — Progress Tracker

**Source Spec:** `HOMEPAGE-SPEC.md`
**Started:** 2026-01-03
**Status:** 🚧 In Progress

---

## Current Phase

> **Phase 1: Foundation Setup**
> Setting up base layout, global styles, and data layer

---

## Progress Overview

| Phase                    | Status     | Progress |
| ------------------------ | ---------- | -------- |
| 1. Foundation Setup      | 🔄 Current | 0/6      |
| 2. Global Components     | ⏳ Pending | 0/4      |
| 3. Hero Section          | ⏳ Pending | 0/5      |
| 4. Brand Marquee         | ⏳ Pending | 0/3      |
| 5. Services Showcase     | ⏳ Pending | 0/5      |
| 6. Awards & Certificates | ⏳ Pending | 0/3      |
| 7. Testimonials + Stats  | ⏳ Pending | 0/4      |
| 8. Final CTA Band        | ⏳ Pending | 0/3      |
| 9. Footer                | ⏳ Pending | 0/3      |
| 10. SEO & Metadata       | ⏳ Pending | 0/5      |
| 11. Accessibility & QA   | ⏳ Pending | 0/6      |

---

## Phase 1: Foundation Setup

### Tasks

- [ ] **1.1** Create new homepage layout (`LayoutHomepage.astro`) with light-mode only CSS variables
- [ ] **1.2** Set up color tokens per spec (Bone, Evergreen, Copper, Clean White, Aged Brass, Warm Stone, Sage Mist)
- [ ] **1.3** Configure typography system (16-18px base, generous line-height, clear heading hierarchy)
- [ ] **1.4** Set up grid system (max-width 1200-1280px, gutters 24px mobile / 32px desktop)
- [ ] **1.5** Update `src/data/site.ts` with all business info (phone, CCB, BBB, service area)
- [ ] **1.6** Create `src/data/home.ts` with homepage content (services, testimonials, stats, awards)

### Notes

- Phone: (503) 470-7007
- CCB #221238
- BBB Accredited Since: 12/19/2025, A+ Rating
- Service Area: Oregon + Washington

---

## Phase 2: Global Components

### Tasks

- [ ] **2.1** Build Sticky Header component with utility bar
  - [ ] Desktop: Logo | Nav links | CALL NOW button + phone
  - [ ] Mobile: Sheet menu with phone first
  - [ ] Utility bar: "Serving Oregon + Washington" + licensing
- [ ] **2.2** Configure shadcn Button variants (only CALL NOW is filled/Copper)
- [ ] **2.3** Add "Skip to content" link for accessibility
- [ ] **2.4** Build Footer component with NAP info, CCB, nav links, social

### Nav Link Priority Order

1. Remodeling (primary)
2. Additions (primary)
3. Residential (optional umbrella)
4. Commercial
5. Restoration (secondary styling)
6. About
7. Contact

---

## Phase 3: Hero Section

### Tasks

- [ ] **3.1** Create Hero section component in `src/sections/home/`
- [ ] **3.2** Implement two-column layout (text left, image right on desktop; stacked mobile)
- [ ] **3.3** Add content: eyebrow, H1 (only H1 on page), subhead
- [ ] **3.4** Add CTAs: CALL NOW (filled Copper) + Browse Services (outline)
- [ ] **3.5** Add trust badges (BBB, CCB, Licensed OR+WA, Lead-safe EPA RRP)

### Content Requirements

- Eyebrow: location/service area
- H1: Must include Remodeling + Additions + location intent
- Subhead: 1-2 lines benefit + craftsmanship

---

## Phase 4: Brand Marquee ("Trusted by")

### Tasks

- [ ] **4.1** Implement Aceternity Infinite Moving Cards as logo marquee
- [ ] **4.2** Each logo must be `<a>` linking to internal page (crawlable)
- [ ] **4.3** Add reduced motion fallback (static logo grid)

### Design Specs

- Background: Warm Stone
- Logos: grayscale default, optional color on hover
- Each logo needs accessible name (alt or visually hidden)

---

## Phase 5: Services Showcase

### Tasks

- [ ] **5.1** Create Services section with shadcn Tabs (Remodeling | Additions | Restoration)
- [ ] **5.2** Implement Remodeling tab with Aceternity Bento Grid
  - Kitchen Remodel
  - Bathroom Remodel
  - Whole Home Renovation
  - Interior Renovation
  - Exterior Renovation
- [ ] **5.3** Implement Additions tab
  - Home Additions Overview
  - In Law Addition
  - Room Addition
- [ ] **5.4** Implement Restoration tab (secondary styling, smaller cards)
  - Water Damage
  - Fire Damage
  - Exterior Damage
  - General Restoration
- [ ] **5.5** Ensure all cards have: H3 title, description, "Learn more" link

### Semantic Requirements

- Section: `<section aria-labelledby="services">`
- H2: "Remodeling & Home Additions"
- H3s: Each service card title

---

## Phase 6: Awards & Certificates

### Tasks

- [ ] **6.1** Create Awards/Certificates section with shadcn Cards + Badges
- [ ] **6.2** Add verification links for each credential
- [ ] **6.3** Style as "official" grid (4-6 cards)

### Must Include

- BBB Accredited, A+ Rating (link to BBB profile)
- CCB #221238 (verify link)
- Licensed in OR + WA
- Lead-safe certified (EPA RRP)
- Insured

---

## Phase 7: Testimonials + Proof Stats

### Tasks

- [ ] **7.1** Implement Aceternity Animated Testimonials component
- [ ] **7.2** Add reduced motion fallback (static stacked list)
- [ ] **7.3** Create proof stats display (large numerals, small labels)
- [ ] **7.4** Add "Read more reviews" link (outline/text only)

### Proof Stats

- 200+ Loyal Clients
- 10+ Years of Experience
- 230+ Total Projects
- 100k+ Client Savings

### Design Specs

- Background: Sage Mist
- Motion: slow, reduced motion fallback required

---

## Phase 8: Final CTA Band

### Tasks

- [ ] **8.1** Create CTA band section (Evergreen background)
- [ ] **8.2** Left side: summary + service area
- [ ] **8.3** Right side: CALL NOW (Copper filled) + visible phone number

### Optional

- [ ] Contact form (white card, submit button NOT filled Copper)
- [ ] Privacy policy link

---

## Phase 9: Footer

### Tasks

- [ ] **9.1** Phone + email (info@developmentcontracting.com)
- [ ] **9.2** CCB #221238 + all nav links
- [ ] **9.3** Social links (Facebook, Instagram)

---

## Phase 10: SEO & Metadata

### Tasks

- [ ] **10.1** Set unique `<title>`: "Remodeling & Home Additions | Development Contracting | Oregon & Washington"
- [ ] **10.2** Add meta description (unique, helpful summary)
- [ ] **10.3** Configure canonical URL + Astro `site` config
- [ ] **10.4** Add Open Graph + Twitter card tags
- [ ] **10.5** Add LocalBusiness/GeneralContractor JSON-LD schema

### Schema Must Include

- name
- phone
- service area
- licensing (if displayed)

---

## Phase 11: Accessibility & QA

### Tasks

- [ ] **11.1** WCAG AA contrast check for all text and interactive elements
- [ ] **11.2** Visible keyboard focus states on all interactive elements
- [ ] **11.3** Test reduced motion for all Aceternity components
- [ ] **11.4** Verify text over images has overlay/gradient for readability
- [ ] **11.5** Run Lighthouse audit (Performance, Accessibility, SEO)
- [ ] **11.6** Test mobile responsiveness

---

## Acceptance Checklist (Final)

### Design/Brand

- [ ] Light-mode only; no dark tokens
- [ ] Only filled button is CALL NOW (Copper)
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

## Session Log

### 2026-01-03

- Created progress tracker file
- Ready to begin Phase 1: Foundation Setup

---

## Quick Reference

**Phone:** (503) 470-7007
**Email:** info@developmentcontracting.com
**CCB:** #221238
**BBB:** A+ Rating, Accredited Since 12/19/2025
**Service Area:** Oregon + Washington

### Color Palette

- **Bone:** Background
- **Evergreen:** Header/Footer anchors
- **Copper:** CALL NOW CTA only
- **Clean White:** Card surfaces
- **Aged Brass:** Premium accents (icons/dividers/badges)
- **Warm Stone:** Brand marquee background
- **Sage Mist:** Testimonials background

### CTA Rules

- ✅ CALL NOW = Filled Copper (only filled button)
- ✅ All other CTAs = Outline or Text only
