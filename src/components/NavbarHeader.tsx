import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { useRef, useState } from "react";

interface NavItem {
  name: string;
  href: string;
  primary?: boolean;
  secondary?: boolean;
}

interface NavbarHeaderProps {
  companyName: string;
  phone: string;
  phoneHref: string;
  navItems: NavItem[];
}

export default function NavbarHeader({
  companyName,
  phone,
  phoneHref,
  navItems,
}: NavbarHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.div
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 w-full"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
    >
      {/* Glass navbar container */}
      <motion.nav
        className={cn(
          "mx-auto transition-all duration-500 ease-out",
          scrolled
            ? "shadow-evergreen/5 mx-4 mt-3 max-w-6xl rounded-2xl border border-white/30 shadow-2xl lg:mx-auto"
            : "border-driftwood/10 border-b",
        )}
        animate={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.75)"
            : "rgba(245, 243, 239, 0.9)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(12px)",
        }}
        transition={{ duration: 0.3 }}
        style={{
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(12px)",
        }}
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-500",
            scrolled ? "px-6 py-3" : "max-w-7xl px-6 py-5 lg:px-8",
          )}
        >
          {/* Logo */}
          <motion.a
            href="/"
            className="group relative z-20 flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-evergreen group-hover:text-copper font-serif text-xl font-bold tracking-tight transition-colors lg:text-2xl">
              {companyName}
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div
            className="hidden items-center gap-1 lg:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-charcoal hover:text-evergreen relative px-4 py-2 text-sm font-medium transition-colors"
                onMouseEnter={() => setHovered(idx)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {hovered === idx && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="bg-sage-mist/60 absolute inset-0 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* CTA Area - Desktop */}
          <div className="hidden items-center gap-4 lg:flex">
            <motion.a
              href={phoneHref}
              className="text-slate hover:text-evergreen flex items-center gap-2 text-sm font-medium transition-colors"
              whileHover={{ scale: 1.05, x: -2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {phone}
            </motion.a>

            <motion.a
              href={phoneHref}
              className="bg-copper shadow-copper/25 relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -12px rgba(184, 115, 51, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="from-copper to-copper absolute inset-0 bg-gradient-to-r via-amber-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                CALL NOW
              </span>
            </motion.a>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-3 lg:hidden">
            <motion.a
              href={phoneHref}
              className="bg-copper flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1.5 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              CALL
            </motion.a>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-sage-mist/50 text-evergreen hover:bg-sage-mist flex h-10 w-10 items-center justify-center rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <IconX className="h-5 w-5" />
              ) : (
                <IconMenu2 className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border-driftwood/20 overflow-hidden border-t lg:hidden"
            >
              <div className="px-4 py-6">
                {/* Phone CTA */}
                <motion.a
                  href={phoneHref}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-copper mb-4 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-white shadow-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="font-semibold">{phone}</span>
                </motion.a>

                {/* Nav Links */}
                <div className="space-y-1">
                  {navItems.map((item, idx) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                        item.secondary
                          ? "text-slate hover:bg-sage-mist/50 hover:text-evergreen"
                          : "text-charcoal hover:bg-sage-mist/50 hover:text-evergreen",
                      )}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + idx * 0.05 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
  );
}
