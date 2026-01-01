"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Partner {
  name: string;
  tagline: string;
  url: string;
}

const partners: Partner[] = [
  { name: "Kohler", tagline: "Kitchen & Bath", url: "https://www.kohler.com" },
  { name: "Moen", tagline: "Fixtures", url: "https://www.moen.com" },
  { name: "Delta", tagline: "Faucets", url: "https://www.deltafaucet.com" },
  {
    name: "American Standard",
    tagline: "Plumbing",
    url: "https://www.americanstandard-us.com",
  },
  {
    name: "Andersen",
    tagline: "Windows",
    url: "https://www.andersenwindows.com",
  },
  { name: "Pella", tagline: "Doors & Windows", url: "https://www.pella.com" },
  { name: "Milgard", tagline: "Windows", url: "https://www.milgard.com" },
  {
    name: "James Hardie",
    tagline: "Siding",
    url: "https://www.jameshardie.com",
  },
  { name: "GAF", tagline: "Roofing", url: "https://www.gaf.com" },
  {
    name: "CertainTeed",
    tagline: "Building Materials",
    url: "https://www.certainteed.com",
  },
  {
    name: "Benjamin Moore",
    tagline: "Paint",
    url: "https://www.benjaminmoore.com",
  },
  { name: "Shaw Floors", tagline: "Flooring", url: "https://shawfloors.com" },
];

interface BrandItemProps {
  partner: Partner;
  index: number;
}

function BrandItem({ partner, index }: BrandItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="partner-item group/brand relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: (index % 12) * 0.03, duration: 0.4 }}
    >
      {/* Brand name with link */}
      <motion.a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "brand-name relative whitespace-nowrap",
          "font-brand text-2xl tracking-wide md:text-3xl",
          "text-graphite/60 transition-colors duration-300",
          "hover:text-cedar focus-visible:text-cedar",
        )}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        title={`Visit ${partner.name} - ${partner.tagline}`}
      >
        {partner.name}

        {/* Subtle underline accent on hover */}
        <motion.span
          className="bg-cedar/40 absolute -bottom-1 left-0 h-px"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.a>

      {/* Tooltip with tagline */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute -bottom-8 left-1/2 z-20 -translate-x-1/2"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-cedar/70 text-xs tracking-widest whitespace-nowrap uppercase">
              {partner.tagline}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Separator dot */}
      <span className="text-line/40 mx-8 text-lg md:mx-12">◆</span>
    </motion.div>
  );
}

export function LogoMarquee() {
  // Duplicate partners for seamless loop
  const allPartners = [...partners, ...partners];

  return (
    <div className="marquee-wrapper group/marquee relative flex overflow-hidden py-8">
      <div
        className="marquee-track animate-marquee flex shrink-0 items-center group-hover/marquee:[animation-play-state:paused]"
        style={{
          animation: "marquee 50s linear infinite",
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
          animation: marquee 50s linear infinite;
        }
        .font-brand {
          font-family: 'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif;
          font-weight: 500;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}

export default LogoMarquee;
