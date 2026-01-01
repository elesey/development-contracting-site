"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * BlueprintBackground - Animated architectural blueprint background
 *
 * Creates a subtle, animated blueprint grid that evokes residential
 * home construction plans. Features:
 * - Fine orthogonal grid (major + minor lines)
 * - Animated corner registration marks
 * - Dimension tick marks along edges
 * - Draw-in animation on mount
 */

interface BlueprintBackgroundProps {
  className?: string;
  /** Dark variant for dark backgrounds */
  variant?: "light" | "dark";
  /** Grid spacing in pixels */
  gridSize?: number;
  /** Number of minor divisions between major lines */
  minorDivisions?: number;
  /** Overall opacity multiplier */
  opacity?: number;
  /** Show corner registration marks */
  showCornerMarks?: boolean;
  /** Show dimension ticks along edges */
  showDimensionTicks?: boolean;
}

export const BlueprintBackground = ({
  className,
  variant = "light",
  gridSize = 80,
  minorDivisions = 4,
  opacity = 1,
  showCornerMarks = true,
  showDimensionTicks = true,
}: BlueprintBackgroundProps) => {
  // Color palettes for light and dark modes
  const colors = {
    light: {
      minorGrid: "rgba(41, 98, 155, 0.06)",
      majorGrid: "rgba(41, 98, 155, 0.12)",
      cornerMark: "rgba(41, 98, 155, 0.25)",
      dimensionTick: "rgba(41, 98, 155, 0.15)",
      accent: "rgba(193, 115, 63, 0.2)",
    },
    dark: {
      minorGrid: "rgba(147, 197, 253, 0.04)",
      majorGrid: "rgba(147, 197, 253, 0.08)",
      cornerMark: "rgba(147, 197, 253, 0.2)",
      dimensionTick: "rgba(147, 197, 253, 0.12)",
      accent: "rgba(193, 115, 63, 0.25)",
    },
  };

  const c = colors[variant];
  const minorSize = gridSize / minorDivisions;

  // Corner mark size
  const cornerSize = 60;
  const cornerOffset = 24;

  // Dimension tick configuration
  const tickLength = 8;
  const tickSpacing = gridSize;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      style={{ opacity }}
    >
      {/* Base grid pattern - fades in */}
      <motion.svg
        className="absolute inset-0 h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <defs>
          {/* Minor grid pattern */}
          <pattern
            id={`blueprint-minor-${variant}`}
            width={minorSize}
            height={minorSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${minorSize} 0 L 0 0 0 ${minorSize}`}
              fill="none"
              stroke={c.minorGrid}
              strokeWidth="0.5"
            />
          </pattern>

          {/* Major grid pattern */}
          <pattern
            id={`blueprint-major-${variant}`}
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke={c.majorGrid}
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* Render grids */}
        <rect
          width="100%"
          height="100%"
          fill={`url(#blueprint-minor-${variant})`}
        />
        <rect
          width="100%"
          height="100%"
          fill={`url(#blueprint-major-${variant})`}
        />
      </motion.svg>

      {/* Corner registration marks - draw in animation */}
      {showCornerMarks && (
        <svg className="absolute inset-0 h-full w-full">
          {/* Top-left corner */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.path
              d={`M ${cornerOffset} ${cornerOffset + cornerSize} L ${cornerOffset} ${cornerOffset} L ${cornerOffset + cornerSize} ${cornerOffset}`}
              fill="none"
              stroke={c.cornerMark}
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            />
            {/* Small circle at corner */}
            <motion.circle
              cx={cornerOffset}
              cy={cornerOffset}
              r="3"
              fill="none"
              stroke={c.accent}
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.2 }}
            />
          </motion.g>

          {/* Top-right corner */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <motion.path
              d={`M calc(100% - ${cornerOffset + cornerSize}px) ${cornerOffset} L calc(100% - ${cornerOffset}px) ${cornerOffset} L calc(100% - ${cornerOffset}px) ${cornerOffset + cornerSize}`}
              fill="none"
              stroke={c.cornerMark}
              strokeWidth="1.5"
              style={{
                d: `path("M ${cornerOffset + cornerSize} ${cornerOffset} L ${cornerOffset} ${cornerOffset} L ${cornerOffset} ${cornerOffset + cornerSize}")`,
              }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            />
          </motion.g>

          {/* Bottom-left corner */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <motion.path
              d={`M ${cornerOffset} calc(100% - ${cornerOffset + cornerSize}px) L ${cornerOffset} calc(100% - ${cornerOffset}px) L ${cornerOffset + cornerSize} calc(100% - ${cornerOffset}px)`}
              fill="none"
              stroke={c.cornerMark}
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            />
          </motion.g>

          {/* Bottom-right corner */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <motion.path
              d={`M calc(100% - ${cornerOffset}px) calc(100% - ${cornerOffset + cornerSize}px) L calc(100% - ${cornerOffset}px) calc(100% - ${cornerOffset}px) L calc(100% - ${cornerOffset + cornerSize}px) calc(100% - ${cornerOffset}px)`}
              fill="none"
              stroke={c.cornerMark}
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
            />
            {/* Small circle at corner */}
            <motion.circle
              cx="calc(100% - 24px)"
              cy="calc(100% - 24px)"
              r="3"
              fill="none"
              stroke={c.accent}
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.4 }}
            />
          </motion.g>
        </svg>
      )}

      {/* Dimension ticks - staggered fade in */}
      {showDimensionTicks && (
        <svg className="absolute inset-0 h-full w-full overflow-visible">
          {/* Top edge ticks */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.line
              key={`top-tick-${i}`}
              x1={cornerOffset + tickSpacing * (i + 1)}
              y1={cornerOffset - 2}
              x2={cornerOffset + tickSpacing * (i + 1)}
              y2={cornerOffset + tickLength}
              stroke={c.dimensionTick}
              strokeWidth={i % 4 === 0 ? "1.5" : "0.75"}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.5 + i * 0.03,
                ease: "easeOut",
              }}
              style={{ transformOrigin: "top" }}
            />
          ))}

          {/* Left edge ticks */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.line
              key={`left-tick-${i}`}
              x1={cornerOffset - 2}
              y1={cornerOffset + tickSpacing * (i + 1)}
              x2={cornerOffset + tickLength}
              y2={cornerOffset + tickSpacing * (i + 1)}
              stroke={c.dimensionTick}
              strokeWidth={i % 4 === 0 ? "1.5" : "0.75"}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.6 + i * 0.03,
                ease: "easeOut",
              }}
              style={{ transformOrigin: "left" }}
            />
          ))}

          {/* Section marker circle (like A-A section cut reference) */}
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.0 }}
          >
            <circle
              cx={cornerOffset + tickSpacing * 3}
              cy={cornerOffset + tickLength + 20}
              r="10"
              fill="none"
              stroke={c.dimensionTick}
              strokeWidth="1"
            />
            <text
              x={cornerOffset + tickSpacing * 3}
              y={cornerOffset + tickLength + 24}
              textAnchor="middle"
              fontSize="8"
              fill={c.dimensionTick}
              fontFamily="monospace"
            >
              A
            </text>
          </motion.g>
        </svg>
      )}

      {/* Subtle center lines (architectural section reference) */}
      <motion.svg
        className="absolute inset-0 h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* Horizontal center line */}
        <line
          x1="10%"
          y1="50%"
          x2="90%"
          y2="50%"
          stroke={c.minorGrid}
          strokeWidth="0.5"
          strokeDasharray="20 10 5 10"
        />
        {/* Vertical center line */}
        <line
          x1="50%"
          y1="10%"
          x2="50%"
          y2="90%"
          stroke={c.minorGrid}
          strokeWidth="0.5"
          strokeDasharray="20 10 5 10"
        />
      </motion.svg>
    </div>
  );
};

BlueprintBackground.displayName = "BlueprintBackground";
