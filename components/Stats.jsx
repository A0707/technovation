import { c, display, stats } from "@/lib/tokens";
import { Section } from "./ui";

export default function Stats() {
  return (
    <Section>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} style={{ border: `1px solid ${c.line}` }} className="rounded-2xl p-6 text-center">
            <div style={{ fontFamily: display, color: c.primary }} className="text-4xl font-extrabold">{s.k}</div>
            <div style={{ color: c.slate }} className="text-sm mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
