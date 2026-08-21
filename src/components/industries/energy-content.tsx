"use client";

import { ArrowRight, Check, Zap } from "lucide-react";

import { AssetUnderAttack } from "@/components/industries/asset-under-attack";
import { uniquePoints } from "@/components/industries/unique-points";
import {
  Accordion,
  AccordionContent,
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
  {
    title: "Cyberattacks on Critical Infrastructure",
    body: "Energy and utilities infrastructure represents a high-value target for nation-state actors and sophisticated cybercriminal organizations. Attacks on power grids can plunge regions into darkness. Compromised water treatment systems threaten public health. Disrupted oil and gas pipelines impact energy supply chains and national security. These aren't theoretical risks—multiple documented incidents have demonstrated how cyberattacks can shut down power generation, disrupt distribution networks, and cause cascading failures across interconnected systems.",
  },
  {
    title: "Ransomware Targeting Industrial Control Systems",
    body: "Ransomware groups have evolved from encrypting business data to targeting industrial control systems (ICS) and OT environments directly. When attackers encrypt SCADA systems, PLCs, or energy management systems, the impact extends beyond data loss to physical operational shutdowns. Energy providers face impossible choices: pay massive ransoms or face extended outages affecting millions of customers. Recovery from these attacks can take weeks or months, with costs reaching tens of millions of dollars.",
  },
  {
    title: "Supply Chain Vulnerabilities & Third-Party Risks",
    body: "Energy infrastructure relies on complex ecosystems of contractors, equipment vendors, maintenance providers, and technology partners. Each third-party connection introduces potential vulnerabilities. Attackers increasingly target smaller contractors with weaker security as stepping stones into utility networks. A compromised vendor can provide access to control systems, leak sensitive infrastructure data, or introduce malware that spreads across the energy network. Yet many utilities lack comprehensive visibility into their vendors' security postures.",
  },
  {
    title: "Sensitive Infrastructure Information Leaks",
    body: "Network diagrams, system configurations, control system credentials, and infrastructure schematics represent valuable intelligence for attackers planning sophisticated operations. When this information appears on the dark web, paste sites, or public repositories—whether through breaches, insider threats, or accidental exposure—it provides attackers with roadmaps for targeting critical systems. Leaked employee credentials to control systems are particularly dangerous, offering legitimate access that bypasses perimeter defenses.",
  },
];

const steps = [
  {
    label: "Step 1",
    body: "We identify all internet-facing energy infrastructure assets, from customer portals and corporate networks to exposed SCADA systems, remote terminal units, and IoT devices across your operational environment.",
  },
  {
    label: "Step 2",
    body: "We provide 24/7 monitoring for threats specifically targeting energy and utilities, including nation-state activities, ransomware groups focusing on critical infrastructure, and vulnerabilities in control systems.",
  },
  {
    label: "Step 3",
    body: "We continuously assess security risks across your vendor ecosystem, contractor connections, and equipment suppliers, identifying vulnerabilities before they become entry points into your infrastructure.",
  },
  {
    label: "Step 4",
    body: "You get actionable intelligence focused on threats to operational continuity and public safety, with specific remediation guidance that fits within your maintenance schedules and regulatory requirements.",
  },
];

const benefits = [
  {
    n: "01",
    title: "Prevent Service Disruptions That Impact Millions",
    body: "Avoid catastrophic outages and service interruptions by identifying and securing vulnerabilities in critical infrastructure before nation-state actors or ransomware groups can exploit them to disrupt power delivery, water treatment, or fuel distribution.",
  },
  {
    n: "02",
    title: "Maintain Regulatory Compliance & Audit Readiness",
    body: "Meet stringent requirements (NERC CIP, TSA Security Directives, state regulations) with continuous security monitoring and documentation that proves compliance, avoiding costly penalties and mandatory corrective actions that strain limited budgets.",
  },
  {
    n: "03",
    title: "Protect Public Safety & Community Trust",
    body: "Secure the essential services that communities depend on daily, from electricity and clean water to heating fuel, by detecting threats to control systems before they can cause outages, contamination, or safety hazards that endanger public health.",
  },
  {
    n: "04",
    title: "Defend Against Sophisticated Adversaries",
    body: "Stay ahead of well-resourced nation-state actors and organized cybercrime groups specifically targeting energy infrastructure with early warning intelligence that gives your security team time to strengthen defenses before attacks reach critical systems.",
  },
  {
    n: "05",
    title: "Secure Your Supply Chain & Vendor Network",
    body: "Gain visibility into third-party security risks across contractors, equipment vendors, and service providers, preventing compromised suppliers from becoming backdoors into your control systems and operational networks.",
  },
  {
    n: "06",
    title: "Minimize Recovery Costs & Operational Downtime",
    body: "Reduce the multi-million dollar costs of ransomware recovery, emergency incident response, and extended outages by addressing security gaps proactively during planned maintenance rather than through emergency shutdowns.",
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

export function EnergyContent() {
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
              [ Solutions for Energy and Utilities – use case ]
            </TechLabel>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
              Powering Security: Cybersecurity Solutions for Energy and
              Utilities
            </h1>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              <p>
                The energy and utilities sector forms the backbone of modern
                society, powering homes, businesses, and critical services that
                millions depend on daily. But this essential role makes energy
                providers prime targets for sophisticated cyber threats. From
                power grids and water treatment facilities to oil and gas
                pipelines, cyberattacks on energy infrastructure can cause
                widespread disruptions, threaten public safety, and create
                national security risks.
              </p>
              <p>
                The digitization of energy systems, smart grids, SCADA
                networks, and IoT-enabled infrastructure, has revolutionized
                operational efficiency. But it&apos;s also created an expanded
                attack surface where IT and operational technology (OT)
                converge. Nation-state actors, cybercriminal groups, and
                hacktivists actively target energy infrastructure, seeking to
                disrupt services, steal sensitive data, or demonstrate
                political power.
              </p>
              <p>
                Traditional security measures can&apos;t protect infrastructure
                that operates continuously and serves critical public
                functions. Energy and utilities organizations need comprehensive
                visibility, real-time threat intelligence, and proactive
                monitoring to defend against evolving threats before they
                impact operations or public safety.
              </p>
              <p>
                PurpleHunt provides the security platform that energy providers
                need to protect critical infrastructure, maintain operational
                continuity, and safeguard the essential services communities
                depend on.
              </p>
            </div>
          </div>
          <div className="text-foreground">
            <AssetUnderAttack label="grid">
              <Zap className="relative z-10 size-12 text-primary sm:size-14" />
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
            {challenges.map((item, i) => (
              <AccordionItem key={item.title} value={`challenge-${i}`}>
                <AccordionTrigger className="rounded-none py-5 text-base hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  <p>{item.body}</p>
                </AccordionContent>
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
