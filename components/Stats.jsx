import { stats } from "@/lib/tokens";
import Counter from "./Counter";

/**
 * Bandeau chiffres.
 *
 * Les valeurs viennent de lib/tokens.js — elles sont affirmées par
 * Technovation, pas dérivées du catalogue. Les modifier là-bas les met à jour
 * ici et partout ailleurs.
 */
export default function Stats() {
  if (!stats.length) return null;

  return (
    <section className="bg-gradient-ink text-white py-14">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl lg:text-4xl font-extrabold text-brand-cyan mb-1">
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="text-sm text-slate-300">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
