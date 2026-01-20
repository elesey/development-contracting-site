# AGENTS.md

Source of truth for AI coding agents in this repo.

---

## Project snapshot

- **Stack:** Astro + TypeScript
- **UI:** Tailwind CSS, shadcn/ui, Aceternity UI
- **Rendering strategy:** Server output via Vercel adapter; React used for islands only when needed.
- **Assets:** Prefer `astro:assets` `<Image />` for local images in `src/assets`.
- **Primary goals:** (fill in)
  - e.g. fast marketing site, great Lighthouse scores, minimal client JS, accessible UI
- **Non-goals / constraints:** (fill in)
  - e.g. no new dependencies without approval, no redesign, no CMS

---

## Agent operating principles

### Always start with a plan

Before editing files:

1. Restate the request (1-3 sentences).
2. Define acceptance criteria ("done" means...).
3. Propose a small-step plan (3-8 steps).
4. List files you will touch and commands you will run to verify.

### Keep tasks small and verifiable

- Prefer small diffs over sweeping refactors.
- Break complex work into incremental changes.
- Finish with verification evidence.

### Don't surprise the repo

- Do not add production dependencies without calling it out and explaining why.
- Do not change formatting rules unless asked.
- Do not restructure folders unless necessary and explained.

### Finish with evidence

Every completion note must include:

- What changed
- Where it changed (key files)
- How it was verified (commands + results)
- Follow-ups / limitations

---

## Repo layout (Astro conventions)

### Core folders

- `src/pages/` - routes
- `src/layouts/` - page layouts
- `src/styles/` - global CSS
- `src/lib/` - utilities (e.g. `cn`)
- `public/` - static assets
- `src/assets/` - processed assets (images, SVGs)

### Components organization

- `src/components/ui/` - shadcn/ui base components
- `src/components/aceternity/` - Aceternity UI effects
- `src/components/common/` - shared components (Header, Footer, etc.)

### Sections

- `src/sections/home/` - home page sections
- `src/sections/about/` - future
- `src/sections/services/` - future
- `src/sections/contact/` - future

### Data layer

- `src/data/site.ts` - site-wide data
- `src/data/home.ts` - home page content
- `src/data/index.ts` - central export

**Import pattern:** `import { company, services } from "@/data"`

---

## Astro + React islands guidance

- Prefer `.astro` composition; keep complex logic in TS utilities.
- Use React only for interactivity.
- Choose the lightest `client:*` directive.
  - Prefer `client:visible` / `client:idle` over `client:load`.
- Many shadcn components are fine SSR-only, interactive ones should be islands.
- Prefer `astro:assets` `<Image />` for local images; keep `public/` for static URLs.

---

## UI systems: shadcn/ui + Aceternity UI

### shadcn/ui rules

- Treat generated components as first-class code.
- Default location: `src/components/ui/*`.
- Utilities: `src/lib/utils.ts` for `cn()`.
- Keep `components.json` aliases aligned with `tsconfig.json`.
- Avoid Next.js-only patterns (e.g. "use client") unless required.

**Adding shadcn components**

- Use the package manager that matches the lockfile.
- Prefer `pnpm dlx shadcn@latest add <component>`.

### Aceternity UI rules

- Use for hero/accent effects, not every UI element.
- Expected deps: `motion`, `clsx`, `tailwind-merge`, shared `cn()`.
- Adapt Next-only snippets for Astro (no `next/image`, no RSC assumptions).
- Wrap effects in `client:visible` where possible.

---

## Setup & common commands

### Package manager

- `pnpm-lock.yaml` -> pnpm
- `package-lock.json` -> npm
- `yarn.lock` -> yarn
- `bun.lockb` -> bun

### Standard commands

- Install: `pnpm install`
- Dev: `pnpm dev`
- Build: `pnpm build`
- Preview: `pnpm preview`

### Quality gates

- Lint: `pnpm lint`
- Format: `pnpm format`
- Typecheck: `pnpm astro check`

---

## TypeScript & code style

- Avoid `any`; prefer `unknown` + narrowing.
- Prefer `import type { ... }` for type-only imports.
- Don't introduce style churn in unrelated files.

---

## Accessibility & SEO

- Semantic HTML first (proper headings, labels, landmarks).
- No unlabeled inputs or missing alt text.
- Keep client JS minimal; islands only when needed.

---

## Git / PR etiquette

- Keep changes scoped to the task.
- PRs include summary, testing, screenshots for UI changes.

---

## Security guardrails

- Never paste secrets or tokens.
- `.env` stays local; use `.env.example` for new vars.

---

## Definition of Done

- [ ] Meets acceptance criteria
- [ ] Lint / typecheck / build run (as available)
- [ ] UI changes checked in the browser
- [ ] Minimal client JS (islands used only when needed)
- [ ] Docs updated if behavior changed
