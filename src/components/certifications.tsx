"use client";

import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certifs = [
  {
    title: "LICENCE STAPS",
    desc: "Mention Entraînement Sportif — Université d'Artois",
    year: "2018",
    rank: 1,
  },
  {
    title: "DEJEPS",
    desc: "Diplôme d'État Jeunesse, Éducation Populaire et Sport",
    year: "2020",
    rank: 2,
  },
  {
    title: "5 ANS D'EXPÉRIENCE",
    desc: "Coaching sportif auprès de particuliers et sportifs",
    year: "Depuis 2021",
    rank: 3,
  },
];

function CertCard({
  title,
  desc,
  year,
  rank,
  index,
}: {
  title: string;
  desc: string;
  year: string;
  rank: number;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: index * 0.12,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-surface-dark border border-offblack-border p-8 md:p-10 hover:border-energy/15 transition-all duration-500 hover:-translate-y-1.5"
    >
      {/* Rank number — large, faded */}
      <div className="absolute top-4 right-6 text-7xl font-heading font-bold text-white/[0.03] select-none">
        {rank}
      </div>

      {/* Year badge */}
      <span className="relative inline-block text-energy font-heading font-bold text-sm tracking-[0.2em] mb-6">
        {year}
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-energy/30" />
      </span>

      {/* Title */}
      <h3 className="text-xl font-heading font-bold text-text-dark mb-3 tracking-[0.05em] relative z-10">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-text-dark-muted leading-relaxed font-body normal-case tracking-normal relative z-10">
        {desc}
      </p>

      {/* Energy corner accent */}
      <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-energy/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150" />
    </div>
  );
}

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section id="certifications" ref={ref} className="section-padding bg-offblack relative overflow-hidden" data-dark-section>
      {/* Energy glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-energy-glow rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-4 text-red font-semibold tracking-[0.25em] text-xs uppercase mb-4">
            <span className="w-8 h-0.5 bg-energy/50" />
            DIPLÔMES
            <span className="w-1.5 h-1.5 bg-energy rounded-full" />
          </span>
          <h2 className="text-4xl md:text-7xl font-heading font-bold text-text-dark mb-5 tracking-tight">
            MES CERTIFICATIONS
          </h2>
          <p className="text-text-dark-muted max-w-md mx-auto leading-relaxed font-body normal-case tracking-normal">
            Une formation solide pour un accompagnement professionnel
          </p>
        </div>

        {/* Grid — podium style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {certifs.map((c, i) => (
            <CertCard key={c.title} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
