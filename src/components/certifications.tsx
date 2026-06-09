"use client";

import { useEffect, useRef } from "react";

const certifs = [
  {
    icon: "🎓",
    title: "Licence STAPS",
    desc: "Mention Entraînement Sportif — Université d'Artois",
    year: "2018",
  },
  {
    icon: "🏅",
    title: "DEJEPS",
    desc: "Diplôme d'État Jeunesse, Éducation Populaire et Sport",
    year: "2020",
  },
  {
    icon: "⭐",
    title: "5 ans d'expérience",
    desc: "Coaching sportif auprès de particuliers et sportifs",
    year: "Depuis 2021",
  },
];

export default function Certifications() {
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
    <section
      id="certifications"
      ref={ref}
      className="section-padding bg-charcoal text-cream"
    >
      <div className="container-site">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Diplômes & Certifications</h2>
          <p className="text-cream/60 max-w-xl mx-auto">
            Une formation solide pour un accompagnement professionnel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifs.map((c, i) => (
            <div key={c.title} className={`fade-up fade-up-d${i + 1}`}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-colors duration-300">
                <div className="h-1 w-12 bg-amber rounded-full mb-6" />
                <div className="text-3xl mb-4">{c.icon}</div>
                <p className="text-xs text-amber font-semibold tracking-widest uppercase mb-2">{c.year}</p>
                <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
