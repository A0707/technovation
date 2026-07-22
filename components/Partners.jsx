import Image from "next/image";
import { partners } from "@/lib/tokens";
import Reveal from "./Reveal";

export default function Partners() {
  if (!partners.length) return null;

  // La liste est dupliquée pour que la translation de -50 % boucle sans saut.
  const loop = [...partners, ...partners];

  return (
    <section className="py-14 border-y border-line bg-white">
      <Reveal>
        <h2 className="text-center text-sm font-bold text-slateink tracking-widest uppercase">
          Nos partenaires
        </h2>
      </Reveal>

      <div className="marquee-mask mt-8 overflow-hidden">
        <ul className="marquee flex items-center gap-12 w-max">
          {loop.map((p, i) => {
            const copy = i >= partners.length;
            return (
              <li
                key={`${p.file}-${i}`}
                // Seule la première moitié est annoncée : la seconde n'existe
                // que pour la boucle visuelle.
                aria-hidden={copy ? "true" : undefined}
                className="relative h-12 w-32 shrink-0"
              >
                <Image
                  src={p.file}
                  alt={copy ? "" : p.name ? `Logo ${p.name}` : ""}
                  fill
                  sizes="128px"
                  className="object-contain grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100"
                  loading="lazy"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
