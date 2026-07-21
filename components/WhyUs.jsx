import { Lock, Activity, Headset } from "lucide-react";
import { c, display } from "@/lib/tokens";
import { Section, Head } from "./ui";

export default function WhyUs() {
  const items = [
    [Lock, "Sécurité d'abord", "Firewall Fortinet, VPN, durcissement et supervision continue de vos accès."],
    [Activity, "Haute disponibilité", "Architectures redondantes, sauvegarde et plan de reprise pour zéro interruption."],
    [Headset, "Support de proximité", "Équipe basée à Casablanca, intervention rapide et infogérance sur mesure."],
  ];
  return (
    <div style={{ background: c.surface, borderTop: `1px solid ${c.line}` }}>
      <Section>
        <Head eyebrow="POURQUOI NOUS" title="Un partenaire, pas un simple revendeur" sub="" />
        <div className="grid md:grid-cols-3 gap-4">
          {items.map(([I, t, d], i) => (
            <div key={i} style={{ background: c.bg, border: `1px solid ${c.line}` }} className="rounded-2xl p-6">
              <div style={{ background: c.primarySoft, color: c.primary }} className="w-11 h-11 rounded-xl grid place-items-center"><I size={21} /></div>
              <div style={{ fontFamily: display }} className="font-bold mt-4">{t}</div>
              <div style={{ color: c.slate }} className="text-sm mt-1">{d}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
