"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Partner {
  name: string;
  tagline: string;
  url: string;
  domain: string; // Domain for Clearbit logo API
}

const partners: Partner[] = [
  {
    name: "Kohler",
    tagline: "Kitchen & Bath",
    url: "https://www.kohler.com",
    domain: "kohler.com",
  },
  {
    name: "Moen",
    tagline: "Fixtures",
    url: "https://www.moen.com",
    domain: "moen.com",
  },
  {
    name: "Delta",
    tagline: "Faucets",
    url: "https://www.deltafaucet.com",
    domain: "deltafaucet.com",
  },
  {
    name: "American Standard",
    tagline: "Plumbing",
    url: "https://www.americanstandard-us.com",
    domain: "americanstandard-us.com",
  },
  {
    name: "Andersen Windows",
    tagline: "Windows & Doors",
    url: "https://www.andersenwindows.com",
    domain: "andersenwindows.com",
  },
  {
    name: "Pella",
    tagline: "Windows & Doors",
    url: "https://www.pella.com",
    domain: "pella.com",
  },
  {
    name: "Milgard",
    tagline: "Windows",
    url: "https://www.milgard.com",
    domain: "milgard.com",
  },
  {
    name: "James Hardie",
    tagline: "Siding",
    url: "https://www.jameshardie.com",
    domain: "jameshardie.com",
  },
  {
    name: "GAF",
    tagline: "Roofing",
    url: "https://www.gaf.com",
    domain: "gaf.com",
  },
  {
    name: "CertainTeed",
    tagline: "Building Materials",
    url: "https://www.certainteed.com",
    domain: "certainteed.com",
  },
  {
    name: "Benjamin Moore",
    tagline: "Paint",
    url: "https://www.benjaminmoore.com",
    domain: "benjaminmoore.com",
  },
  {
    name: "Shaw Floors",
    tagline: "Flooring",
    url: "https://shawfloors.com",
    domain: "shawfloors.com",
  },
];

// Clearbit Logo API - free service for company logos
const getLogoUrl = (domain: string) =>
  `https://logo.clearbit.com/${domain}?size=200`;

interface BrandItemProps {
  partner: Partner;
  index: number;
}

function BrandItem({ partner, index }: BrandItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className="partner-item group/brand relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: (index % 12) * 0.03, duration: 0.4 }}
    >
      {/* Brand logo with link */}
      <motion.a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative flex h-16 w-36 items-center justify-center rounded-lg px-4 md:h-20 md:w-44",
          "bg-white/80 backdrop-blur-sm",
          "border-driftwood/20 border shadow-sm",
          "transition-all duration-300",
          "hover:border-cedar/30 hover:shadow-md",
          "focus-visible:ring-cedar focus-visible:ring-2 focus-visible:outline-none",
        )}
        whileHover={{ scale: 1.03, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        title={`Visit ${partner.name} - ${partner.tagline}`}
      >
        {!imageError ? (
          <img
            src={getLogoUrl(partner.domain)}
            alt={`${partner.name} logo`}
            className={cn(
              "max-h-10 max-w-full object-contain md:max-h-12",
              "grayscale transition-all duration-300",
              "group-hover/brand:grayscale-0",
            )}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          // Fallback to text if image fails
          <span
            className={cn(
              "text-graphite/70 font-semibold whitespace-nowrap",
              "text-sm md:text-base",
              "transition-colors duration-300",
              "group-hover/brand:text-cedar",
            )}
          >
            {partner.name}
          </span>
        )}
        <span className="sr-only">
          {partner.name} - {partner.tagline}
        </span>
      </motion.a>

      {/* Tooltip with tagline */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="pointer-events-none absolute -bottom-10 left-1/2 z-20 -translate-x-1/2"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <span className="bg-graphite/90 text-cream rounded-md px-3 py-1 text-xs whitespace-nowrap shadow-lg">
              {partner.tagline}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function LogoMarquee() {
  // Duplicate partners for seamless loop
  const allPartners = [...partners, ...partners];

  return (
    <div className="marquee-wrapper group/marquee relative flex overflow-hidden py-8">
      {/* Fade edges for smooth appearance */}
      <div className="from-warm-stone pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r to-transparent md:w-32" />
      <div className="from-warm-stone pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l to-transparent md:w-32" />

      <div
        className="marquee-track animate-marquee flex shrink-0 items-center gap-6 group-hover/marquee:[animation-play-state:paused] md:gap-8"
        style={{
          animation: "marquee 60s linear infinite",
        }}
      >
        {allPartners.map((partner, index) => {
          const setIndex = Math.floor(index / partners.length);
          return (
            <BrandItem
              key={`${partner.name}-set${setIndex}`}
              partner={partner}
              index={index}
            />
          );
        })}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

export default LogoMarquee;
