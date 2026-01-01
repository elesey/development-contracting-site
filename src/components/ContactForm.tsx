"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual form handler
    await new Promise((resolve) => setTimeout(resolve, 1000));

    e.currentTarget.reset();
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={cn("bg-graphite rounded p-8 md:p-10", className)}>
        <div className="py-8 text-center">
          <div className="bg-cedar/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-cedar h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <h3 className="text-chalk mb-2 text-xl font-semibold">Thank you!</h3>
          <p className="text-chalk/70">We'll be in touch within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("bg-graphite rounded p-8 md:p-10", className)}>
      <h3 className="text-chalk mb-6 text-xl font-semibold">
        Request a Free Estimate
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-chalk/70">
            Name
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="bg-ink border-chalk/20 text-chalk placeholder:text-chalk/30 focus-visible:ring-cedar focus-visible:border-cedar h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-chalk/70">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="your@email.com"
            className="bg-ink border-chalk/20 text-chalk placeholder:text-chalk/30 focus-visible:ring-cedar focus-visible:border-cedar h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-chalk/70">
            Phone
          </Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(503) 555-0123"
            className="bg-ink border-chalk/20 text-chalk placeholder:text-chalk/30 focus-visible:ring-cedar focus-visible:border-cedar h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="project" className="text-chalk/70">
            Tell us about your project
          </Label>
          <Textarea
            id="project"
            name="project"
            rows={4}
            placeholder="Briefly describe your project..."
            className="bg-ink border-chalk/20 text-chalk placeholder:text-chalk/30 focus-visible:ring-cedar focus-visible:border-cedar resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-cedar text-chalk hover:bg-rust h-auto w-full rounded py-6 text-sm font-medium tracking-wider uppercase transition-colors disabled:opacity-70"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </span>
          ) : (
            "Submit Request"
          )}
        </Button>
      </form>
    </div>
  );
}
