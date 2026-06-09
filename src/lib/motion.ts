"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapScroll(ref: React.RefObject<HTMLElement | null>, options?: {
  delay?: number;
  y?: number;
  duration?: number;
}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: options?.y ?? 24 });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: options?.duration ?? 0.8,
            delay: options?.delay ?? 0,
            ease: "power3.out",
          });
        },
        once: true,
      });
    });

    return () => ctx.revert();
  }, [ref, options?.delay, options?.y, options?.duration]);
}

export function useGsapStagger(ref: React.RefObject<HTMLElement | null>, options?: {
  stagger?: number;
  y?: number;
  duration?: number;
}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];
    gsap.set(children, { opacity: 0, y: options?.y ?? 24 });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => {
          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration: options?.duration ?? 0.6,
            stagger: options?.stagger ?? 0.12,
            ease: "power2.out",
          });
        },
        once: true,
      });
    });

    return () => ctx.revert();
  }, [ref, options?.stagger, options?.y, options?.duration]);
}
