import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/landing/logo";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.828L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const columns = [
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Press"],
  },
  {
    title: "Solutions",
    links: ["Continuous Pentest", "Attack Paths", "AI Red Team", "Compliance"],
  },
  {
    title: "Platform",
    links: ["Agents", "Integrations", "API", "Security"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "DPA", "Trust Center"],
  },
];

export function SiteFooter() {
  return (
    <footer id="careers" className="border-t border-primary-foreground/10 bg-[#2d1f5c] text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="flex flex-col gap-4">
            <Logo variant="footer" />
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/75">
              Continuous cybersecurity for teams shipping at AI velocity.
            </p>
            <p className="font-tech text-[11px] tracking-wide text-primary-foreground/55">
              San Francisco · Remote-first
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <p className="font-tech text-[10px] tracking-[0.16em] text-primary-foreground/55 uppercase">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/15" />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-tech text-[11px] text-primary-foreground/55">
            © {new Date().getFullYear()} PurpleLens. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="rounded-md p-2 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <LinkedInIcon className="size-4" />
            </a>
            <a
              href="#twitter"
              aria-label="X / Twitter"
              className="rounded-md p-2 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <XIcon className="size-4" />
            </a>
            <a
              href="#youtube"
              aria-label="YouTube"
              className="rounded-md p-2 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <YouTubeIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
