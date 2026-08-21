"use client";

import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";

const Grainient = dynamic(() => import("@/components/react-bits/Grainient"), {
  ssr: false,
});

/** Same field used in hero + Measurable Risk Reduction */
export const brandGrainientProps = {
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

type Wash = "hero" | "metrics";

const washClass: Record<Wash, string> = {
  hero: "from-white/25 via-[#2d1b6e]/40 to-[#2d1b6e]/55",
  metrics: "from-white/20 via-[#2d1b6e]/45 to-[#2d1b6e]/60",
};

/**
 * Grainient clipped to the vertical blueprint guides so the site
 * dot-grid still shows in the side margins.
 */
export function InsetGrainient({
  wash = "metrics",
  className,
}: {
  wash?: Wash;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-y-0 left-[max(0px,calc(50%-40rem))] right-[max(0px,calc(50%-40rem))]",
        className
      )}
      aria-hidden
    >
      <Grainient {...brandGrainientProps} />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b",
          washClass[wash]
        )}
      />
    </div>
  );
}
