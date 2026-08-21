import type { Metadata } from "next";

import { FinancialServicesContent } from "@/components/industries/financial-services-content";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { SiteBackground } from "@/components/landing/site-background";
import { SiteFooter } from "@/components/landing/site-footer";
import {
  SiteHeaderChrome,
  SitePillNav,
} from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "Solutions for Financial Services | Purplelens.ai",
  description:
    "The financial services industry operates in a constant state of digital evolution, from real-time payment systems to AI-powered trading platforms.",
};

export default function FinancialServicesPage() {
  return (
    <>
      <SiteBackground />
      <div className="relative z-10 flex min-h-full flex-col">
        <SiteHeaderChrome />
        <SitePillNav />
        <main className="flex-1">
          <FinancialServicesContent />
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
