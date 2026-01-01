"use client";
import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  navItems: NavItem[];
  phoneNumber?: string;
}

export function MobileNav({
  navItems,
  phoneNumber = "(503) 470-7007",
}: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="-mr-2 p-2 hover:bg-transparent md:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-ink h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-bone border-line w-full sm:max-w-sm"
      >
        <SheetHeader className="text-left">
          <SheetTitle
            className="text-ink text-lg font-bold tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Development<span className="text-cedar">.</span>
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-8 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-ink hover:text-cedar border-line/50 border-b px-2 py-3 text-lg font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {phoneNumber && (
          <div className="border-line mt-8 border-t pt-8">
            <a
              href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
              className="text-ink hover:text-cedar flex items-center gap-3 transition-colors"
            >
              <div className="border-line flex h-10 w-10 items-center justify-center rounded border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-cedar h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium">{phoneNumber}</div>
                <div className="text-muted-foreground text-sm">
                  Mon–Fri, 7am–6pm
                </div>
              </div>
            </a>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
