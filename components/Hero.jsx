import { ArrowRight, Activity, Truck, Headset, BadgeCheck, ShieldCheck } from "lucide-react";
import { c, display, mono } from "@/lib/tokens";

export default function Hero() {
  return (
    <section style={{ background: `linear-gradient(150deg, ${c.ink} 0%, ${c.ink2} 55%, #0B2530 100%)`, color: "#fff" }} className="relative overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-70" />
      <div className="max-w-7xl mx-auto px-5 py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="reveal">
          <span style={{ fontFamily: mono, background: "rgba(18,181,203,.12)", color: c.primaryBright, border: "1px solid rgba(18,181,203,.3)" }} className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full">
            <Activity size={13} /> Partenaire IT certifié depuis 2013
          </span>
          <h1 style={{ fontFamily: display }} className="mt-5 text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight">
            Votre partenaire informatique pour les entreprises
          </h1>
          <p style={{ color: "#AFC0D2", fontFamily: mono }} className="mt-4 text-sm md:text-base">
            Infrastructure • Réseau • Sécurité • Cloud • Matériel
          </p>
          <p style={{ color: "#C7D2DF" }} className="mt-3 max-w-lg">
            Du poste de travail au datacenter : nous équipons, sécurisons et supervisons votre infrastructure avec des marques certifiées et un support de proximité à Casablanca.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#" style={{ background: c.primaryBright, color: c.ink, fontFamily: display }} className="flex items-center gap-2 h-12 px-6 rounded-xl font-bold lift">
              Découvrir nos produits <ArrowRight size={18} />
            </a>
            <a href="#" style={{ border: "1px solid rgba(255,255,255,.25)", color: "#fff", fontFamily: display }} className="flex items-center gap-2 h-12 px-6 rounded-xl font-bold hover:bg-white/5">
              Demander un devis
            </a>
          </div>
          <div style={{ color: "#9FB1C4" }} className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {[[Truck, "Livraison rapide"], [Headset, "Support technique"], [BadgeCheck, "Garantie"], [ShieldCheck, "Produits certifiés"]].map(([I, t], i) => (
              <span key={i} className="flex items-center gap-1.5"><I size={16} style={{ color: c.primaryBright }} /> {t}</span>
            ))}
          </div>
        </div>

        <div className="reveal">
          <div style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.12)", backdropFilter: "blur(4px)" }} className="rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <span style={{ fontFamily: mono, color: "#9FB1C4" }} className="text-xs">SUPERVISION — LIVE</span>
              <span style={{ fontFamily: mono, color: c.success }} className="text-xs flex items-center gap-1.5"><span style={{ background: c.success }} className="w-2 h-2 rounded-full inline-block" /> OPERATIONAL</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[["Disponibilité", "99,98%", c.primaryBright], ["Latence réseau", "8 ms", "#fff"], ["Tickets résolus", "1 240", "#fff"], ["Sites supervisés", "37", c.accent]].map(([l, v, col], i) => (
                <div key={i} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)" }} className="rounded-xl p-3">
                  <div style={{ fontFamily: mono, color: "#8FA3B8" }} className="text-[11px] uppercase">{l}</div>
                  <div style={{ fontFamily: display, color: col }} className="text-2xl font-extrabold mt-1">{v}</div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <div style={{ fontFamily: mono, color: "#8FA3B8" }} className="text-[11px] mb-2 flex justify-between"><span>THROUGHPUT</span><span>OK</span></div>
              <div style={{ background: "rgba(255,255,255,.1)" }} className="pulse-bar relative h-2 rounded-full overflow-hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
