"use client";

import { SectionRule } from "@/components/landing/blueprint";
import { InsetGrainient } from "@/components/landing/inset-grainient";

const metrics = [
  {
    step: "07A",
    title: "Focus on Breach Probability",
    body: "Measure risk by what attackers can actually reach and exploit.",
  },
  {
    step: "07B",
    title: "Compress Time-to-Fix",
    body: "Route validated findings to owners with clear remediation paths.",
  },
  {
    step: "07C",
    title: "Cover Every Release",
    body: "Keep testing aligned with CI/CD and AI-assisted development.",
  },
  {
    step: "07D",
    title: "Prove Security Outcomes",
    body: "Report exploitability trends executives and auditors understand.",
  },
];

export function MetricsSection() {
  return (
    <section className="relative overflow-hidden border-y border-hairline py-24 text-primary-foreground lg:py-28">
      <InsetGrainient wash="metrics" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex max-w-3xl flex-col gap-5">
          <SectionRule
            step="07"
            label="Outcomes"
            className="[&_span]:text-primary-foreground/70"
            lineClassName="bg-primary-foreground/25"
          />
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Measurable Risk Reduction at AI Speed.
          </h2>
        </div>

        <div className="grid gap-px border border-primary-foreground/20 bg-primary-foreground/20 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 bg-black/25 p-6 backdrop-blur-[2px]"
            >
              <span className="font-tech text-[10px] tracking-[0.14em] text-primary-foreground/55">
                {item.step}
              </span>
              <h3 className="text-base font-medium leading-snug">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/80">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
