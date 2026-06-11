"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Diplômes", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-canvas/90 backdrop-blur-lg shadow-sm border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container-site flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-lg font-bold font-heading text-navy tracking-tight">
            Max Performance
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted hover:text-terra transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#services"
              className="text-sm font-semibold bg-terra hover:bg-terra-light text-white px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-terra/20 hover:shadow-lg hover:shadow-terra/25 hover:-translate-y-0.5"
            >
              Commencer
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-navy"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-canvas md:hidden">
          <div className="flex flex-col items-center gap-8 pt-16">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-xl font-medium text-navy hover:text-terra transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="bg-terra text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg shadow-terra/20"
            >
              Commencer
            </a>
          </div>
        </div>
      )}
    </>
  );
}
