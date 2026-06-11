"use client";

import { useScrollReveal } from "@/lib/use-scroll-reveal";

const services = [
  {
    title: "Coaching Individuel",
    price: "20€",
    unit: "/séance",
    desc: "Séance personnalisée en tête-à-tête. Programme adapté à vos objectifs, votre niveau et votre rythme.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    popular: true,
  },
  {
    title: "Coaching Collectif",
    price: "15€",
    unit: "/séance (2 pers.)",
    desc: "Entraînez-vous à deux. Motivation décuplée, tarif réduit. Idéal pour les couples ou amis.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    popular: false,
  },
  {
    title: "Running",
    price: "60€",
    unit: "/mois",
    desc: "Préparation course à pied, trail, marathon. Plan d'entraînement, suivi et conseils nutrition.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    popular: false,
  },
  {
    title: "Préparation Physique",
    price: "30€",
    unit: "/mois",
    desc: "Préparation aux épreuves sportives : tests physiques, concours, reprise après blessure.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    popular: false,
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" ref={ref} className="section-padding bg-surface">
      <div className="container-site">
        <div className="text-center mb-16">
          <span className="fade-in text-terra font-semibold tracking-widest text-xs uppercase">
            Services
          </span>
          <h2 className="fade-in fade-in-d1 text-3xl md:text-4xl font-bold font-heading text-navy mt-3 mb-4">
            Mes formules
          </h2>
          <p className="fade-in fade-in-d2 text-muted max-w-md mx-auto">
            Des formules adaptées à chaque objectif, avec un suivi personnalisé
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`fade-in fade-in-d${i + 1} relative group bg-canvas rounded-2xl p-6 border border-border hover:border-terra/20 transition-all duration-300 hover:shadow-xl hover:shadow-navy/5 hover:-translate-y-1`}
            >
              {s.popular && (
                <span className="absolute -top-3 left-5 bg-terra text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Populaire
                </span>
              )}
              <div className="w-12 h-12 bg-terra/10 rounded-xl flex items-center justify-center text-terra mb-5 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold font-heading text-navy mb-2">{s.title}</h3>
              <p className="text-2xl font-bold text-terra mb-1">
                {s.price}
                <span className="text-sm font-normal text-muted ml-1">{s.unit}</span>
              </p>
              <p className="text-sm text-muted mt-3 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
