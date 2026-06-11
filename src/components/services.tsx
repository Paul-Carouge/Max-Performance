"use client";

import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Coaching Individuel",
    price: "20€",
    unit: "/séance",
    desc: "Séance personnalisée en tête-à-tête. Programme adapté à vos objectifs, votre niveau et votre rythme.",
    popular: true,
  },
  {
    title: "Coaching Collectif",
    price: "15€",
    unit: "/séance (2 pers.)",
    desc: "Entraînez-vous à deux. Motivation décuplée, tarif réduit. Idéal pour les couples ou amis.",
    popular: false,
  },
  {
    title: "Running",
    price: "60€",
    unit: "/mois",
    desc: "Préparation course à pied, trail, marathon. Plan d'entraînement, suivi et conseils nutrition.",
    popular: false,
  },
  {
    title: "Préparation Physique",
    price: "30€",
    unit: "/mois",
    desc: "Préparation aux épreuves sportives : tests physiques, concours, reprise après blessure.",
    popular: false,
  },
];

function ServiceCard({
  title,
  price,
  unit,
  desc,
  popular,
  index,
}: {
  title: string;
  price: string;
  unit: string;
  desc: string;
  popular: boolean;
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
          delay: index * 0.12,
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
      className={`relative group bg-surface border border-offwhite-border rounded-2xl p-8 md:p-10 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 ${
        popular ? "ring-1 ring-red/20" : ""
      }`}
    >
      {popular && (
        <span className="absolute -top-3.5 left-6 bg-red text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide shadow-red">
          Populaire
        </span>
      )}

      {/* Price */}
      <div className="mb-6">
        <span className="text-4xl md:text-5xl font-heading font-black text-text tabular-nums">
          {price}
        </span>
        <span className="text-sm text-text-muted ml-2 font-medium">{unit}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-heading font-bold text-text mb-3">{title}</h3>

      {/* Description */}
      <p className="text-sm text-text-muted leading-relaxed mb-8">{desc}</p>

      {/* CTA */}
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-sm font-semibold text-red hover:text-red-light transition-colors duration-200 group/link"
      >
        Réserver
        <svg
          className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
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
          <span className="inline-flex items-center gap-3 text-red font-semibold tracking-[0.2em] text-xs uppercase mb-4">
            <span className="w-6 h-px bg-red/30" />
            Services
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-text mb-5">
            Mes formules
          </h2>
          <p className="text-text-muted max-w-md mx-auto leading-relaxed">
            Des formules adaptées à chaque objectif, avec un suivi personnalisé
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
