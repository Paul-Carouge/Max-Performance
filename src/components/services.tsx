"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Coaching Individuel",
    price: "20€",
    unit: "/séance",
    desc: "Séance personnalisée en tête-à-tête. Programme adapté à vos objectifs, votre niveau et votre rythme.",
    icon: "🤝",
    popular: true,
  },
  {
    title: "Coaching Collectif",
    price: "15€",
    unit: "/séance (2 pers.)",
    desc: "Entraînez-vous à deux. Motivation décuplée, tarif réduit. Idéal pour les couples ou amis.",
    icon: "👥",
    popular: false,
  },
  {
    title: "Running",
    price: "60€",
    unit: "/mois",
    desc: "Préparation course à pied, trail, marathon. Plan d'entraînement, suivi et conseils nutrition.",
    icon: "🏃",
    popular: false,
  },
  {
    title: "Préparation Physique",
    price: "30€",
    unit: "/mois",
    desc: "Préparation aux épreuves sportives : tests physiques, concours, reprise après blessure.",
    icon: "💪",
    popular: false,
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".fade-up").forEach((c) => c.classList.add("visible"));
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="section-padding">
      <div className="container-site">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Mes Services</h2>
          <p className="text-warm-gray max-w-xl mx-auto">
            Des formules adaptées à chaque objectif, avec un suivi personnalisé
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className={`fade-up fade-up-d${i + 1}`}>
              <Card className="relative h-full bg-white border-border hover:border-amber/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {s.popular && (
                  <Badge className="absolute -top-3 left-4 bg-amber text-white hover:bg-amber border-none">
                    ⭐ Populaire
                  </Badge>
                )}
                <CardContent className="p-6 pt-8">
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">{s.title}</h3>
                  <p className="text-3xl font-bold text-amber mb-1">
                    {s.price}
                    <span className="text-sm font-normal text-warm-gray ml-1">{s.unit}</span>
                  </p>
                  <p className="text-sm text-warm-gray mt-3 leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
