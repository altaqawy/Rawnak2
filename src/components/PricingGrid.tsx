"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  { name: "Launch", icon: "icon-launch", description: "For startups getting started.", month: "$1,499", year: "$1,274", features: ["Custom Website", "Mobile Responsive Design", "Basic SEO Setup", "2 Rounds of Revisions"], action: "Fast Launch" },
  { name: "Growth", icon: "icon-growth", description: "For growing brands ready to scale.", month: "$2,799", year: "$2,379", features: ["Everything in Launch", "Up to 10 Custom Pages", "Advanced SEO & Analytics", "Priority Support"], action: "Best Value", popular: true },
  { name: "Scale", icon: "icon-scale", description: "For established businesses.", month: "$4,999", year: "$4,249", features: ["Everything in Growth", "Unlimited Pages", "Advanced Automations", "Dedicated Account Manager"], action: "Maximum Impact" },
  { name: "Custom", icon: "icon-custom", description: "Need something unique?", month: "Let's Talk", year: "Let's Talk", features: ["Custom Scope", "Tailored Integrations", "Advanced Features", "Ongoing Support"], action: "Let's Talk" }
];

export function PricingGrid() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <div className="section-head reveal">
        <span className="eyebrow">Packages</span>
        <h2>Simple, Transparent <span>Packages</span></h2>
        <p>Flexible solutions for every stage of your digital journey. No hidden fees. Just results.</p>
        <p className="pricing-note">Starting from; pricing is indicative and may vary based on project scope.</p>
        <div className={`billing-toggle${yearly ? " yearly" : ""}`}>
          <span>Monthly</span>
          <button type="button" aria-label="Toggle yearly pricing" aria-pressed={yearly} onClick={() => setYearly((value) => !value)}><i /></button>
          <span>Yearly <b>-15%</b></span>
        </div>
      </div>
      <div className="price-grid">
        {plans.map((plan) => (
          <article className={`price-card reveal${plan.popular ? " popular" : ""}`} key={plan.name}>
            {plan.popular ? <span>Most Popular</span> : null}
            <i className={`ui-icon ${plan.icon}`} aria-hidden="true" />
            <h3>{plan.name}</h3><p>{plan.description}</p>
            <strong>{yearly ? plan.year : plan.month}</strong><small>{plan.name === "Custom" ? "" : "/mo"}</small>
            <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <Link href="/contact">{plan.action}</Link>
          </article>
        ))}
      </div>
    </>
  );
}
