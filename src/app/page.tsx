import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ImpactStrip } from "@/components/home/ImpactStrip";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { StrategyCard } from "@/components/home/StrategyCard";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Rawnak Group | Websites, Branding, AI & Automation",
  description:
    "Rawnak builds premium websites, strategic brands, AI systems, and automation workflows for growing businesses."
};

export default function HomePage() {
  return (
    <SiteShell>
      <section id="home" className="hero section design-home">
        <Hero />
        <StrategyCard />
        <ProcessStrip />
        <ImpactStrip />
      </section>
    </SiteShell>
  );
}
