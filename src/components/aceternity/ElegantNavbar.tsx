"use client";

import { cn } from "@/lib/utils";
import {
  IconMenu2,
  IconX,
  IconPhone,
  IconChevronDown,
} from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";

interface SubmenuItem {
  name: string;
  href: string;
  description?: string;
}

interface NavItem {
  name: string;
  href: string;
  primary?: boolean;
  secondary?: boolean;
  submenu?: SubmenuItem[];
}

interface ElegantNavbarProps {
  navItems: NavItem[];
  companyName: string;
  phone: string;
  phoneHref: string;
}

// Geometric Logo - Clean, modern design
const Logo = ({ scrolled = false }: { scrolled?: boolean }) => (
  <a href="/" className="group relative z-20 flex items-center gap-3">
    {/* Geometric Logo Mark */}
    <div className="relative flex h-10 w-10 items-center justify-center">
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full transition-transform duration-300 group-hover:scale-105"
      >
        {/* Outer frame - represents structure/building */}
        <rect
          x="4"
          y="8"
          width="32"
          height="28"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          className="text-evergreen"
          fill="none"
        />
        {/* Roof element - triangular accent */}
        <path
          d="M4 8L20 2L36 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-copper"
        />
        {/* Inner divisions - representing craftsmanship */}
        <line
          x1="20"
          y1="8"
          x2="20"
          y2="36"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-evergreen/40"
        />
        <line
          x1="4"
          y1="22"
          x2="36"
          y2="22"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-evergreen/40"
        />
        {/* D letter stylized (left quadrant) */}
        <path
          d="M8 14H14C16.2091 14 18 15.7909 18 18C18 20.2091 16.2091 22 14 22H8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-copper"
          fill="none"
        />
        {/* C letter stylized (right quadrant) */}
        <path
          d="M34 26C34 23.7909 32.2091 22 30 22H26C23.7909 22 22 23.7909 22 26V30C22 32.2091 23.7909 34 26 34H30C32.2091 34 34 32.2091 34 30"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-evergreen"
          fill="none"
        />
      </svg>
    </div>
    {/* Text - hidden on small screens */}
    <div className="hidden flex-col sm:flex">
      <span className="text-evergreen group-hover:text-copper text-lg leading-tight font-bold tracking-tight transition-colors duration-300">
        Development
      </span>
      <span className="text-slate text-[10px] tracking-[0.2em] uppercase">
        Contracting
      </span>
    </div>
  </a>
);

