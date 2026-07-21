import { c, display } from "@/lib/tokens";
import { Section } from "./ui";

export default function Newsletter() {
  return (
    <Section>
      <div style={{ background: `linear-gradient(135deg, ${c.primary}, ${c.ink})` }} className="rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-40" />
        <div className="relative max-w-xl">
          <h2 style={{ fontFamily: display }} className="text-3xl font-extrabold">Besoin d'un devis pour votre parc ?</h2>
          <p style={{ color: "#D6E6EC" }} className="mt-2">Réponse sous 24h ouvrées. Configurations sur mesure pour PME et grands comptes.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <input aria-label="Email professionnel" placeholder="Votre email professionnel" style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.25)", color: "#fff" }} className="h-12 px-4 rounded-xl flex-1 outline-none placeholder:text-white/60" />
            <button style={{ background: c.accent, color: c.ink, fontFamily: display }} className="h-12 px-6 rounded-xl font-bold lift">Être recontacté</button>
          </div>
        </div>
      </div>
    </Section>
  );
}
