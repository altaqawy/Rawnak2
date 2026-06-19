import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Services",
  description: "Premium websites, landing pages, branding, AI solutions, dashboards, booking systems, and automation."
};

const services = [
  ["icon-web", "Premium Websites", "Modern, fast, conversion-focused web experiences with seamless UX."],
  ["icon-page", "Landing Pages", "Campaign pages that capture attention, build trust, and drive action."],
  ["icon-brand", "Branding", "Distinct identities that communicate value and leave a lasting impression."],
  ["icon-ai", "AI Solutions", "Smart systems and integrations that unlock efficiency and innovation."],
  ["icon-automation", "Automation Systems", "Streamlined workflows that save time and reduce operational costs."],
  ["icon-dashboard", "Dashboards", "Real-time analytics that turn data into clear insight and decisions."],
  ["icon-booking", "Booking Systems", "Custom booking flows and scheduling systems that simplify operations."],
  ["icon-growth", "Growth Strategy", "Data-driven plans that attract customers and increase revenue."]
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section id="services" className="section services">
        <div className="section-head reveal">
          <span className="eyebrow">Services</span>
          <h2>Our <span>Services</span></h2>
          <p>Digital solutions that combine creativity, technology, and strategy to help your business operate smarter.</p>
        </div>
        <div className="service-grid">
          {services.map(([icon, title, description]) => (
            <article className="glass-card reveal" key={title}>
              <i className={`ui-icon ${icon}`} aria-hidden="true" /><b>{title}</b><p>{description}</p>
              <Link href="/contact" aria-label={`Start a ${title} project`}>{"\u2197"}</Link>
            </article>
          ))}
        </div>
        <div className="feature-strip reveal">
          <div className="feature-text">
            <span className="icon chip"><span aria-hidden="true" /></span>
            <h3>AI-Powered Systems</h3>
            <p>We build intelligent systems that learn, adapt, and automate so your business operates smarter every day.</p>
          </div>
          <div className="chart" aria-hidden="true"><span /><span /><span /><span /><span /><span /></div>
        </div>
      </section>
    </SiteShell>
  );
}
