"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
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
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-cream to-cream-dark">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
      </div>

      <div className="container-site relative z-10">
        <div className="max-w-3xl">
          <p className="fade-up text-amber font-semibold tracking-widest text-sm uppercase mb-4">
            Coach sportif à Arras
          </p>
          <h1 className="fade-up fade-up-d1 text-5xl sm:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.05] tracking-tight mb-6">
            Transformez votre corps,<br />
            <span className="text-amber">libérez votre potentiel</span>
          </h1>
          <p className="fade-up fade-up-d2 text-lg text-warm-gray max-w-xl mb-8 leading-relaxed">
            Coaching personnalisé à Arras, Douai et Cambrai. Que vous débutiez ou cherchiez à repousser vos limites, je construis un programme sur mesure pour vous.
          </p>
          <div className="fade-up fade-up-d3 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg shadow-amber/25 hover:shadow-xl hover:shadow-amber/30 hover:-translate-y-0.5"
            >
              Découvrir mes services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </a>
            <p className="text-sm text-warm-gray/70">Séance individuelle à partir de 20€</p>
          </div>
        </div>
      </div>
    </section>
  );
}
