import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-offwhite flex items-center justify-center px-5">
      <div className="text-center max-w-lg">
        {/* Large 404 */}
        <p className="text-[10rem] md:text-[14rem] font-heading font-bold text-energy/15 leading-none select-none">
          404
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-text mb-4 -mt-8 tracking-tight">
          PAGE INTROUVABLE
        </h1>

        {/* Description */}
        <p className="text-text-muted mb-10 font-body normal-case tracking-normal leading-relaxed">
          La page que vous cherchez n'existe pas ou a été déplacée. Revenez à l'accueil pour découvrir mes services de coaching.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-red hover:bg-energy text-white px-8 py-4 text-sm font-bold tracking-[0.15em] transition-all duration-300 shadow-red hover:shadow-energy hover:-translate-y-0.5 font-heading"
        >
          RETOUR À L'ACCUEIL
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Subtle hint */}
        <p className="mt-12 text-xs text-text-muted/50 font-body normal-case tracking-normal">
          MAX PERFORMANCE — Coach sportif à Etaing
        </p>
      </div>
    </main>
  );
}
