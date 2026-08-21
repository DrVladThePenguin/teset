"use client";

import * as React from "react";
import {
  ChevronRight,
  Crosshair,
  FileCheck,
  Search,
  Wrench,
} from "lucide-react";

import { SectionRule } from "@/components/landing/blueprint";
import { InsetGrainient } from "@/components/landing/inset-grainient";
import { TechLabel } from "@/components/landing/tech-label";
import { cn } from "@/lib/utils";

const stages = [
  {
    id: "discover",
    label: "Discover",
    icon: Search,
    subheading: "Discover what's exposed before attackers do by:",
    points: [
      {
        title: "Discovering All Your Internet Facing Assets Before Attackers",
      },
      {
        title:
          "Identifying Shadow IT & Unknown Cloud Services Before They Create Risk",
      },
      {
        title: "Finding Leaked or Exposed Data Before It Causes Damage",
      },
    ],
  },
  {
    id: "detect",
    label: "Detect",
    icon: Crosshair,
    subheading: "Continuously detect new risks as your business changes by:",
    points: [
      {
        title: "Detect New Vulnerabilities as They Appear",
        body: "Continuously monitor your systems for newly discovered weaknesses so issues are caught early.",
      },
      {
        title:
          "Detect Vendor & Third-Party Cyber Risks Before They Impact Your Business",
        body: "Check your suppliers' and partners' exposure to prevent risks from flowing into your organisation.",
      },
      {
        title:
          "Detect Cloud & Application Misconfigurations Before They Become Incidents",
        body: "Identify unsafe settings or risky access permissions that could open the door to attackers.",
      },
    ],
  },
  {
    id: "test",
    label: "Test",
    icon: FileCheck,
    subheading:
      "Continuously test your security like a real attacker would by:",
    points: [
      {
        title: "Test Your Systems Like a Real Attacker, Not a Checklist",
        body: "Simulate safe but realistic attacks to show how hackers would enter and what damage they could do.",
      },
      {
        title:
          "Validate Which Vulnerabilities Actually Matter to Your Business",
        body: "Instead of overwhelming lists, Purplelens shows which issues can truly be exploited — helping your team focus.",
      },
      {
        title: "Validate That Your Security Controls Actually Work",
        body: "Confirm that your firewalls, endpoint tools, and security configurations are working as expected.",
      },
    ],
  },
  {
    id: "fix",
    label: "Fix",
    icon: Wrench,
    subheading:
      "Continuously fix faster with clear, evidence-based guidance by:",
    points: [
      {
        title: "Get Clear, Non-Technical Guidance on What to Fix First",
        body: "Purplelens provides prioritized, easy-to-understand steps based on real exploit evidence.",
      },
      {
        title: "Evidence Based Remediation Reports That Prove Risk Is Fixed",
        body: "Visual proof (like screenshots, attack paths, and examples) helps IT teams quickly understand the issue.",
      },
      {
        title: "Track Progress with a Simple Risk Dashboard",
        body: "See risk levels go down as fixes are applied — no jargon, just a clear picture of improvement.",
      },
      {
        title: "Compliance-Ready Reporting",
        body: "Generate clean, audit-ready reports for customers, partners, or certification needs.",
      },
    ],
  },
] as const;

function handwrittenPath(points: { x: number; y: number }[]) {
  if (points.length < 2) return "";
  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? 0 : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}

function returnInkPoints(sx: number, sy: number, ex: number, ey: number) {
  const steps = 22;
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const rise = 1 - t;
    const sweep = Math.sin(t * Math.PI);
    const x =
      sx +
      (ex - sx) * t -
      sweep * 38 +
      Math.sin(t * 6.2 + 0.4) * 3.4 * sweep +
      Math.sin(t * 2.7 + 1.6) * 1.8;
    const y =
      sy +
      (ey - sy) * (t * t * (3 - 2 * t)) +
      Math.sin(t * 4.8 + 0.3) * 5.5 * sweep +
      Math.sin(t * 2.2 + 2.0) * 2.4 * rise;
    points.push({ x, y });
  }
  points[0] = { x: sx, y: sy };
  points[points.length - 1] = { x: ex, y: ey };
  return points;
}

