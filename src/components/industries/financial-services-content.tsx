"use client";

import { ArrowRight, Check } from "lucide-react";

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
import { AssetUnderAttack } from "@/components/industries/asset-under-attack";

const challenges = [
  {
    title: "Expanding Digital Attack Surface",
    body: "The shift to digital banking, mobile payment apps, open banking APIs, and fintech partnerships has dramatically increased potential entry points for attackers. Each new customer touchpoint, integration, or cloud service expands the attack surface. Many institutions lack complete visibility into all their internet-facing assets, creating blind spots that attackers can exploit. Misconfigurations in cloud environments, forgotten development servers, and unsecured APIs become pathways for unauthorized access.",
  },
  {
    title: "Rising Financial Fraud & Account Takeovers",
    body: "Cybercriminals have industrialized credential theft through phishing campaigns, credential stuffing attacks, and malware. With billions of stolen credentials circulating on the dark web, attackers can systematically test them against banking systems. Once inside an account, they initiate fraudulent transactions, drain funds, or use the access to move laterally through internal systems. The speed of modern digital transactions means fraud can occur and money can disappear in minutes.",
  },
  {
    title: "Strict Regulatory & Compliance Requirements",
    body: "Financial institutions must navigate a complex web of regulations: PCI-DSS for payment card data, GDPR for European customers, SOX for public companies, and frameworks like FFIEC and GLBA. These regulations demand continuous monitoring, regular security assessments, and detailed documentation. Non-compliance results in hefty fines, operational restrictions, and regulatory scrutiny. But compliance isn't just about checking boxes; it requires demonstrating that security controls are working effectively every day, not just during annual audits.",
  },
  {
    title: "Threats from Third-Party Vendors & Supply Chains",
    body: "Modern financial services rely on extensive ecosystems of third-party vendors: payment processors, cloud service providers, data analytics firms, and fintech partners. Each integration point introduces potential vulnerabilities. Attackers increasingly target these weaker links in the supply chain, knowing that compromising a vendor can provide access to multiple financial institutions simultaneously. Yet many organizations lack visibility into their vendors' security postures or the specific systems connected to their networks.",
  },
];

const steps = [
  {
    label: "Step 1",
    body: "We map your entire digital ecosystem, from customer-facing applications and mobile apps to back-office systems, cloud infrastructure, APIs, and third-party integrations, including shadow IT and forgotten development environments.",
  },
  {
    label: "Step 2",
    body: "We provide ongoing security testing that validates protections as your environment evolves, automatically identifying changes to your attack surface and testing new deployments, configurations, and integrations in real-time.",
  },
  {
    label: "Step 3",
    body: "We continuously scan dark web forums, credential databases, and paste sites for leaked employee and customer credentials, API keys, and sensitive data associated with your institution, enabling rapid response before exploitation.",
  },
  {
    label: "Step 4",
    body: "You get actionable alerts focused on exploitable vulnerabilities ranked by business impact, with specific remediation guidance that helps security teams address critical risks efficiently without overwhelming noise.",
  },
];

const benefits = [
  {
    n: "01",
    title: "Prevent Costly Breaches & Fraud Losses",
    body: "Avoid multi-million dollar losses from data breaches, fraudulent transactions, and account takeovers by discovering and securing vulnerabilities before cybercriminals can exploit them to access customer accounts or financial systems.",
  },
  {
    n: "02",
    title: "Maintain Continuous Regulatory Compliance",
    body: "Meet stringent requirements (PCI-DSS, GDPR, SOX, FFIEC) with automated documentation and continuous evidence of security controls, avoiding costly penalties, failed audits, and operational restrictions that impact business growth.",
  },
  {
    n: "03",
    title: "Protect Customer Trust & Institutional Reputation",
    body: "Safeguard the trust customers place in your institution by preventing breaches and fraud incidents that damage reputation, drive customer attrition, and create lasting harm to your brand in competitive financial markets.",
  },
  {
    n: "04",
    title: "Secure Digital Innovation Without Bottlenecks",
    body: "Launch new mobile apps, APIs, and digital banking features confidently with continuous security testing that validates protections during development, enabling innovation without creating vulnerabilities that delay launches or cause incidents.",
  },
  {
    n: "05",
    title: "Gain Visibility Into Third-Party Risks",
    body: "Understand security risks across your vendor ecosystem, payment processors, and fintech partners before they become entry points for attacks, meeting regulatory requirements for third-party risk management proactively.",
  },
  {
    n: "06",
    title: "Stop Fraud Before Funds Disappear",
    body: "Detect compromised credentials and account vulnerabilities before criminals can initiate fraudulent transactions, preventing the rapid fund transfers that occur in minutes once attackers gain access to customer accounts.",
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
    title: "Solutions for Healthcare",
    href: "/industries/healthcare",
    step: "02",
  },
  {
    title: "Solutions for Manufacturing",
    href: "/industries/manufacturing",
    step: "03",
  },
  {
    title: "Solutions for Energy and Utilities",
    href: "/industries/energy",
    step: "04",
  },
];

