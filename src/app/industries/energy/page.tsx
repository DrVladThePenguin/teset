import type { Metadata } from "next";

import { EnergyContent } from "@/components/industries/energy-content";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { SiteBackground } from "@/components/landing/site-background";
import { SiteFooter } from "@/components/landing/site-footer";
import {
  SiteHeaderChrome,
  SitePillNav,
} from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "Solutions for Energy and Utilities | Purplelens.ai",
  description:
    "The energy and utilities sector forms the backbone of modern society, powering homes, businesses, and critical services that millions depend on daily.",
};

export default function EnergyPage() {
  return (
    <>
      <SiteBackground />
      <div className="relative z-10 flex min-h-full flex-col">
        <SiteHeaderChrome />
        <SitePillNav />
        <main className="flex-1">
          <EnergyContent />
          <FinalCtaSection
            title="Ready to Run Your Pentest?"
            body="Get evidence-based insights into exploitable risks across your attack surface."
            primaryLabel="Deploy Now"
            secondaryLabel="Book a Demo"
          />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
