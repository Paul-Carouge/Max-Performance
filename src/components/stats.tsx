"use client";

import { useRef } from "react";
import { useGsapStagger } from "@/lib/motion";

const stats = [
  { number: "9+", label: "ans d'expérience" },
  { number: "30+", label: "clients satisfaits" },
  { number: "2", label: "diplômes d'État" },
  { number: "3", label: "secteurs (Arras, Douai, Cambrai)" },
];

function GoldDiamond({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-3 h-3 rotate-45 bg-gold shadow-[0_0_8px_rgba(232,184,75,0.5)] ${className}`}
      aria-hidden="true"
    />
  );
}

export default function Stats() {
  const desktopRef = useRef<HTMLDivElement>(null);
  useGsapStagger(desktopRef, { stagger: 0.18, y: 30, duration: 0.7 });

  return (
    <section className="relative overflow-hidden bg-ivory py-20 md:py-28">
      {/* ===== DECORATIVE DIAGONAL OVERLAY ===== */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute -top-1/3 right-0 w-[70%] h-[140%] bg-gradient-to-br from-navy/[0.03] via-navy/[0.02] to-transparent -rotate-12 origin-top-right" />
        <div className="absolute top-1/4 left-0 w-32 h-32 rounded-full bg-gold/[0.04] blur-3xl" />
        <div className="absolute bottom-1/4 right-[10%] w-40 h-40 rounded-full bg-terracotta/[0.04] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* ===== SECTION HEADER WITH GOLD ACCENTS ===== */}
        <div className="flex items-center justify-center gap-3 mb-12 md:mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-gold/50" />
          <div className="flex items-center gap-1.5">
            <GoldDiamond className="w-2 h-2" />
            <div className="w-2 h-2 rotate-45 bg-gold/30" />
            <GoldDiamond className="w-2 h-2" />
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent via-gold/50 to-gold/50" />
        </div>

        {/* ================================================================ */}
        {/* DESKTOP: BENTO-STAGGERED CASCADE LAYOUT (md+)                    */}
        {/* ================================================================ */}
        <div
          ref={desktopRef}
          className="hidden md:grid grid-cols-6 gap-6 auto-rows-[minmax(100px,auto)]"
        >
          {/* --- CARD 1: 9+ ans — tall, spans left quadrant --- */}
          <div className="col-span-2 row-span-4 relative group">
            {/* Gold top accent bar */}
            <div className="absolute -top-px left-6 right-6 h-[3px] bg-gradient-to-r from-gold via-gold to-terracotta/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="h-full bg-white rounded-2xl p-8 flex flex-col justify-center shadow-[0_8px_32px_-8px_rgba(27,42,74,0.08)] border border-ivory-dark/50 hover:shadow-[0_12px_48px_-8px_rgba(200,90,62,0.15)] transition-all duration-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/[0.06] to-transparent rounded-bl-full" />
              <span className="text-5xl lg:text-6xl font-bold text-terracotta leading-none tracking-tight">
                {stats[0].number}
              </span>
              <span className="mt-3 text-navy/70 text-sm lg:text-base font-medium uppercase tracking-widest">
                {stats[0].label}
              </span>
            </div>
          </div>

          {/* --- Gold diamond connector --- */}
          <div className="col-span-1 row-span-4 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <GoldDiamond />
              <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-gold/10" />
              <GoldDiamond className="w-1.5 h-1.5 opacity-50" />
            </div>
          </div>

          {/* --- CARD 2: 30+ clients — medium top-right --- */}
          <div className="col-span-3 row-span-3 relative group">
            <div className="absolute -top-px left-6 right-6 h-[3px] bg-gradient-to-r from-terracotta/40 via-gold to-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="h-full bg-white rounded-2xl p-8 flex flex-col justify-center shadow-[0_8px_32px_-8px_rgba(27,42,74,0.08)] border border-ivory-dark/50 hover:shadow-[0_12px_48px_-8px_rgba(200,90,62,0.15)] transition-all duration-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/[0.06] to-transparent rounded-bl-full" />
              <span className="text-5xl lg:text-6xl font-bold text-terracotta leading-none tracking-tight">
                {stats[1].number}
              </span>
              <span className="mt-3 text-navy/70 text-sm lg:text-base font-medium uppercase tracking-widest">
                {stats[1].label}
              </span>
            </div>
          </div>

          {/* --- Gold diamond connector (row 2 right side) --- */}
          <div className="col-span-1 row-span-1" />

          {/* --- CARD 3: 2 diplômes — bottom-left offset --- */}
          <div className="col-start-2 col-span-2 row-start-5 row-span-3 relative group mt-2">
            <div className="absolute -top-px left-6 right-6 h-[3px] bg-gradient-to-r from-gold via-gold to-terracotta/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="h-full bg-white rounded-2xl p-8 flex flex-col justify-center shadow-[0_8px_32px_-8px_rgba(27,42,74,0.08)] border border-ivory-dark/50 hover:shadow-[0_12px_48px_-8px_rgba(200,90,62,0.15)] transition-all duration-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/[0.06] to-transparent rounded-bl-full" />
              <span className="text-5xl lg:text-6xl font-bold text-terracotta leading-none tracking-tight">
                {stats[2].number}
              </span>
              <span className="mt-3 text-navy/70 text-sm lg:text-base font-medium uppercase tracking-widest">
                {stats[2].label}
              </span>
            </div>
          </div>

          {/* --- Gold diamond connector (bottom center) --- */}
          <div className="col-span-1 row-start-5 row-span-3 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <GoldDiamond className="w-1.5 h-1.5 opacity-50" />
              <div className="w-px h-8 bg-gradient-to-b from-gold/10 to-gold/60" />
              <GoldDiamond />
            </div>
          </div>

          {/* --- CARD 4: 3 secteurs — bottom-right --- */}
          <div className="col-span-2 row-start-5 row-span-3 relative group mt-2">
            <div className="absolute -top-px left-6 right-6 h-[3px] bg-gradient-to-r from-terracotta/40 via-gold to-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="h-full bg-white rounded-2xl p-8 flex flex-col justify-center shadow-[0_8px_32px_-8px_rgba(27,42,74,0.08)] border border-ivory-dark/50 hover:shadow-[0_12px_48px_-8px_rgba(200,90,62,0.15)] transition-all duration-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/[0.06] to-transparent rounded-bl-full" />
              <span className="text-5xl lg:text-6xl font-bold text-terracotta leading-none tracking-tight">
                {stats[3].number}
              </span>
              <span className="mt-3 text-navy/70 text-sm lg:text-base font-medium uppercase tracking-widest">
                {stats[3].label}
              </span>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* MOBILE: HORIZONTAL SCROLLING MARQUEE (< md)                     */}
        {/* ================================================================ */}
        <div className="md:hidden overflow-hidden">
          <div className="flex gap-4 w-max marquee-track">
            {/* Two copies of the stats for seamless looping */}
            {[...stats, ...stats].map((stat, i) => (
              <div
                key={i}
                className="w-[220px] shrink-0 bg-white rounded-2xl p-6 flex flex-col justify-center shadow-[0_4px_20px_-6px_rgba(27,42,74,0.08)] border border-ivory-dark/50 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold/[0.06] to-transparent rounded-bl-full" />
                {/* Gold top dot */}
                <div className="w-6 h-[3px] bg-gradient-to-r from-gold to-terracotta/40 rounded-full mb-4" />
                <span className="text-4xl font-bold text-terracotta leading-none tracking-tight">
                  {stat.number}
                </span>
                <span className="mt-2 text-navy/70 text-sm font-medium uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Gradient fade edges (mounted on the section, not the scroll) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-ivory to-transparent md:hidden" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-ivory to-transparent md:hidden" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
