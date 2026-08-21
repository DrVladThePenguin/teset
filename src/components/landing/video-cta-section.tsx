"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { SectionRule } from "@/components/landing/blueprint";
import { cn } from "@/lib/utils";

type Point = { x: number; y: number };

const PURPLE_POINTS: Point[] = [
  { x: 0, y: 22 },
  { x: 1, y: 34 },
  { x: 2, y: 50 },
  { x: 3, y: 64 },
  { x: 4, y: 76 },
  { x: 5, y: 86 },
  { x: 6, y: 93 },
  { x: 7, y: 97 },
];

const LEGACY_POINTS: Point[] = [
  { x: 0, y: 22 },
  { x: 1, y: 24 },
  { x: 2, y: 27 },
  { x: 3, y: 30 },
  { x: 4, y: 33 },
  { x: 5, y: 35 },
  { x: 6, y: 36 },
  { x: 7, y: 38 },
];

const W = 640;
const H = 280;
const PAD = { t: 20, r: 20, b: 20, l: 20 };

function toPath(points: Point[], progress: number) {
  const usable = Math.max(0.001, Math.min(1, progress));
  const maxX = points[points.length - 1].x;
  const endX = maxX * usable;

  const mapped = points.map((p) => {
    const px = PAD.l + (p.x / maxX) * (W - PAD.l - PAD.r);
    const py = PAD.t + ((100 - p.y) / 100) * (H - PAD.t - PAD.b);
    return { px, py, x: p.x };
  });

  let d = "";
  let last: { px: number; py: number } | null = null;
  for (let i = 0; i < mapped.length; i++) {
    const p = mapped[i];
    if (p.x > endX && i > 0) {
      const prev = mapped[i - 1];
      const t = (endX - prev.x) / (p.x - prev.x);
      const ix = prev.px + (p.px - prev.px) * t;
      const iy = prev.py + (p.py - prev.py) * t;
      d += ` L ${ix} ${iy}`;
      last = { px: ix, py: iy };
      break;
    }
    d += i === 0 ? `M ${p.px} ${p.py}` : ` L ${p.px} ${p.py}`;
    last = p;
  }
  return { d, last };
}

/** Scroll position inside a tall track drives chart progress 0→1 (and reverse). */
function useScrollProgress(trackRef: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = React.useState(0);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const update = () => {
      const rect = track.getBoundingClientRect();
      const trackH = track.offsetHeight;
      const vh = window.innerHeight;
      // Distance scrolled through the track while sticky viewport is engaged
      const scrolled = -rect.top;
      const maxScroll = Math.max(1, trackH - vh);
      const next = Math.max(0, Math.min(1, scrolled / maxScroll));
      setProgress(next);
      setActive(scrolled > 0 && scrolled < maxScroll);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [trackRef]);

  return { progress, active };
}

