import { c, display, mono } from "@/lib/tokens";

export function Section({ children }) {
  return <section className="max-w-7xl mx-auto px-5 py-14 md:py-16">{children}</section>;
}

export function Head({ eyebrow, title, sub, inline }) {
  return (
    <div className={inline ? "" : "mb-8 max-w-xl"}>
      <span style={{ fontFamily: mono, color: c.primary }} className="text-xs">{eyebrow}</span>
      <h2 style={{ fontFamily: display }} className="text-3xl font-extrabold mt-2 tracking-tight">{title}</h2>
      {sub && <p style={{ color: c.slate }} className="mt-2">{sub}</p>}
    </div>
  );
}
