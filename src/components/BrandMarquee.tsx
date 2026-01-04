"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Partner brand data with domain for Clearbit logo API
const partnerBrands = [
  {
    name: "Kohler",
    domain: "kohler.com",
    href: "/projects?brand=kohler",
    tagline: "Kitchen & Bath",
  },
  {
    name: "Moen",
    domain: "moen.com",
    href: "/projects?brand=moen",
    tagline: "Fixtures",
  },
  {
    name: "Delta Faucet",
    domain: "deltafaucet.com",
    href: "/projects?brand=delta",
    tagline: "Faucets",
  },
  {
    name: "Andersen Windows",
    domain: "andersenwindows.com",
    href: "/projects?brand=andersen",
    tagline: "Windows & Doors",
  },
  {
    name: "Pella",
    domain: "pella.com",
    href: "/projects?brand=pella",
    tagline: "Windows & Doors",
  },
  {
    name: "James Hardie",
    domain: "jameshardie.com",
    href: "/projects?brand=james-hardie",
    tagline: "Fiber Cement Siding",
  },
  {
    name: "GAF",
    domain: "gaf.com",
    href: "/projects?brand=gaf",
    tagline: "Roofing",
  },
  {
    name: "Shaw Floors",
    domain: "shawfloors.com",
    href: "/projects?brand=shaw-floors",
    tagline: "Flooring",
  },
  {
    name: "Benjamin Moore",
    domain: "benjaminmoore.com",
    href: "/projects?brand=benjamin-moore",
    tagline: "Premium Paint",
  },
  {
    name: "CertainTeed",
    domain: "certainteed.com",
    href: "/projects?brand=certainteed",
    tagline: "Building Materials",
  },
  {
    name: "Milgard",
    domain: "milgard.com",
    href: "/projects?brand=milgard",
    tagline: "Windows & Doors",
  },
  {
    name: "American Standard",
    domain: "americanstandard-us.com",
    href: "/projects?brand=american-standard",
    tagline: "Plumbing Fixtures",
  },
];

// Clearbit Logo API - free service that returns company logos
const getLogoUrl = (domain: string) =>
  `https://logo.clearbit.com/${domain}?size=200`;

interface BrandCardProps {
  brand: (typeof partnerBrands)[0];
}

function BrandCard({ brand }: BrandCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group/card relative flex-shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={brand.href}
        className={cn(
          "flex h-20 w-40 items-center justify-center rounded-xl px-5 md:h-24 md:w-48",
          "bg-white/90 backdrop-blur-sm",
          "border-driftwood/15 border shadow-sm",
          "transition-all duration-300 ease-out",
          "hover:border-brass/30 hover:shadow-brass/5 hover:shadow-lg",
          "hover:-translate-y-0.5 hover:scale-[1.02]",
          "focus-visible:ring-brass/50 focus-visible:ring-2 focus-visible:outline-none",
        )}
        aria-label={`View ${brand.name} projects - ${brand.tagline}`}
      >
        {!imageError ? (
          <img
            src={getLogoUrl(brand.domain)}
            alt={`${brand.name} logo`}
            className={cn(
              "max-h-10 max-w-[120px] object-contain md:max-h-12 md:max-w-[140px]",
              "opacity-60 grayscale transition-all duration-300",
              "group-hover/card:opacity-100 group-hover/card:grayscale-0",
            )}
            onError={() => setImageError(true)}
          />
        ) : (
          <span
            className={cn(
              "text-charcoal/60 font-semibold whitespace-nowrap",
              "text-sm md:text-base",
              "transition-colors duration-300",
              "group-hover/card:text-charcoal",
            )}
          >
            {brand.name}
          </span>
        )}
      </a>

      {/* Tooltip */}
      {isHovered && (
        <div className="animate-fade-in pointer-events-none absolute -bottom-8 left-1/2 z-30 -translate-x-1/2">
          <span className="bg-charcoal/90 rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white shadow-lg">
            {brand.tagline}
          </span>
        </div>
      )}
    </div>
  );
}

interface BrandMarqueeProps {
  className?: string;
}

export function BrandMarquee({ className }: BrandMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Duplicate for seamless loop
  const allBrands = [...partnerBrands, ...partnerBrands];

  // Static grid for reduced motion
  if (prefersReducedMotion) {
    return (
      <div className={cn("py-4", className)}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {partnerBrands.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden py-4", className)}
    >
      {/* Gradient masks */}
      <div className="from-warm-stone pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r to-transparent md:w-32" />
      <div className="from-warm-stone pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l to-transparent md:w-32" />

      <div
        className="marquee-track group/marquee flex w-max items-center gap-5 md:gap-6"
        style={{
          animation: "marquee-scroll 60s linear infinite",
        }}
      >
        {allBrands.map((brand, index) => (
          <BrandCard key={`${brand.name}-${index}`} brand={brand} />
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateX(-50%) translateY(-4px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.15s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

// Also export as named export for compatibility
export const BrandMarqueeStatic = BrandMarquee;

export default BrandMarquee;
