import type { Metadata } from "next";

import { HealthcareContent } from "@/components/industries/healthcare-content";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { SiteBackground } from "@/components/landing/site-background";
import { SiteFooter } from "@/components/landing/site-footer";
import {
  SiteHeaderChrome,
  SitePillNav,
} from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "Solutions for Healthcare | Purplelens.ai",
  description:
    "The healthcare sector sits at a critical intersection—managing life-saving services while handling some of the most sensitive personal data imaginable.",
};

export default function HealthcarePage() {
  return (
    <>
      <SiteBackground />
      <div className="relative z-10 flex min-h-full flex-col">
        <SiteHeaderChrome />
        <SitePillNav />
        <main className="flex-1">
          <HealthcareContent />
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
