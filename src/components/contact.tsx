"use client";

import { useScrollReveal } from "@/lib/use-scroll-reveal";

const contacts = [
  {
    title: "EMAIL",
    desc: "maximewrzesinski@gmail.com",
    href: "mailto:maximewrzesinski@gmail.com",
  },
  {
    title: "INSTAGRAM",
    desc: "_maxperformance_",
    href: "https://instagram.com/_maxperformance_",
  },
  {
    title: "SECTEURS",
    desc: "Arras • Douai • Cambrai",
    href: null,
  },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" ref={ref} className="section-padding bg-offwhite relative">
      {/* Subtle speed lines */}
      {[15, 35, 55, 75].map((top, i) => (
        <div
          key={i}
          className="absolute h-px bg-energy/8 pointer-events-none"
          style={{ top: `${top}%`, left: `${-2 + i * 3}%`, width: `${70 + i * 8}%`, transform: `rotate(${-3 + i}deg)` }}
        />
      ))}

      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-4 text-red font-semibold tracking-[0.25em] text-xs uppercase mb-4">
            <span className="w-8 h-0.5 bg-red/40" />
            CONTACT
            <span className="w-1.5 h-1.5 bg-energy rounded-full" />
          </span>
          <h2 className="text-4xl md:text-7xl font-heading font-bold text-text mb-5 tracking-tight">
            ME CONTACTER
          </h2>
          <p className="text-text-muted max-w-md mx-auto leading-relaxed font-body normal-case tracking-normal">
            Prêt à commencer ? Contactez-moi dès maintenant
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {contacts.map((c, i) => {
            const inner = (
              <>
                <h3 className="text-lg font-heading font-bold text-text mb-3 tracking-[0.08em]">{c.title}</h3>
                <p className="text-text-muted text-sm font-body normal-case tracking-normal">{c.desc}</p>
              </>
            );

            const classes =
              "group block bg-surface border border-offwhite-border p-8 md:p-10 text-center hover:border-energy/20 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500";

            return c.href ? (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={classes}
              >
                {inner}
              </a>
            ) : (
              <div key={c.title} className={classes}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
