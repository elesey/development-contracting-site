# Plan

## Request

Assess the home page against React best practices, apply quick wins first, then top fixes, and track progress with verification for each step.

## Acceptance criteria

- Home page reduces or eliminates unnecessary React hydration.
- Quick wins applied: defer hydration for the header and avoid redundant state updates/memoization in the header logic.
- Top fixes applied: static Astro header for desktop, lightweight mobile menu behavior, and no React marquee usage on the home page.
- PLAN.md reflects step status and verification results.
- No new dependencies added.

## Steps

1. [x] Create PLAN.md and capture scope, acceptance criteria, and steps.
   - Verification: PLAN.md created and reviewed.
2. [x] Quick wins: defer header hydration and optimize scroll state updates/memoization in the header component.
   - Verification: `pnpm astro check` (warnings only).
3. [x] Top fix: replace the home page header with static Astro markup plus lightweight JS for scroll + mobile menu; ensure desktop dropdown uses CSS and mobile uses flattened nav.
   - Verification: `pnpm astro check` (warnings only).
4. [x] Confirm home page uses the CSS marquee (no React marquee on the home page).
   - Verification: Grep search in `src/pages/index.astro` found no `LogoMarquee` usage.

## Files to touch

- src/components/StickyHeader.astro
- src/components/aceternity/ElegantNavbar.tsx
- src/data/site.ts (if needed for navigation data)
- PLAN.md

## Commands

- pnpm astro check
- rg "LogoMarquee" src/pages/index.astro
