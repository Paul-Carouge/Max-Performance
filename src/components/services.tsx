"use client";

import { useRef } from "react";
import { useGsapStagger } from "@/lib/motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Coaching Individuel",
    price: "20€",
    unit: "/séance",
    icon: "🤝",
    subtitle: null,
    popular: true,
    description:
      "Séance personnalisée en tête-à-tête. Programme sur-mesure adapté à vos objectifs, votre niveau et votre rythme.",
    bentoSize: "large" as const,
  },
  {
    title: "Coaching Collectif",
    price: "15€",
    unit: "/séance",
    subtitle: "(2 pers.)",
    icon: "👥",
    popular: false,
    description:
      "Entraînez-vous à deux pour plus de motivation et un tarif avantageux.",
    bentoSize: "small" as const,
  },
  {
    title: "Running",
    price: "60€",
    unit: "/mois",
    icon: "🏃",
    subtitle: null,
    popular: false,
    description:
      "Préparation course à pied, trail, marathon. Plans d'entraînement et coaching en extérieur.",
    bentoSize: "small" as const,
  },
  {
    title: "Préparation Physique",
    price: "30€",
    unit: "/mois",
    icon: "💪",
    subtitle: null,
    popular: false,
    description:
      "Préparation aux épreuves sportives. Force, endurance, agilité — un programme complet.",
    bentoSize: "wide" as const,
  },
];

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);
  useGsapStagger(gridRef, { stagger: 0.1, y: 30 });

  return (
    <section
      id="services"
      className="bg-ivory py-24 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-navy tracking-tight">
            Mes Services
          </h2>
          <p className="text-text-muted text-base sm:text-lg mt-4 max-w-xl mx-auto">
            Des formules adaptées à tous les objectifs — en solo, à deux, sur la
            route ou en salle.
          </p>
        </div>

        {/* Bento grid — asymmetric layout */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-auto"
        >
          {services.map((service, index) => {
            const isLarge = service.bentoSize === "large";
            const isWide = service.bentoSize === "wide";

            const gridClasses = isLarge
              ? "lg:col-span-2 lg:row-span-2"
              : isWide
                ? "lg:col-span-3"
                : "lg:col-span-1";

            return (
              <Card
                key={service.title}
                className={`
                  group/card relative flex flex-col bg-white rounded-2xl shadow-sm
                  overflow-hidden border-0 cursor-default
                  transition-all duration-300 ease-out
                  hover:-translate-y-1.5 hover:shadow-lg
                  ${gridClasses}
                `}
              >
                {/* Gold top accent bar */}
                <div className="shrink-0 h-1 w-full bg-gradient-to-r from-gold via-gold-light to-gold" />

                {/* Popular badge */}
                {service.popular && (
                  <Badge className="absolute top-5 right-5 z-10 bg-gold text-navy border-0 font-semibold text-xs px-3 py-1 rounded-full">
                    ⭐ Populaire
                  </Badge>
                )}

                {/* Card body */}
                <div
                  className={`flex flex-col flex-1 px-6 sm:px-7 ${
                    isLarge ? "py-8 sm:py-10" : isWide ? "py-7 sm:py-8" : "py-6 sm:py-7"
                  }`}
                >
                  {/* Icon */}
                  <span className="text-3xl sm:text-4xl mb-4 block leading-none">
                    {service.icon}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-navy leading-tight">
                    {service.title}
                  </h3>

                  {/* Subtitle (e.g. "2 pers.") */}
                  {service.subtitle && (
                    <p className="text-sm text-text-muted mt-0.5">
                      {service.subtitle}
                    </p>
                  )}

                  {/* Price */}
                  <div className="mt-auto pt-4 flex items-baseline gap-0.5">
                    <span className="text-3xl sm:text-4xl font-bold text-terracotta">
                      {service.price}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-terracotta/70">
                      {service.unit}
                    </span>
                  </div>

                  {/* Description — visible on large/wide, tooltip-like on small */}
                  {(isLarge || isWide) && (
                    <p className="text-text-muted text-sm sm:text-base mt-3 leading-relaxed">
                      {service.description}
                    </p>
                  )}

                  {!isLarge && !isWide && (
                    <p className="text-text-muted text-xs sm:text-sm mt-2 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
