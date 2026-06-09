"use client";

import { useRef } from "react";
import { useGsapStagger } from "@/lib/motion";

const certifications = [
  {
    icon: "🎓",
    title: "Licence STAPS",
    subtitle: "Mention Entraînement Sportif",
    year: "2018",
  },
  {
    icon: "🏅",
    title: "DEJEPS",
    subtitle: "Diplôme d'État Jeunesse Éducation Populaire et Sport",
    year: "2020",
  },
  {
    icon: "⭐",
    title: "5 ans d'expérience",
    subtitle: "en coaching sportif — individuel, collectif, running & préparation physique",
    year: "Depuis 2021",
  },
];

export default function Certifications() {
  const timelineRef = useRef<HTMLDivElement>(null);
  useGsapStagger(timelineRef, { stagger: 0.22, y: 30, duration: 0.7 });

  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-navy text-ivory py-24 px-4"
    >
      {/* === Subtle background texture === */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-[5%] w-72 h-72 rounded-full bg-gold/[0.03] blur-[100px]" />
        <div className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-terracotta/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* ===== SECTION HEADER ===== */}
        <div className="text-center mb-16 md:mb-20">
          {/* Gold-line decoration */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold/50 to-gold/50" />
            <div className="gold-line" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent via-gold/50 to-gold/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Mes Certifications
          </h2>

          <p className="mt-4 text-ivory/60 text-sm sm:text-base max-w-xl mx-auto">
            Des diplômes d&apos;État et une expérience terrain au service de votre progression
          </p>
        </div>

        {/* ===== VERTICAL TIMELINE ===== */}
        <div
          ref={timelineRef}
          className="relative flex flex-col gap-12 md:gap-16"
        >
          {/* Vertical timeline line (behind the dots) */}
          <div
            className="absolute left-[18px] md:left-[22px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-gold/60 via-gold/30 to-terracotta/20"
            aria-hidden="true"
          />

          {certifications.map((cert, index) => (
            <div key={index} className="relative flex items-start gap-5 md:gap-8">
              {/* === Timeline dot === */}
              <div className="relative z-10 flex-shrink-0">
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-full bg-gold/20 blur-md scale-150" />
                {/* Dot */}
                <div
                  className={`relative w-[36px] h-[36px] md:w-[44px] md:h-[44px] rounded-full flex items-center justify-center border-2 ${
                    index === 0
                      ? "border-gold bg-gold/10"
                      : index === 1
                        ? "border-gold bg-gold/10"
                        : "border-terracotta bg-terracotta/10"
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${
                      index === 0
                        ? "bg-gold shadow-[0_0_10px_rgba(232,184,75,0.6)]"
                        : index === 1
                          ? "bg-gold shadow-[0_0_10px_rgba(232,184,75,0.6)]"
                          : "bg-terracotta shadow-[0_0_10px_rgba(200,90,62,0.6)]"
                    }`}
                  />
                </div>
              </div>

              {/* === Card content === */}
              <div className="group flex-1 min-w-0">
                {/* Year badge */}
                <span className="inline-block text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] text-gold/70 mb-3">
                  {cert.year}
                </span>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-7 backdrop-blur-sm transition-all duration-400 hover:bg-white/[0.07] hover:border-gold/20 hover:shadow-[0_8px_32px_-8px_rgba(232,184,75,0.12)]">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gold/10 flex items-center justify-center text-xl md:text-2xl">
                      {cert.icon}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-ivory leading-snug">
                        {cert.title}
                      </h3>
                      <p className="mt-1.5 text-sm md:text-base text-ivory/60 leading-relaxed">
                        {cert.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== BOTTOM GOLD DECORATION ===== */}
        <div className="mt-16 md:mt-20 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold/30" />
            <div className="w-6 h-[2px] bg-gradient-to-r from-gold/30 via-gold to-gold/30 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-gold/40" />
            <div className="w-10 h-[2px] bg-gradient-to-r from-gold/40 to-terracotta/30 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-terracotta/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
