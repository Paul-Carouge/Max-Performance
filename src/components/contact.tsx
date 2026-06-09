"use client";

import { useEffect, useRef } from "react";

const contacts = [
  {
    icon: "📧",
    title: "Email",
    desc: "maxperformance.arras@gmail.com",
    href: "mailto:maxperformance.arras@gmail.com",
  },
  {
    icon: "📸",
    title: "Instagram",
    desc: "@maxperformance.arras",
    href: "#",
  },
  {
    icon: "📍",
    title: "Secteurs",
    desc: "Arras • Douai • Cambrai",
    href: null,
  },
];

export default function Contact() {
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
    <section id="contact" ref={ref} className="section-padding bg-cream">
      <div className="container-site">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Me Contacter</h2>
          <p className="text-warm-gray max-w-xl mx-auto">
            Prêt à commencer ? Contactez-moi dès maintenant
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contacts.map((c, i) => (
            <div key={c.title} className={`fade-up fade-up-d${i + 1}`}>
              {c.href ? (
                <a
                  href={c.href}
                  className="block bg-white rounded-2xl p-8 text-center shadow-sm border border-border hover:border-amber/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="w-14 h-14 bg-amber/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{c.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">{c.title}</h3>
                  <p className="text-warm-gray text-sm">{c.desc}</p>
                </a>
              ) : (
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-border h-full">
                  <div className="w-14 h-14 bg-amber/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{c.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">{c.title}</h3>
                  <p className="text-warm-gray text-sm">{c.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
