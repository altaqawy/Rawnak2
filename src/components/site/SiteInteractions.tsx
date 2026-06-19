"use client";

import { useEffect } from "react";

export function SiteInteractions() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.14 }
    );
    revealItems.forEach((item) => observer.observe(item));

    const magneticItems = Array.from(document.querySelectorAll<HTMLElement>(".magnetic"));
    const cleanups = magneticItems.map((item) => {
      const move = (event: MouseEvent) => {
        const box = item.getBoundingClientRect();
        const x = event.clientX - box.left - box.width / 2;
        const y = event.clientY - box.top - box.height / 2;
        item.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
      };
      const leave = () => {
        item.style.transform = "";
      };
      item.addEventListener("mousemove", move);
      item.addEventListener("mouseleave", leave);
      return () => {
        item.removeEventListener("mousemove", move);
        item.removeEventListener("mouseleave", leave);
      };
    });

    const disabledLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[aria-disabled="true"]')
    );
    const preventDisabled = (event: Event) => event.preventDefault();
    disabledLinks.forEach((link) => link.addEventListener("click", preventDisabled));

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      disabledLinks.forEach((link) => link.removeEventListener("click", preventDisabled));
    };
  }, []);

  return null;
}
