"use client";
import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
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

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 lg:hidden"
          aria-label="Open navigation menu"
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
      </SheetTrigger>

      <SheetContent
        side="right"
        className="border-driftwood bg-bone w-full max-w-sm border-l"
      >
        <SheetHeader className="border-driftwood border-b pb-4">
          <SheetTitle className="text-evergreen font-serif text-xl font-bold">
            {companyName}
          </SheetTitle>
        </SheetHeader>

        {/* Phone CTA - First and prominent */}
        <div className="border-driftwood border-b py-6">
          <p className="text-slate mb-3 text-sm font-medium tracking-wider uppercase">
            Call Us Now
          </p>
          <a
            href={phoneHref}
            className="bg-copper hover:bg-copper/90 mb-4 flex items-center gap-3 rounded-lg px-4 py-3 text-white transition-all"
            onClick={() => setIsOpen(false)}
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
            <span className="text-lg font-semibold">{phone}</span>
          </a>
          <p className="text-slate text-sm">Available Mon–Sat, 7am–6pm</p>
        </div>

        {/* Navigation Links */}
        <nav className="py-4">
          <p className="text-slate mb-3 text-sm font-medium tracking-wider uppercase">
            Menu
          </p>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center rounded-md px-3 py-3 text-base font-medium transition-colors ${
                    item.secondary
                      ? "text-slate hover:bg-sage-mist hover:text-charcoal"
                      : "text-charcoal hover:bg-sage-mist hover:text-evergreen"
                  }`}
                >
                  {item.name}
                  {item.primary && (
                    <span className="bg-evergreen/10 text-evergreen ml-2 rounded px-2 py-0.5 text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Trust Footer */}
        <div className="border-driftwood bg-warm-stone absolute right-0 bottom-0 left-0 border-t p-4">
          <div className="text-slate flex items-center justify-between text-xs">
            <span>{ccbDisplay}</span>
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-brass h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Licensed • Bonded • Insured
            </span>
          </div>
          <p className="text-slate/70 mt-2 text-center text-xs">
            {serviceArea}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
