"use client";

import { useRef } from "react";
import { useGsapScroll } from '@/lib/motion';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  useGsapScroll(contentRef, { y: 40, duration: 1.0 });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-700">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/coaching.jpg')" }}
        aria-hidden="true"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" aria-hidden="true" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-4xl px-4 text-center"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white font-semibold">
          Coach Sportif à Arras
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/80">
          Séances personnalisées pour atteindre vos objectifs fitness
        </p>
        <div className="mt-8">
          <a
            href="#services"
            className="inline-block bg-primary hover:bg-primary-dark text-white rounded-xl px-8 py-4 text-lg font-semibold transition-colors duration-200"
          >
            Découvrir mes services
          </a>
        </div>
        <p className="mt-4 text-sm sm:text-base text-white/70">
          Séance individuelle à partir de 20€
        </p>
      </div>
    </section>
  );
}
