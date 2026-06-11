"use client";

import { useScrollReveal } from "@/lib/use-scroll-reveal";

const contacts = [
  {
    title: "Email",
    desc: "maxperformance.arras@gmail.com",
    href: "mailto:maxperformance.arras@gmail.com",
  },
  {
    title: "Instagram",
    desc: "@maxperformance.arras",
    href: "https://instagram.com/maxperformance.arras",
  },
  {
    title: "Secteurs",
    desc: "Arras • Douai • Cambrai",
    href: null,
  },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" ref={ref} className="section-padding bg-offwhite">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-3 text-red font-semibold tracking-[0.2em] text-xs uppercase mb-4">
            <span className="w-6 h-px bg-red/30" />
            Contact
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-text mb-5">
            Me contacter
          </h2>
          <p className="text-text-muted max-w-md mx-auto leading-relaxed">
            Prêt à commencer ? Contactez-moi dès maintenant
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contacts.map((c, i) => {
            const inner = (
              <>
                <h3 className="text-lg font-heading font-bold text-text mb-2">
                  {c.title}
                </h3>
                <p className="text-text-muted text-sm">{c.desc}</p>
              </>
            );

            const classes =
              "group block bg-surface border border-offwhite-border rounded-2xl p-8 md:p-10 text-center hover:border-red/15 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500";

            return c.href ? (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
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
