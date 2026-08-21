import { BlueprintFrame } from "@/components/landing/blueprint";

function PanelChrome({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-hairline px-3 py-2">
      <div className="flex items-center gap-1.5">
        <span className="size-1.5 bg-primary" />
        <span className="size-1.5 bg-primary/40" />
        <span className="size-1.5 bg-primary/20" />
      </div>
      <p className="font-tech truncate text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
        {title}
      </p>
    </div>
  );
}

export function EasmPanel() {
  const assets = [
    { id: "api.prod", status: "NEW" },
    { id: "cdn.edge-04", status: "LIVE" },
    { id: "vpn.legacy", status: "SHADOW" },
    { id: "stg.internal", status: "LIVE" },
  ];

  return (
    <BlueprintFrame className="bg-background/90">
      <PanelChrome title="purplelens://easm" />
      <div className="flex flex-col gap-3 p-4">
        <div className="relative h-36 overflow-hidden border border-hairline">
          <div className="absolute inset-0 bg-dot-grid opacity-70" />
          <span className="absolute top-1/2 left-[18%] size-2.5 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_12px_rgba(92,60,180,0.7)]" />
          <span className="absolute top-[28%] left-[48%] size-2 rounded-full bg-primary/70" />
          <span className="absolute top-[62%] left-[72%] size-2 rounded-full bg-primary/50" />
          <span className="absolute top-[40%] left-[36%] h-px w-[12%] bg-primary/40" />
          <span className="absolute top-[50%] left-[20%] h-px w-[28%] rotate-12 bg-primary/30" />
          <span className="absolute top-[48%] left-[50%] h-px w-[22%] -rotate-6 bg-primary/30" />
        </div>
        <ul className="flex flex-col gap-2">
          {assets.map((row) => (
            <li
              key={row.id}
              className="flex items-center justify-between border border-hairline px-3 py-2"
            >
              <span className="font-tech text-[11px] text-foreground">
                {row.id}
              </span>
              <span className="font-tech text-[10px] tracking-[0.12em] text-muted-foreground">
                {row.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </BlueprintFrame>
  );
}

export function CartPanel() {
  return (
    <BlueprintFrame className="bg-background/90">
      <PanelChrome title="purplelens://red-team" />
      <div className="flex flex-col gap-4 p-4">
        {["Recon", "Exploit", "Lateral"].map((phase, i) => (
          <div key={phase} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-tech text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                0{i + 1} · {phase}
              </span>
              <span className="font-tech text-[10px] text-primary">
                {i === 2 ? "ACTIVE" : "PASS"}
              </span>
            </div>
            <div className="h-1.5 overflow-hidden border border-hairline bg-muted">
              <div
                className="h-full bg-primary"
                style={{ width: i === 0 ? "100%" : i === 1 ? "78%" : "42%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </BlueprintFrame>
  );
}

export function NorthstarPanel() {
  return (
    <BlueprintFrame className="bg-background/90">
      <PanelChrome title="purplelens://northstar" />
      <div className="grid grid-cols-2 gap-px bg-border-hairline">
        {[
          { k: "Posture", v: "82" },
          { k: "Gaps", v: "14" },
          { k: "Fixes", v: "61%" },
          { k: "Trend", v: "+9" },
        ].map((cell) => (
          <div key={cell.k} className="flex flex-col gap-1 bg-background p-4">
            <span className="font-tech text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
              {cell.k}
            </span>
            <span className="text-2xl font-medium tracking-tight text-primary">
              {cell.v}
            </span>
          </div>
        ))}
      </div>
    </BlueprintFrame>
  );
}

export function CtiPanel() {
  const rows = [
    { src: "Forum · 04:12", item: "Credential dump" },
    { src: "Dark web · 04:08", item: "Brand mention" },
    { src: "TTP · 03:51", item: "TA-214 recon" },
  ];

  return (
    <BlueprintFrame className="bg-background/90">
      <PanelChrome title="purplelens://cti" />
      <ul className="flex flex-col divide-y divide-[color:var(--border-hairline)]">
        {rows.map((row) => (
          <li key={row.item} className="flex flex-col gap-1 px-4 py-3">
            <span className="font-tech text-[10px] tracking-[0.12em] text-muted-foreground">
              {row.src}
            </span>
            <span className="text-sm font-medium">{row.item}</span>
          </li>
        ))}
      </ul>
    </BlueprintFrame>
  );
}

export function DrpPanel() {
  return (
    <BlueprintFrame className="bg-background/90">
      <PanelChrome title="purplelens://drp" />
      <div className="flex flex-col gap-3 p-4">
        {[
          { label: "Impersonation", n: "07" },
          { label: "Data leaks", n: "03" },
          { label: "Phishing", n: "12" },
          { label: "Fraud domains", n: "05" },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between border border-hairline px-3 py-2.5"
          >
            <span className="text-sm">{row.label}</span>
            <span className="font-tech text-[11px] text-primary">{row.n}</span>
          </div>
        ))}
      </div>
    </BlueprintFrame>
  );
}
