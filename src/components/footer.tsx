const links = [
  { label: "Accueil", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Diplômes", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-light text-white section-padding pb-8">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-3">Max Performance</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Coach sportif à Arras, Douai et Cambrai. Séances personnalisées pour atteindre vos objectifs.
            </p>
          </div>
          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/50 hover:text-gold transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a
                  href="mailto:maxperformance.arras@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  maxperformance.arras@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/maxperformance.arras"
                  className="hover:text-gold transition-colors"
                >
                  @maxperformance.arras
                </a>
              </li>
              <li>Arras • Douai • Cambrai</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Max Performance. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
