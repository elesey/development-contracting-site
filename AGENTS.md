# AGENTS.md

This file is the **source of truth for AI coding agents** working in this repo.

---

## Project snapshot

- **Stack:** Astro + TypeScript
- **UI:** Tailwind CSS, **shadcn/ui**, **Aceternity UI**
- **Rendering strategy:** Mostly server-rendered; React used for islands only when needed.
- **Primary goals:** (fill in)
  - e.g. fast marketing site, great Lighthouse scores, minimal client JS, accessible UI
- **Non-goals / constraints:** (fill in)
  - e.g. “no new dependencies without approval”, “no CMS”, “no redesign”, etc.

---

## Agent operating principles (planning + execution)

### Always start with a plan

Before editing files:

1. Restate the request (1–3 sentences).
2. Define acceptance criteria (“done” means…).
3. Propose a small-step plan (3–8 steps).
4. List files you’ll touch + commands you’ll run to verify.

### Keep tasks small and verifiable

- Prefer small diffs over sweeping refactors.
- Break complex work into incremental commits/changes.
- Always finish with verification evidence (commands run + results).

### Don’t surprise the repo

- **Do not add production dependencies** without explicitly calling it out and explaining why.
- **Do not change formatting rules** (Prettier/ESLint) unless asked.
- **Do not restructure folders** unless necessary and explained.

### Finish with evidence

Every completion note must include:

- What changed
- Where it changed (key files)
- How it was verified (commands + results)
- Follow-ups / limitations

---

## Repo layout (Astro conventions)

- `src/pages/` — routes
- `src/components/` — reusable UI components
- `src/layouts/` — page layouts
- `src/styles/` — global styles
- `src/lib/` — utilities (e.g. `cn`, helpers)
- `public/` — static assets

---

## Astro + React islands guidance

- Prefer `.astro` composition; keep complex logic in TypeScript utilities.
- Use React only when needed for interactivity. Choose the **lightest** `client:*` directive:
  - Prefer `client:visible` / `client:idle` over `client:load` unless required.
- Many shadcn components are fine SSR-only, but interactive ones (dialogs, popovers, etc.)
  should be mounted as islands.

---

## UI systems: shadcn/ui + Aceternity UI

### shadcn/ui: rules

- shadcn/ui is **code you own** (generated into your repo). Treat generated components as first-class code:
  - Edits are allowed, but avoid “random drift” from the standard patterns unless intentional.
- The shadcn CLI initializes config + installs dependencies + creates/uses `components.json`. :contentReference[oaicite:3]{index=3}
- In Astro projects, ensure path aliases exist (commonly `@/* -> ./src/*`). :contentReference[oaicite:4]{index=4}

**Component location convention**

- Default: `src/components/ui/*` for shadcn components
- Utilities: `src/lib/utils.ts` for `cn()` (single source of truth)

**Adding shadcn components**

- Use the package manager that matches the lockfile.
- Prefer `pnpm dlx shadcn@latest …` when using pnpm. :contentReference[oaicite:5]{index=5}

Examples:

- Initialize (creates config + `components.json`): `pnpm dlx shadcn@latest init` :contentReference[oaicite:6]{index=6}
- Add a component: `pnpm dlx shadcn@latest add button` :contentReference[oaicite:7]{index=7}

**components.json guardrails**

- Keep `aliases` aligned with `tsconfig.json` paths.
- For Astro projects, avoid enabling “RSC mode” patterns that inject Next.js-specific assumptions.
  If a generated component includes `"use client";`, only keep it if it’s truly required for your setup.

(Reference: `components.json` is optional unless using the CLI; CLI workflows rely on it.) :contentReference[oaicite:8]{index=8}

---

### Aceternity UI: rules

Aceternity UI components are mostly **Tailwind + Motion** (plus shadcn-like patterns).
Treat them as **accent/hero effects**, not the default for every UI element.

**Install/utility expectations**

- Aceternity commonly expects: `motion`, `clsx`, `tailwind-merge`, and a `cn()` helper. :contentReference[oaicite:9]{index=9}
- Prefer to share the same `cn()` helper used by shadcn. :contentReference[oaicite:10]{index=10}

**Adding Aceternity components**
Many Aceternity components can be installed via the shadcn CLI using `@aceternity/*` items. :contentReference[oaicite:11]{index=11}

Examples:

- `pnpm dlx shadcn@latest add @aceternity/cover` :contentReference[oaicite:12]{index=12}
- Use `--path` if you want to isolate Aceternity effects (recommended):
  - `pnpm dlx shadcn@latest add @aceternity/cover --path src/components/aceternity`

**Astro compatibility note**

- If any Aceternity snippet includes Next.js-only imports (like `next/image`) or `"use client"`,
  adapt it for Astro/React islands (e.g. standard `<img>` / Astro assets, and use `client:*` directives).

**Performance discipline**

- Aceternity effects should be:
  - limited to hero sections, headers, or a few “wow” moments
  - wrapped in `client:visible` where possible
  - avoided on long lists / repeated cards

---

## Setup & common commands

### Package manager

Use the one implied by the lockfile:

- `pnpm-lock.yaml` → pnpm
- `package-lock.json` → npm
- `yarn.lock` → yarn
- `bun.lockb` → bun

### Standard commands (match `package.json`)

- Install: `pnpm install`
- Dev: `pnpm dev`
- Build: `pnpm build`
- Preview: `pnpm preview`

### Quality gates (run as applicable)

- Lint: `pnpm lint`
- Format: `pnpm format`
- Typecheck: `pnpm astro check` (preferred) or `pnpm typecheck`

---

## TypeScript & code style

- Avoid `any`. Prefer `unknown` + narrowing.
- Prefer `import type { ... }` for type-only imports.
- Don’t introduce style churn in unrelated files.

---

## Accessibility & SEO expectations (baseline)

- Semantic HTML first (proper headings, labels, landmarks).
- No unlabeled inputs or missing alt text.
- Keep client JS minimal; islands only when needed.

---

## Git / PR etiquette

- Keep changes scoped to the task.
- PRs should include summary + testing performed + screenshots for UI changes.

---

## Security guardrails

- Never paste secrets/tokens.
- `.env` stays local; use `.env.example` for new variables.

---

## Definition of Done checklist

- [ ] Meets acceptance criteria
- [ ] Lint / typecheck / build run (as available)
- [ ] UI changes checked in the browser
- [ ] Minimal client JS (islands used only when needed)
- [ ] Docs updated if behavior changed
