"use client";

import { ArrowRight, Check, Factory } from "lucide-react";

import { AssetUnderAttack } from "@/components/industries/asset-under-attack";
import { uniquePoints } from "@/components/industries/unique-points";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BlueprintFrame,
  SectionRule,
} from "@/components/landing/blueprint";
import { DashboardMock } from "@/components/landing/dashboard-mock";
import { InsetGrainient } from "@/components/landing/inset-grainient";
import { TechLabel } from "@/components/landing/tech-label";

const roles = [
  {
    value: "plant-manager",
    title: "Plant Manager",
    body: "Plant managers are responsible for production continuity and meeting output targets but lack real-time visibility into cyber threats targeting OT systems and connected machinery. When attacks hit, production halts and leadership demands answers they don't have. Without proactive monitoring of vulnerabilities in SCADA systems, PLCs, and industrial IoT devices, they're forced into reactive crisis management that costs millions in downtime, delayed shipments, and lost contracts. They need a way to confidently assure leadership that production systems are secure without becoming cybersecurity experts themselves. What they really want is peace of mind: the ability to walk the factory floor knowing that potential threats are being monitored and addressed before they escalate into emergencies. Instead of scrambling to explain what went wrong after an attack, they want to prevent incidents altogether and focus on what they do best, optimizing production efficiency and delivering on commitments. When vulnerabilities are identified early and communicated in clear, actionable terms, plant managers can coordinate with IT and security teams to address issues during planned maintenance windows rather than emergency shutdowns. This transforms cybersecurity from a source of anxiety and unexpected crises into a manageable part of operations planning, allowing them to maintain their track record of on-time delivery and protect the reputation they've built with customers and stakeholders.",
  },
  {
    value: "supply-chain",
    title: "Supply Chain Specialist",
    body: "Supply chain specialists manage relationships with dozens or hundreds of vendors but have limited visibility into their security practices. These professionals are accountable when a supplier breach compromises production or leaks sensitive data, yet lack the tools to assess vendor risk before problems occur. When a third-party incident disrupts the supply chain, pressure comes from all sides: operations blaming delayed materials, leadership demanding explanations, and customers frustrated by missed deliveries. What supply chain specialists truly need is confidence that vendor connections won't become backdoors for cyberattacks. Early warning when a supplier shows signs of security weakness gives time to work with partners on improvements or develop contingency plans. Rather than discovering vendor vulnerabilities through devastating incidents, supply chain specialists aspire to build a resilient supply chain where security is a known quantity, enabling informed sourcing decisions and maintaining the seamless flow of materials that keeps production running smoothly.",
  },
  {
    value: "product-manager",
    title: "Product Manager",
    body: "Protects years of R&D investment in proprietary designs, formulas, and manufacturing processes, but worries that competitors or bad actors could steal this intellectual property overnight. They've invested millions in innovation that defines market position, yet they often don't know if trade secrets are already circulating on underground forums or being sold to competitors. By the time IP theft is discovered, the competitive advantage may already be lost. Product Managers want to sleep well knowing their innovations are protected, that the designs, processes, and trade secrets that differentiate their products aren't being quietly exfiltrated by industrial spies. What they need is early detection when proprietary information appears in unauthorized places, giving them time to take legal action, adjust strategies, and protect market position. Instead of learning about IP theft from competitor product launches, they want to maintain control over their innovations and preserve the competitive edge that justifies their R&D investments.",
  },
];

const challenges = [
  {
    title: "Attacks on Industrial Control Systems & Operational Technology",
    body: "Production environments rely on ICS and OT systems—including SCADA, PLCs, and robotics—that were often designed without security in mind. These systems, when exposed to networks or the internet, become targets for attackers seeking to halt operations. A successful attack can shut down entire production lines, damage equipment, and create safety hazards. Unlike IT breaches that compromise data, OT attacks can cause physical damage and endanger workers.",
  },
  {
    title: "Ransomware Disrupting Manufacturing Operations",
    body: "Cybercriminals specifically target manufacturers with ransomware because downtime is intolerable. When production systems are encrypted, every hour offline means lost revenue, missed delivery deadlines, and potential contract penalties. This urgency creates enormous pressure to pay ransoms quickly, making manufacturers attractive targets for organized cybercrime groups. The average ransomware attack causes 21 days of disruption—a devastating impact for time-sensitive manufacturing operations.",
  },
  {
    title: "Supply Chain & Third-Party Vendor Risks",
    body: "Modern manufacturing depends on complex, multi-tier supply chains spanning dozens or hundreds of vendors. Attackers increasingly target smaller suppliers with weaker security as a backdoor into larger manufacturers. A compromised vendor can introduce malware, provide unauthorized access, or leak sensitive data across the entire supply network. Yet many manufacturers lack visibility into their vendors' security postures or the specific systems connected to their networks.",
  },
  {
    title: "Intellectual Property Theft & Industrial Espionage",
    body: "Manufacturers invest millions in proprietary designs, production processes, patents, and trade secrets. Industrial espionage—whether state-sponsored or competitor-driven—threatens competitive advantage. When blueprints, formulas, or manufacturing techniques leak to competitors or appear on the dark web, years of R&D investment can be lost overnight. These attacks often go undetected for months while attackers systematically exfiltrate valuable data.",
  },
];

