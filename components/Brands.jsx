import { c, display, mono, brands } from "@/lib/tokens";

export default function Brands() {
  return (
    <div style={{ background: c.surface, borderTop: `1px solid ${c.line}`, borderBottom: `1px solid ${c.line}` }}>
      <div className="max-w-7xl mx-auto px-5 py-8">
        <p style={{ fontFamily: mono, color: c.slate }} className="text-xs text-center mb-5">MARQUES PARTENAIRES CERTIFIÉES</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {brands.map((b) => (
            <span key={b} style={{ fontFamily: display, color: c.ink }} className="font-extrabold text-lg opacity-45 hover:opacity-100 transition">{b}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
