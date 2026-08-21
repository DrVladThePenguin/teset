"use client";

import { Clock, ListChecks, Radar, Shield } from "lucide-react";

import { SectionRule } from "@/components/landing/blueprint";

const steps = [
  { id: "01", label: "Detect", color: "bg-primary" },
  { id: "02", label: "Test", color: "bg-violet-500" },
  { id: "03", label: "Fix", color: "bg-fuchsia-500" },
  { id: "04", label: "Verify", color: "bg-indigo-500" },
];

const features = [
  {
    icon: Radar,
    title: "Always-on discovery",
    body: "Map assets and exposures as your stack changes.",
  },
  {
    icon: Shield,
    title: "Exploit-first testing",
    body: "Validate impact with safe, controlled exploitation.",
  },
  {
    icon: ListChecks,
    title: "Guided remediation",
    body: "Turn findings into prioritized, actionable fixes.",
  },
  {
    icon: Clock,
    title: "Continuous verification",
    body: "Confirm fixes and watch for regressions automatically.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="platform"
      className="relative border-y border-hairline py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Clean playful loop */}
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div
            aria-hidden
            className="absolute inset-[18%] rounded-full bg-primary/10 blur-2xl"
          />

          {/* Orbit track */}
          <div className="absolute inset-[12%] rounded-full border-2 border-primary/20" />
          <div className="absolute inset-[12%] animate-[spin_22s_linear_infinite] rounded-full">
            <span className="absolute top-0 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_16px_rgba(92,60,180,0.7)]" />
          </div>

          {/* Center pill */}
          <div className="absolute inset-[30%] z-10 flex flex-col items-center justify-center rounded-full bg-primary text-center text-primary-foreground shadow-lg shadow-primary/30">
            <span className="font-tech text-[10px] tracking-[0.18em] text-primary-foreground/70 uppercase">
              Always on
            </span>
            <span className="mt-1 text-sm font-medium tracking-tight">
              Continuous
            </span>
          </div>

          {/* Four clean step chips */}
          {steps.map((step, i) => {
            const angle = -90 + i * 90;
            const rad = (angle * Math.PI) / 180;
            const x = 50 + Math.cos(rad) * 42;
            const y = 50 + Math.sin(rad) * 42;
            return (
              <div
                key={step.id}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="flex items-center gap-2 border border-hairline bg-background px-3 py-2 shadow-sm">
                  <span className={`size-2 shrink-0 rounded-full ${step.color}`} />
                  <div className="flex flex-col">
                    <span className="font-tech text-[9px] tracking-[0.14em] text-muted-foreground">
                      {step.id}
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      {step.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <SectionRule step="05" label="Our approach" />
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Continuous Testing, Not One-Time Assessments
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              A living feedback loop — detect, prove, fix, verify — that never
              waits for the next scheduled engagement.
            </p>
          </div>
          <ul className="flex flex-col gap-0 divide-y divide-[color:var(--border-hairline)] border-y border-hairline">
            {features.map((item, i) => (
              <li key={item.title} className="flex gap-4 py-5">
                <span className="flex size-9 shrink-0 items-center justify-center border border-hairline text-primary">
                  <item.icon className="size-4" />
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-medium">{item.title}</h3>
                    <span className="font-tech text-[10px] text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
