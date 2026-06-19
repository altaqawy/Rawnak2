"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AmbientBackground } from "./AmbientBackground";
import { SiteInteractions } from "./SiteInteractions";
import { homeServices, navigation, routeKey } from "@/data/site";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const current = routeKey(pathname);
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [calm, setCalm] = useState(false);

  return (
    <div className={`site-page ${isHome ? "home-page" : "inner-page"}${calm ? " calm" : ""}`}>
      <AmbientBackground />

      <aside className="side-nav" aria-label="Page navigation">
        <Link className={`side-dot${current === "home" ? " active" : ""}`} href="/" aria-label="Home" data-icon="home" />
        <Link className={`side-dot${current === "services" ? " active" : ""}`} href="/services" aria-label="Services" data-icon="grid" />
        <Link className={`side-dot${current === "work" ? " active" : ""}`} href="/work" aria-label="Work" data-icon="chat" />
        <Link className={`side-dot${current === "about" ? " active" : ""}`} href="/about" aria-label="About" data-icon="user" />
        <span className="side-line" />
        <Link className={`side-dot${current === "pricing" ? " active" : ""}`} href="/pricing" aria-label="Pricing" data-icon="gear" />
        <button
          className="side-dot theme-toggle"
          type="button"
          aria-label="Toggle calm mode"
          aria-pressed={calm}
          data-icon="moon"
          onClick={() => setCalm((value) => !value)}
        />
      </aside>

      <main className="shell">
        <header className="topbar">
          <Link className="brand" href="/" aria-label="Rawnak Agency home">
            <img src="/assets/logo.svg" alt="" width="58" height="58" decoding="async" />
            <span><strong>RAWNAK</strong><small>AGENCY</small></span>
          </Link>

          {isHome ? (
            <nav className="desktop-nav home-service-nav" aria-label="Primary services">
              {homeServices.map((service, index) => (
                <Link href="/services" className={index === 0 ? "active" : ""} key={service.label}>
                  <span className={`nav-icon ${service.icon}`} /> {service.label}
                </Link>
              ))}
            </nav>
          ) : (
            <nav className="desktop-nav" aria-label="Primary navigation">
              {navigation.map((item) => (
                <Link className={current === item.key ? "active" : ""} href={item.href} key={item.key}>
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          <Link className="btn primary small" href="/contact">Start Project <span>{"\u2197"}</span></Link>
          <button
            className="menu-btn"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span /><span /><span />
          </button>
        </header>

        <nav className={`mobile-menu${menuOpen ? " open" : ""}`} aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              className={current === item.key ? "active" : ""}
              href={item.href}
              key={item.key}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {children}

        <footer className="footer">
          <div className="socials">
            <span>Like &amp; Follow</span>
            <a href="#" aria-label="LinkedIn profile placeholder" title="LinkedIn profile coming soon" aria-disabled="true">in</a>
            <a href="#" aria-label="Instagram profile placeholder" title="Instagram profile coming soon" aria-disabled="true">ig</a>
            <a href="#" aria-label="Behance profile placeholder" title="Behance profile coming soon" aria-disabled="true">be</a>
          </div>
          <img src="/assets/logo.svg" alt="" width="58" height="58" decoding="async" />
          <p><strong>Design. Code. Automate. Grow.</strong><span>One partner for your entire digital journey.</span></p>
          <Link href={isHome ? "/work" : "/"}>{isHome ? "View Work" : "Back Home"} {isHome ? "\u2197" : "\u2191"}</Link>
        </footer>
      </main>
      <SiteInteractions />
    </div>
  );
}
