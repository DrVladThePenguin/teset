"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionRule } from "@/components/landing/blueprint";
import { InsetGrainient } from "@/components/landing/inset-grainient";
import { TechLabel } from "@/components/landing/tech-label";
import {
  CartPanel,
  CtiPanel,
  DrpPanel,
  EasmPanel,
  NorthstarPanel,
} from "@/components/capabilities/capability-panels";

const capabilities = [
  {
    id: "easm",
    step: "01",
    label: "Surface",
    title: "External Attack Surface Management",
    body: "Discover, track, and monitor all your organization's internet-facing assets in real-time. Gain visibility into your digital footprint and identify potential vulnerabilities before attackers do.",
    bullets: [
      {
        code: "01A",
        title: "Map all internet-facing assets and infrastructure",
      },
      {
        code: "01B",
        title: "Continuous discovery of new and unknown assets",
      },
      {
        code: "01C",
        title: "Identify shadow IT and forgotten infrastructure",
      },
    ],
    cta: "Run a Scan",
    tone: "grainient" as const,
    Panel: EasmPanel,
  },
  {
    id: "cart",
    step: "02",
    label: "Red team",
    title: "Continuous Automated Red Teaming",
    body: "Emulate real-world attacks to identify security weaknesses across your entire environment. Our platform continuously tests your defenses using the latest attack techniques, helping you stay ahead of evolving threats.",
    bullets: [
      {
        code: "02A",
        title: "Run sophisticated attack simulations without impacting production",
      },
      {
        code: "02B",
        title: "Identify vulnerabilities that traditional scanners miss",
      },
      {
        code: "02C",
        title: "Prioritize remediation efforts based on real-world risk",
      },
    ],
    cta: "Run a Scan",
    tone: "light" as const,
    Panel: CartPanel,
  },
  {
    id: "northstar",
    step: "03",
    label: "Leadership",
    title: "CISO Insights Northstar",
    body: "Gain a unified view of your organization's security posture. Our platform provides actionable insights and metrics that help security leaders make informed decisions and demonstrate the value of their security investments.",
    bullets: [
      {
        code: "03A",
        title: "Measure security performance against industry benchmarks",
      },
      {
        code: "03B",
        title: "Identify gaps in security controls and prioritize improvements",
      },
      {
        code: "03C",
        title: "Track remediation progress over time",
      },
      {
        code: "03D",
        title: "Visualize security posture changes over long periods of time",
      },
    ],
    cta: "Book a Demo",
    tone: "grainient" as const,
    Panel: NorthstarPanel,
  },
  {
    id: "cti",
    step: "04",
    label: "Intelligence",
    title: "Cyber Threat Intelligence",
    body: "Stay ahead of emerging threats with actionable intelligence tailored to your organization. Our platform monitors the dark web, underground forums, and other sources to identify potential threats before they manifest.",
    bullets: [
      {
        code: "04A",
        title: "Monitor dark web and underground forums for threats",
      },
      {
        code: "04B",
        title:
          "Receive real-time alerts on threats relevant to your brand and industry",
      },
      {
        code: "04C",
        title:
          "Understand the tactics, techniques, and procedures of threat actors",
      },
      {
        code: "04D",
        title:
          "Identify exposed credentials and compromised accounts in real-time",
      },
    ],
    cta: "Run a Scan",
    tone: "light" as const,
    Panel: CtiPanel,
  },
  {
    id: "drp",
    step: "05",
    label: "Brand",
    title: "Digital Risk Protection",
    body: "Protect your brand and digital assets from online threats. Our platform monitors for brand impersonation, data leaks, and other digital risks that could harm your reputation and bottom line.",
    bullets: [
      {
        code: "05A",
        title: "Monitor for brand impersonation and fake social media accounts",
      },
      {
        code: "05B",
        title: "Identify data leaks and sensitive information exposure",
      },
      {
        code: "05C",
        title:
          "Protect executives and high-profile individuals from digital threats",
      },
      {
        code: "05D",
        title:
          "Detect and respond to phishing campaigns targeting your customers",
      },
      {
        code: "05E",
        title:
          "Fraud detection - identifying fraudulent websites and domains",
      },
    ],
    cta: "Book a Demo",
    tone: "grainient" as const,
    Panel: DrpPanel,
  },
];

