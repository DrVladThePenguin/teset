"use client";

import * as React from "react";
import { ArrowUpRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BlueprintFrame } from "@/components/landing/blueprint";
import { Logo } from "@/components/landing/logo";
import { cn } from "@/lib/utils";

/** Match site vertical guides / hero grainient width */
const HEADER_WIDTH = "max-w-[80rem]";

const navItems = [
  { name: "Solutions", href: "#solutions" },
  { name: "Platform", href: "#platform" },
  { name: "Features", href: "#features" },
  { name: "Blog", href: "#blog" },
  { name: "Careers", href: "#careers" },
];

/** Logo + Sign in + Book a Demo — scroll away with the page */
export function SiteHeaderChrome() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative z-40">
      <BlueprintFrame
        className={cn(
          "mx-auto h-20 bg-white backdrop-blur-none",
          HEADER_WIDTH
        )}
      >
        <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6">
          <div className="justify-self-start">
            <Logo />
          </div>

          {/* Mirrors SitePillNav center column so logo / CTAs stay balanced */}
          <div
            className="pointer-events-none invisible hidden lg:block"
            aria-hidden
          >
            <ul className="flex items-center gap-1 px-1.5 py-1.5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <span className="block px-4 py-1.5 text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-end gap-3 justify-self-end">
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="#demo"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Sign in
              </a>
              <Button
                size="lg"
                className="h-9 rounded-full px-4"
                render={<a href="#demo" />}
                nativeButton={false}
              >
                Book a Demo
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            </div>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" className="lg:hidden" />
                }
              >
                <Menu />
                <span className="sr-only">Open menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                  <Logo />
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-6">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button
                    size="lg"
                    className="mt-2 w-full rounded-full px-5"
                    render={<a href="#demo" />}
                    nativeButton={false}
                    onClick={() => setOpen(false)}
                  >
                    Book a Demo
                    <ArrowUpRight data-icon="inline-end" />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </BlueprintFrame>
    </div>
  );
}

/** Pill nav — sticky; sits in the same center grid cell as the header */
export function SitePillNav() {
  const [active, setActive] = React.useState(navItems[0].href);

  return (
    <div className="pointer-events-none sticky top-3.5 z-50 -mt-20 mb-0 hidden h-0 w-full lg:block">
      <div
        className={cn(
          "mx-auto grid h-20 grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6",
          HEADER_WIDTH
        )}
      >
        <div aria-hidden />
        <nav className="pointer-events-auto -translate-y-3.5 justify-self-center">
          <ul className="flex items-center gap-1 rounded-full border border-hairline bg-background/90 px-1.5 py-1.5 shadow-[0_8px_30px_-12px_rgba(60,40,120,0.25)] backdrop-blur-xl">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setActive(item.href)}
                    className={cn(
                      "block rounded-full px-4 py-1.5 text-sm transition-colors",
                      isActive
                        ? "bg-muted font-medium text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div aria-hidden />
      </div>
    </div>
  );
}

/** Kept for page.tsx compatibility — chrome already has the hairline */
export function SiteHeaderSpacer() {
  return null;
}