function ComparisonChart({ progress }: { progress: number }) {
  const purple = toPath(PURPLE_POINTS, progress);
  const legacy = toPath(LEGACY_POINTS, progress);
  const zoom = 1 + progress * 0.12;

  return (
    <div
      className={cn(
        "relative w-full max-w-4xl overflow-hidden border border-hairline bg-card/90 shadow-[0_24px_80px_-28px_rgba(92,60,180,0.35)] backdrop-blur-sm transition-[box-shadow] duration-300",
        progress > 0.05 && "ring-1 ring-primary/30"
      )}
      style={{
        transform: `scale(${zoom})`,
        transformOrigin: "center center",
        willChange: "transform",
      }}
    >
      <div className="flex items-center justify-between gap-4 border-b border-hairline px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 font-tech text-[10px] tracking-[0.12em] uppercase">
            <span className="size-2 rounded-full bg-primary" />
            PurpleLens
          </span>
          <span className="inline-flex items-center gap-2 font-tech text-[10px] tracking-[0.12em] text-muted-foreground uppercase">
            <span className="size-2 rounded-full bg-muted-foreground/50" />
            Legacy
          </span>
        </div>
        <span className="font-tech text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
          Coverage · {Math.round(progress * 100)}%
        </span>
      </div>

      <div className="relative px-2 pt-2 pb-4 sm:px-4">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label="Chart comparing PurpleLens coverage growth versus legacy solutions over eight weeks"
        >
          {/* Subtle horizontal guides only — no axis labels */}
          {[0, 33, 66, 100].map((t) => {
            const y = PAD.t + ((100 - t) / 100) * (H - PAD.t - PAD.b);
            return (
              <line
                key={t}
                x1={PAD.l}
                y1={y}
                x2={W - PAD.r}
                y2={y}
                stroke="var(--border-hairline)"
                strokeWidth="1"
              />
            );
          })}

          <path
            d={legacy.d}
            fill="none"
            stroke="oklch(0.55 0.02 290)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="5 5"
          />
          {legacy.last && progress > 0.02 && (
            <circle
              cx={legacy.last.px}
              cy={legacy.last.py}
              r="4"
              fill="oklch(0.55 0.02 290)"
            />
          )}

          {purple.d && progress > 0.02 && purple.last && (
            <path
              d={`${purple.d} L ${purple.last.px} ${H - PAD.b} L ${PAD.l} ${H - PAD.b} Z`}
              fill="url(#plFill)"
              opacity="0.35"
            />
          )}

          <path
            d={purple.d}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {purple.last && progress > 0.02 && (
            <>
              <circle
                cx={purple.last.px}
                cy={purple.last.py}
                r="6"
                fill="var(--primary)"
              />
              <circle
                cx={purple.last.px}
                cy={purple.last.py}
                r="2.5"
                fill="white"
              />
            </>
          )}

          <defs>
            <linearGradient id="plFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.45" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="grid gap-px border-t border-hairline bg-border-hairline sm:grid-cols-2">
        {[
          { label: "Time to coverage", pl: "Hours", legacy: "Weeks" },
          { label: "Blind spots", pl: "Minimal", legacy: "Growing" },
        ].map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-1.5 bg-background px-4 py-3"
          >
            <span className="font-tech text-[9px] tracking-[0.14em] text-muted-foreground uppercase">
              {row.label}
            </span>
            <div className="flex items-center justify-between gap-2 text-sm">
              <span className="font-medium text-primary">{row.pl}</span>
              <span className="font-tech text-[10px] tracking-[0.16em] text-muted-foreground">
                VS
              </span>
              <span className="text-muted-foreground">{row.legacy}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScrollGraphExperience() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const { progress, active } = useScrollProgress(trackRef);

  return (
    <div ref={trackRef} className="relative h-[220vh]">
      {/* Sticky stage: only the graph — heading is outside this track */}
      <div className="sticky top-0 flex h-svh items-center justify-center px-4 sm:px-6">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 transition-opacity duration-300",
            active ? "opacity-100" : "opacity-0"
          )}
          aria-hidden
        >
          <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-dot-grid opacity-40" />
        </div>

        <div className="relative z-10 flex w-full justify-center">
          <ComparisonChart progress={progress} />
        </div>
      </div>
    </div>
  );
}

export function VideoCtaSection() {
  return (
    <section className="relative">
      {/* Heading block — scrolls away; not part of the zoom stage */}
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pt-24 pb-10 lg:pt-32 lg:pb-12">
        <SectionRule step="08" label="See it in action" />
        <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Test Security at Attacker Speed.
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="h-11 rounded-full px-6"
              render={<a href="#demo" />}
              nativeButton={false}
            >
              Request a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 rounded-full border-hairline bg-transparent px-6"
              render={<a href="#process" />}
              nativeButton={false}
            >
              How it works
            </Button>
          </div>
        </div>
        <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
          Scroll to draw the chart — scroll up to rewind, scroll down to finish.
        </p>
      </div>

      <ScrollGraphExperience />
    </section>
  );
}
