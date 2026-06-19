import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Our Process",
  description: "From discovery and strategy to design, build, automation, launch, and optimization."
};

export default function ProcessPage() {
  return (
    <SiteShell>
      <section id="process" className="section process-page">
        <div className="section-head reveal">
          <span className="eyebrow">Process</span>
          <h2>Our Process. <span>Built for Impact.</span></h2>
          <p>Five focused steps that turn an idea into a measurable digital system.</p>
        </div>
        <div className="process-panel reveal page-process-panel">
          <h2>Our Process. Built for Impact.</h2>
          <div className="process-line">
            <div><span className="ui-icon icon-search" aria-hidden="true" /><strong>1</strong><small>Discover</small></div>
            <div><span className="ui-icon icon-target" aria-hidden="true" /><strong>2</strong><small>Strategize</small></div>
            <div><span className="ui-icon icon-brand" aria-hidden="true" /><strong>3</strong><small>Design</small></div>
            <div><span className="ui-icon icon-code" aria-hidden="true" /><strong>4</strong><small>Build</small></div>
            <div><span className="ui-icon icon-growth" aria-hidden="true" /><strong>5</strong><small>Launch &amp; Optimize</small></div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
