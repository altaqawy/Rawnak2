import type { Metadata } from "next";
import { PricingGrid } from "@/components/PricingGrid";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Pricing Packages",
  description: "Indicative Rawnak pricing packages for websites, growth systems, scale projects, and custom digital solutions."
};

export default function PricingPage() {
  return (
    <SiteShell>
      <section id="pricing" className="section pricing">
        <PricingGrid />
      </section>
    </SiteShell>
  );
}
