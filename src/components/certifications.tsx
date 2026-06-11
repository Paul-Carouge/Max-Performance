"use client";

import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certifs = [
  {
    title: "Licence STAPS",
    desc: "Mention Entraînement Sportif — Université d'Artois",
    year: "2018",
  },
  {
    title: "DEJEPS",
    desc: "Diplôme d'État Jeunesse, Éducation Populaire et Sport",
    year: "2020",
  },
  {
    title: "5 ans d'expérience",
    desc: "Coaching sportif auprès de particuliers et sportifs",
    year: "Depuis 2021",
  },
];

function CertCard({
  title,
  desc,
  year,
  index,
}: {
  title: string;
  desc: string;
  year: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: index * 0.15,
          ease: "power3.out",
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
      className="group relative bg-surface-dark border border-offblack-border rounded-2xl p-8 md:p-10 hover:border-red/10 transition-all duration-500 hover:-translate-y-1"
    >
      {/* Year badge */}
      <span className="inline-block text-red font-heading font-bold text-sm tracking-widest uppercase mb-6">
        {year}
      </span>

      {/* Title */}
      <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-text-dark-muted leading-relaxed">{desc}</p>

      {/* Decorative corner */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-red/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section id="certifications" ref={ref} className="section-padding bg-offblack">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-3 text-red font-semibold tracking-[0.2em] text-xs uppercase mb-4">
            <span className="w-6 h-px bg-red/40" />
            Diplômes
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-text-dark mb-5">
            Mes certifications
          </h2>
          <p className="text-text-dark-muted max-w-md mx-auto leading-relaxed">
            Une formation solide pour un accompagnement professionnel
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifs.map((c, i) => (
            <CertCard key={c.title} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
