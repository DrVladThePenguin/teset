import { Check, X } from "lucide-react";

import {
  BlueprintFrame,
  SectionRule,
} from "@/components/landing/blueprint";

const legacy = [
  "Annual or quarterly pentests",
  "Manual scoping and scheduling",
  "Findings age between engagements",
  "Limited coverage of AI-speed change",
];

const native = [
  "Continuous autonomous testing",
  "Exploitability-first prioritization",
  "Attack-path evidence for every finding",
  "Security that ships at product velocity",
];

export function ComparisonSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:gap-12 sm:px-6">
        <div className="flex max-w-3xl flex-col gap-5">
          <SectionRule step="06" label="Comparison" />
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Built for AI-Speed Environments.
          </h2>
        </div>

        <div className="grid gap-px border border-hairline bg-border-hairline md:grid-cols-2">
          <BlueprintFrame className="border-0 bg-background/90 p-6 sm:p-8">
            <p className="font-tech mb-6 text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
              Legacy approach
            </p>
            <ul className="flex flex-col gap-4">
              {legacy.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center border border-destructive/30 text-destructive">
                    <X className="size-3" />
                  </span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </BlueprintFrame>

          <BlueprintFrame className="border-0 bg-background/90 p-6 sm:p-8">
            <p className="font-tech mb-6 text-[10px] tracking-[0.16em] text-primary uppercase">
              PurpleLens AI-native
            </p>
            <ul className="flex flex-col gap-4">
              {native.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center border border-primary/40 text-primary">
                    <Check className="size-3" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </BlueprintFrame>
        </div>
      </div>
    </section>
  );
}
