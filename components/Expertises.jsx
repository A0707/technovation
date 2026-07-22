import { ArrowRight } from "lucide-react";
import { featuredServices } from "@/lib/tokens";
import { icon } from "./icons";
import { Card } from "./ui/card";
import Reveal from "./Reveal";

/**
 * Grille des services.
 *
 * Titres et descriptions viennent des pages correspondantes de
 * technovation.ma — voir lib/tokens.js.
 */
export default function Expertises() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal>
          <h2 className="text-center text-3xl lg:text-4xl font-extrabold">Nos expertises</h2>
          <p className="text-center text-slateink mt-3 max-w-2xl mx-auto">
            Des solutions complètes pour accompagner votre croissance
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((s, i) => {
            const I = icon(s.icon);
            return (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Card hover className="group h-full p-7">
                  <a href={s.href || "/services"} className="flex flex-col h-full">
                    <span className="w-14 h-14 rounded-xl grid place-items-center bg-primary-soft text-primary">
                      <I size={26} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-bold text-lg leading-snug">{s.title}</h3>
                    <p className="mt-3 text-sm text-slateink leading-relaxed flex-1">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-primary font-bold text-sm">
                      En savoir plus
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </a>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
