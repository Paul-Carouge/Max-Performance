"use client";

import { useScrollReveal } from "@/lib/use-scroll-reveal";

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-24 md:pt-28 overflow-hidden bg-gradient-to-br from-canvas via-canvas to-canvas-dark"
    >
      {/* Geometric decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-10 w-64 h-64 border border-terra/10 rounded-full" />
        <div className="absolute top-40 right-32 w-48 h-48 border border-terra/5 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-terra/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-gold/30 rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-terra/20 rounded-full" />
      </div>

      <div className="container-site relative z-10">
        <div className="max-w-3xl">
          <span className="fade-in inline-flex items-center gap-2 text-terra font-semibold tracking-widest text-xs uppercase mb-4">
            <span className="w-6 h-px bg-terra/40" aria-hidden="true" />
            Coach sportif à Arras
          </span>
          <h1 className="fade-in fade-in-d1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-navy leading-[1.05] tracking-tight mb-6">
            Transformez<br />
            votre corps,<br />
            <span className="text-terra">libérez votre potentiel</span>
          </h1>
          <p className="fade-in fade-in-d2 text-base md:text-lg text-muted max-w-lg mb-8 leading-relaxed">
            Coaching personnalisé à Arras, Douai et Cambrai. Que vous débutiez ou cherchiez à repousser vos limites, je construis un programme sur mesure pour vous.
          </p>
          <div className="fade-in fade-in-d3 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-terra hover:bg-terra-light text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg shadow-terra/20 hover:shadow-xl hover:shadow-terra/25 hover:-translate-y-0.5"
            >
              Découvrir mes services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <span className="text-sm text-muted font-medium">
              Séance individuelle à partir de 20€
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
