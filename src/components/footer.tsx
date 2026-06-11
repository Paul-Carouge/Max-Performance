export default function Footer() {
  const links = [
    { label: "Accueil", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Diplômes", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-offblack text-text-dark section-padding-sm">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              Max Performance
            </h3>
            <p className="text-text-dark-muted text-sm leading-relaxed max-w-xs">
              Coaching sportif personnalisé à Arras, Douai et Cambrai. Transformez
              votre corps, libérez votre potentiel.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-red mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-text-dark-muted hover:text-red transition-colors duration-200 text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-red mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-text-dark-muted">
              <li>
                <a
                  href="mailto:maxperformance.arras@gmail.com"
                  className="hover:text-red transition-colors duration-200"
                >
                  maxperformance.arras@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/maxperformance.arras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red transition-colors duration-200"
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
          <p className="text-text-dark-muted text-xs">
            © {new Date().getFullYear()} Max Performance. Tous droits réservés.
          </p>
          <p className="text-text-dark-muted/50 text-xs">
            Site conçu avec passion à Arras
          </p>
        </div>
      </div>
    </footer>
  );
}
