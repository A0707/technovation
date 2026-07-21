import { ChevronRight, ArrowRight } from "lucide-react";
import { c, display, mono, categories, allCategories } from "@/lib/tokens";
import { icon } from "./icons";
import { Section, Head } from "./ui";

export default function Categories() {
  return (
    <Section>
      <Head eyebrow="CATALOGUE" title="Explorer par catégorie" sub="Matériel professionnel de marques certifiées, en stock à Casablanca." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => {
          const I = icon(cat.icon);
          return (
            <a
              key={cat.slug}
              href={`/categorie/${cat.slug}`}
              style={{ border: `1px solid ${c.line}`, background: c.bg }}
              className="lift rounded-2xl p-5 block"
            >
              <div style={{ background: c.primarySoft, color: c.primary }} className="w-11 h-11 rounded-xl grid place-items-center"><I size={22} /></div>
              <div style={{ fontFamily: display }} className="mt-4 font-bold">{cat.name}</div>
              <div style={{ color: c.slate }} className="text-sm mt-1">{cat.d}</div>
              <div style={{ color: c.primary, fontFamily: mono }} className="text-xs mt-3 flex items-center gap-1">
                {cat.count} produits <ChevronRight size={13} />
              </div>
            </a>
          );
        })}
      </div>
      <div className="mt-6 text-center">
        <a href="/categorie" style={{ color: c.primary, fontFamily: display }} className="inline-flex items-center gap-1.5 font-bold text-sm">
          Voir les {allCategories.length} catégories <ArrowRight size={16} />
        </a>
      </div>
    </Section>
  );
}
