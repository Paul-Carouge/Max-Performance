export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream section-padding pb-8">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-3">Max Performance</h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              Coach sportif à Arras, Douai et Cambrai. Séances personnalisées pour atteindre vos objectifs.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-amber mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "#" },
                { label: "Services", href: "#services" },
                { label: "Diplômes", href: "#certifications" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-cream/60 hover:text-amber transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-amber mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-cream/60">
              <li>
                <a href="mailto:maxperformance.arras@gmail.com" className="hover:text-amber transition-colors">
                  maxperformance.arras@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber transition-colors">
                  @maxperformance.arras
                </a>
              </li>
              <li>Arras • Douai • Cambrai</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-cream/40 text-xs">© 2026 Max Performance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
