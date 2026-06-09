"use client";

import { useEffect, useRef } from "react";

const stats = [
  { number: "9+", label: "ans d'expérience" },
  { number: "30+", label: "clients satisfaits" },
  { number: "2", label: "diplômes d'État" },
  { number: "3", label: "secteurs" },
];

export default function Stats() {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-white border-y border-border">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`fade-up fade-up-d${i + 1} text-center`}
            >
              <p className="text-4xl md:text-5xl font-bold text-amber mb-1">{stat.number}</p>
              <p className="text-sm text-warm-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
