import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { StoryButton } from "@/components/site/StoryButton";

export const metadata: Metadata = {
  title: "About Rawnak",
  description: "Meet Rawnak, a creative digital partner for websites, branding, AI solutions, and automation systems."
};

export default function AboutPage() {
  return (
    <SiteShell>
      <section id="about" className="section about">
        <div className="about-media reveal">
          <img className="screen-asset" src="/assets/building-cutout-hero.webp" alt="Modern Rawnak agency workspace" width="960" height="720" loading="lazy" decoding="async" />
          <StoryButton />
        </div>
        <div className="about-copy reveal">
          <span className="eyebrow">About Us</span>
          <h2>Built on passion. <span>Driven by purpose.</span></h2>
          <p>Rawnak Agency is a creative digital partner building websites, brands, AI solutions, and automation systems for growth.</p>
          <div className="about-stats">
            <div><strong>5+</strong><span>Years Experience</span></div>
            <div><strong>120+</strong><span>Projects Completed</span></div>
            <div><strong>98%</strong><span>Happy Clients</span></div>
            <div><strong>10+</strong><span>Team Members</span></div>
          </div>
          <div className="values">
            <article><b>Our Mission</b><p>Empower businesses with digital solutions that drive real results.</p></article>
            <article><b>Our Vision</b><p>Be the trusted digital partner for innovation, reliability, and measurable impact.</p></article>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
