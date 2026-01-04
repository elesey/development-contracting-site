/**
 * Site-wide Data & Configuration
 *
 * Shared data used across the entire site.
 */

// Company info
export const company = {
  name: "Development Contracting",
  shortName: "DC",
  tagline: "Restoring Homes, Building Dreams.",
  phone: "(503) 470-7007",
  phoneHref: "tel:+15034707007",
  email: "info@developmentcontracting.com",
  emailHref: "mailto:info@developmentcontracting.com",
  license: "CCB# 221238",
  location: "Portland, Oregon",
  serviceArea: "Oregon & Washington",
};

// Social links
export const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "instagram",
  },
  {
    name: "Google",
    href: "https://google.com/maps",
    icon: "google",
  },
];

// Main navigation
export const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Restoration", href: "/restoration" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

// Footer navigation
export const footerServices = [
  { name: "Water Damage Restoration", href: "#restoration" },
  { name: "Fire & Smoke Damage", href: "#restoration" },
  { name: "Kitchen Remodels", href: "#services" },
  { name: "Bathroom Renovations", href: "#services" },
  { name: "Whole-Home Renovations", href: "#services" },
];

export const footerCompany = [
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/projects" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "/contact" },
  { name: "Service Areas", href: "/service-areas" },
];

// SEO defaults
export const seoDefaults = {
  siteName: "Development Contracting",
  defaultTitle:
    "Development Contracting | Portland Home Restoration & Renovation",
  defaultDescription:
    "Portland's trusted contractor for water damage restoration, fire repair, and residential renovations. Licensed in Oregon & Washington. CCB# 221238.",
  defaultImage: "/og-image.jpg",
};
