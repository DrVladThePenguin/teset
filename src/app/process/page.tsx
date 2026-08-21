import type { Metadata } from "next";

import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { ProcessFlow } from "@/components/landing/process-section";
import { SiteBackground } from "@/components/landing/site-background";
import { SiteFooter } from "@/components/landing/site-footer";
import {
  SiteHeaderChrome,
  SitePillNav,
} from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "Our Process | Purplelens.ai",
  description:
    "Discover, detect, test, and fix — then start again. Continuous security testing that never waits for the next scheduled engagement.",
};

export default function ProcessPage() {
  return (
    <>
      <SiteBackground />
      <div className="relative z-10 flex min-h-full flex-col">
        <SiteHeaderChrome />
        <SitePillNav />
        <main className="flex-1">
          <ProcessFlow includeHero />
          <FinalCtaSection
            title="Ready to Run Your Pentest?"
            body="See what the attacker sees. Secure what the attacker wants."
            primaryLabel="Book Demo"
            secondaryLabel="Signup now"
          />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
