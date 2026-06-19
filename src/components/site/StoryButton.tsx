"use client";

import { useEffect, useState } from "react";

export function StoryButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button type="button" className="story-btn" onClick={() => setOpen(true)}>
        <span aria-hidden="true">&#9655;</span> Watch Our Story
      </button>
      {open ? (
        <div className="showreel-modal open" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <div className="showreel-dialog" onClick={(event) => event.stopPropagation()}>
            <h2>Showreel coming soon.</h2>
            <p>Our full agency reel is being prepared.</p>
            <button className="btn primary" type="button" onClick={() => setOpen(false)} autoFocus>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
