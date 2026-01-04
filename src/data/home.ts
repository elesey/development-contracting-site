/**
 * Home Page Data
 *
 * Centralized data for the home page sections.
 * Based on HOMEPAGE-SPEC.md requirements.
 */

// Navigation items (for mobile menu / quick nav)
export const navItems = [
  { name: "Services", link: "#services" },
  { name: "About", link: "#about" },
  { name: "Reviews", link: "#reviews" },
  { name: "Contact", link: "#contact" },
];

// ============================================
// SERVICES DATA (per spec section 7.4)
// ============================================

// Remodeling services (primary)
export const remodelingServices = [
  {
    title: "Kitchen Remodel",
    description:
      "Transform your kitchen with custom cabinets, modern countertops, and thoughtful design that enhances both function and beauty.",
    href: "/remodeling/kitchen",
    featured: true,
  },
  {
    title: "Bathroom Remodel",
    description:
      "From powder rooms to master suites. Walk-in showers, soaking tubs, and accessible designs tailored to your needs.",
    href: "/remodeling/bathroom",
    featured: true,
  },
  {
    title: "Whole Home Renovation",
    description:
      "Complete interior and exterior renovations. We manage every detail from permits to final walkthrough.",
    href: "/remodeling/whole-home",
    featured: false,
  },
  {
    title: "Interior Renovation",
    description:
      "Open floor plans, updated finishes, and modern touches that bring new life to your living spaces.",
    href: "/remodeling/interior",
    featured: false,
  },
  {
    title: "Exterior Renovation",
    description:
      "Curb appeal upgrades including siding, windows, doors, and outdoor living spaces.",
    href: "/remodeling/exterior",
    featured: false,
  },
];

// Additions services (primary)
export const additionsServices = [
  {
    title: "Room Addition",
    description:
      "Expand your living space with a seamlessly integrated room addition that matches your home's character.",
    href: "/additions/room",
    featured: true,
  },
  {
    title: "In-Law Addition",
    description:
      "Create comfortable, private living space for family members with full kitchenette and accessibility options.",
    href: "/additions/in-law",
    featured: true,
  },
  {
    title: "Home Additions Overview",
    description:
      "From sunrooms to second stories, we design and build additions that feel like they've always been there.",
    href: "/additions",
    featured: false,
  },
];

// Restoration services (secondary)
export const restorationServices = [
  {
    title: "Water Damage",
    description:
      "Expert water damage restoration. We extract water, dry structures, and restore your home to pre-loss condition.",
    href: "/restoration/water-damage",
  },
  {
    title: "Fire Damage",
    description:
      "Complete fire damage restoration from cleanup to reconstruction. We handle insurance coordination.",
    href: "/restoration/fire-damage",
  },
  {
    title: "Exterior Damage",
    description:
      "Storm damage, wind damage, and exterior repairs to protect your home from the elements.",
    href: "/restoration/exterior",
  },
  {
    title: "General Restoration",
    description:
      "Comprehensive restoration services to return your property to its original condition.",
    href: "/restoration",
  },
];

// All services combined for easy access
export const services = {
  remodeling: remodelingServices,
  additions: additionsServices,
  restoration: restorationServices,
};

// ============================================
// PARTNER BRANDS (for marquee)
// ============================================
export const partners = [
  { name: "Kohler", tagline: "Kitchen & Bath", href: "/projects?brand=kohler" },
  { name: "Moen", tagline: "Fixtures", href: "/projects?brand=moen" },
  { name: "Delta", tagline: "Faucets", href: "/projects?brand=delta" },
  {
    name: "American Standard",
    tagline: "Plumbing",
    href: "/projects?brand=american-standard",
  },
  { name: "Andersen", tagline: "Windows", href: "/projects?brand=andersen" },
  { name: "Pella", tagline: "Doors & Windows", href: "/projects?brand=pella" },
  { name: "Milgard", tagline: "Windows", href: "/projects?brand=milgard" },
  {
    name: "James Hardie",
    tagline: "Siding",
    href: "/projects?brand=james-hardie",
  },
  { name: "GAF", tagline: "Roofing", href: "/projects?brand=gaf" },
  {
    name: "CertainTeed",
    tagline: "Building Materials",
    href: "/projects?brand=certainteed",
  },
  {
    name: "Shaw Floors",
    tagline: "Flooring",
    href: "/projects?brand=shaw-floors",
  },
  {
    name: "Benjamin Moore",
    tagline: "Paint",
    href: "/projects?brand=benjamin-moore",
  },
];

