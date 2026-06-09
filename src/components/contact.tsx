"use client";

import { useRef } from "react";
import { useGsapStagger } from "@/lib/motion";

const contacts = [
  {
    icon: "📧",
    title: "Email",
    description: "maxperformance.arras@gmail.com",
    href: "mailto:maxperformance.arras@gmail.com",
  },
  {
    icon: "📸",
    title: "Instagram",
    description: "@maxperformance.arras",
    href: "#",
  },
  {
    icon: "📍",
    title: "Secteurs",
    description: "Arras • Douai • Cambrai",
    href: undefined,
  },
];

export default function Contact() {
  const gridRef = useRef<HTMLDivElement>(null);
  useGsapStagger(gridRef);

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Me Contacter</h2>
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
      >
        {contacts.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl p-6 shadow-xl text-center card-hover"
          >
            <div className="rounded-full bg-primary/10 p-4 w-fit mx-auto mb-4">
              <span className="text-3xl">{item.icon}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            {item.href ? (
              <a
                href={item.href}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {item.description}
              </a>
            ) : (
              <p className="text-text-muted">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
