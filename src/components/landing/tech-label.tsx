import { cn } from "@/lib/utils";

export function TechLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-tech text-xs font-normal uppercase tracking-[0.18em] text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
