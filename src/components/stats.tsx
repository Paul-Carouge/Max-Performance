"use client";

import { useScrollReveal } from "@/lib/use-scroll-reveal";

const stats = [
  { number: "9+", label: "ans d'expérience", suffix: "depuis 2017" },
  { number: "30+", label: "clients satisfaits", suffix: "et fidèles" },
  { number: "2", label: "diplômes d'État", suffix: "STAPS & DEJEPS" },
  { number: "3", label: "secteurs", suffix: "Arras • Douai • Cambrai" },
];

export default function Stats() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-padding bg-navy text-white">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`fade-in fade-in-d${i + 1} text-center group`}
            >
              <p className="text-5xl md:text-6xl font-bold font-heading text-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </p>
              <p className="text-sm font-medium text-white/80">{stat.label}</p>
              <p className="text-xs text-white/40 mt-1">{stat.suffix}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
