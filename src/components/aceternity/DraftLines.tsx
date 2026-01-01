"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * DraftLines - Architectural drafting-style decorative lines
 *
 * Creates subtle blueprint/technical drawing aesthetics with:
 * - Dimension lines with arrows
 * - Construction crosshairs
 * - Measurement tick marks
 *
 * Use as decorative accents around sections, cards, or hero elements.
 */

interface DraftLinesProps {
  className?: string;
  /** Position: 'corners', 'sides', 'full' */
  variant?: "corners" | "sides" | "full" | "dimension";
  /** Animation on mount */
  animate?: boolean;
  /** Line color - uses CSS variable by default */
  color?: string;
  /** Line opacity */
  opacity?: number;
  /** Size of decorative elements in pixels */
  size?: number;
}

export const DraftLines = ({
  className,
  variant = "corners",
  animate = true,
  color = "var(--color-cedar, #C1733F)",
  opacity = 0.4,
  size = 40,
}: DraftLinesProps) => {
  const drawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.2, ease: "easeInOut" as const },
        opacity: { duration: 0.3 },
      },
    },
  } as const;

  const delayedDraw = (delay: number) =>
    ({
      hidden: { pathLength: 0, opacity: 0 },
      visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { duration: 0.8, ease: "easeInOut" as const, delay },
          opacity: { duration: 0.2, delay },
        },
      },
    }) as const;

  if (variant === "corners") {
    return (
      <div className={cn("pointer-events-none absolute inset-0", className)}>
        {/* Top-left corner */}
        <svg
          className="absolute top-0 left-0"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
          style={{ opacity }}
        >
          <motion.path
            d={`M ${size} 1 L 1 1 L 1 ${size}`}
            stroke={color}
            strokeWidth="1"
            fill="none"
            variants={animate ? drawVariants : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
          {/* Crosshair tick */}
          <motion.line
            x1={size * 0.4}
            y1="1"
            x2={size * 0.4}
            y2="6"
            stroke={color}
            strokeWidth="1"
            variants={animate ? delayedDraw(0.5) : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
          <motion.line
            x1="1"
            y1={size * 0.4}
            x2="6"
            y2={size * 0.4}
            stroke={color}
            strokeWidth="1"
            variants={animate ? delayedDraw(0.6) : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
        </svg>

        {/* Top-right corner */}
        <svg
          className="absolute top-0 right-0"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
          style={{ opacity }}
        >
          <motion.path
            d={`M 0 1 L ${size - 1} 1 L ${size - 1} ${size}`}
            stroke={color}
            strokeWidth="1"
            fill="none"
            variants={animate ? delayedDraw(0.2) : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
          <motion.line
            x1={size * 0.6}
            y1="1"
            x2={size * 0.6}
            y2="6"
            stroke={color}
            strokeWidth="1"
            variants={animate ? delayedDraw(0.7) : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
        </svg>

        {/* Bottom-left corner */}
        <svg
          className="absolute bottom-0 left-0"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
          style={{ opacity }}
        >
          <motion.path
            d={`M 1 0 L 1 ${size - 1} L ${size} ${size - 1}`}
            stroke={color}
            strokeWidth="1"
            fill="none"
            variants={animate ? delayedDraw(0.3) : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
          <motion.line
            x1="1"
            y1={size * 0.6}
            x2="6"
            y2={size * 0.6}
            stroke={color}
            strokeWidth="1"
            variants={animate ? delayedDraw(0.8) : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
        </svg>

        {/* Bottom-right corner */}
        <svg
          className="absolute right-0 bottom-0"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
          style={{ opacity }}
        >
          <motion.path
            d={`M ${size - 1} 0 L ${size - 1} ${size - 1} L 0 ${size - 1}`}
            stroke={color}
            strokeWidth="1"
            fill="none"
            variants={animate ? delayedDraw(0.4) : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
        </svg>
      </div>
    );
  }

  if (variant === "dimension") {
    // Horizontal dimension line style (like architectural measurements)
    return (
      <div className={cn("pointer-events-none relative w-full", className)}>
        <svg
          className="w-full"
          height="20"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          fill="none"
          style={{ opacity }}
        >
          {/* Left arrow */}
          <motion.path
            d="M 0 10 L 8 6 L 8 14 Z"
            fill={color}
            variants={animate ? delayedDraw(0) : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
          {/* Right arrow */}
          <motion.path
            d="M 100 10 L 92 6 L 92 14 Z"
            fill={color}
            variants={animate ? delayedDraw(0) : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
          {/* Main line */}
          <motion.line
            x1="8"
            y1="10"
            x2="92"
            y2="10"
            stroke={color}
            strokeWidth="1"
            variants={animate ? drawVariants : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
          {/* Tick marks */}
          {[20, 35, 50, 65, 80].map((x, i) => (
            <motion.line
              key={i}
              x1={x}
              y1="7"
              x2={x}
              y2="13"
              stroke={color}
              strokeWidth="1"
              variants={animate ? delayedDraw(0.3 + i * 0.1) : undefined}
              initial={animate ? "hidden" : undefined}
              animate={animate ? "visible" : undefined}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === "sides") {
    return (
      <div className={cn("pointer-events-none absolute inset-0", className)}>
        {/* Top edge marks */}
        <svg
          className="absolute top-0 left-1/4 -translate-x-1/2"
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          style={{ opacity }}
        >
          <motion.line
            x1="10"
            y1="0"
            x2="10"
            y2="12"
            stroke={color}
            strokeWidth="1"
            variants={animate ? drawVariants : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
          <motion.line
            x1="5"
            y1="1"
            x2="15"
            y2="1"
            stroke={color}
            strokeWidth="1"
            variants={animate ? delayedDraw(0.3) : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
        </svg>

        <svg
          className="absolute top-0 left-3/4 -translate-x-1/2"
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          style={{ opacity }}
        >
          <motion.line
            x1="10"
            y1="0"
            x2="10"
            y2="12"
            stroke={color}
            strokeWidth="1"
            variants={animate ? delayedDraw(0.2) : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
          <motion.line
            x1="5"
            y1="1"
            x2="15"
            y2="1"
            stroke={color}
            strokeWidth="1"
            variants={animate ? delayedDraw(0.4) : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
        </svg>

        {/* Bottom edge marks */}
        <svg
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          style={{ opacity }}
        >
          <motion.line
            x1="10"
            y1="0"
            x2="10"
            y2="12"
            stroke={color}
            strokeWidth="1"
            variants={animate ? delayedDraw(0.1) : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
          <motion.line
            x1="5"
            y1="11"
            x2="15"
            y2="11"
            stroke={color}
            strokeWidth="1"
            variants={animate ? delayedDraw(0.35) : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
        </svg>
      </div>
    );
  }

  // Full variant - combination of corner brackets + center marks
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      {/* Corner brackets */}
      <DraftLines
        variant="corners"
        animate={animate}
        color={color}
        opacity={opacity}
        size={size}
      />
      {/* Side marks */}
      <DraftLines
        variant="sides"
        animate={animate}
        color={color}
        opacity={opacity}
      />
    </div>
  );
};

DraftLines.displayName = "DraftLines";

/**
 * DraftCrosshair - A single crosshair mark for pinpoint decoration
 */
interface DraftCrosshairProps {
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
  animate?: boolean;
}

export const DraftCrosshair = ({
  className,
  size = 24,
  color = "var(--color-cedar, #C1733F)",
  opacity = 0.5,
  animate = true,
}: DraftCrosshairProps) => {
  const drawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 0.6, ease: "easeOut" as const },
        opacity: { duration: 0.2 },
      },
    },
  } as const;

  return (
    <svg
      className={cn("pointer-events-none", className)}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      style={{ opacity }}
    >
      {/* Vertical line */}
      <motion.line
        x1={size / 2}
        y1="0"
        x2={size / 2}
        y2={size}
        stroke={color}
        strokeWidth="1"
        variants={animate ? drawVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />
      {/* Horizontal line */}
      <motion.line
        x1="0"
        y1={size / 2}
        x2={size}
        y2={size / 2}
        stroke={color}
        strokeWidth="1"
        variants={animate ? drawVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />
      {/* Center circle */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={size / 6}
        stroke={color}
        strokeWidth="1"
        fill="none"
        initial={animate ? { scale: 0, opacity: 0 } : undefined}
        animate={animate ? { scale: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.4, delay: 0.3 }}
      />
    </svg>
  );
};

DraftCrosshair.displayName = "DraftCrosshair";
