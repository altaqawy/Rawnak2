import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "E-commerce Platform Case Study",
  description: "A Rawnak e-commerce platform case study covering challenge, approach, solution, deliverables, and outcomes."
};

export default function EcommerceCaseStudyPage() {
  return (
    <SiteShell>
      <section id="case-study" className="section case-study">
        <div className="case-copy reveal">
          <span className="eyebrow">Case Study</span>
          <h2>Scalable. Intelligent. <span>Conversion-Driven.</span></h2>
          <p>We shaped an e-commerce experience for a lifestyle brand that needed clearer buying paths, easier content management, and smoother operational handoffs.</p>
          <div className="tags"><span>Shopify Plus</span><span>React</span><span>Node.js</span><span>AWS</span></div>
        </div>
        <div className="case-dashboard reveal">
          <div className="dash-sidebar" />
          <div className="dash-main">
            <div className="dash-top"><span>$1,248,430</span><span>8,342</span><span>12,640</span></div>
            <div className="dash-chart"><i /></div>
            <div className="dash-list"><b /><b /><b /><b /></div>
          </div>
        </div>
        <div className="outcomes reveal">
          <div><strong>+150%</strong><span>Sales Increase</span></div>
          <div><strong>+80%</strong><span>Customer Retention</span></div>
          <div><strong>-60%</strong><span>Manual Work</span></div>
        </div>
      </section>
    </SiteShell>
  );
}
