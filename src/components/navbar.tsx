"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { label: "SERVICES", href: "#services" },
  { label: "DIPLÔMES", href: "#certifications" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "glass bg-offwhite/85 border-b border-offwhite-border"
            : "bg-transparent"
        }`}
      >
        <div className="container-site flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="text-lg md:text-xl font-heading font-bold text-text tracking-[0.05em] hover:text-red transition-colors duration-200"
          >
            MAX PERFORMANCE
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-text-soft hover:text-red transition-colors duration-200 font-bold tracking-[0.15em]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#services"
              className="relative inline-flex items-center gap-2 bg-red hover:bg-energy text-white px-6 py-2.5 text-xs font-bold tracking-[0.15em] transition-all duration-300 shadow-red hover:shadow-energy hover:-translate-y-0.5 overflow-hidden group/cta"
            >
              COMMENCER
              <svg className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
              {/* Energy flash on hover */}
              <span className="absolute inset-0 bg-energy opacity-0 group-hover/cta:opacity-100 transition-opacity duration-200" />
              <span className="relative z-10 flex items-center gap-2">COMMENCER
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg></span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-text/[0.06] text-text dark:bg-white/[0.08] dark:text-white transition-colors duration-300"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                  open ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-200 ${
                  open ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                  open ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-offwhite flex flex-col items-center justify-center transition-all duration-400 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-4xl font-heading font-bold text-text hover:text-red transition-colors duration-300 tracking-[0.05em]"
              style={{ transitionDelay: open ? `${i * 80}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="mt-4 bg-red hover:bg-energy text-white px-10 py-4 text-lg font-bold tracking-[0.1em] shadow-red hover:shadow-energy transition-all duration-300 hover:-translate-y-1 font-heading"
          >
            COMMENCER
          </a>
        </nav>
      </div>
    </>
  );
}
