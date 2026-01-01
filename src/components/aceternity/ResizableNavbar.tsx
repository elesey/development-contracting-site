"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX, IconPhone } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";

interface NavItem {
  name: string;
  link: string;
}

interface ResizableNavbarProps {
  navItems: NavItem[];
}

// Logo component - accepts isScrolled prop to change colors
const Logo = ({ isScrolled = true }: { isScrolled?: boolean }) => (
  <a href="#top" className="relative z-20 flex items-center gap-3 px-2 py-1">
    {/* Construction/Blueprint Logo Icon */}
    <div className="relative h-10 w-10">
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* House outline */}
        <path
          d="M20 4L4 16V36H36V16L20 4Z"
          stroke="currentColor"
          strokeWidth="2"
          className="text-cedar"
          fill="none"
        />
        {/* Roof peak accent */}
        <path
          d="M20 4L8 14H32L20 4Z"
          fill="currentColor"
          className="text-cedar/30"
        />
        {/* Door */}
        <rect
          x="16"
          y="24"
          width="8"
          height="12"
          stroke="currentColor"
          strokeWidth="1.5"
          className={isScrolled ? "text-slate-400" : "text-graphite/50"}
          fill="none"
        />
        {/* Window left */}
        <rect
          x="8"
          y="20"
          width="6"
          height="6"
          stroke="currentColor"
          strokeWidth="1.5"
          className={isScrolled ? "text-slate-400" : "text-graphite/50"}
          fill="none"
        />
        {/* Window right */}
        <rect
          x="26"
          y="20"
          width="6"
          height="6"
          stroke="currentColor"
          strokeWidth="1.5"
          className={isScrolled ? "text-slate-400" : "text-graphite/50"}
          fill="none"
        />
      </svg>
    </div>
    <div className="flex flex-col">
      <span
        className={cn(
          "text-lg leading-tight font-bold tracking-tight transition-colors duration-300",
          isScrolled ? "text-white" : "text-ink",
        )}
      >
        Development
      </span>
      <span
        className={cn(
          "text-xs tracking-widest uppercase transition-colors duration-300",
          isScrolled ? "text-slate-400" : "text-graphite/70",
        )}
      >
        Contracting
      </span>
    </div>
  </a>
);

// Desktop Navbar
const DesktopNav = ({
  navItems,
  visible,
}: {
  navItems: NavItem[];
  visible: boolean;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "blur(10px)",
        boxShadow: visible
          ? "0 4px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset"
          : "0 4px 20px rgba(0, 0, 0, 0.08)",
        width: visible ? "auto" : "100%",
        y: visible ? 10 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-2xl px-6 py-3 transition-colors duration-300 lg:flex",
        visible
          ? "border border-slate-700/50 bg-slate-900/90"
          : "bg-bone/80 border-line/50 border",
      )}
    >
      {/* Logo */}
      <Logo isScrolled={visible} />

      {/* Nav Items */}
      <div
        onMouseLeave={() => setHovered(null)}
        className="flex items-center gap-1"
      >
        {navItems.map((item, idx) => (
          <a
            key={`nav-${idx}`}
            href={item.link}
            onMouseEnter={() => setHovered(idx)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
              visible ? "text-slate-300" : "text-graphite",
            )}
          >
            {hovered === idx && (
              <motion.div
                layoutId="navbar-hover"
                className={cn(
                  "absolute inset-0 rounded-lg",
                  visible ? "bg-slate-700/60" : "bg-cedar/10",
                )}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span
              className={cn(
                "relative z-10 transition-colors duration-200",
                visible ? "hover:text-white" : "hover:text-cedar",
              )}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-3">
        <a
          href="tel:+15034707007"
          className={cn(
            "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-300",
            visible
              ? "text-slate-300 hover:text-white"
              : "text-graphite hover:text-cedar",
          )}
        >
          <IconPhone size={18} />
          <span className="hidden xl:inline">(503) 470-7007</span>
        </a>
        <a
          href="#contact"
          className="text-chalk bg-cedar hover:bg-rust shadow-cedar/25 hover:shadow-cedar/40 relative rounded-lg px-5 py-2.5 text-sm font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          Get Free Quote
        </a>
      </div>
    </motion.div>
  );
};

// Mobile Navbar
const MobileNavbar = ({
  navItems,
  visible,
}: {
  navItems: NavItem[];
  visible: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // When menu is open, always show dark theme
  const showDarkTheme = visible || isOpen;

  return (
    <motion.div
      animate={{
        backdropFilter: "blur(12px)",
        boxShadow: showDarkTheme
          ? "0 4px 30px rgba(0, 0, 0, 0.3)"
          : "0 4px 20px rgba(0, 0, 0, 0.08)",
        width: visible ? "95%" : "100%",
        borderRadius: visible ? "16px" : "0px",
        y: visible ? 10 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col transition-colors duration-300 lg:hidden",
        showDarkTheme
          ? "border border-slate-700/50 bg-slate-900/95"
          : "bg-bone/90 border-line/50 border",
      )}
    >
      {/* Header */}
      <div className="flex w-full items-center justify-between px-4 py-3">
        <Logo isScrolled={showDarkTheme} />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "p-2 transition-colors",
            showDarkTheme
              ? "text-slate-300 hover:text-white"
              : "text-graphite hover:text-ink",
          )}
        >
          {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-700/50"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-nav-${idx}`}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-slate-800/50 hover:text-white"
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile CTA */}
              <div className="mt-4 flex flex-col gap-3 border-t border-slate-700/50 pt-4">
                <a
                  href="tel:+15034707007"
                  className="flex items-center justify-center gap-2 rounded-lg bg-slate-800/50 px-4 py-3 text-base font-medium text-slate-300 transition-colors hover:text-white"
                >
                  <IconPhone size={20} />
                  (503) 470-7007
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="text-chalk bg-cedar hover:bg-rust flex items-center justify-center rounded-lg px-4 py-3 text-base font-semibold transition-colors"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const ResizableNavbar = ({ navItems }: ResizableNavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.nav
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 w-full px-4 py-2"
    >
      <DesktopNav navItems={navItems} visible={visible} />
      <MobileNavbar navItems={navItems} visible={visible} />
    </motion.nav>
  );
};

export default ResizableNavbar;
