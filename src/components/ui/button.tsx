import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Button Variants — Warm Craftsman Premium Design System
 *
 * IMPORTANT: Per frontend/AGENTS.md:
 * - "default" (primary/copper) is ONLY for CALL NOW buttons
 * - Use "outline" or "ghost" for all other buttons
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evergreen focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary CTA — CALL NOW only (Copper)
        default:
          "bg-copper text-white shadow-md hover:bg-copper/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
        // Outline button — Evergreen border + text
        outline:
          "border-2 border-evergreen bg-transparent text-evergreen hover:bg-evergreen hover:text-white",
        // Ghost/text button — Evergreen text only
        ghost: "text-evergreen hover:text-copper hover:bg-transparent",
        // Secondary surface button
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // Link style
        link: "text-evergreen underline-offset-4 hover:text-copper hover:underline p-0 h-auto",
        // Destructive
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-base",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-12 rounded-md px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
