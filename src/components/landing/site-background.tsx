"use client";

import dynamic from "next/dynamic";

const Grainient = dynamic(() => import("@/components/react-bits/Grainient"), {
  ssr: false,
});

/**
 * Subtle Grainient wash + blueprint dot grid.
 * Kept low-opacity so Mozilla Text / Space Mono hierarchy stays primary.
 */
export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Soft grainient field — desaturated brand purples */}
      <div className="absolute inset-0 opacity-[0.22]">
        <Grainient
          color1="#DDD6FE"
          color2="#7C3AED"
          color3="#F5F3FF"
          timeSpeed={0.12}
          colorBalance={0.15}
          warpStrength={0.55}
          warpFrequency={3.5}
          warpSpeed={1.1}
          warpAmplitude={70}
          blendAngle={18}
          blendSoftness={0.12}
          rotationAmount={220}
          noiseScale={1.4}
          grainAmount={0.06}
          grainScale={2.4}
          grainAnimated={false}
          contrast={1.15}
          gamma={1.05}
          saturation={0.75}
          centerX={0.08}
          centerY={-0.12}
          zoom={0.85}
        />
      </div>

      {/* White veil so content stays readable */}
      <div className="absolute inset-0 bg-background/78" />

      {/* CAD-style dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-90" />

      {/* Vertical blueprint guides — match metrics outward spacing */}
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-primary/22" />
      <div className="absolute inset-y-0 left-[max(0px,calc(50%-40rem))] w-px bg-primary/28" />
      <div className="absolute inset-y-0 right-[max(0px,calc(50%-40rem))] w-px bg-primary/28" />
    </div>
  );
}
