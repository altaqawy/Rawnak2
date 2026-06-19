import Link from "next/link";

export function Hero() {
  return (
    <>
      <div className="hero-copy reveal">
        <h1>A New Way to Build <span>Digital Presence</span></h1>
        <p>
          We craft high-performance websites, strategic brands, intelligent AI systems, and
          seamless automation that help businesses grow.
        </p>
        <div className="actions">
          <Link className="btn primary magnetic" href="/services">Explore Services <span>{"\u2197"}</span></Link>
          <Link className="btn ghost" href="/work"><span className="play" aria-hidden="true">&#9655;</span> See Our Work</Link>
        </div>
        <div className="mobile-home-extras" aria-label="Rawnak Agency highlights">
          <div className="mobile-mini-stats">
            <div><strong>120+</strong><span>Projects</span></div>
            <div><strong>98%</strong><span>Satisfaction</span></div>
            <div><strong>4.9/5</strong><span>Rating</span></div>
          </div>
          <div className="mobile-service-pills" aria-label="Core services">
            <Link href="/services">Websites</Link>
            <Link href="/services">Branding</Link>
            <Link href="/services">AI</Link>
            <Link href="/services">Automation</Link>
          </div>
        </div>
      </div>

      <div className="hero-stage reveal delay-1">
        <picture className="building-picture">
          <source media="(max-width: 720px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" />
          <source type="image/webp" srcSet="/assets/building-cutout-hero.webp" />
          <img
            className="building"
            src="/assets/building-cutout.png"
            alt="Futuristic glass building"
            width="960"
            height="720"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
        <div className="metric-card uptime-card floating one">
          <div className="metric-row"><span>System Uptime</span><strong>99.9%</strong><div className="sparkline" /></div>
          <div className="metric-row"><span>Performance</span><strong>+42%</strong><small>vs last 30 days</small><div className="sparkline alt" /></div>
          <div className="metric-row"><span>Traffic Growth</span><strong>+156%</strong><small>vs last month</small><div className="sparkline" /></div>
        </div>
        <div className="ai-card floating three">
          <div className="icon chip"><span /></div>
          <h3>AI-Powered Business Systems</h3>
          <p>Unlock efficiency and intelligence with custom AI solutions, automation workflows, and real-time insights.</p>
          <div className="tags"><span>AI Integration</span><span>Workflow Automation</span><span>Data Intelligence</span></div>
          <div className="wave-mini" aria-hidden="true" />
        </div>
      </div>
    </>
  );
}
