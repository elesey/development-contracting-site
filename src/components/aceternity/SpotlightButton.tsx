"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface SpotlightButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const SpotlightButton = ({
  children,
  className,
  href,
}: SpotlightButtonProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  const spotlightBackground = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}px ${y}px, hsl(28, 65%, 52%) 0%, transparent 60%)`,
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      className={cn(
        "group border-primary/30 bg-secondary/50 text-foreground hover:border-primary/60 relative overflow-hidden rounded-sm border px-8 py-4 font-sans text-sm font-medium tracking-widest uppercase transition-colors",
        className,
      )}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-30"
        style={{
          background: spotlightBackground,
        }}
      />
      <span className="relative z-10">{children}</span>
    </Component>
  );
};
