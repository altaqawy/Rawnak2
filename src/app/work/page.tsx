import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { WorkShowcase } from "@/components/WorkShowcase";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description: "Selected Rawnak work across websites, branding, AI platforms, and automation systems."
};

export default function WorkPage() {
  return (
    <SiteShell>
      <section id="work" className="section work">
        <div className="section-head reveal">
          <span className="eyebrow">Our Work</span>
          <h2>Our <span>Work</span></h2>
          <p>Selected digital experiences, brands, and intelligent systems shaped to improve clarity, conversion paths, and operations.</p>
        </div>
        <WorkShowcase />
      </section>
    </SiteShell>
  );
}
