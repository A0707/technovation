import { ArrowRight } from "lucide-react";
import { featuredServices } from "@/lib/tokens";
import { icon } from "./icons";
import { Card } from "./ui/card";
import Reveal from "./Reveal";

/**
 * Grille des 6 expertises de la maquette.
 *
 * Une rubrique sans page ni texte sur technovation.ma (`text: null`) est rendue
 * comme un emplacement à compléter : la structure du thème est respectée, sans
 * qu'aucune description de service soit inventée.
 */
export default function Expertises() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16 lg:py-24">
      <Reveal>
        <h2 className="text-center text-3xl lg:text-4xl font-extrabold">Nos expertises</h2>
        <p className="text-center text-slateink mt-3 max-w-2xl mx-auto">
          Des solutions complètes pour accompagner la croissance de votre entreprise
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredServices.map((s, i) => {
          const I = icon(s.icon);
          const ready = Boolean(s.text);
          const Wrapper = s.href ? "a" : "div";

          return (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Card
                hover={ready}
                className={`group h-full p-7 ${ready ? "" : "border-dashed border-2 bg-white/50"}`}
              >
                <Wrapper {...(s.href ? { href: s.href } : {})} className="flex flex-col h-full">
                  <span
                    className={`w-14 h-14 rounded-2xl grid place-items-center ${
                      ready ? "bg-primary-soft text-primary" : "bg-surface text-line"
                    }`}
                  >
                    <I size={26} aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 font-bold text-lg">{s.title}</h3>

                  {ready ? (
                    <>
                      <p className="mt-3 text-sm text-slateink leading-relaxed flex-1">{s.text}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-primary font-bold text-sm">
                        En savoir plus
                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </>
                  ) : (
                    <p className="mt-3 text-sm text-slateink/70 leading-relaxed flex-1">
                      Emplacement réservé — cette prestation n&apos;a pas encore de page
                      sur technovation.ma. Fournissez-nous le descriptif et elle
                      s&apos;affichera comme les autres.
                    </p>
                  )}
                </Wrapper>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
