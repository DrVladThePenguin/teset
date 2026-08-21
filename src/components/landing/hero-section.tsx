"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TechLabel } from "@/components/landing/tech-label";

const Grainient = dynamic(() => import("@/components/react-bits/Grainient"), {
  ssr: false,
});

/** Shared Grainient look — more grain, brighter white balance */
const grainientProps = {
  color1: "#A78BFA",
  color2: "#7C3AED",
  color3: "#F5F3FF",
  timeSpeed: 0.25,
  colorBalance: 0.22,
  warpStrength: 1.0,
  warpFrequency: 5.0,
  warpSpeed: 2.0,
  warpAmplitude: 50.0,
  blendAngle: 0.0,
  blendSoftness: 0.08,
  rotationAmount: 500.0,
  noiseScale: 2.0,
  grainAmount: 0.18,
  grainScale: 2.2,
  grainAnimated: false,
  contrast: 1.35,
  gamma: 1.05,
  saturation: 0.95,
  centerX: 0.0,
  centerY: 0.0,
  zoom: 0.9,
} as const;

function MacWindow({
  children,
  title = "PurpleLens — Automated Testing",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/25 bg-[#1c1c1e] shadow-[0_40px_100px_-30px_rgba(20,10,50,0.65)]">
      {/* macOS title bar */}
      <div className="relative flex h-11 items-center border-b border-white/10 bg-[#2a2a2c] px-4">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#ff5f57] shadow-[inset_0_-0.5px_1px_rgba(0,0,0,0.25)]" />
          <span className="size-3 rounded-full bg-[#febc2e] shadow-[inset_0_-0.5px_1px_rgba(0,0,0,0.25)]" />
          <span className="size-3 rounded-full bg-[#28c840] shadow-[inset_0_-0.5px_1px_rgba(0,0,0,0.25)]" />
        </div>
        <p className="pointer-events-none absolute inset-x-0 text-center font-tech text-[10px] tracking-[0.08em] text-white/45">
          {title}
        </p>
      </div>
      <div className="bg-background">{children}</div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative -mt-px overflow-hidden pb-10 pt-0 text-primary-foreground lg:pb-16">
      {/*
        Grainient kept inside the vertical blueprint guides so side margins
        still show the site dot grid.
      */}
      <div
        className="pointer-events-none absolute inset-y-0 left-[max(0px,calc(50%-40rem))] right-[max(0px,calc(50%-40rem))] overflow-hidden"
        aria-hidden
      >
        <Grainient {...grainientProps} />
        {/* Brighter white wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-[#2d1b6e]/40 to-[#2d1b6e]/55" />

        {/* Horizontal dividers at annotated height */}
        <div className="absolute top-0 right-0 left-0 h-px bg-white/45" />
        <div className="absolute top-0 left-0 h-px w-16 bg-white/80 sm:w-24" />
        <div className="absolute top-0 right-0 h-px w-16 bg-white/80 sm:w-24" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 pt-20 text-center sm:pt-24 lg:pt-32">
        <TechLabel className="text-primary-foreground/75">
          [ Next-gen AI red teaming ]
        </TechLabel>

        <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-primary-foreground sm:text-5xl lg:text-[3.4rem]">
          Cybersecurity for <span className="text-white">AI Velocity</span>
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
          Continuous, autonomous penetration testing that validates real
          exploitability at the speed your AI-driven teams ship.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            variant="secondary"
            className="h-11 rounded-full px-6 text-base"
            render={<a href="#demo" />}
            nativeButton={false}
          >
            Request Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 rounded-full border-primary-foreground/45 bg-white/10 px-5 text-base text-primary-foreground backdrop-blur-sm hover:bg-white/20 hover:text-primary-foreground"
            render={<a href="#platform" />}
            nativeButton={false}
          >
            How it works
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-14 max-w-3xl px-6 lg:mt-16">
        <MacWindow>
          <Image
            src="/images/dashboard-preview.png"
            alt="PurpleLens automated testing dashboard showing vulnerability trends, recent scans, and severity breakdown"
            width={1600}
            height={1000}
            className="h-auto w-full"
            priority
          />
        </MacWindow>
      </div>
    </section>
  );
}
