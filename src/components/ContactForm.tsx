"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const whatsappNumber = "201000000000";
const contactEmail = "hello@rawnak.agency";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("Please complete the required fields.");
      return;
    }

    const data = new FormData(form);
    const message = [
      "Hello Rawnak Agency,",
      "I want to start a project.",
      "",
      `Name: ${data.get("fullName")}`,
      `Email: ${data.get("email")}`,
      `Business Type: ${data.get("businessType")}`,
      `Service Needed: ${data.get("serviceNeeded")}`,
      `Budget: ${data.get("budget")}`,
      `Details: ${data.get("details")}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent("New project inquiry")}&body=${encodeURIComponent(message)}`;
    const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setStatus(opened ? "Opening WhatsApp with your inquiry." : "Popup blocked. Opening email instead.");
    if (!opened) window.location.href = mailtoUrl;
  }

  return (
    <form className="contact-form reveal" id="contact-form" onSubmit={handleSubmit}>
      <h3>Tell Us About Your Project</h3>
      <label htmlFor="full-name"><span>Full Name</span><input id="full-name" name="fullName" type="text" placeholder="Your full name" autoComplete="name" required /></label>
      <label htmlFor="email-address"><span>Email Address</span><input id="email-address" name="email" type="email" placeholder="your@email.com" autoComplete="email" required /></label>
      <label htmlFor="business-type"><span>Business Type</span><select id="business-type" name="businessType" required defaultValue=""><option value="" disabled>Select your business type</option><option>Startup</option><option>Established Business</option></select></label>
      <label htmlFor="service-needed"><span>Service Needed</span><select id="service-needed" name="serviceNeeded" required defaultValue=""><option value="" disabled>Select a service</option><option>Website</option><option>Branding</option><option>AI Solutions</option><option>Automation</option></select></label>
      <label className="wide" htmlFor="budget-range"><span>Budget Range</span><select id="budget-range" name="budget" required defaultValue=""><option value="" disabled>Select your budget range</option><option>$1,500 - $3,000</option><option>$3,000 - $6,000</option><option>$6,000+</option></select></label>
      <label className="wide" htmlFor="project-details"><span>Tell us about your project</span><textarea id="project-details" name="details" placeholder="Share your goals, ideas, and any details that help us understand your vision..." required /></label>
      {status ? <p className="form-status" aria-live="polite">{status}</p> : null}
      <button className="btn primary" type="submit">Send Project Inquiry <span aria-hidden="true">{"\u2197"}</span></button>
      <small>Your information is secure and never shared.</small>
    </form>
  );
}
