/**
 * Site-wide Data & Configuration
 *
 * Shared data used across the entire site.
 * Source: HOMEPAGE-SPEC.md + BBB profile
 */

// Company info
export const company = {
  name: "Development Contracting",
  shortName: "DC",
  tagline: "Building Dreams. Restoring Homes.",
  phone: "(503) 470-7007",
  phoneHref: "tel:+15034707007",
  email: "info@developmentcontracting.com",
  emailHref: "mailto:info@developmentcontracting.com",
  location: "Portland, Oregon",
  serviceArea: "Oregon & Washington",
  serviceAreaLong: "Serving Oregon and Washington",
};

// Licensing & Accreditation
export const licensing = {
  ccb: {
    number: "221238",
    display: "CCB #221238",
    verifyUrl: "https://www.ccb.state.or.us/search/",
  },
  bbb: {
    accredited: true,
    rating: "A+",
    accreditedSince: "12/19/2025",
    profileUrl: "https://www.bbb.org/",
    display: "BBB Accredited • A+ Rated",
  },
  states: ["Oregon", "Washington"],
  leadSafeCertified: true, // EPA RRP certified
  insured: true,
  bonded: true,
};

// Social links
export const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/developmentcontracting",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/developmentcontracting",
    icon: "instagram",
  },
  {
    name: "Google Business",
    href: "https://g.page/developmentcontracting",
    icon: "google",
  },
];

// Main navigation (priority order per spec)
export const mainNavigation = [
  { name: "Remodeling", href: "/remodeling", primary: true },
  { name: "Additions", href: "/additions", primary: true },
  { name: "Residential", href: "/residential", primary: false },
  { name: "Restoration", href: "/restoration", secondary: true },
  { name: "About", href: "/about", primary: false },
  { name: "Contact", href: "/contact", primary: false },
];

// Footer navigation
export const footerServices = [
  { name: "Kitchen Remodeling", href: "/remodeling/kitchen" },
  { name: "Bathroom Remodeling", href: "/remodeling/bathroom" },
  { name: "Whole Home Renovation", href: "/remodeling/whole-home" },
  { name: "Room Additions", href: "/additions/room" },
  { name: "In-Law Additions", href: "/additions/in-law" },
  { name: "Water Damage Restoration", href: "/restoration/water-damage" },
];

export const footerCompany = [
  { name: "About Us", href: "/about" },
  { name: "Our Projects", href: "/projects" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Privacy Policy", href: "/privacy" },
];

// SEO defaults
export const seoDefaults = {
  siteName: "Development Contracting",
  defaultTitle:
    "Remodeling & Home Additions | Development Contracting | Oregon & Washington",
  defaultDescription:
    "Expert remodeling, home additions, and renovation services in Oregon & Washington. Licensed, bonded, and insured. CCB #221238. BBB Accredited with A+ Rating. Call (503) 470-7007.",
  defaultImage: "/og-image.jpg",
};

// Trust badges for hero section
export const trustBadges = [
  {
    label: "BBB Accredited • A+ Rated",
    href: "https://www.bbb.org/",
    icon: "bbb",
  },
  {
    label: "CCB #221238",
    href: "https://www.ccb.state.or.us/search/",
    icon: "license",
  },
  {
    label: "Licensed in OR + WA",
    icon: "shield",
  },
  {
    label: "Lead-Safe Certified (EPA RRP)",
    icon: "check",
  },
];
