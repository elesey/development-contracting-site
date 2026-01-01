"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * DraftButton - Button with architectural drafting decorations
 *
 * Creates buttons with technical drawing embellishments:
 * - Corner brackets
 * - Dimension lines
 * - Construction marks
 */

interface DraftButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  /** Style variant */
  variant?: "corner" | "dimension" | "blueprint";
  /** Color for drafting lines */
  accentColor?: string;
  /** As anchor element */
  href?: string;
  /** Animate decorations on hover */
  animateOnHover?: boolean;
}

export const DraftButton = React.forwardRef<
  HTMLButtonElement,
  DraftButtonProps
>(
  (
    {
      children,
      className,
      variant = "corner",
      accentColor = "var(--color-cedar, #C1733F)",
      href,
      animateOnHover = true,
      ...props
    },
    ref,
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const content = (
      <motion.span
        className={cn(
          "relative inline-flex items-center justify-center gap-2",
          "px-6 py-3 text-sm font-medium tracking-wider uppercase",
          "text-ink border-line border bg-transparent",
          "transition-colors duration-200",
          "hover:border-ink",
          className,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Corner decorations */}
        {variant === "corner" && (
          <>
            {/* Top-left corner */}
            <svg
              className="pointer-events-none absolute -top-1 -left-1"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <motion.path
                d="M 11 1 L 1 1 L 1 11"
                stroke={accentColor}
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0.4 }}
                animate={{
                  pathLength: isHovered ? 1 : 0.6,
                  opacity: isHovered ? 0.8 : 0.4,
                }}
                transition={{ duration: 0.3 }}
              />
            </svg>

            {/* Top-right corner */}
            <svg
              className="pointer-events-none absolute -top-1 -right-1"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <motion.path
                d="M 1 1 L 11 1 L 11 11"
                stroke={accentColor}
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0.4 }}
                animate={{
                  pathLength: isHovered ? 1 : 0.6,
                  opacity: isHovered ? 0.8 : 0.4,
                }}
                transition={{ duration: 0.3, delay: 0.05 }}
              />
            </svg>

            {/* Bottom-left corner */}
            <svg
              className="pointer-events-none absolute -bottom-1 -left-1"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <motion.path
                d="M 1 1 L 1 11 L 11 11"
                stroke={accentColor}
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0.4 }}
                animate={{
                  pathLength: isHovered ? 1 : 0.6,
                  opacity: isHovered ? 0.8 : 0.4,
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
            </svg>

            {/* Bottom-right corner */}
            <svg
              className="pointer-events-none absolute -right-1 -bottom-1"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <motion.path
                d="M 11 1 L 11 11 L 1 11"
                stroke={accentColor}
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0.4 }}
                animate={{
                  pathLength: isHovered ? 1 : 0.6,
                  opacity: isHovered ? 0.8 : 0.4,
                }}
                transition={{ duration: 0.3, delay: 0.15 }}
              />
            </svg>
          </>
        )}

        {/* Dimension line decorations */}
        {variant === "dimension" && (
          <>
            {/* Top dimension line */}
            <svg
              className="pointer-events-none absolute -top-3 right-2 left-2 h-2"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
              fill="none"
            >
              <motion.line
                x1="5"
                y1="4"
                x2="95"
                y2="4"
                stroke={accentColor}
                strokeWidth="0.75"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: isHovered ? 0.7 : 0.3 }}
                transition={{ duration: 0.2 }}
              />
              {/* Left arrow */}
              <motion.path
                d="M 5 4 L 10 1 L 10 7 Z"
                fill={accentColor}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: isHovered ? 0.7 : 0.3 }}
                transition={{ duration: 0.2 }}
              />
              {/* Right arrow */}
              <motion.path
                d="M 95 4 L 90 1 L 90 7 Z"
                fill={accentColor}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: isHovered ? 0.7 : 0.3 }}
                transition={{ duration: 0.2 }}
              />
              {/* Center tick */}
              <motion.line
                x1="50"
                y1="2"
                x2="50"
                y2="6"
                stroke={accentColor}
                strokeWidth="1"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: isHovered ? 0.7 : 0.3 }}
                transition={{ duration: 0.2 }}
              />
            </svg>

            {/* Bottom dimension line */}
            <svg
              className="pointer-events-none absolute right-2 -bottom-3 left-2 h-2"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
              fill="none"
            >
              <motion.line
                x1="5"
                y1="4"
                x2="95"
                y2="4"
                stroke={accentColor}
                strokeWidth="0.75"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: isHovered ? 0.7 : 0.3 }}
                transition={{ duration: 0.2 }}
              />
              <motion.path
                d="M 5 4 L 10 1 L 10 7 Z"
                fill={accentColor}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: isHovered ? 0.7 : 0.3 }}
              />
              <motion.path
                d="M 95 4 L 90 1 L 90 7 Z"
                fill={accentColor}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: isHovered ? 0.7 : 0.3 }}
              />
            </svg>
          </>
        )}

        {/* Blueprint style decorations */}
        {variant === "blueprint" && (
          <>
            {/* Corner crosshairs */}
            <svg
              className="pointer-events-none absolute -top-2 -left-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <motion.circle
                cx="8"
                cy="8"
                r="3"
                stroke={accentColor}
                strokeWidth="0.75"
                fill="none"
                initial={{ opacity: 0.3, scale: 0.8 }}
                animate={{
                  opacity: isHovered ? 0.7 : 0.3,
                  scale: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.line
                x1="8"
                y1="0"
                x2="8"
                y2="16"
                stroke={accentColor}
                strokeWidth="0.5"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: isHovered ? 0.5 : 0.2 }}
              />
              <motion.line
                x1="0"
                y1="8"
                x2="16"
                y2="8"
                stroke={accentColor}
                strokeWidth="0.5"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: isHovered ? 0.5 : 0.2 }}
              />
            </svg>

            <svg
              className="pointer-events-none absolute -right-2 -bottom-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <motion.circle
                cx="8"
                cy="8"
                r="3"
                stroke={accentColor}
                strokeWidth="0.75"
                fill="none"
                initial={{ opacity: 0.3, scale: 0.8 }}
                animate={{
                  opacity: isHovered ? 0.7 : 0.3,
                  scale: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.2, delay: 0.1 }}
              />
              <motion.line
                x1="8"
                y1="0"
                x2="8"
                y2="16"
                stroke={accentColor}
                strokeWidth="0.5"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: isHovered ? 0.5 : 0.2 }}
              />
              <motion.line
                x1="0"
                y1="8"
                x2="16"
                y2="8"
                stroke={accentColor}
                strokeWidth="0.5"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: isHovered ? 0.5 : 0.2 }}
              />
            </svg>

            {/* Edge ticks */}
            <svg
              className="pointer-events-none absolute top-1/2 -left-1 -translate-y-1/2"
              width="4"
              height="12"
              viewBox="0 0 4 12"
              fill="none"
            >
              <motion.line
                x1="0"
                y1="6"
                x2="4"
                y2="6"
                stroke={accentColor}
                strokeWidth="1"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: isHovered ? 0.6 : 0.3 }}
              />
            </svg>

            <svg
              className="pointer-events-none absolute top-1/2 -right-1 -translate-y-1/2"
              width="4"
              height="12"
              viewBox="0 0 4 12"
              fill="none"
            >
              <motion.line
                x1="0"
                y1="6"
                x2="4"
                y2="6"
                stroke={accentColor}
                strokeWidth="1"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: isHovered ? 0.6 : 0.3 }}
              />
            </svg>
          </>
        )}

        {children}
      </motion.span>
    );

    if (href) {
      return (
        <a href={href} className="inline-block">
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} {...props} className="inline-block">
        {content}
      </button>
    );
  },
);

DraftButton.displayName = "DraftButton";

/**
 * DraftLink - A link with subtle drafting-style underline animation
 */
interface DraftLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  color?: string;
}

export const DraftLink = ({
  children,
  href,
  className,
  color = "var(--color-cedar, #C1733F)",
}: DraftLinkProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={href}
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {/* Drafting-style underline */}
      <span className="pointer-events-none absolute right-0 -bottom-1 left-0 h-2 overflow-visible">
        <svg
          className="h-full w-full overflow-visible"
          viewBox="0 0 100 8"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Main line */}
          <motion.line
            x1="0"
            y1="2"
            x2="100"
            y2="2"
            stroke={color}
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          {/* Left tick */}
          <motion.line
            x1="0"
            y1="0"
            x2="0"
            y2="4"
            stroke={color}
            strokeWidth="1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.15 }}
          />
          {/* Right tick */}
          <motion.line
            x1="100"
            y1="0"
            x2="100"
            y2="4"
            stroke={color}
            strokeWidth="1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.15, delay: 0.2 }}
          />
        </svg>
      </span>
    </a>
  );
};

DraftLink.displayName = "DraftLink";
