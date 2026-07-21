import { Laptop, Monitor, Server, Network, Cctv, Printer, HardDrive, ChevronRight } from "lucide-react";
import { c, display, mono, categories } from "@/lib/tokens";
import { Section, Head } from "./ui";

const ICONS = { Laptop, Monitor, Server, Network, Cctv, Printer, HardDrive };

export default function Categories() {
  return (
    <Section>
      <Head eyebrow="CATALOGUE" title="Explorer par catégorie" sub="Matériel professionnel de marques certifiées, en stock à Casablanca." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, i) => {
          const I = ICONS[cat.icon];
          return (
            <a key={i} href="#" style={{ border: `1px solid ${c.line}`, background: c.bg }} className="lift rounded-2xl p-5 block">
              <div style={{ background: c.primarySoft, color: c.primary }} className="w-11 h-11 rounded-xl grid place-items-center">{I && <I size={22} />}</div>
              <div style={{ fontFamily: display }} className="mt-4 font-bold">{cat.name}</div>
              <div style={{ color: c.slate }} className="text-sm mt-1">{cat.d}</div>
              <div style={{ color: c.primary, fontFamily: mono }} className="text-xs mt-3 flex items-center gap-1">{cat.count} produits <ChevronRight size={13} /></div>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
