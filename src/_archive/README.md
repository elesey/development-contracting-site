# Archive

This folder contains previous page designs that can be referenced for future development.

## Contents

| File          | Description                               |
| ------------- | ----------------------------------------- |
| `index.astro` | Original home page design (v1)            |
| `v2.astro`    | Version 2 design with all sections inline |

## Usage

These files are **not routed** (they're outside `src/pages/`). Use them as reference when building new sections:

- Copy section markup as starting points
- Reference data structures and component usage
- Check styling patterns and Tailwind classes

## Key Sections in v2.astro

The v2 design contains these sections (in order):

1. ResizableNavbar (Aceternity)
2. Hero with BlueprintBackground
3. Stats Bar
4. Partners Marquee
5. Restoration Services (detailed)
6. Services (all)
7. Why Choose Us
8. About / Story
9. Process
10. Projects
11. Reviews / Testimonials
12. Contact with form
13. Footer

## Data

Content data has been extracted to `src/data/home.ts` for reuse.
