import { cn } from "@/lib/utils";

export function GlassHedgehogScout() {
  return (
    <div className="relative mx-auto h-44 max-w-6xl overflow-hidden px-4 sm:h-48 sm:px-6 lg:h-56">
      <div
        aria-hidden
        className="absolute top-1/2 right-6 left-6 h-px -translate-y-1/2 bg-primary/30"
      />
      <span className="font-tech pointer-events-none absolute top-3 left-4 max-w-[10rem] text-[10px] tracking-[0.1em] text-muted-foreground sm:left-6 sm:max-w-[14rem]">
        Magnus the First&apos;s play pen
      </span>
      <span className="font-tech pointer-events-none absolute top-3 right-4 text-[10px] tracking-[0.16em] text-primary uppercase sm:right-6">
        Finding bugs
      </span>

      <Bug className="bug-wander-a" />
      <Bug className="bug-wander-b" />
      <Bug className="bug-wander-c" />

      <div className="hedgehog-wander pointer-events-none absolute w-[9.75rem] sm:w-48">
        <div className="hedgehog-bob">
          <HedgehogSvg />
        </div>
      </div>
    </div>
  );
}

function Bug({ className }: { className: string }) {
  return (
    <div className={cn("pointer-events-none absolute", className)}>
      <svg viewBox="0 0 28 28" className="size-6 sm:size-7" fill="none" aria-hidden>
        <circle
          cx="14"
          cy="16"
          r="6"
          className="fill-primary/10 stroke-primary/55"
          strokeWidth="1"
        />
        <circle cx="12" cy="15" r="1.15" className="fill-primary/85" />
        <circle cx="16.5" cy="15" r="1.15" className="fill-primary/85" />
        <path
          d="M11 19 Q14 21 17 19"
          className="stroke-primary/50"
          strokeWidth="0.9"
        />
        <line
          x1="10"
          y1="11"
          x2="7"
          y2="7"
          className="stroke-primary/45"
          strokeWidth="0.9"
        />
        <line
          x1="18"
          y1="11"
          x2="21"
          y2="7"
          className="stroke-primary/45"
          strokeWidth="0.9"
        />
      </svg>
    </div>
  );
}

function HedgehogSvg() {
  return (
    <svg viewBox="0 0 260 150" className="h-auto w-full" fill="none" aria-hidden>
      <defs>
        <linearGradient id="hg-glass" x1="40" y1="10" x2="160" y2="140">
          <stop offset="0%" stopColor="#F5F3FF" stopOpacity="0.62" />
          <stop offset="48%" stopColor="#A78BFA" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.32" />
        </linearGradient>
        <linearGradient id="hg-lens" x1="170" y1="28" x2="230" y2="96">
          <stop offset="0%" stopColor="#F5F3FF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* feet */}
      <ellipse
        cx="86"
        cy="124"
        rx="8"
        ry="4"
        fill="url(#hg-glass)"
        className="stroke-primary/40"
        strokeWidth="0.8"
      />
      <ellipse
        cx="118"
        cy="124"
        rx="8"
        ry="4"
        fill="url(#hg-glass)"
        className="stroke-primary/40"
        strokeWidth="0.8"
      />

      {/* body */}
      <ellipse
        cx="108"
        cy="92"
        rx="48"
        ry="34"
        fill="url(#hg-glass)"
        className="stroke-primary/40"
        strokeWidth="1"
      />

      {/* spines */}
      <g className="stroke-primary/55" strokeWidth="1" strokeLinejoin="round">
        <path d="M70 78 L62 52 L82 70" fill="url(#hg-glass)" />
        <path d="M86 68 L84 40 L100 64" fill="url(#hg-glass)" />
        <path d="M104 62 L108 34 L118 62" fill="url(#hg-glass)" />
        <path d="M122 64 L136 38 L134 70" fill="url(#hg-glass)" />
        <path d="M138 74 L158 50 L146 84" fill="url(#hg-glass)" />
        <path d="M78 90 L66 70 L88 86" fill="url(#hg-glass)" />
        <path d="M148 90 L164 72 L150 98" fill="url(#hg-glass)" />
      </g>

      {/* snout */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="-4 148 96; 5 148 96; -4 148 96"
          dur="0.7s"
          repeatCount="indefinite"
        />
        <ellipse
          cx="152"
          cy="98"
          rx="22"
          ry="14"
          fill="url(#hg-glass)"
          className="stroke-primary/40"
          strokeWidth="1"
        />
        <circle cx="170" cy="98" r="3" className="fill-primary/75" />
        <circle cx="144" cy="94" r="3.2" className="fill-primary/85" />
        <circle cx="145.2" cy="92.8" r="1" className="fill-white" />
        <path
          d="M158 104 Q164 107 168 104"
          className="stroke-primary/45"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </g>

      {/* ear */}
      <circle
        cx="128"
        cy="74"
        r="6"
        fill="url(#hg-glass)"
        className="stroke-primary/40"
        strokeWidth="1"
      />

      {/* paw + glass */}
      <ellipse
        cx="168"
        cy="108"
        rx="7"
        ry="11"
        transform="rotate(40 168 108)"
        fill="url(#hg-glass)"
        className="stroke-primary/40"
        strokeWidth="1"
      />

      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="-12 198 72; 10 198 72; -12 198 72"
          dur="1s"
          repeatCount="indefinite"
        />
        <line
          x1="214"
          y1="88"
          x2="230"
          y2="106"
          className="stroke-primary/50"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <circle
          cx="198"
          cy="72"
          r="20"
          fill="url(#hg-lens)"
          className="stroke-primary/50"
          strokeWidth="1.25"
        />
        <circle
          cx="198"
          cy="72"
          r="13"
          className="stroke-primary/25"
          strokeWidth="0.75"
        />
        <line
          x1="187"
          y1="72"
          x2="209"
          y2="72"
          className="stroke-primary/30"
          strokeWidth="0.75"
        />
        <line
          x1="198"
          y1="61"
          x2="198"
          y2="83"
          className="stroke-primary/30"
          strokeWidth="0.75"
        />
      </g>
    </svg>
  );
}
