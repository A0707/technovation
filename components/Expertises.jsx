import { ArrowRight } from "lucide-react";
import { services } from "@/lib/tokens";
import { icon } from "./icons";
import Reveal from "./Reveal";

export default function Expertises() {
  return (
    <section id="expertises" className="max-w-7xl mx-auto px-5 py-16 lg:py-20">
      <Reveal>
        <h2 className="text-center text-3xl font-extrabold uppercase">Nos expertises</h2>
        <p className="text-center text-slateink mt-2">
          Des solutions complètes pour accompagner votre croissance
        </p>
      </Reveal>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
        {services.map((s, i) => {
          const I = icon(s.icon);
          return (
            <Reveal key={s.href} delay={i * 0.06}>
              <a
                href={s.href}
                className="lift group h-full flex flex-col text-center bg-white border border-line rounded-card p-6 hover:border-primary-soft"
              >
                <span className="mx-auto text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
                  <I size={38} strokeWidth={1.4} aria-hidden="true" />
                </span>
                <span className="mt-4 font-bold text-[0.95rem] leading-snug">{s.title}</span>
                <span className="mt-2.5 text-[0.8rem] text-slateink leading-relaxed flex-1">{s.text}</span>
                <span className="mt-4 inline-flex items-center justify-center gap-1 text-primary font-bold text-[0.8rem]">
                  En savoir plus
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
