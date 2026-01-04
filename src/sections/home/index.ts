/**
 * Home Page Sections
 *
 * Export all home page sections from here for clean imports.
 * Usage: import { Hero, StatsBar, Services } from '@/sections/home'
 *
 * TODO: Add exports as sections are created:
 *
 * export { default as Hero } from './Hero.astro';
 * export { default as StatsBar } from './StatsBar.astro';
 * export { default as PartnersMarquee } from './PartnersMarquee.astro';
 * export { default as Restoration } from './Restoration.astro';
 * export { default as Services } from './Services.astro';
 * export { default as WhyChooseUs } from './WhyChooseUs.astro';
 * export { default as About } from './About.astro';
 * export { default as Process } from './Process.astro';
 * export { default as Projects } from './Projects.astro';
 * export { default as Reviews } from './Reviews.astro';
 * export { default as Contact } from './Contact.astro';
 */

// Placeholder export to prevent empty module errors
export const HOME_SECTIONS = [
  "Hero",
  "StatsBar",
  "PartnersMarquee",
  "Restoration",
  "Services",
  "WhyChooseUs",
  "About",
  "Process",
  "Projects",
  "Reviews",
  "Contact",
] as const;
