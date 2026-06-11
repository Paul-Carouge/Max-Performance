"use client";

import { useRef, useEffect } from "react";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 9, suffix: "+", label: "ANS D'EXPÉRIENCE", detail: "depuis 2017" },
  { number: 30, suffix: "+", label: "CLIENTS SATISFAITS", detail: "et fidèles" },
  { number: 2, suffix: "", label: "DIPLÔMES D'ÉTAT", detail: "STAPS & DEJEPS" },
  { number: 3, suffix: "", label: "SECTEURS", detail: "Arras • Douai • Cambrai" },
];

function StatItem({
  number,
  suffix,
  label,
  detail,
  delay,
}: {
  number: number;
  suffix: string;
  label: string;
  detail: string;
  delay: number;
}) {
  const numRef = useRef<HTMLSpanElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const numEl = numRef.current;
    const itemEl = itemRef.current;
    if (!numEl || !itemEl) return;

    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(
        itemEl,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: itemEl,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      // Counter
      const obj = { val: 0 };
      gsap.to(obj, {
        val: number,
        duration: 2,
        delay: delay + 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: itemEl,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate() {
          if (numEl) numEl.textContent = Math.round(obj.val) + suffix;
        },
      });
    }, itemEl);

    return () => ctx.revert();
  }, [number, suffix, delay]);

  return (
    <div ref={itemRef} className="text-center group relative">
      {/* Scoreboard-style number */}
      <p
        ref={numRef as React.RefObject<HTMLParagraphElement>}
        className="text-6xl md:text-8xl font-heading font-bold text-energy score-glow mb-2 tabular-nums"
      >
        0{suffix}
      </p>
      <p className="text-xs md:text-sm font-semibold text-text-dark tracking-[0.15em] mb-2">
        {label}
      </p>
      <p className="text-xs text-text-dark-muted font-body normal-case tracking-normal">{detail}</p>
      {/* Energy dot */}
      <div className="absolute -top-2 -right-2 w-2 h-2 bg-energy rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />
    </div>
  );
}

export default function Stats() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative bg-offblack py-24 md:py-36 overflow-hidden diagonal-clip">
      {/* Energy glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-energy-glow rounded-full blur-3xl opacity-20 pointer-events-none" />

      {/* Speed lines on dark bg */}
      {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((top, i) => (
        <div
          key={i}
          className="absolute h-px bg-energy/10"
          style={{
            top: `${top}%`,
            left: `${-3 + (i % 4) * 5}%`,
            width: `${50 + (i % 5) * 10}%`,
            transform: `rotate(${-2 + i * 0.3}deg)`,
          }}
        />
      ))}

      <div className="container-site relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>

        {/* Bottom accent bar */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <span className="w-16 h-0.5 bg-energy/20" />
          <span className="w-2 h-2 bg-energy/50 rounded-full" />
          <span className="text-xs text-text-dark-muted font-body normal-case tracking-normal">ARTOIS</span>
          <span className="w-2 h-2 bg-energy/50 rounded-full" />
          <span className="w-16 h-0.5 bg-energy/20" />
        </div>
      </div>
    </section>
  );
}
