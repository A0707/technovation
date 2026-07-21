import { Laptop, Star, Plus, ArrowRight } from "lucide-react";
import { c, display, mono, products, fmt } from "@/lib/tokens";
import { Section, Head } from "./ui";

export default function Products() {
  return (
    <Section>
      <div className="flex items-end justify-between mb-8">
        <Head eyebrow="POPULAIRES" title="Produits les plus demandés" sub="" inline />
        <a href="#" style={{ color: c.primary, fontFamily: display }} className="hidden sm:flex items-center gap-1 font-bold text-sm">Tout voir <ArrowRight size={16} /></a>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p, i) => (
          <div key={i} style={{ border: `1px solid ${c.line}`, background: c.bg }} className="lift rounded-2xl overflow-hidden flex flex-col">
            <div style={{ background: c.surface }} className="relative aspect-[4/3] grid place-items-center">
              <Laptop size={54} style={{ color: c.line }} strokeWidth={1.2} />
              {p.badge && (
                <span style={{ background: p.badge === "Promo" ? c.danger : c.ink, color: "#fff", fontFamily: mono }} className="absolute top-3 left-3 text-[11px] px-2 py-1 rounded-md font-semibold">{p.badge}</span>
              )}
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div style={{ color: c.slate, fontFamily: mono }} className="text-[11px] uppercase">{p.cat}</div>
              <div style={{ fontFamily: display }} className="font-bold text-sm mt-1 leading-snug flex-1">{p.name}</div>
              <div className="flex items-center gap-1 mt-2">
                <Star size={13} fill={c.accent} style={{ color: c.accent }} />
                <span style={{ fontFamily: mono, color: c.slate }} className="text-xs">{p.rating.toFixed(1)}</span>
                <span style={{ color: c.success }} className="text-xs ml-auto flex items-center gap-1"><span style={{ background: c.success }} className="w-1.5 h-1.5 rounded-full inline-block" />En stock</span>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  {p.old && <div style={{ color: c.slate }} className="text-xs line-through">{fmt(p.old)}</div>}
                  <div style={{ fontFamily: display, color: c.ink }} className="text-lg font-extrabold">{fmt(p.price)}</div>
                </div>
                <button style={{ background: c.primary, color: "#fff" }} className="w-10 h-10 rounded-xl grid place-items-center lift" aria-label="Ajouter au panier"><Plus size={18} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