const steps = [
  {
    label: "Step 1",
    body: "Review supply chain risk across all vendor connections and third-party systems",
  },
  {
    label: "Step 2",
    body: "Discover exposed OT systems, IoT devices, and forgotten assets across your manufacturing network",
  },
  {
    label: "Step 3",
    body: "Monitor continuously for vulnerabilities and threats targeting your production environment",
  },
  {
    label: "Step 4",
    body: "Receive prioritized alerts with clear remediation steps before disruptions occur",
  },
];

const benefits = [
  {
    n: "01",
    title: "Prevent Costly Production Downtime",
    body: "Avoid expensive production halts and missed shipments by discovering and securing vulnerabilities before cybercriminals exploit them to disrupt your operations.",
  },
  {
    n: "02",
    title: "Protect Your Competitive Advantage",
    body: "Stay ahead of threats targeting manufacturers in your industry with early warnings that give you time to strengthen defenses before attacks reach your facilities.",
  },
  {
    n: "03",
    title: "Maintain Production Schedule Reliability",
    body: "Keep your production lines running on schedule by addressing the most critical security gaps first—eliminating the vulnerabilities that could cause unexpected shutdowns.",
  },
  {
    n: "04",
    title: "Safeguard Your Innovation & Designs",
    body: "Detect when your proprietary designs, trade secrets, or manufacturing processes appear in unauthorized places, so you can act before competitors gain access.",
  },
  {
    n: "05",
    title: "Protect Customer Trust & Revenue",
    body: "Stop counterfeit products and fraudulent websites from damaging your brand reputation and stealing sales from your legitimate business.",
  },
  {
    n: "06",
    title: "Prevent Unauthorized Access",
    body: "Catch compromised employee logins before attackers use them to infiltrate your systems, steal data, or launch ransomware attacks.",
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
    title: "Solutions for Energy and Utilities",
    href: "/industries/energy",
    step: "03",
  },
];

export function ManufacturingContent() {
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
              [ Solutions for Manufacturing – use case ]
            </TechLabel>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
              Cybersecurity Solutions for Modern Manufacturing
            </h1>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              <p>
                The manufacturing sector is undergoing a digital transformation
                that&apos;s revolutionizing production efficiency. Smart
                factories, IoT-enabled equipment, and interconnected supply
                chains are driving unprecedented operational gains. But this
                connectivity creates an expanded attack surface that
                cybercriminals actively target. Manufacturers handle valuable
                intellectual property, operate critical production systems, and
                manage complex supply chains, making them prime targets for
                ransomware, industrial espionage, and disruptive cyberattacks.
              </p>
              <p>
                Traditional security approaches like periodic assessments and
                reactive monitoring can&apos;t protect manufacturing
                environments that operate 24/7. When production lines halt due
                to cyberattacks, every minute of downtime translates directly to
                lost revenue, missed shipments, and damaged customer
                relationships.
              </p>
              <p>
                PurpleHunt provides comprehensive threat intelligence and
                continuous monitoring that protects both your digital
                infrastructure and operational technology. We identify exposed
                assets, monitor for emerging threats, and detect vulnerabilities
                before they disrupt production.
              </p>
            </div>
          </div>
          <div className="text-foreground">
            <AssetUnderAttack label="plant">
              <Factory className="relative z-10 size-12 text-primary sm:size-14" />
            </AssetUnderAttack>
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <SectionRule step="01" label="Impact on Roles" />
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Impact on Roles
          </h2>
          <Tabs defaultValue="plant-manager" className="gap-8">
            <TabsList variant="line" className="h-auto w-full max-w-full">
              {roles.map((role) => (
                <TabsTrigger
                  key={role.value}
                  value={role.value}
                  className="px-3 py-2"
                >
                  {role.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {roles.map((role) => (
              <TabsContent key={role.value} value={role.value}>
                <p className="max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {role.body}
                </p>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <SectionRule step="02" label="Current Challenges" />
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
            step="03"
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
          <SectionRule step="04" label="Key Benefits" />
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
              step="05"
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
          <SectionRule step="06" label="Related Use Cases" />
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
