"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver that adds `.visible` to
 * `.fade-in` children when the section enters the viewport.
 */
export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".fade-in").forEach((c) => c.classList.add("visible"));
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
