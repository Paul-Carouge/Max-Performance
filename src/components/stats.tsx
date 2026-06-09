"use client";

import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { useGsapStagger } from "@/lib/motion";

const stats = [
  { number: "9+", label: "ans d'expérience" },
  { number: "30+", label: "clients satisfaits" },
  { number: "2", label: "diplômes d'État" },
  { number: "3", label: "secteurs (Arras, Douai, Cambrai)" },
];

export default function Stats() {
  const gridRef = useRef<HTMLDivElement>(null);
  useGsapStagger(gridRef, { stagger: 0.15 });

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <Card key={index} className="text-center p-6">
            <p className="text-4xl font-bold text-primary">{stat.number}</p>
            <p className="text-text-muted text-sm mt-1">{stat.label}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
