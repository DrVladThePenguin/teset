"use client";

import Image from "next/image";
import { ArrowUpRight, Building2, Shield, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  BlueprintFrame,
  SectionRule,
} from "@/components/landing/blueprint";
import { InsetGrainient } from "@/components/landing/inset-grainient";
import { TechLabel } from "@/components/landing/tech-label";
import { GlassHedgehogScout } from "@/components/about/glass-hedgehog";

const missions = [
  {
    step: "02A",
    icon: Building2,
    title: "Empower Businesses",
    body: "To provide high-quality cybersecurity services that are cost-effective and easy to use, so that businesses of all sizes can focus on what they do best.",
  },
  {
    step: "02B",
    icon: Users,
    title: "Bridge the Talent Gap",
    body: "To offer training and educational opportunities that empower individuals to pursue careers in cybersecurity and help build a more secure future for all.",
  },
  {
    step: "02C",
    icon: Shield,
    title: "Enhance Cyber Resilience",
    body: "To build a culture of security awareness and resilience by providing businesses with the insights and tools they need to stay ahead of cyber threats.",
  },
];

const founders = [
  {
    name: "Praveen Nettimi",
    title: "Founder & CEO",
    step: "03A",
    image: "/images/founders/praveen.png",
    linkedin: "https://www.linkedin.com/in/praveennettimi",
    bio: "Praveen is a highly experienced cybersecurity professional with over 15 years of experience in the field. He has a deep understanding of the cybersecurity landscape and is passionate about helping businesses protect their data and assets. He has worked with a variety of businesses, from startups to large enterprises, and has helped them improve their security posture and defend against cyberattacks.",
  },
  {
    name: "Divakar Prayaga",
    title: "Founder & COO",
    step: "03B",
    image: "/images/founders/diwakar.png",
    linkedin: "https://www.linkedin.com/in/divakarprayaga",
    bio: "Divakar Prayaga brings over 18 years of experience in leading and scaling cybersecurity and risk management portfolios. He has held several key leadership roles at global high-growth organizations. With a track record of building and leading successful security strategy and risk functions across diverse industries, including banking, technology, fintech, and e-commerce, he is well-equipped to lead PurpleLens. Divakar is strongly committed to community and mentors startups through various incubators helping them build cybersecurity strategy from nascent stages.",
  },
];

function Tape({ side }: { side: "left" | "right" }) {
  return (
    <span
      aria-hidden
      className={
        side === "left"
          ? "pointer-events-none absolute top-7 -left-3 z-20 h-3 w-[4.25rem] -rotate-[28deg] sm:-left-4 sm:w-20"
          : "pointer-events-none absolute right-[-0.85rem] bottom-8 z-20 h-3 w-[4.25rem] rotate-[28deg] sm:-right-4 sm:w-20"
      }
    >
      <span
        className="block size-full opacity-80"
        style={{
          background:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.55) 0 2px, rgba(245,240,255,0.28) 2px 4px)",
          boxShadow:
            "0 1px 2px rgba(20,8,40,0.22), inset 0 1px 0 rgba(255,255,255,0.55)",
        }}
      />
    </span>
  );
}

