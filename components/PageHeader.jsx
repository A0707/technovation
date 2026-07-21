import { ChevronRight } from "lucide-react";

/**
 * Bandeau de titre des pages intérieures.
 * Reprend le dégradé bleu nuit du hero pour unifier les 7 pages.
 */
export default function PageHeader({ title, lead, breadcrumb = [] }) {
  return (
    <section className="relative bg-gradient-ink text-white overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 py-14 lg:py-20">
        {breadcrumb.length > 0 && (
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs text-[#A9C0DA] mb-4">
            <a href="/" className="hover:text-white transition">Accueil</a>
            {breadcrumb.map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <ChevronRight size={13} aria-hidden="true" />
                <span className="text-white">{b}</span>
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight">{title}</h1>
        {lead && <p className="mt-4 text-[#C3D2E4] text-lg max-w-2xl">{lead}</p>}
      </div>
    </section>
  );
}
