import Image from "next/image";
import { Package, Plus, ArrowRight } from "lucide-react";
import { c, display, mono, products, fmt } from "@/lib/tokens";
import { Section, Head } from "./ui";

export default function Products() {
  return (
    <Section>
      <div className="flex items-end justify-between mb-8">
        <Head eyebrow="POPULAIRES" title="Produits les plus demandés" sub="" inline />
        <a href="/categorie" style={{ color: c.primary, fontFamily: display }} className="hidden sm:flex items-center gap-1 font-bold text-sm">Tout voir <ArrowRight size={16} /></a>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p) => (
          <a
            key={p.slug}
            href={`/produit/${p.slug}`}
            style={{ border: `1px solid ${c.line}`, background: c.bg }}
            className="lift rounded-2xl overflow-hidden flex flex-col"
          >
            <div style={{ background: c.surface }} className="relative aspect-[4/3] grid place-items-center">
              {p.img ? (
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-4"
                />
              ) : (
                <Package size={54} style={{ color: c.line }} strokeWidth={1.2} aria-hidden="true" />
              )}
              {p.badge && (
                <span style={{ background: p.badge === "Promo" ? c.danger : c.ink, color: "#fff", fontFamily: mono }} className="absolute top-3 left-3 text-[11px] px-2 py-1 rounded-md font-semibold">{p.badge}</span>
              )}
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div style={{ color: c.slate, fontFamily: mono }} className="text-[11px] uppercase">{p.cat}</div>
              <div style={{ fontFamily: display }} className="font-bold text-sm mt-1 leading-snug flex-1 line-clamp-3">{p.name}</div>
              <div className="flex items-center gap-1 mt-2">
                {p.sku && <span style={{ fontFamily: mono, color: c.slate }} className="text-[11px]">réf. {p.sku}</span>}
                <span style={{ color: p.stock ? c.success : c.slate }} className="text-xs ml-auto flex items-center gap-1">
                  <span style={{ background: p.stock ? c.success : c.slate }} className="w-1.5 h-1.5 rounded-full inline-block" />
                  {p.stock ? "En stock" : "Sur commande"}
                </span>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  {p.old && <div style={{ color: c.slate }} className="text-xs line-through">{fmt(p.old)}</div>}
                  <div style={{ fontFamily: display, color: c.ink }} className="text-lg font-extrabold">{fmt(p.price)}</div>
                </div>
                <span style={{ background: c.primary, color: "#fff" }} className="w-10 h-10 rounded-xl grid place-items-center lift shrink-0" aria-hidden="true"><Plus size={18} /></span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
