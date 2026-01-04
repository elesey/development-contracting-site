"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";

interface NavItem {
  name: string;
  href: string;
  primary?: boolean;
  secondary?: boolean;
}

interface MobileNavProps {
  navItems: NavItem[];
  companyName: string;
  phone: string;
  phoneHref: string;
  ccbDisplay: string;
  serviceArea: string;
}

export function MobileNav({
  navItems,
  companyName,
  phone,
  phoneHref,
  ccbDisplay,
  serviceArea,
}: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  // Lock body scroll when menu is open
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

  return (
    <>
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-white/10 lg:hidden"
        aria-label="Open navigation menu"
        onClick={() => setIsOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Button>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop with blur - clicking closes menu */}
        <div
          className={`bg-evergreen/30 absolute inset-0 backdrop-blur-xl transition-all duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsOpen(false);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Close menu"
        />

        {/* Animated light particles/glow effect */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className={`bg-copper/20 absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-3xl transition-all duration-1000 ${
              isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          />
          <div
            className={`bg-sage/30 absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full blur-3xl transition-all delay-200 duration-1000 ${
              isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
          />
          <div
            className={`bg-bone/20 absolute top-1/2 right-1/3 h-64 w-64 rounded-full blur-2xl transition-all delay-300 duration-1000 ${
              isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
          />
        </div>

        {/* Close button - X icon */}
        <button
          onClick={() => setIsOpen(false)}
          className={`group absolute top-6 right-6 z-10 rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 ${
            isOpen
              ? "scale-100 rotate-0 opacity-100"
              : "scale-75 rotate-90 opacity-0"
          }`}
          style={{ transitionDelay: isOpen ? "300ms" : "0ms" }}
          aria-label="Close navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white transition-transform duration-200 group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Centered content */}
        <div className="relative flex h-full flex-col items-center justify-center px-6">
          {/* Navigation Links - vertically centered */}
          <nav className="text-center">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li
                  key={item.href}
                  className={`transition-all duration-500 ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${150 + index * 75}ms` : "0ms",
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group hover:text-copper relative inline-block px-6 py-3 font-serif text-3xl font-medium text-white transition-all duration-300 sm:text-4xl"
                  >
                    <span className="relative z-10">{item.name}</span>
                    {/* Hover underline effect */}
                    <span className="bg-copper absolute bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Phone CTA */}
          <div
            className={`mt-12 transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: isOpen
                ? `${150 + navItems.length * 75 + 100}ms`
                : "0ms",
            }}
          >
            <a
              href={phoneHref}
              onClick={() => setIsOpen(false)}
              className="bg-copper hover:bg-copper/90 shadow-copper/25 inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
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
              {phone}
            </a>
          </div>

          {/* Trust badges at bottom */}
          <div
            className={`absolute right-0 bottom-8 left-0 px-6 transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: isOpen
                ? `${150 + navItems.length * 75 + 200}ms`
                : "0ms",
            }}
          >
            <div className="flex flex-col items-center justify-center gap-4 text-sm text-white/70 sm:flex-row">
              <span className="flex items-center gap-2">
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
                {ccbDisplay}
              </span>
              <span className="hidden sm:block">•</span>
              <span>{serviceArea}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
