# Homepage Rebuild — Progress Tracker

**Source Spec:** `HOMEPAGE-SPEC.md`
**Started:** 2026-01-03
**Status:** 🚧 In Progress

---

## Current Phase

> **Phase 3: Hero Section**
> Implementing hero section with image and CTAs

---

## Progress Overview

| Phase                    | Status     | Progress |
| ------------------------ | ---------- | -------- |
| 1. Foundation Setup      | ✅ Done    | 6/6      |
| 2. Global Components     | ✅ Done    | 4/4      |
| 3. Hero Section          | 🔄 Current | 3/5      |
| 4. Brand Marquee         | ⏳ Pending | 0/3      |
| 5. Services Showcase     | ⏳ Pending | 0/5      |
| 6. Awards & Certificates | ⏳ Pending | 0/3      |
| 7. Testimonials + Stats  | ⏳ Pending | 0/4      |
| 8. Final CTA Band        | ⏳ Pending | 0/3      |
| 9. Footer                | ✅ Done    | 3/3      |
| 10. SEO & Metadata       | ⏳ Pending | 0/5      |
| 11. Accessibility & QA   | ⏳ Pending | 0/6      |

---

## Phase 1: Foundation Setup ✅

### Tasks

- [x] **1.1** Create new homepage layout (`LayoutHomepage.astro`) with light-mode only CSS variables
- [x] **1.2** Set up color tokens per spec (Bone, Evergreen, Copper, Clean White, Aged Brass, Warm Stone, Sage Mist)
- [x] **1.3** Configure typography system (17px base, generous line-height, clear heading hierarchy)
- [x] **1.4** Set up grid system (max-width 1280px, gutters 24px mobile / 32px desktop)
- [x] **1.5** Update `src/data/site.ts` with all business info (phone, CCB, BBB, service area)
- [x] **1.6** Update `src/data/home.ts` with homepage content (services, testimonials, stats, awards)

### Files Created/Updated

- `src/styles/global-homepage.css` — Light-mode color tokens and typography
- `src/layouts/LayoutHomepage.astro` — Homepage layout with SEO and structured data
- `src/data/site.ts` — Company info, licensing, navigation, trust badges
- `src/data/home.ts` — Services, testimonials, stats, awards data
- `src/pages/index.astro` — Homepage preview with all sections
- `tailwind.config.cjs` — Added brand colors

### Notes

- Phone: (503) 470-7007
- CCB #221238
- BBB Accredited Since: 12/19/2025, A+ Rating
- Service Area: Oregon + Washington

---

## Phase 2: Global Components ✅

### Tasks

- [x] **2.1** Build Sticky Header component with utility bar
  - [x] Desktop: Logo | Nav links | CALL NOW button + phone
  - [x] Mobile: Sheet menu with phone first
  - [x] Utility bar: "Serving Oregon + Washington" + licensing
- [x] **2.2** Configure shadcn Button variants (only CALL NOW is filled/Copper)
- [x] **2.3** Add "Skip to content" link for accessibility
- [x] **2.4** Build Footer component with NAP info, CCB, nav links, social

### Files Created/Updated

- `src/components/StickyHeader.astro` — Sticky header with utility bar, nav, CALL NOW CTA
- `src/components/MobileNav.tsx` — Mobile sheet navigation with phone-first design
- `src/components/Footer.astro` — Footer with NAP, credentials, services, social links
- `src/components/ui/button.tsx` — Updated with proper Warm Craftsman variants
- `src/pages/index.astro` — Integrated StickyHeader and Footer components

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

- [x] **3.1** Create Hero section component in `src/sections/home/`
- [x] **3.2** Implement two-column layout (text left, image right on desktop; stacked mobile)
- [x] **3.3** Add content: eyebrow, H1 (only H1 on page), subhead
- [x] **3.4** Add CTAs: CALL NOW (filled Copper) + Browse Services (outline)
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

## Phase 9: Footer ✅

### Tasks

- [x] **9.1** Phone + email (info@developmentcontracting.com)
- [x] **9.2** CCB #221238 + all nav links
- [x] **9.3** Social links (Facebook, Instagram, Google Business)

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

### 2026-01-04

- ✅ **Redesigned Header with Glass Effect**
- Removed utility bar entirely (no Oregon & Washington / CCB bar at top)
- Implemented glass/frosted navbar with:
  - Semi-transparent background with backdrop blur
  - Smooth scroll animation (shrinks to floating pill on scroll)
  - Animated hover effects on nav items (pill follows cursor)
  - CALL NOW button with gradient shine animation
  - Responsive mobile menu with hamburger icon
- Fixed phone number + CALL NOW wrapping issue
- Removed "Commercial" from navigation menu
- Created `src/components/NavbarHeader.tsx` with Motion animations

- ✅ **Completed Phase 2: Global Components**
- Created `src/components/StickyHeader.astro` with:
  - Simplified utility bar (service area + CCB only)
  - Desktop navigation with proper link priority order
  - CALL NOW button (Copper/filled) as primary CTA
  - Phone number displayed on medium+ screens
- Created `src/components/MobileNav.tsx` with:
  - Sheet-style slide-out menu
  - Phone-first design (CALL NOW is prominent at top)
  - All nav links with primary/secondary styling
  - Trust info in footer
- Created `src/components/Footer.astro` with:
  - Company NAP (Name, Address, Phone)
  - Email and location
  - Services quick links
  - Company links
  - Credentials section with verification links
  - Social media links
  - Bottom bar with copyright and CCB
- Updated `src/components/ui/button.tsx` with Warm Craftsman variants:
  - default (Copper) — ONLY for CALL NOW
  - outline (Evergreen border)
  - ghost (Evergreen text)
- Updated hero section with actual kitchen image
- Verified in browser: Header, footer, and all buttons display correctly

- ✅ **Completed Phase 1: Foundation Setup**
- Created `src/styles/global-homepage.css` with light-mode only color tokens
- Created `src/layouts/LayoutHomepage.astro` with SEO, structured data, and typography
- Updated `src/data/site.ts` with complete business info (phone, CCB, BBB, trust badges)
- Updated `src/data/home.ts` with services, testimonials, stats, awards data
- Updated `src/pages/index.astro` with preview of all sections
- Updated `tailwind.config.cjs` with brand colors
- Verified in browser: All colors, typography, and layout working correctly

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