export function FinancialServicesContent() {
  return (
    <>
      <section className="relative -mt-px overflow-hidden pb-16 pt-0 text-primary-foreground lg:pb-24">
        <InsetGrainient wash="hero" className="overflow-hidden" />
        <div
          className="pointer-events-none absolute top-0 right-[max(0px,calc(50%-40rem))] left-[max(0px,calc(50%-40rem))] h-px bg-white/70"
          aria-hidden
        />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-2 lg:gap-16 lg:pt-28">
          <div className="flex flex-col gap-6">
            <TechLabel className="text-primary-foreground/75">
              [ Solutions for Financial Services – use case ]
            </TechLabel>
            <h1 className="text-3xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
              Solutions for Financial Services
            </h1>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              <p>
                The financial services industry operates in a constant state of
                digital evolution, from real-time payment systems to AI-powered
                trading platforms. But with this innovation comes an expanding
                attack surface that cybercriminals are quick to exploit. Banks,
                credit unions, investment firms, and fintech companies handle
                vast amounts of sensitive customer data, making them attractive
                targets for sophisticated threat actors. A single breach can
                result in millions in losses, regulatory penalties, and
                irreparable damage to customer trust.
              </p>
              <p>
                Traditional security approaches like annual penetration tests
                and periodic vulnerability scans can&apos;t keep pace with
                attackers who operate 24/7. Financial institutions need
                continuous visibility into their entire digital ecosystem, from
                customer-facing applications to back-office systems and
                third-party integrations.
              </p>
              <p>
                PurpleHunt provides continuous security testing that mirrors how
                modern financial services operate: always on, always vigilant.
                We discover every asset in your environment, including forgotten
                systems and shadow IT, before testing them for vulnerabilities.
                This proactive approach helps you stay ahead of threats rather
                than reacting after an incident.
              </p>
            </div>
          </div>
          <div className="text-foreground">
            <AssetUnderAttack>
              <span className="relative z-10 font-tech text-5xl font-bold tracking-tight text-primary sm:text-6xl">
                $
              </span>
            </AssetUnderAttack>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6">
          <SectionRule step="01" label="Current Challenges" />
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Current Challenges
          </h2>
          <Accordion className="border-y border-hairline">
            {challenges.map((item, i) => (
              <AccordionItem key={item.title} value={`challenge-${i}`}>
                <AccordionTrigger className="rounded-none py-5 text-left text-base whitespace-normal hover:no-underline">
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

      <section className="relative overflow-hidden border-y border-hairline py-16 text-primary-foreground sm:py-24 lg:py-28">
        <InsetGrainient wash="metrics" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
          <SectionRule
            step="02"
            label="Process"
            className="[&_span]:text-primary-foreground/70"
            lineClassName="bg-primary-foreground/42"
          />
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            How it works ?
          </h2>
          <div className="grid gap-px border border-primary-foreground/32 bg-primary-foreground/32 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
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

      <section className="relative overflow-hidden border-y border-hairline py-16 text-primary-foreground sm:py-24 lg:py-28">
        <InsetGrainient wash="metrics" />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionRule
              step="04"
              label="Difference"
              className="[&_span]:text-primary-foreground/70"
              lineClassName="bg-primary-foreground/42"
            />
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              What makes us unique?
            </h2>
            <ul className="flex flex-col divide-y divide-white/28 border-y border-white/28">
              {uniquePoints.map((point) => (
                <li key={point.title} className="flex gap-3 py-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center border border-primary-foreground/50 text-primary-foreground">
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

      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
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
