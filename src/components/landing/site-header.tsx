"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Building2,
  ChevronDown,
  CircleDollarSign,
  Factory,
  Landmark,
  Menu,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

const industries = [
  {
    name: "Financial Services",
    href: "/industries/financial-services",
    icon: CircleDollarSign,
  },
  {
    name: "Government and Public Sector",
    href: "/industries/government",
    icon: Landmark,
  },
  {
    name: "Manufacturing",
    href: "/industries/manufacturing",
    icon: Factory,
  },
  {
    name: "Healthcare",
    href: "/industries/healthcare",
    icon: Building2,
  },
  {
    name: "Energy and Utilities",
    href: "/industries/energy",
    icon: Zap,
  },
];

const navItems = [
  { name: "Capabilities", href: "/capabilities" },
  { name: "About Us", href: "/about" },
  { name: "Industries", href: "/industries", children: industries },
  { name: "Pricing", href: "/#pricing" },
  { name: "Our Process", href: "/#process" },
];

/** On the home page use in-page hashes so Next does not remount `/`. */
function resolveHref(href: string, pathname: string) {
  if (pathname === "/" && href.startsWith("/#")) {
    return href.slice(1);
  }
  return href;
}

function IndustriesMenu({
  triggerClassName,
  onSelect,
}: {
  triggerClassName?: string;
  onSelect?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname.startsWith("/industries");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "group/industries inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm whitespace-nowrap outline-none",
          "data-popup-open:bg-muted data-popup-open:font-medium data-popup-open:text-foreground",
          isActive
            ? "bg-muted font-medium text-foreground"
            : "text-muted-foreground hover:text-foreground",
          triggerClassName
        )}
      >
        Industries
        <ChevronDown
          data-icon="inline-end"
          className="transition-transform duration-300 group-data-popup-open/industries:rotate-180"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        sideOffset={12}
        className="industry-mega relative w-max min-w-max overflow-visible rounded-none border border-hairline bg-background/90 p-1.5 shadow-[0_20px_50px_-20px_rgba(60,40,120,0.4)] ring-0 backdrop-blur-xl origin-top"
      >
        <span className="pointer-events-none absolute top-0 left-0 size-2.5 border-t border-l border-primary/60" />
        <span className="pointer-events-none absolute top-0 right-0 size-2.5 border-t border-r border-primary/60" />
        <span className="pointer-events-none absolute bottom-0 left-0 size-2.5 border-b border-l border-primary/60" />
        <span className="pointer-events-none absolute right-0 bottom-0 size-2.5 border-r border-b border-primary/60" />
        <DropdownMenuGroup className="flex flex-row gap-1">
          {industries.map((industry) => (
            <DropdownMenuItem
              key={industry.name}
              render={<a href={industry.href} />}
              nativeButton={false}
              onClick={onSelect}
              className="h-auto w-[6.75rem] flex-col items-center justify-center gap-2 rounded-none px-2 py-2.5 text-center text-xs whitespace-normal text-foreground hover:bg-muted/70 focus:bg-muted/70"
            >
              <span className="flex size-8 items-center justify-center border border-hairline text-primary">
                <industry.icon />
              </span>
              {industry.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/** Logo + Sign in + Book a Demo — scroll away with the page */
export function SiteHeaderChrome() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const demoHref = resolveHref("/#demo", pathname);

  return (
    <div className="relative z-40">
      <BlueprintFrame
        className={cn(
          "mx-auto h-20 bg-white backdrop-blur-none",
          HEADER_WIDTH
        )}
      >
        <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-4 pl-8 pr-4 sm:pl-10 sm:pr-6">
          <div className="flex items-center justify-self-start">
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
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 text-sm whitespace-nowrap">
                    {item.name}
                    {"children" in item ? <ChevronDown data-icon="inline-end" /> : null}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex h-9 items-center justify-end gap-3 justify-self-end">
            <div className="hidden h-9 items-center gap-3 lg:flex">
              <a
                href={demoHref}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Sign in
              </a>
              <Button
                size="lg"
                className="h-9 rounded-full px-4"
                render={<a href={demoHref} />}
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
                  {navItems.map((item) =>
                    "children" in item && item.children ? (
                      <div key={item.name} className="flex flex-col gap-3">
                        <p className="text-base font-medium text-foreground">
                          {item.name}
                        </p>
                        <div className="flex flex-col gap-3 pl-3">
                          {item.children.map((industry) => (
                            <a
                              key={industry.name}
                              href={industry.href}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                              onClick={() => setOpen(false)}
                            >
                              <industry.icon />
                              {industry.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        key={item.name}
                        href={resolveHref(item.href, pathname)}
                        className="text-base font-medium text-foreground"
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </a>
                    )
                  )}
                  <Button
                    size="lg"
                    className="mt-2 w-full rounded-full px-5"
                    render={<a href={demoHref} />}
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
  const pathname = usePathname();
  const [active, setActive] = React.useState<string | null>(null);

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
          <ul className="flex items-center gap-1 rounded-full border border-hairline bg-background/90 px-1 py-1.5 shadow-[0_8px_30px_-12px_rgba(60,40,120,0.25)] backdrop-blur-xl">
            {navItems.map((item) => {
              if ("children" in item && item.children) {
                return (
                  <li key={item.name}>
                    <IndustriesMenu />
                  </li>
                );
              }

              const href = resolveHref(item.href, pathname);
              const isPage =
                item.href.startsWith("/") && !item.href.includes("#");
              const isActive = isPage
                ? pathname === item.href
                : pathname === "/" && active === item.href;
              return (
                <li key={item.name}>
                  <a
                    href={href}
                    onClick={() => setActive(item.href)}
                    className={cn(
                      "block rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap",
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
