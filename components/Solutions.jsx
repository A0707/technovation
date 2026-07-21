import { Network, Server, Shield, Wifi, Cctv, Cloud, ArrowRight } from "lucide-react";
import { c, display, mono, solutions } from "@/lib/tokens";

const ICONS = { Network, Server, Shield, Wifi, Cctv, Cloud };

export default function Solutions() {
  return (
    <section style={{ background: c.ink, color: "#fff" }} className="relative overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-50" />
      <div className="max-w-7xl mx-auto px-5 py-16 relative">
        <span style={{ fontFamily: mono, color: c.primaryBright }} className="text-xs">POUR LES ENTREPRISES</span>
        <div className="flex flex-wrap items-end justify-between gap-4 mt-3">
          <h2 style={{ fontFamily: display }} className="text-3xl font-extrabold max-w-lg leading-tight">Des solutions gérées de bout en bout</h2>
          <a href="#" style={{ background: c.accent, color: c.ink, fontFamily: display }} className="flex items-center gap-2 h-11 px-5 rounded-xl font-bold lift">Parler à un expert <ArrowRight size={17} /></a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {solutions.map((s, i) => {
            const I = ICONS[s.icon];
            return (
              <div key={i} style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.1)" }} className="lift rounded-2xl p-5">
                <div style={{ background: "rgba(18,181,203,.14)", color: c.primaryBright }} className="w-11 h-11 rounded-xl grid place-items-center">{I && <I size={21} />}</div>
                <div style={{ fontFamily: display }} className="font-bold mt-4">{s.t}</div>
                <div style={{ color: "#AFC0D2" }} className="text-sm mt-1">{s.d}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
