"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const speedLinesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Speed lines entrance
      tl.fromTo(
        ".speed-line",
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.6, stagger: 0.06, ease: "power2.inOut" },
        0
      )
        // Badge
        .fromTo(
          ".hero-badge",
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          "-=0.3"
        )
        // Title lines — aggressive stagger
        .fromTo(
          ".hero-title-line",
          { y: 80, opacity: 0, rotationX: 15 },
          { y: 0, opacity: 1, rotationX: 0, duration: 0.7, stagger: 0.1, ease: "back.out(1.4)" },
          "-=0.2"
        )
        // Subtitle
        .fromTo(
          ".hero-sub",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.4"
        )
        // CTAs
        .fromTo(
          ".hero-cta",
          { y: 20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.6)" },
          "-=0.3"
        )
        // Decor circles
        .fromTo(
          ".hero-decor",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, stagger: 0.08, ease: "elastic.out(1, 0.5)" },
          "-=0.8"
        );

      // Parallax on speed lines
      gsap.to(".hero-bg-parallax", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-24 pb-20 md:pb-0 overflow-hidden bg-offwhite"
    >
      {/* Speed lines background */}
      <div ref={speedLinesRef} className="hero-bg-parallax absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88].map((top, i) => (
          <div
            key={i}
            className="speed-line"
            style={{
              top: `${top}%`,
              left: `${-5 + (i % 3) * 8}%`,
              width: `${60 + (i % 4) * 12}%`,
              transform: `rotate(${-5 + (i % 3) * 3}deg)`,
              opacity: 0.04 + (i % 3) * 0.03,
            }}
          />
        ))}
      </div>

      {/* Geometric decorations */}
      <div className="hero-bg-parallax absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hero-decor absolute top-[15%] -right-[10%] w-[500px] h-[500px] rounded-full border border-offwhite-border opacity-20" />
        <div className="hero-decor absolute top-[30%] right-[8%] w-[300px] h-[300px] rounded-full border border-red/15 opacity-15" />
        <div className="hero-decor absolute bottom-[20%] -left-[5%] w-72 h-72 bg-energy-glow rounded-full blur-3xl opacity-25" />
        <div className="hero-decor absolute top-[22%] left-[15%] w-3 h-3 bg-energy rounded-full" />
        <div className="hero-decor absolute bottom-[30%] right-[25%] w-2 h-2 bg-energy/60 rounded-full" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container-site relative z-10 w-full">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-4 mb-10 md:mb-12">
            <span className="w-10 h-0.5 bg-energy/60" aria-hidden="true" />
            <span className="text-red font-semibold tracking-[0.25em] text-xs uppercase">
              Coach sportif à Arras
            </span>
            <span className="w-1.5 h-1.5 bg-energy rounded-full" aria-hidden="true" />
          </div>

          {/* Title — athletic, bold, condensed */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-text leading-[0.85] tracking-tight mb-10">
            <span className="hero-title-line block">TRANSFORMEZ</span>
            <span className="hero-title-line block">VOTRE CORPS,</span>
            <span className="hero-title-line block">
              <span className="text-red">LIBÉREZ VOTRE</span>
            </span>
            <span className="hero-title-line block text-red">POTENTIEL</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-sub text-base md:text-lg text-text-soft max-w-lg mb-10 leading-relaxed font-medium font-body normal-case tracking-normal">
            Coaching personnalisé à Arras, Douai et Cambrai. Que vous débutiez
            ou cherchiez à repousser vos limites, je construis un programme sur
            mesure pour vous.
          </p>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href="#services"
              className="group inline-flex items-center gap-3 bg-red hover:bg-energy text-white px-8 py-4 text-base font-semibold font-body tracking-wide normal-case transition-all duration-300 shadow-red hover:shadow-energy hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              DÉCOUVRIR MES SERVICES
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-text-soft hover:text-energy transition-colors duration-200 text-sm font-semibold font-body normal-case tracking-wide px-2 py-2"
            >
              ME CONTACTER
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
