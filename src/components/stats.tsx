"use client";

import { useRef, useEffect } from "react";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 9, suffix: "+", label: "ans d'expérience", detail: "depuis 2017" },
  { number: 30, suffix: "+", label: "clients satisfaits", detail: "et fidèles" },
  { number: 2, suffix: "", label: "diplômes d'État", detail: "STAPS & DEJEPS" },
  { number: 3, suffix: "", label: "secteurs", detail: "Arras • Douai • Cambrai" },
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

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: number,
        duration: 2.2,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate() {
          if (el) el.textContent = Math.round(obj.val) + suffix;
        },
      });
    }, el);

    return () => ctx.revert();
  }, [number, suffix, delay]);

  return (
    <div className="text-center group">
      <p
        ref={numRef as React.RefObject<HTMLParagraphElement>}
        className="text-5xl md:text-7xl font-heading font-black text-red mb-3 tabular-nums"
      >
        0{suffix}
      </p>
      <p className="text-sm md:text-base font-semibold text-text mb-1">
        {label}
      </p>
      <p className="text-xs text-text-muted">{detail}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative bg-offblack py-24 md:py-32 overflow-hidden">
      {/* Subtle red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} delay={i * 0.15} />
          ))}
        </div>

        {/* Decorative line */}
        <div className="mt-20 flex items-center justify-center gap-3">
          <span className="w-12 h-px bg-white/10" />
          <span className="w-1.5 h-1.5 bg-red/40 rounded-full" />
          <span className="w-12 h-px bg-white/10" />
        </div>
      </div>
    </section>
  );
}
