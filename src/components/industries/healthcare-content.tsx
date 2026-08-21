"use client";

import { ArrowRight, Check, HeartPulse } from "lucide-react";

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
    title: "Ransomware Attacks Disrupting Patient Care",
    body: "Healthcare organizations face relentless ransomware attacks that can literally shut down hospitals. When attackers encrypt electronic health record (EHR) systems, medical imaging platforms, or critical operational systems, the impact is immediate and severe. Hospitals must divert ambulances to other facilities. Surgeries get canceled. Lab results become inaccessible. Doctors resort to paper records while staff scramble to restore systems. The average healthcare ransomware attack causes 15-21 days of disruption, with recovery costs reaching millions. Cybercriminals specifically target healthcare because they know disrupted patient care creates enormous pressure to pay ransoms quickly.",
  },
  {
    title: "Protection of Electronic Health Records & Patient Data",
    body: "Healthcare data is exceptionally valuable on the black market—worth 10-50 times more than credit card information. Complete medical records enable identity theft, insurance fraud, prescription drug fraud, and blackmail. Data breaches expose protected health information (PHI) including diagnoses, medications, test results, and treatment histories—deeply personal information that patients expect to remain confidential. Beyond the human impact, breaches trigger severe penalties under HIPAA, with fines reaching millions of dollars and mandatory reporting requirements that damage institutional reputation.",
  },
  {
    title: "Medical Device & IoT Security Risks",
    body: "Modern healthcare relies on networked medical devices—infusion pumps, ventilators, MRI machines, patient monitors, and implantable devices. Many of these devices were designed for functionality and FDA approval, not cybersecurity, creating vulnerabilities that can't be easily patched. Compromised medical devices could deliver incorrect medication doses, alter diagnostic results, or simply cease functioning during critical procedures. The explosion of healthcare IoT—from smart beds to connected insulin pumps—expands this attack surface dramatically while creating blind spots for security teams lacking visibility into all connected devices.",
  },
  {
    title: "Fake Healthcare Websites & Phishing Scams",
    body: "Attackers create sophisticated fake hospital websites, fraudulent patient portals, and phishing campaigns impersonating healthcare providers to steal credentials and personal information. These scams deceive patients into entering insurance information, credit card details, or login credentials. Healthcare-themed phishing attacks also target employees, exploiting their trust in medical communications and urgency around patient care. During public health crises, these scams proliferate as attackers exploit anxiety and demand for health information.",
  },
];

const steps = [
  {
    label: "Step 1",
    body: "We identify all internet-facing systems in your healthcare network, from patient portals and EHR systems to connected medical devices and third-party integrations with labs, pharmacies, and insurance providers.",
  },
  {
    label: "Step 2",
    body: "We provide continuous monitoring for ransomware groups targeting hospitals, compromised credentials that could access patient records, and vulnerabilities in medical devices and healthcare systems.",
  },
  {
    label: "Step 3",
    body: "We scan dark web forums and breach databases for exposed patient information, leaked employee credentials, and compromised access to EHR systems, enabling rapid response before data is misused.",
  },
  {
    label: "Step 4",
    body: "You get clear, actionable alerts focused on threats to patient care continuity and data protection, with remediation guidance that works within clinical schedules and healthcare operations.",
  },
];

const benefits = [
  {
    n: "01",
    title: "Ensure Uninterrupted Patient Care",
    body: "Prevent ransomware attacks and system disruptions that force ambulance diversions, surgery cancellations, and treatment delays by identifying and securing vulnerabilities before they can shut down critical healthcare systems.",
  },
  {
    n: "02",
    title: "Protect Patient Privacy & Confidential Medical Records",
    body: "Safeguard the sensitive health information patients trust you to protect, from diagnoses and medications to treatment histories, avoiding breaches that expose private medical details and violate the physician-patient relationship.",
  },
  {
    n: "03",
    title: "Maintain HIPAA Compliance & Avoid Penalties",
    body: "Meet strict regulatory requirements with continuous monitoring and documentation that demonstrates patient data protections, avoiding the millions in fines, mandatory corrective actions, and breach notification costs that follow HIPAA violations.",
  },
  {
    n: "04",
    title: "Secure Connected Medical Devices",
    body: "Gain visibility into networked medical equipment, from infusion pumps to imaging systems, identifying security risks in devices that directly impact patient safety before they can be exploited to disrupt care or endanger lives.",
  },
  {
    n: "05",
    title: "Stop Credential Theft Before Patient Data Is Accessed",
    body: "Detect compromised employee credentials before attackers can use them to access electronic health records, steal patient information for fraud, or move through your network to reach critical clinical systems.",
  },
  {
    n: "06",
    title: "Protect Patients from Healthcare Fraud & Identity Theft",
    body: "Prevent the identity theft, insurance fraud, and financial harm that patients suffer when their complete medical records fall into criminal hands, protecting both their privacy and their financial wellbeing.",
  },
];

const related = [
  {
    title: "Solutions for Financial Services",
    href: "/industries/financial-services",
    step: "01",
  },
  {
    title: "Solutions for Manufacturing",
    href: "/industries/manufacturing",
    step: "02",
  },
  {
    title: "Solutions for Energy and Utilities",
    href: "/industries/energy",
    step: "03",
  },
];

export function HealthcareContent() {
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
              [ Solutions for Healthcare – use case ]
            </TechLabel>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
              Solutions for Healthcare
            </h1>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              <p>
                The healthcare sector sits at a critical
                intersection—managing life-saving services while handling some
                of the most sensitive personal data imaginable. From major
                hospital systems and specialty clinics to telehealth providers
                and medical research institutions, healthcare organizations
                depend on digital systems that directly impact patient safety
                and care quality. This dependence, combined with valuable
                patient data and often-constrained IT security resources, makes
                healthcare one of the most targeted industries for
                cyberattacks.
              </p>
              <p>
                The consequences of healthcare breaches extend beyond data
                theft. Ransomware attacks force hospitals to divert ambulances
                and cancel surgeries. Compromised medical devices can endanger
                patient lives. Stolen health records enable identity theft and
                insurance fraud that can haunt victims for years. Each incident
                not only violates patient privacy but can directly compromise
                the quality and availability of medical care.
              </p>
              <p>
                Healthcare organizations face unique cybersecurity challenges:
                legacy medical systems that can&apos;t be easily patched,
                connected medical devices with embedded vulnerabilities,
                complex networks of contractors and partners, and strict
                regulatory requirements under HIPAA, GDPR, and other
                frameworks. Meanwhile, healthcare staff focused on patient care
                often lack cybersecurity training, making them vulnerable to
                sophisticated phishing attacks.
              </p>
              <p>
                PurpleHunt provides healthcare organizations with comprehensive
                security solutions that protect patient data, ensure care
                continuity, maintain regulatory compliance, and safeguard the
                digital infrastructure that modern medicine depends on.
              </p>
            </div>
          </div>
          <div className="text-foreground">
            <AssetUnderAttack label="clinical">
              <HeartPulse className="relative z-10 size-12 text-primary sm:size-14" />
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
