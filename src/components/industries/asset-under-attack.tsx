import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { BlueprintFrame } from "@/components/landing/blueprint";
import { cn } from "@/lib/utils";

function SpiderGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden>
      <path
        d="M13 13.5 L5 7 M12.5 16 L3 16 M12.5 18.5 L5 25 M13.5 21 L8 28"
        className="stroke-primary/65"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M19 13.5 L27 7 M19.5 16 L29 16 M19.5 18.5 L27 25 M18.5 21 L24 28"
        className="stroke-primary/65"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <ellipse
        cx="16"
        cy="19"
        rx="5.5"
        ry="6.5"
        className="fill-primary/20 stroke-primary/75"
        strokeWidth="1.15"
      />
      <circle
        cx="16"
        cy="12"
        r="4"
        className="fill-primary/25 stroke-primary/75"
        strokeWidth="1.15"
      />
      <circle cx="14.4" cy="11.4" r="0.9" className="fill-primary" />
      <circle cx="17.6" cy="11.4" r="0.9" className="fill-primary" />
    </svg>
  );
}

const spiders = [
  "fs-bug-1",
  "fs-bug-2",
  "fs-bug-3",
  "fs-bug-4",
  "fs-bug-5",
  "fs-bug-6",
  "fs-bug-7",
  "fs-bug-8",
];

export function AssetUnderAttack({
  children,
  label = "asset",
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <BlueprintFrame className="overflow-hidden bg-background/80 p-4 sm:p-6" label={label}>
      <div className="relative mx-auto aspect-square w-full max-w-sm">
        <div
          aria-hidden
          className="absolute inset-[20%] rounded-full bg-primary/15 blur-2xl"
        />
        <div className="absolute inset-[10%] rounded-full border border-dashed border-hairline" />

        <div className="fs-coin absolute inset-[28%] flex items-center justify-center rounded-full border border-primary/60 bg-gradient-to-br from-white/80 via-[#ddd6fe]/50 to-primary/25 shadow-[0_0_40px_-8px_rgba(92,60,180,0.45)]">
          <span className="absolute inset-[10%] rounded-full border border-primary/35" />
          <span className="absolute inset-[22%] rounded-full border border-dashed border-primary/40" />
          {children}
        </div>

        {spiders.map((cls) => (
          <div
            key={cls}
            className={cn("pointer-events-none absolute top-1/2 left-1/2", cls)}
          >
            <SpiderGlyph className="size-7 sm:size-8" />
          </div>
        ))}
      </div>
    </BlueprintFrame>
  );
}

export function IndustryMark({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <BlueprintFrame className="bg-background/80 p-8" label={label}>
      <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
        <div
          aria-hidden
          className="absolute inset-[16%] rounded-full bg-primary/12 blur-2xl"
        />
        <div className="absolute inset-[18%] rounded-full border border-dashed border-hairline" />
        <div className="absolute inset-[28%] rounded-full border border-primary/50 bg-gradient-to-br from-white/80 via-[#ddd6fe]/50 to-primary/20" />
        <Icon className="relative size-16 text-primary" />
      </div>
    </BlueprintFrame>
  );
}
