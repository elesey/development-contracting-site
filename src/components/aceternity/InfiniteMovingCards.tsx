"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useCallback } from "react";

export interface InfiniteMovingCardsProps {
  items: {
    name: string;
    logo: React.ReactNode;
    href: string;
    tagline?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse",
      );
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "60s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Only duplicate if not already done
      if (scrollerContent.length === items.length) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed, items.length]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li key={`${item.name}-${idx}`} className="flex-shrink-0">
            <a
              href={item.href}
              className="group border-driftwood/20 hover:border-brass/40 relative flex h-16 min-w-[140px] items-center justify-center rounded-md border bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:shadow-md"
              aria-label={`View ${item.name} projects`}
            >
              <div className="text-charcoal/70 group-hover:text-charcoal flex h-full w-full items-center justify-center transition-all duration-300">
                {item.logo}
              </div>
              {item.tagline && (
                <span className="text-slate/60 absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.tagline}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
