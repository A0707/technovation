import { brands } from "@/lib/tokens";
import Reveal from "./Reveal";

export default function Partners() {
  // La liste est dupliquée pour que la translation de -50 % boucle sans saut.
  const loop = [...brands, ...brands];

  return (
    <section className="py-14 border-y border-line bg-white">
      <Reveal>
        <h2 className="text-center text-3xl font-extrabold uppercase">Nos partenaires</h2>
      </Reveal>

      <div className="marquee-mask mt-8 overflow-hidden">
        <ul className="marquee flex items-center gap-14 w-max">
          {loop.map((brand, i) => (
            <li
              key={`${brand}-${i}`}
              /* Seule la première moitié est annoncée : la copie ne sert qu'à
                 la boucle visuelle. */
              aria-hidden={i >= brands.length ? "true" : undefined}
              className="text-2xl font-extrabold tracking-tight text-slateink/50 hover:text-ink transition-colors whitespace-nowrap"
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
