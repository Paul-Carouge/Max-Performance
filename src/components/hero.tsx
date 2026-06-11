"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badge",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          ".hero-title-line",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.15 },
          "-=0.3"
        )
        .fromTo(
          ".hero-sub",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".hero-decor",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
          "-=0.8"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-24 pb-20 md:pb-0 overflow-hidden bg-offwhite"
    >
      {/* Geometric decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hero-decor absolute top-1/4 right-[-5%] w-[600px] h-[600px] rounded-full border border-offwhite-border opacity-30" />
        <div className="hero-decor absolute top-1/3 right-[5%] w-[400px] h-[400px] rounded-full border border-red-subtle opacity-20" />
        <div className="hero-decor absolute bottom-1/4 left-[-3%] w-64 h-64 bg-red-subtle rounded-full blur-2xl" />
        <div className="hero-decor absolute top-1/3 left-1/4 w-2 h-2 bg-red/30 rounded-full" />
        <div className="hero-decor absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-red/20 rounded-full" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-site relative z-10 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-3 mb-8 md:mb-10">
            <span className="w-8 h-px bg-red/40" aria-hidden="true" />
            <span className="text-red font-semibold tracking-[0.2em] text-xs uppercase">
              Coach sportif à Arras
            </span>
          </div>

          {/* Title — split into lines for staggered animation */}
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black text-text leading-[0.95] tracking-tight mb-8 md:mb-10"
          >
            <span className="hero-title-line block">Transformez</span>
            <span className="hero-title-line block">votre corps,</span>
            <span className="hero-title-line block text-red">
              libérez votre
            </span>
            <span className="hero-title-line block text-red">potentiel</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subRef}
            className="hero-sub text-base md:text-lg text-text-soft max-w-lg mb-10 leading-relaxed font-medium"
          >
            Coaching personnalisé à Arras, Douai et Cambrai. Que vous débutiez
            ou cherchiez à repousser vos limites, je construis un programme sur
            mesure pour vous.
          </p>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href="#services"
              className="group inline-flex items-center gap-3 bg-red hover:bg-red-light text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-red hover:shadow-xl hover:-translate-y-0.5"
            >
              Découvrir mes services
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-text-soft hover:text-red transition-colors duration-200 text-sm font-semibold px-2 py-2"
            >
              Me contacter
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
