import { ArrowRight, Bot, Lock, TriangleAlert } from "lucide-react";

import {
  BlueprintFrame,
  SectionRule,
} from "@/components/landing/blueprint";

const problems = [
  {
    icon: Bot,
    step: "02A",
    title: "AI-Driven Development",
    body: "Code ships faster than security reviews. New attack surfaces appear every sprint.",
  },
  {
    icon: Lock,
    step: "02B",
    title: "AI-Driven Attacks",
    body: "Adversaries automate discovery and exploitation. Manual pentests cannot keep pace.",
  },
  {
    icon: TriangleAlert,
    step: "02C",
    title: "Broken Security Models",
    body: "Point-in-time assessments leave blind spots between engagements and releases.",
  },
];

export function ProblemSection() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6">
        <div className="flex flex-col gap-6">
          <SectionRule step="02" label="The problem" />
          <div className="max-w-3xl">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              Security Broke When AI Accelerated Everything.
            </h2>
          </div>
        </div>

        <div className="grid gap-px border border-hairline bg-border-hairline md:grid-cols-3">
          {problems.map((item) => (
            <BlueprintFrame
              key={item.title}
              className="border-0 bg-background/90 p-6 sm:p-8"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex size-10 items-center justify-center border border-hairline text-primary">
                    <item.icon className="size-4" />
                  </span>
                  <span className="font-tech text-[10px] tracking-[0.14em] text-muted-foreground">
                    {item.step}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            </BlueprintFrame>
          ))}
        </div>

        <div className="flex justify-start">
          <a
            href="#process"
            className="inline-flex items-center gap-2 border-b border-primary/40 pb-0.5 font-tech text-[11px] tracking-[0.12em] text-primary uppercase transition-opacity hover:opacity-80"
          >
            Why Continuous Pentesting matters
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
