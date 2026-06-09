export default function Footer() {
  return (
    <footer className="bg-[#1A2E2E] text-[#F4F5F7]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 — Brand */}
          <div>
            <h3 className="text-xl font-bold">Max Performance</h3>
            <p className="text-[#8A9BB0] text-sm mt-2">
              Coach sportif à Arras, Douai et Cambrai
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#F4F5F7] hover:text-primary-light transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#F4F5F7] hover:text-primary-light transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-[#F4F5F7] hover:text-primary-light transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#F4F5F7] hover:text-primary-light transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Social */}
          <div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#F4F5F7] hover:text-primary-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:maxperformance.arras@gmail.com"
                  className="text-[#F4F5F7] hover:text-primary-light transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/10 mt-12 pt-6">
          <p className="text-[#8A9BB0] text-sm text-center">
            &copy; 2026 Max Performance. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
