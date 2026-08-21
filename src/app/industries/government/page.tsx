import type { Metadata } from "next";

import { GovernmentContent } from "@/components/industries/government-content";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { SiteBackground } from "@/components/landing/site-background";
import { SiteFooter } from "@/components/landing/site-footer";
import {
  SiteHeaderChrome,
  SitePillNav,
} from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "Solutions for Government & Public Sector | Purplelens.ai",
  description:
    "Government agencies and public sector organizations operate at the intersection of critical infrastructure, sensitive citizen data, and national security.",
};

export default function GovernmentPage() {
  return (
    <>
      <SiteBackground />
      <div className="relative z-10 flex min-h-full flex-col">
        <SiteHeaderChrome />
        <SitePillNav />
        <main className="flex-1">
          <GovernmentContent />
          <FinalCtaSection
            title="Ready to Run Your Pentest?"
            body="Get evidence-based insights into exploitable risks across your attack surface."
            primaryLabel="Signup now"
            secondaryLabel="Book a Demo"
          />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
