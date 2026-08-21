import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function DashboardMock() {
  return (
    <div className="relative overflow-hidden border border-hairline bg-card/95">
      <div className="flex flex-row items-center justify-between gap-4 border-b border-hairline bg-muted/30 px-3 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="size-2 border border-hairline bg-destructive/70" />
          <span className="size-2 border border-hairline bg-chart-4" />
          <span className="size-2 border border-hairline bg-primary/70" />
        </div>
        <p className="font-tech text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
          purplelens://attack-surface
        </p>
        <Badge
          variant="outline"
          className="rounded-none border-hairline font-tech text-[10px]"
        >
          LIVE
        </Badge>
      </div>

      <div className="grid gap-3 p-3 sm:grid-cols-5">
        <div className="flex flex-col gap-3 sm:col-span-2">
          <div className="border border-hairline bg-background/80 p-3">
            <p className="font-tech text-[10px] tracking-wider text-muted-foreground uppercase">
              Breach probability
            </p>
            <p className="mt-2 text-3xl font-medium text-primary">12.4%</p>
            <p className="font-tech mt-1 text-[10px] text-muted-foreground">
              −38% vs last sprint
            </p>
          </div>
          <div className="border border-hairline bg-background/80 p-3">
            <p className="font-tech text-[10px] tracking-wider text-muted-foreground uppercase">
              Open paths
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {[
                { id: "PATH-01", risk: "Critical" },
                { id: "PATH-04", risk: "High" },
                { id: "PATH-09", risk: "Medium" },
              ].map((row) => (
                <div
                  key={row.id}
                  className="flex items-center justify-between gap-2"
                >
                  <span className="font-tech text-xs text-foreground">
                    {row.id}
                  </span>
                  <span className="font-tech text-[10px] text-muted-foreground">
                    {row.risk}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:col-span-3">
          <div className="border border-hairline bg-background/80 p-3">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-tech text-[10px] tracking-wider text-muted-foreground uppercase">
                Risk trend · 14d
              </p>
              <span className="font-tech text-[10px] text-primary">
                192.168.14.22
              </span>
            </div>
            <svg viewBox="0 0 320 120" className="h-28 w-full" aria-hidden>
              <defs>
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--primary)"
                    stopOpacity="0.28"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--primary)"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <path
                d="M0 90 C40 80, 60 40, 100 55 S160 100, 200 70 S280 20, 320 35 V120 H0 Z"
                fill="url(#chartFill)"
              />
              <path
                d="M0 90 C40 80, 60 40, 100 55 S160 100, 200 70 S280 20, 320 35"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div className="border border-hairline bg-background/80 p-3">
            <p className="font-tech text-[10px] tracking-wider text-muted-foreground uppercase">
              Agent events
            </p>
            <Separator className="my-2 bg-border-hairline" />
            <ul className="flex flex-col gap-2">
              {[
                { t: "14:02:11", e: "Exploit verified · ASSET-882" },
                { t: "14:01:48", e: "Lateral move blocked" },
                { t: "14:00:09", e: "Scan complete · /api/v2" },
              ].map((item) => (
                <li
                  key={item.t}
                  className="flex items-start gap-3 font-tech text-[11px]"
                >
                  <span className="shrink-0 text-muted-foreground">{item.t}</span>
                  <span className="text-foreground">{item.e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