export function AboutHero() {
  return (
    <section className="relative -mt-px overflow-visible pb-16 pt-0 text-primary-foreground lg:pb-20">
      <InsetGrainient wash="hero" className="overflow-hidden" />
      <div
        className="pointer-events-none absolute top-0 right-[max(0px,calc(50%-40rem))] left-[max(0px,calc(50%-40rem))] h-px bg-white/70"
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

      <div className="relative z-10 mx-auto max-w-3xl px-4 pt-16 sm:px-6 sm:pt-24 lg:pt-32">
        <div className="relative border border-white/42 bg-white/5 px-8 py-10 backdrop-blur-[2px] sm:px-12 sm:py-12">
          <Tape side="left" />
          <Tape side="right" />
          <div className="flex flex-col items-center gap-6 text-center">
            <TechLabel className="text-primary-foreground/75">
              [ About PurpleLens ]
            </TechLabel>
            <h1 className="text-3xl font-medium leading-[1.08] tracking-tight text-primary-foreground sm:text-5xl lg:text-[3.4rem]">
              We Hunt Threats So You Don’t Have To
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              In the digital landscape, where cyber threats are becoming more
              sophisticated, we provide a comprehensive range of cybersecurity
              services and solutions to help companies of all sizes stay secure.
              Whether you&apos;re a startup looking to secure your first
              application or a large enterprise needing a full security audit,
              we have the expertise and experience to help you succeed. We are a
              team of certified cybersecurity professionals who are passionate
              about helping businesses protect their valuable data and assets
              from cyberattacks. Our services include vulnerability assessments,
              penetration testing, security audits, and managed security
              services. We also offer a range of cybersecurity training and
              consulting services to help businesses build a strong security
              culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutVision() {
  return (
    <>
    <GlassHedgehogScout />
    <section
      id="vision"
      className="relative overflow-hidden border-y border-hairline py-16 text-primary-foreground sm:py-24 lg:py-28"
    >
      <InsetGrainient wash="metrics" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6">
        <SectionRule
          step="01"
          label="Our Vision"
          className="[&_span]:text-primary-foreground/70"
          lineClassName="bg-primary-foreground/42"
        />
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Our Vision
        </h2>
        <div className="grid gap-px border border-primary-foreground/32 bg-primary-foreground/32 lg:grid-cols-1">
          <div className="flex flex-col gap-3 bg-black/25 p-6 backdrop-blur-[2px] sm:p-8">
            <span className="font-tech text-[10px] tracking-[0.14em] text-primary-foreground/55">
              01A
            </span>
            <div className="flex max-w-4xl flex-col gap-4 text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
              <p>
                PurpleLens is committed to creating a safer digital world by
                providing high-quality, affordable cybersecurity solutions to
                businesses of all sizes. We believe that security should be
                accessible to everyone, not just those with large budgets.
              </p>
              <p>
                Through innovation, collaboration, and a dedication to
                excellence, we strive to empower organizations with the tools
                and knowledge they need to defend themselves against
                ever-evolving cyber threats and protect their most valuable
                digital assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export function AboutMission() {
  return (
    <section id="mission" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4 sm:px-6">
        <div className="flex flex-col gap-6">
          <SectionRule step="02" label="Our Mission" />
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Our Mission
          </h2>
        </div>

        <div className="grid gap-px border border-hairline bg-border-hairline md:grid-cols-3">
          {missions.map((item) => (
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
      </div>
    </section>
  );
}

export function AboutFounders() {
  return (
    <section
      id="founders"
      className="relative overflow-hidden border-y border-hairline py-16 text-primary-foreground sm:py-24 lg:py-28"
    >
      <InsetGrainient wash="metrics" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <div className="flex flex-col gap-5">
          <SectionRule
            step="03"
            label="Leadership"
            className="[&_span]:text-primary-foreground/70"
            lineClassName="bg-primary-foreground/42"
          />
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Meet Our Founders
          </h2>
        </div>

        <div className="grid gap-px border border-primary-foreground/32 bg-primary-foreground/32 lg:grid-cols-2">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="flex flex-col gap-6 bg-black/25 p-4 backdrop-blur-[2px] sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-tech text-[10px] tracking-[0.14em] text-primary-foreground/55">
                  {founder.step}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 rounded-full border-primary-foreground/45 bg-white/10 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground"
                  render={
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                  nativeButton={false}
                >
                  LinkedIn
                  <ArrowUpRight data-icon="inline-end" />
                </Button>
              </div>

              <div className="mx-auto w-full max-w-[280px]">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={297}
                  height={289}
                  className="h-auto w-full"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium">{founder.name}</h3>
                <p className="font-tech text-[11px] tracking-[0.14em] text-primary-foreground/70 uppercase">
                  {founder.title}
                </p>
                <p className="text-sm leading-relaxed text-primary-foreground/85">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
