"use client";

import { useRef } from "react";
import { useGsapStagger } from "@/lib/motion";

interface ContactItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  staggerOffset: string; // mt-* class for vertical offset
}

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-terracotta"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-terracotta"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-terracotta"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const contacts: ContactItem[] = [
  {
    icon: <MailIcon />,
    title: "Email",
    description: "maxperformance.arras@gmail.com",
    href: "mailto:maxperformance.arras@gmail.com",
    staggerOffset: "md:mt-0",
  },
  {
    icon: <InstagramIcon />,
    title: "Instagram",
    description: "@maxperformance.arras",
    href: "#",
    staggerOffset: "md:-mt-8",
  },
  {
    icon: <MapPinIcon />,
    title: "Secteurs",
    description: "Arras • Douai • Cambrai",
    staggerOffset: "md:mt-8",
  },
];

export default function Contact() {
  const gridRef = useRef<HTMLDivElement>(null);
  useGsapStagger(gridRef, { stagger: 0.15, y: 30, duration: 0.7 });

  return (
    <section id="contact" className="relative overflow-hidden py-24 px-4 bg-ivory">
      {/* ===== DECORATIVE BACKGROUND ELEMENTS ===== */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-1/3 left-0 w-40 h-40 rounded-full bg-terracotta/[0.04] blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-52 h-52 rounded-full bg-gold/[0.03] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* ===== SECTION HEADER ===== */}
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            Me Contacter
          </h2>
          <p className="mt-3 text-text-muted text-base max-w-md mx-auto">
            Une question, un projet sportif&nbsp;? Je suis à votre écoute.
          </p>
        </div>

        {/* ===== STAGGERED CARDS ===== */}
        <div
          ref={gridRef}
          className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          {contacts.map((item) => (
            <div
              key={item.title}
              className={`w-full md:w-1/3 ${item.staggerOffset}`}
            >
              <div className="relative bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg card-premium border border-ivory-dark/40 h-full">
                {/* Colored left border accent */}
                <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-gold via-gold to-terracotta/40" />

                <div className="pl-4">
                  {/* Icon in terracotta/10 circle */}
                  <div className="bg-terracotta/10 rounded-full p-4 w-fit mx-auto mb-4">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-navy text-center mb-2">
                    {item.title}
                  </h3>

                  {/* Description / Link */}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block text-center text-text-muted hover:text-terracotta transition-colors duration-200 text-sm"
                    >
                      {item.description}
                    </a>
                  ) : (
                    <p className="text-center text-text-muted text-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
