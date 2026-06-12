"use client";

import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "COACHING INDIVIDUEL",
    price: "20€",
    unit: "/séance",
    desc: "Séance personnalisée en tête-à-tête. Programme adapté à vos objectifs, votre niveau et votre rythme.",
    popular: true,
    accent: "left",
  },
  {
    title: "COACHING COLLECTIF",
    price: "15€",
    unit: "/séance (2 pers.)",
    desc: "Entraînez-vous à deux. Motivation décuplée, tarif réduit. Idéal pour les couples ou amis.",
    popular: false,
    accent: "left",
  },
  {
    title: "RUNNING",
    price: "60€",
    unit: "/mois",
    desc: "Préparation course à pied, trail, marathon. Plan d'entraînement, suivi et conseils nutrition.",
    popular: false,
    accent: "left",
  },
  {
    title: "PRÉPARATION PHYSIQUE",
    price: "30€",
    unit: "/mois",
    desc: "Préparation aux épreuves sportives : tests physiques, concours, reprise après blessure.",
    popular: false,
    accent: "left",
  },
];

function ServiceCard({
  title,
  price,
  unit,
  desc,
  popular,
  accent,
  index,
}: {
  title: string;
  price: string;
  unit: string;
  desc: string;
  popular: boolean;
  accent: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0, rotationX: 5 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(1.4)",
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

  const accentBorders: Record<string, string> = {
    left: "border-l-[3px] border-l-energy",
    top: "border-t-[3px] border-t-energy",
    bottom: "border-b-[3px] border-b-energy",
    right: "border-r-[3px] border-r-energy",
  };

  return (
    <div
      ref={cardRef}
      className={`relative group bg-surface rounded-none p-8 md:p-10 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1.5 border border-offwhite-border ${accentBorders[accent]} ${
        popular ? "ring-2 ring-red/15" : ""
      }`}
    >
      {popular && (
        <div className="absolute -top-3.5 left-6 bg-red text-white text-xs font-bold px-4 py-1.5 tracking-[0.15em] shadow-red flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
          POPULAIRE
        </div>
      )}

      {/* Price — athletic, bold */}
      <div className="mb-6">
        <span className="text-5xl md:text-6xl font-heading font-bold text-text tabular-nums">
          {price}
        </span>
        <span className="text-sm text-text-muted ml-2 font-body normal-case tracking-normal font-medium">{unit}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-heading font-bold text-text mb-3 tracking-[0.05em]">{title}</h3>

      {/* Description */}
      <p className="text-sm text-text-muted leading-relaxed mb-8 font-body normal-case tracking-normal">{desc}</p>

      {/* CTA */}
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-sm font-bold text-red hover:text-energy transition-colors duration-200 group/link tracking-[0.1em]"
      >
        RÉSERVER
        <svg
          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>

      {/* Hover energy glow */}
      <div className="absolute inset-0 bg-energy-glow opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" ref={ref} className="section-padding bg-offwhite">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-4 text-red font-semibold tracking-[0.25em] text-xs uppercase mb-4">
            <span className="w-8 h-0.5 bg-red/40" />
            SERVICES
            <span className="w-1.5 h-1.5 bg-energy rounded-full" />
          </span>
          <h2 className="text-4xl md:text-7xl font-heading font-bold text-text mb-5 tracking-tight">
            MES FORMULES
          </h2>
          <p className="text-text-muted max-w-md mx-auto leading-relaxed font-body normal-case tracking-normal">
            Des formules adaptées à chaque objectif, avec un suivi personnalisé
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
