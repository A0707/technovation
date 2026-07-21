import { MapPin, Phone, Mail } from "lucide-react";
import { c, display, mono } from "@/lib/tokens";

export default function Footer() {
  const cols = [
    ["Services", ["Maintenance", "Déploiement réseau", "Vidéosurveillance", "Téléphonie IP", "Protection"]],
    ["Catalogue", ["Ordinateurs", "Serveurs", "Réseau", "Impression", "Écrans"]],
    ["Entreprise", ["À propos", "Livraison", "CGV", "Mentions légales", "Contact"]],
  ];
  return (
    <footer style={{ background: c.ink, color: "#AFC0D2" }}>
      <div className="max-w-7xl mx-auto px-5 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div style={{ background: c.primary, color: "#fff", fontFamily: display }} className="w-8 h-8 rounded-lg grid place-items-center font-extrabold">T</div>
            <span style={{ fontFamily: display, color: "#fff" }} className="font-extrabold">TECHNOVATION</span>
          </div>
          <p className="text-sm flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> 46 Bd Zerktouni, 2e étage, Appt N°6, Casablanca, Maroc</p>
          <p className="text-sm mt-3 flex items-center gap-2"><Phone size={16} /> 06 07 173 005 · 07 66 605 690</p>
          <p className="text-sm mt-2 flex items-center gap-2"><Mail size={16} /> Contact@technovation.ma</p>
        </div>
        {cols.map(([h, items], i) => (
          <div key={i}>
            <div style={{ fontFamily: display, color: "#fff" }} className="font-bold text-sm mb-4">{h}</div>
            <ul className="space-y-2.5 text-sm">
              {items.map((it) => <li key={it}><a href="#" className="hover:text-white transition">{it}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.1)", fontFamily: mono }} className="text-xs">
        <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2026 Technovation. Tous droits réservés.</span>
          <span className="flex gap-4"><a href="#" className="hover:text-white">Facebook</a><a href="#" className="hover:text-white">Instagram</a><a href="#" className="hover:text-white">LinkedIn</a></span>
        </div>
      </div>
    </footer>
  );
}
