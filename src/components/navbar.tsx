"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const isVisible = useRef(true);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // GSAP: animate nav in/out on scroll direction
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
      gsap.set(nav, { y: 0 });
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling down → hide nav
        if (isVisible.current) {
          isVisible.current = false;
          gsap.to(nav, {
            y: "-100%",
            duration: 0.35,
            ease: "power2.inOut",
          });
        }
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up → show nav
        if (!isVisible.current) {
          isVisible.current = true;
          gsap.to(nav, {
            y: "0%",
            duration: 0.35,
            ease: "power2.out",
          });
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, []);

  // GSAP animate mobile menu links entrance
  useEffect(() => {
    if (!isMenuOpen) return;

    const validLinks = linksRef.current.filter(Boolean) as HTMLAnchorElement[];

    gsap.fromTo(
      validLinks,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.15,
      }
    );
  }, [isMenuOpen]);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.replace("#", ""))
    ).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    },
    []
  );

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "bg-ivory/80 backdrop-blur-lg border-b border-border/50",
          "transition-shadow duration-300",
          scrolled && "shadow-[0_4px_20px_-6px_rgba(0,0,0,0.08)]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo - Left */}
          <Link
            href="#accueil"
            onClick={(e) => handleNavClick(e, "#accueil")}
            className="text-navy font-bold text-lg tracking-tight hover:text-terracotta transition-colors select-none"
          >
            Max Performance
          </Link>

          {/* Desktop Nav Links - Right */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "nav-link text-sm font-medium transition-colors",
                    activeSection === sectionId
                      ? "text-terracotta active"
                      : "text-text-muted hover:text-terracotta"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-navy hover:text-terracotta hover:bg-ivory-dark/50"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* MOBILE FULL-SCREEN OVERLAY */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-navy flex flex-col items-center justify-center",
          "transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Close Button - Top Right */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-ivory hover:text-ivory/80 hover:bg-white/10 size-12"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Fermer le menu"
        >
          <X className="h-8 w-8" />
        </Button>

        {/* Mobile Nav Links - Vertical */}
        <div className="flex flex-col items-center gap-10">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              ref={(el) => {
                linksRef.current[index] = el;
              }}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl text-ivory hover:text-gold transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