// ============================================
// AWARDS & CERTIFICATES (per spec section 7.5)
// ============================================
export const awards = [
  {
    title: "BBB Accredited Business",
    description: "Accredited since 12/19/2025 with A+ rating",
    icon: "bbb",
    verifyUrl: "https://www.bbb.org/",
  },
  {
    title: "Oregon CCB Licensed",
    description: "Oregon Construction Contractors Board #221238",
    icon: "license",
    verifyUrl: "https://www.ccb.state.or.us/search/",
  },
  {
    title: "Licensed in OR & WA",
    description: "Fully licensed to work in Oregon and Washington",
    icon: "states",
  },
  {
    title: "Lead-Safe Certified",
    description: "EPA RRP certified for work in pre-1978 homes",
    icon: "leaf",
  },
  {
    title: "Bonded & Insured",
    description: "Fully bonded and insured for your protection",
    icon: "shield",
  },
  {
    title: "5-Star Rated",
    description: "Consistently rated 5 stars on Google Reviews",
    icon: "star",
  },
];

// ============================================
// TESTIMONIALS (per spec section 7.6)
// ============================================
export const testimonials = [
  {
    quote:
      "They turned a stressful water damage situation into a seamless renovation. Professional, communicative, and the craftsmanship speaks for itself.",
    name: "Sarah M.",
    location: "Pearl District, Portland",
    type: "Restoration",
    rating: 5,
  },
  {
    quote:
      "Our kitchen remodel exceeded every expectation. They listened, suggested smart solutions, and delivered on time and on budget.",
    name: "Michael & Jennifer K.",
    location: "Alberta Arts, Portland",
    type: "Remodeling",
    rating: 5,
  },
  {
    quote:
      "After our basement flooded, they were there within hours. The restoration was flawless—you'd never know it happened.",
    name: "David R.",
    location: "Sellwood, Portland",
    type: "Restoration",
    rating: 5,
  },
  {
    quote:
      "We've used them for two bathroom renovations now. Exceptional attention to detail and always on schedule.",
    name: "Lisa T.",
    location: "Hawthorne, Portland",
    type: "Remodeling",
    rating: 5,
  },
  {
    quote:
      "The team was incredible from start to finish. Our new addition feels like it was always part of the house.",
    name: "Lingyan K.",
    location: "Lake Oswego, OR",
    type: "Addition",
    rating: 5,
  },
  {
    quote:
      "Top-notch professionalism. They handled all the permits, kept us informed daily, and the final result is stunning.",
    name: "Vincent G.",
    location: "West Linn, OR",
    type: "Remodeling",
    rating: 5,
  },
];

// ============================================
// PROOF STATS (per spec section 7.6)
// ============================================
export const stats = [
  { value: "200+", label: "Loyal Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "230+", label: "Total Projects" },
  { value: "100k+", label: "Client Savings" },
];

// ============================================
// PROCESS STEPS
// ============================================
export const processSteps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "We listen to your vision and assess the scope.",
  },
  {
    number: "02",
    title: "Detailed Estimate",
    description: "Transparent pricing with no hidden costs.",
  },
  {
    number: "03",
    title: "Design & Permits",
    description: "We handle all paperwork and approvals.",
  },
  {
    number: "04",
    title: "Quality Build",
    description: "Expert crews, premium materials, daily updates.",
  },
  {
    number: "05",
    title: "Final Walkthrough",
    description: "Your satisfaction is our success.",
  },
];

// ============================================
// WHY CHOOSE US
// ============================================
export const whyChooseUs = [
  {
    title: "Licensed & Insured",
    description:
      "CCB #221238. Fully licensed, bonded, and insured in Oregon and Washington.",
    icon: "shield",
  },
  {
    title: "BBB Accredited",
    description: "A+ rated by the Better Business Bureau. Trusted since 2025.",
    icon: "bbb",
  },
  {
    title: "Insurance Expertise",
    description:
      "We work directly with insurance companies to streamline your claim.",
    icon: "document",
  },
  {
    title: "Local & Trusted",
    description:
      "Family-owned, Portland-based. Your neighbors are our customers.",
    icon: "home",
  },
];

// ============================================
// HERO CONTENT
// ============================================
export const heroContent = {
  eyebrow: "Serving Oregon & Washington",
  headline: "Quality Remodeling & Home Additions",
  subheadline:
    "Transform your home with expert craftsmanship. From kitchen renovations to room additions, we bring your vision to life.",
  primaryCta: {
    text: "CALL NOW",
    href: "tel:+15034707007",
    phone: "(503) 470-7007",
  },
  secondaryCta: {
    text: "Browse Services",
    href: "#services",
  },
};

// ============================================
// FINAL CTA CONTENT (per spec section 7.7)
// ============================================
export const finalCta = {
  headline: "Ready to Start Your Project?",
  subheadline:
    "From remodels to additions, our team is ready to bring your vision to life. Licensed in Oregon & Washington.",
  primaryCta: {
    text: "CALL NOW",
    href: "tel:+15034707007",
    phone: "(503) 470-7007",
  },
};
