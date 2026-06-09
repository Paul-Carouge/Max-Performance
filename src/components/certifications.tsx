"use client";

import { useRef } from "react";
import { useGsapStagger } from "@/lib/motion";

const certifications = [
  {
    icon: "🎓",
    title: "Licence STAPS",
    subtitle: "Mention Entraînement Sportif",
  },
  {
    icon: "🏅",
    title: "DEJEPS",
    subtitle:
      "Diplôme d'État Jeunesse Éducation Populaire et Sport",
  },
  {
    icon: "⭐",
    title: "5 ans d'expérience",
    subtitle: "en coaching sportif",
  },
];

export default function Certifications() {
  const gridRef = useRef<HTMLDivElement>(null);
  useGsapStagger(gridRef, { stagger: 0.15 });

  return (
    <section className="bg-[#1A2E2E] text-white py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Mes Certifications
      </h2>
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 card-hover"
          >
            <div className="h-1 bg-primary rounded-full mb-6 w-full" />
            <div className="text-3xl mb-4">{cert.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-white/70">{cert.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
