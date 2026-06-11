"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Services", href: "#services" },
  { label: "Diplômes", href: "#certifications" },
  { label: "Contact", href: "#contact" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass bg-offwhite/80 border-b border-offwhite-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-site flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="text-lg md:text-xl font-heading font-bold text-text tracking-tight hover:text-red transition-colors duration-200"
          >
            Max Performance
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-text-soft hover:text-red transition-colors duration-200 font-medium tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-red hover:bg-red-light text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-red hover:shadow-lg hover:-translate-y-0.5"
            >
              Commencer
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-text"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                  open ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${
                  open ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                  open ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-offwhite flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-3xl font-heading font-bold text-text hover:text-red transition-colors duration-300"
              style={{ transitionDelay: open ? `${i * 80}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="mt-4 bg-red hover:bg-red-light text-white px-10 py-4 rounded-full text-lg font-semibold shadow-red transition-all duration-300 hover:-translate-y-1"
          >
            Commencer
          </a>
        </nav>
      </div>
    </>
  );
}