function arrowFlicks(from: { x: number; y: number }, tip: { x: number; y: number }) {
  const ang = Math.atan2(tip.y - from.y, tip.x - from.x);
  const wing = (spread: number, len: number, bend: number) => {
    const a = ang + spread;
    const mx = tip.x + Math.cos(a) * len * 0.42 + Math.cos(a + bend) * 3;
    const my = tip.y + Math.sin(a) * len * 0.42 + Math.sin(a + bend) * 3;
    const tx = tip.x + Math.cos(a) * len;
    const ty = tip.y + Math.sin(a) * len;
    return `M ${tip.x.toFixed(1)} ${tip.y.toFixed(1)} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${tx.toFixed(1)} ${ty.toFixed(1)}`;
  };
  return `${wing(2.52, 22, 0.18)} ${wing(-2.38, 19, -0.22)}`;
}

function SketchDownArrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 36 44"
      className="mx-auto h-11 w-9 text-primary-foreground/80"
      fill="none"
    >
      <path
        d="M18.1 1.6 C 16.2 8.4, 20.8 12.2, 17.6 19.4 C 14.8 26.2, 20.4 30.1, 18.8 38.6"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.8 38.6 Q 14.2 34.8 9.6 32.2 M18.8 38.6 Q 24.4 34.1 29.2 31.4"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SketchReturn({
  start,
  end,
  size,
}: {
  start: { x: number; y: number };
  end: { x: number; y: number };
  size: { w: number; h: number };
}) {
  if (size.w < 8 || size.h < 8) return null;

  const points = returnInkPoints(start.x, start.y, end.x, end.y);
  const d = handwrittenPath(points);
  const prev = points[Math.max(0, points.length - 3)];
  const flicks = arrowFlicks(prev, end);

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${size.w} ${size.h}`}
      width={size.w}
      height={size.h}
      className="pointer-events-none absolute top-0 left-0 hidden text-primary-foreground/80 sm:block"
      fill="none"
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={flicks}
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProcessFlow({
  showHeading = false,
  includeHero = false,
}: {
  showHeading?: boolean;
  includeHero?: boolean;
}) {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const discoverHeadRef = React.useRef<HTMLSpanElement>(null);
  const fixHeadRef = React.useRef<HTMLSpanElement>(null);
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [loop, setLoop] = React.useState<{
    start: { x: number; y: number };
    end: { x: number; y: number };
    size: { w: number; h: number };
  } | null>(null);

  React.useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % stages.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [paused]);

  React.useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const discover = discoverHeadRef.current;
    const fix = fixHeadRef.current;
    if (!wrap || !discover || !fix) return;

    const measure = () => {
      const box = wrap.getBoundingClientRect();
      const d = discover.getBoundingClientRect();
      const f = fix.getBoundingClientRect();
      setLoop({
        size: { w: box.width, h: box.height },
        start: {
          x: f.left - box.left,
          y: f.top - box.top + f.height / 2,
        },
        end: {
          x: d.left - box.left,
          y: d.top - box.top + d.height / 2,
        },
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(wrap);
    observer.observe(discover);
    observer.observe(fix);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [active]);

  return (
    <section
      id="process"
      className={cn(
        "relative overflow-hidden text-primary-foreground",
        includeHero
          ? "-mt-px pb-20 pt-0 lg:pb-28"
          : "border-y border-hairline py-12 sm:py-16 lg:py-24"
      )}
    >
      <InsetGrainient
        wash={includeHero ? "hero" : "metrics"}
        className="overflow-hidden"
      />
      {includeHero ? (
        <div
          className="pointer-events-none absolute top-0 right-[max(0px,calc(50%-40rem))] left-[max(0px,calc(50%-40rem))] h-px bg-white/70"
          aria-hidden
        />
      ) : null}
      <div
        className={cn(
          "relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:gap-12 sm:px-6",
          includeHero && "pt-16 sm:pt-20 lg:pt-28"
        )}
      >
        {includeHero ? (
          <div className="flex max-w-2xl flex-col gap-5">
            <TechLabel className="text-primary-foreground/75">
              [ Our Process ]
            </TechLabel>
            <h1 className="text-3xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
              Our Process
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Discover, detect, test, and fix — then start again. The cycle
              never stops, so exposure windows stay closed as your environment
              changes.
            </p>
          </div>
        ) : null}
        {showHeading ? (
          <div className="flex flex-col gap-5">
            <SectionRule
              step="05"
              label="Our Process"
              className="[&_span]:text-primary-foreground/70"
              lineClassName="bg-primary-foreground/42"
            />
            <h2 className="text-2xl font-medium tracking-tight sm:text-4xl">
              Our Process
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              Discover, detect, test, and fix — then start again. The cycle
              never stops, so exposure windows stay closed as your environment
              changes.
            </p>
          </div>
        ) : null}

        <div
          ref={wrapRef}
          className="relative mx-auto w-full max-w-3xl overflow-visible sm:pl-8 lg:pl-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {loop ? (
            <SketchReturn
              start={loop.start}
              end={loop.end}
              size={loop.size}
            />
          ) : null}

          <div className="flex flex-col">
            {stages.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === active;
              return (
                <div key={item.id} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className={cn(
                      "relative flex w-full flex-col border text-left backdrop-blur-md transition-colors",
                      isActive
                        ? "border-white/60 bg-white/16 text-primary-foreground shadow-[0_0_40px_-16px_rgba(255,255,255,0.35)]"
                        : "border-white/38 bg-white/8 text-primary-foreground/85 hover:bg-white/12"
                    )}
                  >
                    <span className="pointer-events-none absolute top-0 left-0 size-2.5 border-t border-l border-white/75" />
                    <span className="pointer-events-none absolute top-0 right-0 size-2.5 border-t border-r border-white/75" />
                    <span className="pointer-events-none absolute bottom-0 left-0 size-2.5 border-b border-l border-white/75" />
                    <span className="pointer-events-none absolute right-0 bottom-0 size-2.5 border-r border-b border-white/75" />
                    <span
                      ref={
                        index === 0
                          ? discoverHeadRef
                          : index === stages.length - 1
                            ? fixHeadRef
                            : undefined
                      }
                      className="flex w-full min-h-11 items-center gap-3 px-4 py-3.5"
                    >
                      <span
                        className={cn(
                          "flex size-9 items-center justify-center border",
                          isActive
                            ? "border-white/55 bg-white/10"
                            : "border-white/38 bg-white/5"
                        )}
                      >
                        <Icon />
                      </span>
                      <span className="flex-1 text-sm font-medium">
                        {item.label}
                      </span>
                      <span className="font-tech text-[10px] tracking-[0.14em] text-primary-foreground/55">
                        0{index + 1}
                      </span>
                      <ChevronRight data-icon="inline-end" />
                    </span>
                    {isActive ? (
                      <span className="flex flex-col gap-4 border-t border-white/28 px-4 py-5 sm:px-6">
                        <span className="text-sm font-medium leading-relaxed sm:text-base">
                          {item.subheading}
                        </span>
                        <ul className="flex flex-col gap-4">
                          {item.points.map((point) => (
                            <li key={point.title} className="flex gap-3">
                              <span
                                aria-hidden
                                className="mt-2 size-1.5 shrink-0 rounded-full bg-primary-foreground/80"
                              />
                              <span className="flex flex-col gap-1">
                                <span className="text-sm font-medium">
                                  {point.title}
                                </span>
                                {"body" in point && point.body ? (
                                  <span className="text-sm leading-relaxed text-primary-foreground/75">
                                    {point.body}
                                  </span>
                                ) : null}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </span>
                    ) : null}
                  </button>
                  {index < stages.length - 1 ? (
                    <div aria-hidden className="flex justify-center py-1">
                      <SketchDownArrow />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return <ProcessFlow showHeading />;
}
