import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Start Your Project",
  description: "Contact Rawnak for websites, branding, AI systems, automation, and digital strategy."
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section id="contact" className="section contact">
        <div className="contact-intro reveal">
          <span className="eyebrow">Let&apos;s Build The Future</span>
          <h2>Start Your <span>Project</span></h2>
          <p>Have a bold idea or need a digital partner? We are here to turn your vision into measurable results.</p>
          <div className="contact-cards">
            <a href="mailto:hello@rawnak.agency"><i className="ui-icon icon-mail" aria-hidden="true" /><b>Email Us</b><span>hello@rawnak.agency</span></a>
            <a href="https://wa.me/201000000000"><i className="ui-icon icon-whatsapp" aria-hidden="true" /><b>WhatsApp</b><span>+20 100 000 0000</span></a>
            <Link href="/contact#contact-form"><i className="ui-icon icon-location" aria-hidden="true" /><b>Our Location</b><span>Mansoura, Egypt<br />Serving clients worldwide</span></Link>
          </div>
        </div>
        <ContactForm />
      </section>
    </SiteShell>
  );
}
