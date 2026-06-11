"use client";

import { useScrollReveal } from "@/lib/use-scroll-reveal";

const contacts = [
  {
    title: "Email",
    desc: "maxperformance.arras@gmail.com",
    href: "mailto:maxperformance.arras@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Instagram",
    desc: "@maxperformance.arras",
    href: "https://instagram.com/maxperformance.arras",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18l.01-6M12 6v.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    ),
  },
  {
    title: "Secteurs",
    desc: "Arras • Douai • Cambrai",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" ref={ref} className="section-padding bg-navy text-white">
      <div className="container-site">
        <div className="text-center mb-16">
          <span className="fade-in text-gold font-semibold tracking-widest text-xs uppercase">
            Contact
          </span>
          <h2 className="fade-in fade-in-d1 text-3xl md:text-4xl font-bold font-heading text-white mt-3 mb-4">
            Me contacter
          </h2>
          <p className="fade-in fade-in-d2 text-white/50 max-w-md mx-auto">
            Prêt à commencer ? Contactez-moi dès maintenant
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {contacts.map((c, i) => {
            const inner = (
              <>
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <span className="text-gold">{c.icon}</span>
                </div>
                <h3 className="text-lg font-bold font-heading mb-2">{c.title}</h3>
                <p className="text-white/60 text-sm">{c.desc}</p>
              </>
            );

            const classes = `fade-in fade-in-d${i + 1} block bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 h-full group`;

            return c.href ? (
              <a key={c.title} href={c.href} className={classes}>
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
