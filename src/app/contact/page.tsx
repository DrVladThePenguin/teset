import type { Metadata } from "next";

import { ContactContent } from "@/components/contact/contact-content";
import { TrustedBySection } from "@/components/landing/trusted-by-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { SiteBackground } from "@/components/landing/site-background";
import { SiteFooter } from "@/components/landing/site-footer";
import {
  SiteHeaderChrome,
  SitePillNav,
} from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "Contact Us | Purplelens.ai",
  description:
    "Get in touch with PurpleLens. Tell us about your environment and we'll follow up with a focused walkthrough.",
};

export default function ContactPage() {
  return (
    <>
      <SiteBackground />
      <div className="relative z-10 flex min-h-full flex-col">
        <SiteHeaderChrome />
        <SitePillNav />
        <main className="flex-1">
          <ContactContent />
          <TrustedBySection />
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
