"use client";

import { useScrollReveal } from "@/lib/use-scroll-reveal";

const certifs = [
  {
    title: "Licence STAPS",
    desc: "Mention Entraînement Sportif — Université d'Artois",
    year: "2018",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v7" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 18l3 3 3-3" />
      </svg>
    ),
  },
  {
    title: "DEJEPS",
    desc: "Diplôme d'État Jeunesse, Éducation Populaire et Sport",
    year: "2020",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "5 ans d'expérience",
    desc: "Coaching sportif auprès de particuliers et sportifs",
    year: "Depuis 2021",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section id="certifications" ref={ref} className="section-padding bg-canvas">
      <div className="container-site">
        <div className="text-center mb-16">
          <span className="fade-in text-terra font-semibold tracking-widest text-xs uppercase">
            Diplômes
          </span>
          <h2 className="fade-in fade-in-d1 text-3xl md:text-4xl font-bold font-heading text-navy mt-3 mb-4">
            Mes certifications
          </h2>
          <p className="fade-in fade-in-d2 text-muted max-w-md mx-auto">
            Une formation solide pour un accompagnement professionnel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {certifs.map((c, i) => (
            <div
              key={c.title}
              className={`fade-in fade-in-d${i + 1} bg-surface rounded-2xl p-8 border border-border hover:border-terra/15 hover:shadow-lg transition-all duration-300 text-center group`}
            >
              <div className="w-10 h-10 bg-terra/10 rounded-full flex items-center justify-center text-terra mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                {c.icon}
              </div>
              <span className="text-xs text-terra font-semibold tracking-widest uppercase">{c.year}</span>
              <h3 className="text-lg font-bold font-heading text-navy mt-2 mb-2">{c.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
