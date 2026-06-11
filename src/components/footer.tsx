export default function Footer() {
  const links = [
    { label: "ACCUEIL", href: "#" },
    { label: "SERVICES", href: "#services" },
    { label: "DIPLÔMES", href: "#certifications" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <footer className="bg-offblack text-text-dark section-padding-sm relative overflow-hidden">
      {/* Energy glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-energy-glow rounded-full blur-3xl opacity-15 pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 tracking-[0.05em]">
              MAX PERFORMANCE
            </h3>
            <p className="text-text-dark-muted text-sm leading-relaxed max-w-xs font-body normal-case tracking-normal">
              Coaching sportif personnalisé à Arras, Douai et Cambrai. Transformez votre corps, libérez votre potentiel.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.25em] text-energy mb-6">
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-text-dark-muted hover:text-energy transition-colors duration-200 text-xs font-bold tracking-[0.15em]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.25em] text-energy mb-6">
              CONTACT
            </h4>
            <ul className="space-y-3 text-sm text-text-dark-muted font-body normal-case tracking-normal">
              <li>
                <a
                  href="mailto:maxperformance.arras@gmail.com"
                  className="hover:text-energy transition-colors duration-200"
                >
                  maxperformance.arras@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/maxperformance.arras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-energy transition-colors duration-200"
                >
                  @maxperformance.arras
                </a>
              </li>
              <li>Arras • Douai • Cambrai</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-offblack-border mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-dark-muted text-xs font-body normal-case tracking-normal">
            © {new Date().getFullYear()} MAX PERFORMANCE. TOUS DROITS RÉSERVÉS.
          </p>
          <p className="text-text-dark-muted/50 text-xs font-body normal-case tracking-normal">
            SITE CONÇU AVEC PASSION À ARRAS
          </p>
        </div>
      </div>
    </footer>
  );
}
