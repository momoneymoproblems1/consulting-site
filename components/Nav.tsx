"use client";

import { useEffect, useState } from "react";

const LINKS: ReadonlyArray<readonly [string, string]> = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Case study", "#work"],
  ["Pricing", "#pricing"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const desktopLinks = LINKS.slice(0, 5);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand" aria-label="Andrew Gooding home">
            <span className="brand-mark">A</span>
            <span className="brand-name">
              <span>Andrew Gooding</span>
              <small>AI integrations</small>
            </span>
          </a>
          <div className="nav-links">
            {desktopLinks.map(([t, h]) => (
              <a key={h} href={h}>
                {t}
              </a>
            ))}
          </div>
          <a
            href="#book"
            className="btn btn-accent"
            style={{ padding: "10px 18px", fontSize: 13 }}
          >
            Book a call <span className="arrow">&rarr;</span>
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        className="menu-drawer"
        data-open={open ? "1" : "0"}
        aria-hidden={!open}
      >
        {LINKS.map(([t, h]) => (
          <a key={h} href={h} onClick={() => setOpen(false)}>
            <span>{t}</span>
            <span className="arrow">&rarr;</span>
          </a>
        ))}
        <a href="#book" className="menu-cta" onClick={() => setOpen(false)}>
          Book a call <span className="arrow">&rarr;</span>
        </a>
      </div>
    </>
  );
}
