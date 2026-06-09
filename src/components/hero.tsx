"use client";

import { useRef, useEffect } from "react";
import { useGsapScroll } from "@/lib/motion";
import gsap from "gsap";

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null);
  useGsapScroll(leftRef, { y: 40, duration: 1.0 });

  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);
  const monogramRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const b1 = blobRef1.current;
    const b2 = blobRef2.current;
    const mono = monogramRef.current;
    const arrow = arrowRef.current;
    if (!b1 || !b2 || !mono || !arrow) return;

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    tl.fromTo(
      b1,
      { scale: 0.6, opacity: 0 },
      { scale: 1, opacity: 0.2, duration: 1.4, ease: "power3.out" },
    )
      .fromTo(
        b2,
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 0.2, duration: 1.2, ease: "power3.out" },
        "-=0.8",
      )
      .fromTo(
        mono,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.0, ease: "power3.out" },
        "-=0.5",
      )
      .fromTo(
        arrow,
        { opacity: 0, rotation: -15 },
        { opacity: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.3",
      );

    // Continuous floating motion for blobs
    gsap.to(b1, {
      x: 20,
      y: -20,
      rotation: 5,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(b2, {
      x: -15,
      y: 15,
      rotation: -3,
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Subtle monogram pulse
    gsap.to(mono, {
      scale: 1.05,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="accueil" className="relative flex flex-col lg:flex-row min-h-screen overflow-hidden bg-ivory">
      {/* LEFT half — content */}
      <div
        ref={leftRef}
        className="relative z-10 flex flex-col justify-center order-2 lg:order-1 w-full lg:w-1/2 px-6 sm:px-12 lg:px-16 py-16 lg:py-0"
      >
        <div className="gold-line mb-6" />
        <span className="text-terracotta text-sm font-semibold tracking-widest uppercase">
          COACH SPORTIF
        </span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-navy mt-4 leading-tight">
          À Arras
        </h1>
        <p className="text-text-muted text-lg mt-4 max-w-md">
          Séances personnalisées pour atteindre vos objectifs fitness, coaching
          individuel et collectif adapté à votre rythme.
        </p>
        <div className="mt-8">
          <a
            href="#services"
            className="inline-block bg-terracotta hover:bg-terracotta-dark text-white rounded-xl px-8 py-4 text-lg font-semibold transition-colors duration-200"
          >
            Découvrir mes services
          </a>
        </div>
        <p className="text-text-muted text-xs sm:text-sm mt-3">
          Séance individuelle à partir de 20€
        </p>
      </div>

      {/* RIGHT half — decorative */}
      <div className="relative order-1 lg:order-2 w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen overflow-hidden">
        {/* Large "MP" monogram — subtle background */}
        <div
          ref={monogramRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span className="text-[200px] lg:text-[300px] font-bold text-terracotta/5 leading-none">
            MP
          </span>
        </div>

        {/* Large blob — terracotta */}
        <div
          ref={blobRef1}
          className="blob absolute w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] top-1/2 -translate-y-1/2 -right-40 bg-terracotta opacity-20"
        />

        {/* Second blob — gold */}
        <div
          ref={blobRef2}
          className="blob absolute w-[300px] h-[300px] bottom-20 -left-20 lg:left-10 bg-gold opacity-20"
        />

        {/* Arrow / curve SVG decoration */}
        <svg
          ref={arrowRef}
          className="absolute bottom-10 right-10 lg:right-16 w-16 h-16 text-terracotta/10"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 56 L56 8 M56 8 L24 8 M56 8 L56 40"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
