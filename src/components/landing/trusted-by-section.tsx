import { cn } from "@/lib/utils";

function CornerBrackets({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-1 opacity-0 transition-opacity duration-200 group-hover/cell:opacity-100",
        className
      )}
    >
      <span className="absolute top-0 left-0 size-2.5 border-t-2 border-l-2 border-primary" />
      <span className="absolute top-0 right-0 size-2.5 border-t-2 border-r-2 border-primary" />
      <span className="absolute bottom-0 left-0 size-2.5 border-b-2 border-l-2 border-primary" />
      <span className="absolute right-0 bottom-0 size-2.5 border-r-2 border-b-2 border-primary" />
    </span>
  );
}

function LogoClaude() {
  return (
    <span className="font-serif text-[15px] font-medium tracking-tight text-foreground">
      Claude
    </span>
  );
}

function LogoTurso() {
  return (
    <span className="flex items-center gap-2 text-foreground">
      <svg viewBox="0 0 20 20" className="size-4" aria-hidden>
        <path
          fill="currentColor"
          d="M10 2c1.2 2.4 2 4.2 2 6.2 0 1.8-.6 3.2-1.6 4.2.8-.2 1.6-.8 2.2-1.6C14 9 14.5 6.8 14 4.5c2.2 1.8 3.5 4.2 3.5 7 0 3.6-2.7 6.5-7.5 6.5S2.5 15.1 2.5 11.5c0-2.8 1.3-5.2 3.5-7C5.5 6.8 6 9 7.4 10.8c.6.8 1.4 1.4 2.2 1.6C8.6 11.4 8 10 8 8.2 8 6.2 8.8 4.4 10 2z"
        />
      </svg>
      <span className="text-[13px] font-bold tracking-[0.08em] uppercase">
        Turso
      </span>
    </span>
  );
}

function LogoOpenAI() {
  return (
    <span className="flex items-center gap-2 text-foreground">
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .517 4.91 6.051 6.051 0 0 0 6.511 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.805.805 0 0 0 .392-.681v-6.737l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.075.075 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zM8.306 12.683l-2.02-1.163a.08.08 0 0 1-.038-.057V6.074c.146-.67.45-1.29.879-1.802l.141.081 4.779 2.758a.795.795 0 0 0 .392.681v6.737zm1.05-1.675 2.744-1.584 2.744 1.584v3.168l-2.744 1.584-2.744-1.584z" />
      </svg>
      <span className="text-[14px] font-semibold tracking-tight">OpenAI</span>
    </span>
  );
}

function LogoClerk() {
  return (
    <span className="flex items-center gap-2 text-foreground">
      <span className="flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
        c
      </span>
      <span className="text-[14px] font-medium tracking-tight">clerk</span>
    </span>
  );
}

function LogoGitHub() {
  return (
    <span className="flex items-center gap-2 text-foreground">
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
      <span className="text-[14px] font-semibold tracking-tight">GitHub</span>
    </span>
  );
}

function LogoSupabase() {
  return (
    <span className="flex items-center gap-2 text-foreground">
      <svg viewBox="0 0 24 24" className="size-4 text-emerald-600" fill="currentColor" aria-hidden>
        <path d="M11.9 1.006c-.287.014-.548.17-.7.415L1.09 18.31a.996.996 0 0 0 .36 1.372l9.74 5.63c.45.26 1.02.1 1.27-.36l9.74-16.9a1 1 0 0 0-.36-1.372L12.1 1.05a.99.99 0 0 0-.2-.044zm.1 3.29 7.55 4.36-4.82 8.37-7.55-4.36 4.82-8.37z" />
      </svg>
      <span className="text-[14px] font-medium tracking-tight">supabase</span>
    </span>
  );
}

const logos = [
  { id: "claude", node: <LogoClaude /> },
  { id: "turso", node: <LogoTurso /> },
  { id: "openai", node: <LogoOpenAI /> },
  { id: "clerk", node: <LogoClerk /> },
  { id: "github", node: <LogoGitHub /> },
  { id: "supabase", node: <LogoSupabase /> },
];

function TrustCell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group/cell relative flex h-16 shrink-0 items-center justify-center px-8",
        className
      )}
    >
      <CornerBrackets />
      {children}
    </div>
  );
}

export function TrustedBySection() {
  const track = [...logos, ...logos];

  return (
    <section className="relative border-y border-hairline bg-background/50">
      <div className="mx-auto flex max-w-6xl items-stretch">
        {/* Lead-in — always shows brackets like the reference */}
        <div className="group/cell relative hidden w-44 shrink-0 items-center border-r border-hairline px-5 sm:flex lg:w-52">
          <CornerBrackets className="opacity-100" />
          <p className="text-[13px] leading-snug text-muted-foreground">
            Trusted by
            <br />
            <span className="font-medium text-foreground">top companies</span>
          </p>
        </div>

        {/* Marquee — pauses when hovering anywhere on the strip */}
        <div className="trusted-marquee min-w-0 flex-1 overflow-hidden">
          <div className="trusted-marquee-track flex w-max">
            {track.map((logo, i) => (
              <TrustCell
                key={`${logo.id}-${i}`}
                className="border-r border-hairline"
              >
                {logo.node}
              </TrustCell>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