// Dropdown Menu Component
const DropdownMenu = ({
  items,
  isOpen,
}: {
  items: SubmenuItem[];
  isOpen: boolean;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.96 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute top-full left-0 w-56 origin-top pt-2"
      >
        {/* Invisible bridge to prevent gap hover issues */}
        <div className="absolute -top-2 left-0 h-2 w-full" />
        <div className="border-driftwood/20 rounded-xl border bg-white/95 p-2 shadow-xl shadow-black/5 backdrop-blur-xl">
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="group hover:bg-sage-mist/50 block rounded-lg px-4 py-3 transition-colors"
            >
              <span className="text-charcoal group-hover:text-evergreen block text-sm font-medium transition-colors">
                {item.name}
              </span>
              {item.description && (
                <span className="text-slate/70 mt-0.5 block text-xs">
                  {item.description}
                </span>
              )}
            </a>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// Desktop Navigation
const DesktopNav = ({
  navItems,
  scrolled,
  phone,
  phoneHref,
}: {
  navItems: NavItem[];
  scrolled: boolean;
  phone: string;
  phoneHref: string;
}) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (idx: number, hasSubmenu: boolean) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setHoveredItem(idx);
    // If this item has a submenu, open it; otherwise close any open dropdown
    if (hasSubmenu) {
      setOpenDropdown(idx);
    } else {
      setOpenDropdown(null);
    }
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to allow for gap crossing
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <div
      className={cn(
        "hidden w-full items-center justify-between transition-all duration-500 ease-out lg:flex",
        scrolled ? "px-6 py-3" : "px-8 py-5",
      )}
    >
      {/* Logo */}
      <Logo scrolled={scrolled} />

      {/* Nav Items */}
      <div className="flex items-center gap-1" onMouseLeave={handleMouseLeave}>
        {navItems.map((item, idx) => (
          <div
            key={idx}
            className="relative"
            onMouseEnter={() => handleMouseEnter(idx, !!item.submenu)}
          >
            {item.submenu ? (
              <button
                type="button"
                className="text-charcoal hover:text-evergreen relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors"
              >
                {hoveredItem === idx && (
                  <motion.div
                    layoutId="nav-hover-bg"
                    className="bg-sage-mist/60 absolute inset-0 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
                {item.submenu && (
                  <IconChevronDown
                    size={14}
                    className={cn(
                      "relative z-10 transition-transform duration-200",
                      openDropdown === idx && "rotate-180",
                    )}
                  />
                )}
              </button>
            ) : (
              <a
                href={item.href}
                className="text-charcoal hover:text-evergreen relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors"
              >
                {hoveredItem === idx && (
                  <motion.div
                    layoutId="nav-hover-bg"
                    className="bg-sage-mist/60 absolute inset-0 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            )}
            {item.submenu && (
              <DropdownMenu
                items={item.submenu}
                isOpen={openDropdown === idx}
              />
            )}
          </div>
        ))}
      </div>

      {/* CTA Area */}
      <div className="flex items-center gap-4">
        <motion.a
          href={phoneHref}
          className="text-slate hover:text-evergreen flex items-center gap-2 text-sm font-medium transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          <IconPhone size={16} className="text-copper" />
          <span>{phone}</span>
        </motion.a>

        <motion.a
          href={phoneHref}
          className="bg-copper shadow-copper/25 hover:shadow-copper/30 relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <IconPhone size={16} />
            CALL NOW
          </span>
        </motion.a>
      </div>
    </div>
  );
};

// Mobile Navigation - Fullscreen overlay with blur
const MobileNav = ({
  navItems,
  scrolled,
  phone,
  phoneHref,
}: {
  navItems: NavItem[];
  scrolled: boolean;
  phone: string;
  phoneHref: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<number | null>(null);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Flatten nav items for display (extract submenu items)
  const flattenedNavItems = navItems.flatMap((item) =>
    item.submenu ? item.submenu : [item],
  );

  return (
    <>
      {/* Mobile Header Bar */}
      <div
        className={cn(
          "flex w-full items-center justify-between transition-all duration-500 lg:hidden",
          scrolled ? "px-4 py-3" : "px-4 py-4",
        )}
      >
        <Logo scrolled={scrolled} />

        <div className="flex items-center gap-2">
          {/* Mobile Call Button */}
          <motion.a
            href={phoneHref}
            className="bg-copper flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md"
            whileTap={{ scale: 0.95 }}
          >
            <IconPhone size={16} />
            <span className="xs:inline hidden">CALL</span>
          </motion.a>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-sage-mist/50 hover:bg-sage-mist text-evergreen flex h-10 w-10 items-center justify-center rounded-full transition-colors"
            aria-label="Open navigation menu"
          >
            <IconMenu2 size={20} />
          </button>
        </div>
      </div>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[100] lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Blurred backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-evergreen/20 absolute inset-0 backdrop-blur-2xl"
            />

            {/* Animated ambient light effects */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="bg-copper/15 absolute top-[15%] left-[10%] h-[50vw] max-h-[400px] w-[50vw] max-w-[400px] rounded-full blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-sage/25 absolute right-[5%] bottom-[20%] h-[45vw] max-h-[350px] w-[45vw] max-w-[350px] rounded-full blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="bg-bone/30 absolute top-[40%] right-[20%] h-[30vw] max-h-[250px] w-[30vw] max-w-[250px] rounded-full blur-2xl"
              />
            </div>

            {/* Close button - X icon in top right */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
              transition={{ duration: 0.15, delay: 0.1 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="group absolute top-6 right-6 z-10 rounded-full bg-white/15 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/25"
              aria-label="Close navigation menu"
            >
              <IconX
                size={24}
                className="text-white transition-transform duration-200 group-hover:scale-110"
              />
            </motion.button>

            {/* Centered content container */}
            <div className="pointer-events-none relative flex h-full flex-col items-center justify-center px-6">
              {/* Navigation Links - vertically centered */}
              <nav className="pointer-events-auto text-center">
                <ul className="space-y-1">
                  {flattenedNavItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.25,
                        delay: 0.05 + index * 0.04,
                        ease: "easeOut",
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsOpen(false);
                        }}
                        className="group relative inline-block px-6 py-3"
                      >
                        <span className="group-hover:text-copper relative z-10 font-serif text-3xl font-medium text-white transition-all duration-300 sm:text-4xl">
                          {item.name}
                        </span>
                        {/* Hover underline effect */}
                        <span className="bg-copper absolute bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-full" />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Phone CTA below nav */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.25,
                  delay: 0.05 + flattenedNavItems.length * 0.04 + 0.05,
                  ease: "easeOut",
                }}
                className="pointer-events-auto mt-10"
              >
                <a
                  href={phoneHref}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="bg-copper hover:bg-copper/90 shadow-copper/30 inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <IconPhone size={20} />
                  {phone}
                </a>
              </motion.div>

              {/* Trust info at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{
                  duration: 0.25,
                  delay: 0.05 + flattenedNavItems.length * 0.04 + 0.1,
                  ease: "easeOut",
                }}
                className="absolute right-0 bottom-8 left-0 px-6"
              >
                <div className="flex flex-col items-center justify-center gap-2 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-copper h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>CCB #221238 • Licensed & Insured</span>
                  </div>
                  <span className="text-white/40">Oregon & Washington</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const ElegantNavbar = ({
  navItems,
  companyName,
  phone,
  phoneHref,
}: ElegantNavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 w-full"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
    >
      {/* Main navbar with fade edges on scroll */}
      <div className="relative">
        {/* Fade edges - always present but opacity changes */}
        <motion.div
          className="from-bone via-bone/60 pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r to-transparent"
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="from-bone via-bone/60 pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l to-transparent"
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Glass background layer */}
        <motion.div
          className="border-driftwood/10 absolute inset-0 border-b"
          animate={{
            backgroundColor: scrolled
              ? "rgba(255, 255, 255, 0.92)"
              : "rgba(250, 247, 242, 0.85)",
            backdropFilter: scrolled ? "blur(16px)" : "blur(8px)",
            boxShadow: scrolled ? "0 1px 8px rgba(0, 0, 0, 0.04)" : "none",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            WebkitBackdropFilter: scrolled ? "blur(16px)" : "blur(8px)",
          }}
        />

        {/* Main navbar container - just shrinks padding on scroll */}
        <nav
          className={cn(
            "relative z-10 mx-auto max-w-7xl transition-all duration-300 ease-out",
          )}
        >
          {/* Desktop Nav */}
          <DesktopNav
            navItems={navItems}
            scrolled={scrolled}
            phone={phone}
            phoneHref={phoneHref}
          />

          {/* Mobile Nav */}
          <MobileNav
            navItems={navItems}
            scrolled={scrolled}
            phone={phone}
            phoneHref={phoneHref}
          />
        </nav>
      </div>
    </motion.header>
  );
};

export default ElegantNavbar;
