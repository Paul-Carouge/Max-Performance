"use client";

import { useRef } from "react";
import { useGsapStagger } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Coaching Individuel",
    price: "20€/séance",
    description: "Séance personnalisée en tête-à-tête avec votre coach.",
    popular: true,
  },
  {
    title: "Coaching Collectif",
    price: "15€/séance",
    subtitle: "(2 pers.)",
    description: "Entraînement en petit groupe.",
    popular: false,
  },
  {
    title: "Running",
    price: "60€/mois",
    description: "Préparation course à pied, trail, marathon.",
    popular: false,
  },
  {
    title: "Préparation Physique",
    price: "30€/mois",
    description: "Préparation aux épreuves sportives.",
    popular: false,
  },
];

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);
  useGsapStagger(gridRef);

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-[#1A2E2E]">
          Mes Services
        </h2>
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-surface rounded-2xl shadow-md overflow-hidden relative"
            >
              {service.popular && (
                <Badge className="absolute top-3 right-3 z-10 bg-accent text-white border-0">
                  Populaire
                </Badge>
              )}
              <div className="h-48 bg-muted" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                {service.subtitle && (
                  <p className="text-sm text-muted-foreground mb-2">{service.subtitle}</p>
                )}
                <p className="text-3xl font-bold text-primary mb-3">
                  {service.price}
                </p>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
