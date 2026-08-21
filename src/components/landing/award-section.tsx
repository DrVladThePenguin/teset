import { Button } from "@/components/ui/button";
import { SectionRule } from "@/components/landing/blueprint";

export function AwardSection() {
  return (
    <section id="blog" className="relative border-y border-hairline py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionRule step="03" label="Recognition" className="mb-10" />
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Playful award badge — clean, no clutter */}
          <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
            {/* Soft glow */}
            <div
              aria-hidden
              className="absolute size-56 rounded-full bg-primary/15 blur-3xl"
            />

            {/* Spinning dashed ring */}
            <div
              aria-hidden
              className="absolute size-64 animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-primary/35"
            />

            {/* Main badge */}
            <div className="relative z-10 flex size-52 flex-col items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_20px_60px_-20px_rgba(92,60,180,0.55)]">
              <span className="font-tech text-[10px] tracking-[0.22em] text-primary-foreground/70 uppercase">
                Winner
              </span>
              <span className="mt-2 font-tech text-5xl font-bold tracking-tight">
                2025
              </span>
              <span className="mt-3 max-w-[8.5rem] text-center text-[11px] leading-snug text-primary-foreground/85">
                Innovative Startup of the Year
              </span>
            </div>

            {/* Floating star accents */}
            <span
              aria-hidden
              className="absolute top-8 right-10 font-tech text-2xl text-primary animate-[bounce_3s_ease-in-out_infinite]"
            >
              ✦
            </span>
            <span
              aria-hidden
              className="absolute bottom-14 left-8 font-tech text-lg text-primary/60 animate-[bounce_4s_ease-in-out_infinite_0.5s]"
            >
              ✦
            </span>
          </div>

          <div className="flex flex-col items-start gap-5">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Innovative Startup of the Year{" "}
              <span className="text-primary">2025</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Recognized for advancing continuous, AI-native penetration testing
              that proves exploitability instead of guessing risk.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="h-11 rounded-none border-hairline bg-transparent px-6 font-tech text-xs tracking-[0.14em] uppercase"
              render={<a href="#blog" />}
              nativeButton={false}
            >
              Read the Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