export function CapabilitiesHero() {
  return (
    <section className="relative -mt-px overflow-hidden pb-16 pt-0 text-primary-foreground lg:pb-20">
      <InsetGrainient wash="hero" className="overflow-hidden" />
      <div
        className="pointer-events-none absolute top-0 right-[max(0px,calc(50%-40rem))] left-[max(0px,calc(50%-40rem))] h-px bg-white/45"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-0 left-[max(0px,calc(50%-40rem))] h-px w-16 bg-white/80 sm:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-0 right-[max(0px,calc(50%-40rem))] h-px w-16 bg-white/80 sm:w-24"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 pt-20 text-center sm:pt-24 lg:pt-32">
        <TechLabel className="text-primary-foreground/75">
          [ Capabilities ]
        </TechLabel>
        <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-primary-foreground sm:text-5xl lg:text-[3.4rem]">
          Where Intelligence Meets Security
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
          PurpleLens’s Platform combines the best of human and machine
          intelligence to provide you with the most comprehensive and effective
          security solution for your organization’s digital assets and data.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            variant="secondary"
            className="h-11 rounded-full px-6 text-base"
            render={<a href="/#demo" />}
            nativeButton={false}
          >
            Book a Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 rounded-full border-primary-foreground/45 bg-white/10 px-5 text-base text-primary-foreground backdrop-blur-sm hover:bg-white/20 hover:text-primary-foreground"
            render={<a href="#easm" />}
            nativeButton={false}
          >
            Run a Scan
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export function CapabilitiesIndex() {
  return (
    <section className="relative py-10 lg:py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-px border border-hairline bg-border-hairline sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex flex-col gap-3 bg-background/90 p-5 transition-colors hover:bg-muted/60"
            >
              <span className="font-tech text-[10px] tracking-[0.14em] text-muted-foreground">
                {item.step}
              </span>
              <span className="text-sm font-medium leading-snug">
                {item.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function GrainientCapability({
  item,
}: {
  item: (typeof capabilities)[number];
}) {
  const cols =
    item.bullets.length >= 5
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : item.bullets.length === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-3";

  return (
    <section
      id={item.id}
      className="relative scroll-mt-24 overflow-hidden border-y border-hairline py-24 text-primary-foreground lg:py-28"
    >
      <InsetGrainient wash="metrics" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="flex max-w-3xl flex-col gap-5">
            <SectionRule
              step={item.step}
              label={item.label}
              className="[&_span]:text-primary-foreground/70"
              lineClassName="bg-primary-foreground/25"
            />
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              {item.title}
            </h2>
            <p className="text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {item.body}
            </p>
          </div>
          <div className="text-foreground">
            <item.Panel />
          </div>
        </div>

        <div
          className={`grid gap-px border border-primary-foreground/20 bg-primary-foreground/20 ${cols}`}
        >
          {item.bullets.map((bullet) => (
            <div
              key={bullet.code}
              className="flex flex-col gap-3 bg-black/25 p-6 backdrop-blur-[2px]"
            >
              <span className="font-tech text-[10px] tracking-[0.14em] text-primary-foreground/55">
                {bullet.code}
              </span>
              <p className="text-sm leading-snug font-medium sm:text-base">
                {bullet.title}
              </p>
            </div>
          ))}
        </div>

        <a
          href="/#demo"
          className="inline-flex w-fit items-center gap-2 border-b border-primary-foreground/40 pb-0.5 font-tech text-[11px] tracking-[0.12em] text-primary-foreground uppercase transition-opacity hover:opacity-80"
        >
          {item.cta}
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </section>
  );
}

function LightCapability({
  item,
  reverse,
}: {
  item: (typeof capabilities)[number];
  reverse?: boolean;
}) {
  return (
    <section
      id={item.id}
      className="relative scroll-mt-24 py-24 lg:py-32"
    >
      <div
        className={`mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="flex flex-col gap-6">
          <SectionRule step={item.step} label={item.label} />
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            {item.title}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {item.body}
          </p>
          <ul className="flex flex-col divide-y divide-[color:var(--border-hairline)] border-y border-hairline">
            {item.bullets.map((bullet) => (
              <li key={bullet.code} className="flex gap-4 py-5">
                <span className="font-tech mt-0.5 shrink-0 text-[10px] tracking-[0.12em] text-muted-foreground">
                  {bullet.code}
                </span>
                <p className="text-sm leading-relaxed text-foreground">
                  {bullet.title}
                </p>
              </li>
            ))}
          </ul>
          <a
            href="/#demo"
            className="inline-flex w-fit items-center gap-2 border-b border-primary/40 pb-0.5 font-tech text-[11px] tracking-[0.12em] text-primary uppercase transition-opacity hover:opacity-80"
          >
            {item.cta}
            <ArrowRight className="size-3.5" />
          </a>
        </div>
        <item.Panel />
      </div>
    </section>
  );
}

export function CapabilitiesSections() {
  return (
    <>
      {capabilities.map((item) =>
        item.tone === "grainient" ? (
          <GrainientCapability key={item.id} item={item} />
        ) : (
          <LightCapability
            key={item.id}
            item={item}
            reverse={item.id === "cti"}
          />
        )
      )}
    </>
  );
}
