import { MapPin, Phone, Mail } from "lucide-react";
import { c, display, mono, solutions, allCategories, legalPages, contact } from "@/lib/tokens";

export default function Footer() {
  const cols = [
    ["Nos services", solutions.map((s) => ({ t: s.t, href: s.href }))],
    ["Catalogue", allCategories.slice(0, 6).map((x) => ({ t: x.name, href: `/categorie/${x.slug}` }))],
    ["Informations", legalPages],
  ];
  return (
    <footer style={{ background: c.ink, color: "#AFC0D2" }}>
      <div className="max-w-7xl mx-auto px-5 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div style={{ background: c.primary, color: "#fff", fontFamily: display }} className="w-8 h-8 rounded-lg grid place-items-center font-extrabold">T</div>
            <span style={{ fontFamily: display, color: "#fff" }} className="font-extrabold">TECHNOVATION</span>
          </div>
          <p className="text-sm flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" /> {contact.address}</p>
          <p className="text-sm mt-3 flex items-center gap-2">
            <Phone size={16} aria-hidden="true" />
            {contact.phones.map((p, i) => (
              <span key={p}>
                {i > 0 && <span className="mx-1">·</span>}
                <a href={`tel:+212${p.replace(/\s/g, "").slice(1)}`} className="hover:text-white transition">{p}</a>
              </span>
            ))}
          </p>
          <p className="text-sm mt-2 flex items-center gap-2">
            <Mail size={16} aria-hidden="true" />
            <a href={`mailto:${contact.email}`} className="hover:text-white transition">{contact.email}</a>
          </p>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}>
            <div style={{ fontFamily: display, color: "#fff" }} className="font-bold text-sm mb-4">{h}</div>
            <ul className="space-y-2.5 text-sm">
              {items.map((it) => <li key={it.href}><a href={it.href} className="hover:text-white transition">{it.t}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.1)", fontFamily: mono }} className="text-xs">
        <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Technovation. Tous droits réservés.</span>
          <span className="flex gap-4">
            <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
