export function FinalCtaSection({
  title = "Ready to Run Your Pentest?",
  body = "See how Purple Lens helps you stay ahead of the curve. Experience automated pentesting and see how we secure your AI stack.",
  primaryLabel = "Get a Quote",
  secondaryLabel = "Get Started",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <section id="demo" className="relative px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:pb-24 lg:pt-12">
      <div className="relative mx-auto max-w-6xl overflow-hidden bg-[#3d2a8a] text-primary-foreground">
        {/* Blueprint grid — more visible */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.55) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.55) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
          }}
        />
        {/* Soft vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(30,15,70,0.45)_100%)]"
        />

        {/* Corner crop marks */}
        <span className="pointer-events-none absolute top-3 left-3 size-4 border-t border-l border-white/70" />
        <span className="pointer-events-none absolute top-3 right-3 size-4 border-t border-r border-white/70" />
        <span className="pointer-events-none absolute bottom-3 left-3 size-4 border-b border-l border-white/70" />
        <span className="pointer-events-none absolute right-3 bottom-3 size-4 border-r border-b border-white/70" />

        <div className="relative grid gap-8 px-5 py-10 sm:gap-10 sm:px-12 sm:py-14 lg:grid-cols-[1.4fr_auto] lg:items-center lg:gap-16 lg:px-16 lg:py-16">
          <div className="flex flex-col gap-4">
            <h2 className="max-w-xl text-2xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {title}
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
              {body}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-56 lg:w-64">
            <a
              href="mailto:demo@purplelens.ai"
              className="group relative flex h-12 items-center justify-start border border-transparent bg-white px-5 font-tech text-[11px] tracking-[0.22em] text-[#3d2a8a] uppercase transition hover:bg-white/90"
            >
              {primaryLabel}
              <span className="pointer-events-none absolute top-1 left-1 size-1.5 border-t border-l border-[#3d2a8a]/40 opacity-0 transition group-hover:opacity-100" />
              <span className="pointer-events-none absolute top-1 right-1 size-1.5 border-t border-r border-[#3d2a8a]/40 opacity-0 transition group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-1 left-1 size-1.5 border-b border-l border-[#3d2a8a]/40 opacity-0 transition group-hover:opacity-100" />
              <span className="pointer-events-none absolute right-1 bottom-1 size-1.5 border-r border-b border-[#3d2a8a]/40 opacity-0 transition group-hover:opacity-100" />
            </a>
            <a
              href="#process"
              className="group relative flex h-12 items-center justify-start border border-white/70 bg-transparent px-5 font-tech text-[11px] tracking-[0.22em] text-white uppercase transition hover:bg-white/10"
            >
              {secondaryLabel}
              <span className="pointer-events-none absolute top-1 left-1 size-1.5 border-t border-l border-white/70 opacity-0 transition group-hover:opacity-100" />
              <span className="pointer-events-none absolute top-1 right-1 size-1.5 border-t border-r border-white/70 opacity-0 transition group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-1 left-1 size-1.5 border-b border-l border-white/70 opacity-0 transition group-hover:opacity-100" />
              <span className="pointer-events-none absolute right-1 bottom-1 size-1.5 border-r border-b border-white/70 opacity-0 transition group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
