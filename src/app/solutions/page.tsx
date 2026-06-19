import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Industry Solutions",
  description: "Industry-focused digital systems for clinics, restaurants, academies, e-commerce, real estate, and personal brands."
};

const industries = [
  ["icon-health", "Clinics & Healthcare", "Improve patient care and streamline clinic operations."],
  ["icon-restaurant", "Restaurants & Cafes", "Smarter ordering, reservations, and customer experiences."],
  ["icon-academy", "Academies & Coaches", "Platforms for courses, students, and coaching success."],
  ["icon-commerce", "E-commerce Stores", "High-converting stores with smooth shopping automation."],
  ["icon-realestate", "Real Estate", "Capture leads, showcase properties, and close deals faster."],
  ["icon-user-card", "Personal Brands", "Build a presence and grow your audience with impact."]
];

const capabilities = [
  ["icon-web", "Websites"], ["icon-ai", "AI Assistants"], ["icon-automation", "Automation"],
  ["icon-booking", "Booking Flows"], ["icon-dashboard", "Dashboards"], ["icon-brand", "Brand Systems"]
];

export default function SolutionsPage() {
  return (
    <SiteShell>
      <section id="industries" className="section industries">
        <div className="section-head reveal">
          <span className="eyebrow">Solutions for Every Industry</span>
          <h2>Solutions for <span>Every Industry</span></h2>
          <p>Tailored digital systems built around your industry, workflows, and growth goals.</p>
        </div>
        <div className="industry-wrap">
          <div className="industry-grid">
            {industries.map(([icon, title, description]) => (
              <article className="glass-card reveal" key={title}><i className={`ui-icon ${icon}`} aria-hidden="true" /><b>{title}</b><p>{description}</p></article>
            ))}
          </div>
          <aside className="capabilities reveal">
            <h3>What We Build</h3>
            {capabilities.map(([icon, title]) => (
              <Link href="/services" key={title}><span className={`ui-icon ${icon}`} aria-hidden="true" /> {title} <em>{"\u203a"}</em></Link>
            ))}
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
