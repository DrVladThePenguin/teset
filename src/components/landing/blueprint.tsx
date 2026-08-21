import { cn } from "@/lib/utils";

/** Thin CAD hairline frame with optional corner ticks */
export function BlueprintFrame({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "relative border border-hairline bg-card/60 backdrop-blur-[2px]",
        className
      )}
    >
      <span className="pointer-events-none absolute top-0 left-0 size-3 border-t-2 border-l-2 border-primary/70" />
      <span className="pointer-events-none absolute top-0 right-0 size-3 border-t-2 border-r-2 border-primary/70" />
      <span className="pointer-events-none absolute bottom-0 left-0 size-3 border-b-2 border-l-2 border-primary/70" />
      <span className="pointer-events-none absolute right-0 bottom-0 size-3 border-r-2 border-b-2 border-primary/70" />

      {label ? (
        <span className="font-tech absolute -top-2.5 left-3 bg-background px-1.5 text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
          {label}
        </span>
      ) : null}

      {children}
    </div>
  );
}

/** Horizontal rule with mono step label — minimalist divider */
export function SectionRule({
  step,
  label,
  className,
  lineClassName,
}: {
  step?: string;
  label?: string;
  className?: string;
  lineClassName?: string;
}) {
  return (
    <div className={cn("flex w-full items-center gap-4", className)}>
      {(step || label) && (
        <div className="flex shrink-0 items-center gap-2">
          {step ? (
            <span className="font-tech text-[10px] tracking-[0.14em] text-primary uppercase">
              {step}
            </span>
          ) : null}
          {label ? (
            <span className="font-tech text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
              {label}
            </span>
          ) : null}
        </div>
      )}
      <div className={cn("h-px flex-1 bg-primary/25", lineClassName)} />
    </div>
  );
}
