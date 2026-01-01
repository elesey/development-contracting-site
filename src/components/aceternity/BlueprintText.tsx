"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * BlueprintText - Text with architectural drafting embellishments
 *
 * Adds dimension lines, measurement marks, or construction guides
 * around text to create a technical drawing aesthetic.
 */

interface BlueprintTextProps {
  children: React.ReactNode;
  className?: string;
  /** Style of decoration: 'dimension', 'bracket', 'underline', 'annotate' */
  variant?: "dimension" | "bracket" | "underline" | "annotate";
  /** Optional label text (for annotate variant) */
  label?: string;
  /** Line color */
  color?: string;
  /** Animate on mount */
  animate?: boolean;
  /** As which element to render */
  as?: "span" | "div" | "h1" | "h2" | "h3" | "p";
}

export const BlueprintText = ({
  children,
  className,
  variant = "underline",
  label,
  color = "var(--color-cedar, #C1733F)",
  animate = true,
  as: Component = "span",
}: BlueprintTextProps) => {
  const lineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  } as const;

  const fadeInVariants = {
    hidden: { opacity: 0, y: 4 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.4 },
    },
  } as const;

  const drawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 0.8, ease: "easeInOut" as const },
        opacity: { duration: 0.2 },
      },
    },
  } as const;

  if (variant === "underline") {
    return (
      <Component className={cn("relative inline-block", className)}>
        {children}
        {/* Dimension-style underline with end ticks */}
        <span className="pointer-events-none absolute right-0 -bottom-2 left-0 h-4">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 16"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Main underline */}
            <motion.line
              x1="0"
              y1="4"
              x2="100"
              y2="4"
              stroke={color}
              strokeWidth="1"
              strokeOpacity="0.6"
              variants={animate ? lineVariants : undefined}
              initial={animate ? "hidden" : undefined}
              animate={animate ? "visible" : undefined}
              style={{ transformOrigin: "left" }}
            />
            {/* Left tick */}
            <motion.line
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke={color}
              strokeWidth="1.5"
              strokeOpacity="0.8"
              initial={animate ? { scaleY: 0 } : undefined}
              animate={animate ? { scaleY: 1 } : undefined}
              transition={{ duration: 0.3, delay: 0.6 }}
            />
            {/* Right tick */}
            <motion.line
              x1="100"
              y1="0"
              x2="100"
              y2="8"
              stroke={color}
              strokeWidth="1.5"
              strokeOpacity="0.8"
              initial={animate ? { scaleY: 0 } : undefined}
              animate={animate ? { scaleY: 1 } : undefined}
              transition={{ duration: 0.3, delay: 0.8 }}
            />
          </svg>
        </span>
      </Component>
    );
  }

  if (variant === "bracket") {
    return (
      <Component
        className={cn("relative inline-flex items-center gap-2", className)}
      >
        {/* Left bracket */}
        <svg
          width="12"
          height="32"
          viewBox="0 0 12 32"
          fill="none"
          className="flex-shrink-0"
        >
          <motion.path
            d="M 11 1 L 3 1 L 3 31 L 11 31"
            stroke={color}
            strokeWidth="1"
            strokeOpacity="0.6"
            fill="none"
            variants={animate ? drawVariants : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
        </svg>

        <span>{children}</span>

        {/* Right bracket */}
        <svg
          width="12"
          height="32"
          viewBox="0 0 12 32"
          fill="none"
          className="flex-shrink-0"
        >
          <motion.path
            d="M 1 1 L 9 1 L 9 31 L 1 31"
            stroke={color}
            strokeWidth="1"
            strokeOpacity="0.6"
            fill="none"
            variants={animate ? drawVariants : undefined}
            initial={animate ? "hidden" : undefined}
            animate={animate ? "visible" : undefined}
          />
        </svg>
      </Component>
    );
  }

  if (variant === "dimension") {
    return (
      <Component className={cn("relative inline-block", className)}>
        {/* Top dimension line */}
        <span className="pointer-events-none absolute -top-4 right-0 left-0 h-4">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 16"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Left extension line */}
            <motion.line
              x1="2"
              y1="4"
              x2="2"
              y2="16"
              stroke={color}
              strokeWidth="0.5"
              strokeOpacity="0.4"
              variants={animate ? drawVariants : undefined}
              initial={animate ? "hidden" : undefined}
              animate={animate ? "visible" : undefined}
            />
            {/* Right extension line */}
            <motion.line
              x1="98"
              y1="4"
              x2="98"
              y2="16"
              stroke={color}
              strokeWidth="0.5"
              strokeOpacity="0.4"
              variants={animate ? drawVariants : undefined}
              initial={animate ? "hidden" : undefined}
              animate={animate ? "visible" : undefined}
            />
            {/* Main dimension line */}
            <motion.line
              x1="2"
              y1="6"
              x2="98"
              y2="6"
              stroke={color}
              strokeWidth="0.5"
              strokeOpacity="0.5"
              variants={animate ? lineVariants : undefined}
              initial={animate ? "hidden" : undefined}
              animate={animate ? "visible" : undefined}
            />
            {/* Left arrow */}
            <motion.path
              d="M 2 6 L 8 3 L 8 9 Z"
              fill={color}
              fillOpacity="0.5"
              initial={animate ? { scale: 0 } : undefined}
              animate={animate ? { scale: 1 } : undefined}
              transition={{ duration: 0.3, delay: 0.5 }}
            />
            {/* Right arrow */}
            <motion.path
              d="M 98 6 L 92 3 L 92 9 Z"
              fill={color}
              fillOpacity="0.5"
              initial={animate ? { scale: 0 } : undefined}
              animate={animate ? { scale: 1 } : undefined}
              transition={{ duration: 0.3, delay: 0.6 }}
            />
          </svg>
        </span>
        {children}
      </Component>
    );
  }

  if (variant === "annotate") {
    return (
      <Component className={cn("relative inline-block", className)}>
        {children}
        {/* Annotation callout */}
        <span className="pointer-events-none absolute top-0 -right-4 -translate-y-1/2">
          <svg
            width="60"
            height="40"
            viewBox="0 0 60 40"
            fill="none"
            className="overflow-visible"
          >
            {/* Leader line */}
            <motion.path
              d="M 0 30 L 20 20 L 55 20"
              stroke={color}
              strokeWidth="0.75"
              strokeOpacity="0.5"
              fill="none"
              variants={animate ? drawVariants : undefined}
              initial={animate ? "hidden" : undefined}
              animate={animate ? "visible" : undefined}
            />
            {/* Callout dot */}
            <motion.circle
              cx="0"
              cy="30"
              r="2"
              fill={color}
              fillOpacity="0.6"
              initial={animate ? { scale: 0 } : undefined}
              animate={animate ? { scale: 1 } : undefined}
              transition={{ duration: 0.2, delay: 0.6 }}
            />
          </svg>
          {label && (
            <motion.span
              className="absolute top-1 left-6 font-mono text-[10px] tracking-wider whitespace-nowrap"
              style={{ color, opacity: 0.7 }}
              variants={animate ? fadeInVariants : undefined}
              initial={animate ? "hidden" : undefined}
              animate={animate ? "visible" : undefined}
            >
              {label}
            </motion.span>
          )}
        </span>
      </Component>
    );
  }

  return <Component className={className}>{children}</Component>;
};

BlueprintText.displayName = "BlueprintText";

/**
 * SectionMarker - An architectural section/detail marker (circle with number/letter)
 */
interface SectionMarkerProps {
  marker: string;
  className?: string;
  size?: number;
  color?: string;
  animate?: boolean;
}

export const SectionMarker = ({
  marker,
  className,
  size = 32,
  color = "var(--color-cedar, #C1733F)",
  animate = true,
}: SectionMarkerProps) => {
  return (
    <motion.div
      className={cn(
        "inline-flex items-center justify-center rounded-full border",
        className,
      )}
      style={{
        width: size,
        height: size,
        borderColor: color,
        color: color,
      }}
      initial={animate ? { scale: 0, opacity: 0 } : undefined}
      animate={animate ? { scale: 1, opacity: 1 } : undefined}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <span
        className="font-mono text-xs font-medium"
        style={{ fontSize: size * 0.4 }}
      >
        {marker}
      </span>
    </motion.div>
  );
};

SectionMarker.displayName = "SectionMarker";
