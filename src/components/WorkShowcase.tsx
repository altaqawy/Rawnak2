"use client";

import Link from "next/link";
import { useState } from "react";

const filters = ["all", "website", "branding", "ai", "automation"] as const;

const workItems = [
  {
    kind: "website",
    image: "/assets/building-cutout-card.webp",
    imageAlt: "Modern wellness website concept",
    category: "Website Design",
    title: "Aurelia Wellness",
    description: "Problem: unclear inquiry flow. Solution: a calmer website structure with stronger service paths.",
    result: "Improved conversion flow"
  },
  {
    kind: "branding",
    image: "/assets/work-reference.webp",
    imageAlt: "Brand identity stationery concept",
    category: "Branding",
    title: "Lumina Identity",
    description: "Problem: scattered brand cues. Solution: a cleaner visual system and messaging direction.",
    result: "Clearer brand experience"
  },
  {
    kind: "ai automation",
    category: "AI & Automation",
    title: "NovaFlow AI Platform",
    description: "Problem: slow manual handling. Solution: AI-assisted workflows and faster internal handoffs.",
    result: "Faster inquiry handling"
  }
];

export function WorkShowcase() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");

  return (
    <>
      <div className="filter-bar reveal" role="tablist" aria-label="Work filters">
        {filters.map((item) => (
          <button
            className={filter === item ? "active" : ""}
            type="button"
            role="tab"
            aria-selected={filter === item}
            onClick={() => setFilter(item)}
            key={item}
          >
            {item === "all" ? "All" : item === "ai" ? "AI" : `${item[0].toUpperCase()}${item.slice(1)}`}
          </button>
        ))}
      </div>
      <div className="work-grid">
        {workItems
          .filter((item) => filter === "all" || item.kind.includes(filter))
          .map((item) => (
            <article className="work-card reveal in-view" data-kind={item.kind} key={item.title}>
              {item.image ? (
                <img src={item.image} alt={item.imageAlt} width="520" height="390" loading="lazy" decoding="async" />
              ) : (
                <div className="dashboard-art" aria-label="Abstract automation dashboard preview" role="img"><span /><span /><span /></div>
              )}
              <div><small>{item.category}</small><h3>{item.title}</h3><p>{item.description}</p><span>{item.result}</span></div>
              <Link href="/work/ecommerce-platform" aria-label={`View ${item.title} case study`}>{"\u2197"}</Link>
            </article>
          ))}
      </div>
    </>
  );
}
