"use client";

import { ArrowRight, Check, Landmark, Lock } from "lucide-react";

import { AssetUnderAttack } from "@/components/industries/asset-under-attack";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  BlueprintFrame,
  SectionRule,
} from "@/components/landing/blueprint";
import { DashboardMock } from "@/components/landing/dashboard-mock";
import { InsetGrainient } from "@/components/landing/inset-grainient";
import { TechLabel } from "@/components/landing/tech-label";

const challenges = [
  "Nation-State & Cyberterrorism Threats",
  "Protection of Critical Infrastructure",
  "Data Protection & Compliance Requirements",
  "Service Downtime & Disruptions to Public Services",
];

const steps = [
  {
    label: "Step 1",
    body: "We identify all internet-facing government systems, citizen service portals, and critical infrastructure assets, including legacy systems and third-party integrations that could become entry points for attackers.",
  },
  {
    label: "Step 2",
    body: "We provide 24/7 monitoring for sophisticated threats specifically targeting government agencies, including APT activity, credential compromises, and vulnerabilities in systems handling classified or sensitive citizen data.",
  },
  {
    label: "Step 3",
    body: "We track security controls and vulnerabilities against NIST, FISMA, FedRAMP, and agency-specific requirements, maintaining documentation that demonstrates continuous compliance for auditors and oversight bodies.",
  },
  {
    label: "Step 4",
    body: "You get actionable alerts focused on the most critical threats to your agency's mission, with specific remediation guidance that fits within government procurement and change management processes.",
  },
];

const benefits = [
  {
    n: "01",
    title: "Maintain Uninterrupted Public Services",
    body: "Prevent service disruptions that leave citizens unable to access benefits, file applications, or request emergency assistance by identifying and addressing vulnerabilities before attackers can exploit them to take systems offline.",
  },
  {
    n: "02",
    title: "Protect Citizen Trust & Data",
    body: "Safeguard the sensitive personal information of millions of citizens, from tax records to healthcare data, by detecting compromised credentials and data leaks before they result in breaches that erode public confidence in government institutions.",
  },
  {
    n: "03",
    title: "Defend Against Sophisticated Adversaries",
    body: "Stay ahead of well-resourced nation-state actors and organized cybercrime groups with threat intelligence specific to government targets, giving your security team early warning to strengthen defenses before sophisticated attacks reach critical systems.",
  },
  {
    n: "04",
    title: "Demonstrate Continuous Compliance",
    body: "Maintain audit readiness and meet stringent regulatory requirements (NIST, FISMA, FedRAMP) with ongoing security monitoring and documentation, avoiding costly audit findings and demonstrating responsible stewardship of public resources.",
  },
  {
    n: "05",
    title: "Protect Critical Infrastructure Operations",
    body: "Secure essential systems that millions depend on daily, from emergency services and utilities to transportation networks, by monitoring operational technology environments and detecting threats before they can disrupt vital public services.",
  },
  {
    n: "06",
    title: "Counter Misinformation & Brand Impersonation",
    body: "Detect and take down fake government websites, fraudulent social media accounts, and phishing campaigns impersonating your agency, protecting citizens from scams and preserving the trust needed for effective governance.",
  },
];

const uniquePoints = [
  {
    title: "Continuous Attack Validation",
    body: "Testing that updates as fast as your systems change.",
  },
  {
    title: "Proof of Exploitability",
    body: "Real attack evidence, not theoretical risk.",
  },
  {
    title: "Threat-Led Testing",
    body: "Aligned with live attacker techniques.",
  },
  {
    title: "One Unified Platform",
    body: "Discovery, intel, and testing in one place.",
  },
  {
    title: "Built for Lean Teams",
    body: "Clear actions without specialized security headcount.",
  },
  {
    title: "Security at AI Speed",
    body: "Reduce exposure windows from weeks to hours.",
  },
];

const related = [
  {
    title: "Solutions for Financial Services",
    href: "/industries/financial-services",
    step: "01",
  },
  {
    title: "Solutions for Healthcare",
    href: "/industries/healthcare",
    step: "02",
  },
  {
    title: "Solutions for Manufacturing",
    href: "/industries/manufacturing",
    step: "03",
  },
];

