import { Check } from "lucide-react";

import { SectionRule } from "@/components/landing/blueprint";

const proofs = [
  {
    step: "04A",
    title: "Autonomous Red Teaming",
    body: "AI agents continuously probe your environment the way real attackers would.",
  },
  {
    step: "04B",
    title: "Real Exploitability Testing",
    body: "Prioritize what is actually reachable and exploitable—not theoretical CVEs.",
  },
  {
    step: "04C",
    title: "Attack Path Visualization",
    body: "See how assets, identities, and exposures chain into business-critical risk.",
  },
];

export function ProofSection() {
  return (
    <section id="features" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col gap-6">
          <SectionRule step="04" label="Capability" />
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            From Guesswork to Proof of Exploitability
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            PurpleLens replaces checklist security with continuous evidence.
            Know what can be breached, how, and what to fix first.
          </p>
        </div>

        <ul className="flex flex-col divide-y divide-[color:var(--border-hairline)] border-y border-hairline">
          {proofs.map((item) => (
            <li key={item.title} className="flex gap-4 py-6">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center border border-hairline text-primary">
                <Check className="size-3.5" />
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <span className="font-tech shrink-0 text-[10px] tracking-[0.12em] text-muted-foreground">
                    {item.step}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
