"use client";

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold">Max Performance</h3>
            <p className="text-ivory/60 text-sm mt-3 max-w-xs">
              Coach sportif à Arras, Douai et Cambrai. Séances personnalisées pour atteindre vos objectifs.
            </p>
            <div className="gold-line mt-6" />
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "#" },
                { label: "Services", href: "#services" },
                { label: "Certifications", href: "#certifications" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-ivory/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:maxperformance.arras@gmail.com"
                  className="text-ivory/70 hover:text-gold transition-colors text-sm"
                >
                  maxperformance.arras@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-ivory/70 hover:text-gold transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @maxperformance.arras
                </a>
              </li>
              <li className="text-ivory/70 text-sm">
                Arras • Douai • Cambrai
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-ivory/40 text-xs">
            © 2026 Max Performance. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