export function GovernmentContent() {
  return (
    <>
      <section className="relative -mt-px overflow-hidden pb-16 pt-0 text-primary-foreground lg:pb-24">
        <InsetGrainient wash="hero" className="overflow-hidden" />
        <div
          className="pointer-events-none absolute top-0 right-[max(0px,calc(50%-40rem))] left-[max(0px,calc(50%-40rem))] h-px bg-white/45"
          aria-hidden
        />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pt-20 lg:grid-cols-2 lg:gap-16 lg:pt-28">
          <div className="flex flex-col gap-6">
            <TechLabel className="text-primary-foreground/75">
              [ Solutions for Government & Public Sector – use case ]
            </TechLabel>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
              Solutions for Government & Public Sector
            </h1>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              <p>
                Government agencies and public sector organizations operate at
                the intersection of critical infrastructure, sensitive citizen
                data, and national security. From federal departments and state
                agencies to municipal services and emergency response systems,
                these organizations manage information and services that millions
                depend on daily. This essential role makes government entities
                prime targets for sophisticated cyber threats that can
                compromise national security, disrupt public services, and erode
                citizen trust.
              </p>
              <p>
                The threat landscape facing government is uniquely complex.
                Nation-state actors conduct espionage and influence operations.
                Cybercriminal groups deploy ransomware to extort payments from
                resource-constrained agencies. Hacktivists target government
                systems to make political statements. Meanwhile, legacy IT
                infrastructure, limited cybersecurity budgets, and strict
                compliance requirements create additional security challenges.
              </p>
              <p>
                When government systems are compromised, the impact extends far
                beyond the agency itself. Breached citizen data affects millions.
                Disrupted services prevent people from accessing benefits,
                permits, and emergency assistance. Compromised critical
                infrastructure threatens public safety. And each incident
                undermines the public trust that effective governance depends
                on.
              </p>
              <p>
                PurpleHunt provides government agencies with the comprehensive
                security platform needed to defend against sophisticated
                threats, protect citizen data, maintain operational continuity,
                and meet stringent compliance requirements.
              </p>
            </div>
          </div>
          <div className="text-foreground">
            <AssetUnderAttack label="civic">
              <div className="relative z-10 flex flex-col items-center gap-1 text-primary">
                <Landmark className="size-10 sm:size-12" />
                <Lock className="size-5 sm:size-6" />
              </div>
            </AssetUnderAttack>
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <SectionRule step="01" label="Current Challenges" />
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Current Challenges
          </h2>
          <Accordion className="border-y border-hairline">
            {challenges.map((title, i) => (
              <AccordionItem key={title} value={`challenge-${i}`}>
                <AccordionTrigger className="rounded-none py-5 text-base hover:no-underline">
                  {title}
                </AccordionTrigger>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-hairline py-24 text-primary-foreground lg:py-28">
        <InsetGrainient wash="metrics" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6">
          <SectionRule
            step="02"
            label="Process"
            className="[&_span]:text-primary-foreground/70"
            lineClassName="bg-primary-foreground/25"
          />
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            How it works ?
          </h2>
          <div className="grid gap-px border border-primary-foreground/20 bg-primary-foreground/20 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.label}
                className="flex flex-col gap-3 bg-black/25 p-6 backdrop-blur-[2px]"
              >
                <span className="font-tech text-[10px] tracking-[0.14em] text-primary-foreground/55">
                  {step.label}
                </span>
                <p className="text-sm leading-relaxed text-primary-foreground/90">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
          <SectionRule step="03" label="Key Benefits" />
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Key Benefits
          </h2>
          <div className="grid gap-px border border-hairline bg-border-hairline sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <BlueprintFrame
                key={item.n}
                className="border-0 bg-background/90 p-6 sm:p-8"
              >
                <div className="flex flex-col gap-3">
                  <span className="font-tech text-[10px] tracking-[0.14em] text-muted-foreground">
                    {item.n}
                  </span>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </BlueprintFrame>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-hairline py-24 text-primary-foreground lg:py-28">
        <InsetGrainient wash="metrics" />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionRule
              step="04"
              label="Difference"
              className="[&_span]:text-primary-foreground/70"
              lineClassName="bg-primary-foreground/25"
            />
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              What makes us unique?
            </h2>
            <ul className="flex flex-col divide-y divide-white/15 border-y border-white/15">
              {uniquePoints.map((point) => (
                <li key={point.title} className="flex gap-3 py-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center border border-primary-foreground/30 text-primary-foreground">
                    <Check className="size-3.5" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-primary-foreground">
                      {point.title}
                    </p>
                    <p className="text-sm leading-relaxed text-primary-foreground/85">
                      {point.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              variant="secondary"
              className="h-11 w-fit rounded-full px-6"
              render={<a href="/#demo" />}
              nativeButton={false}
            >
              Book Demo
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
          <div className="text-foreground">
            <DashboardMock />
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
          <SectionRule step="05" label="Related Use Cases" />
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Related Use Cases
          </h2>
          <div className="grid gap-px border border-hairline bg-border-hairline md:grid-cols-3">
            {related.map((item) => (
              <a key={item.title} href={item.href} className="block">
                <BlueprintFrame className="h-full border-0 bg-background/90 p-6 transition-colors hover:bg-muted/50 sm:p-8">
                  <div className="flex flex-col gap-4">
                    <span className="font-tech text-[10px] tracking-[0.14em] text-muted-foreground">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <span className="inline-flex items-center gap-2 font-tech text-[11px] tracking-[0.12em] text-primary uppercase">
                      Read more
                      <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </BlueprintFrame>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
