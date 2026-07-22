import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/lib/tokens";
import { icon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Nos services",
  description:
    "Déploiement d'infrastructure réseau, protection, vidéosurveillance, téléphonie IP, vente-installation et maintenance informatique pour les entreprises au Maroc.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const detailed = services.filter((s) => s.image);
  const compact = services.filter((s) => !s.image);

  return (
    <>
      <PageHeader
        title="Nos services"
        lead="Technovation accompagne les entreprises sur l'ensemble de leur infrastructure informatique, de l'étude au maintien en condition opérationnelle."
        breadcrumb={["Services"]}
      />

      {/* Présentation en alternance texte / visuel. */}
      <section className="max-w-7xl mx-auto px-5 py-16 lg:py-20 space-y-16 lg:space-y-20">
        {detailed.map((s, i) => {
          const I = icon(s.icon);
          const reversed = i % 2 === 1;

          return (
            <Reveal key={s.slug}>
              <article className="grid lg:grid-cols-2 gap-10 items-center">
                <div className={reversed ? "lg:order-2" : ""}>
                  <span className="w-14 h-14 rounded-xl grid place-items-center bg-primary-soft text-primary">
                    <I size={26} aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-2xl font-extrabold">{s.title}</h2>
                  <p className="mt-4 text-slateink leading-relaxed">{s.text}</p>

                  {s.points.length > 0 && (
                    <ul className="mt-5 space-y-2.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-slateink">
                          <Check size={16} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href={s.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:gap-2.5 transition-all"
                  >
                    En savoir plus <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>

                <div className={`relative aspect-[4/3] rounded-card overflow-hidden bg-surface ${reversed ? "lg:order-1" : ""}`}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>

      {/* Prestations sans visuel dédié sur technovation.ma. */}
      {compact.length > 0 && (
        <section className="bg-surface py-16">
          <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-6">
            {compact.map((s, i) => {
              const I = icon(s.icon);
              return (
                <Reveal key={s.slug} delay={i * 0.06}>
                  <Card hover className="h-full p-7">
                    <div className="flex gap-5">
                      <span className="w-12 h-12 shrink-0 rounded-xl grid place-items-center bg-primary-soft text-primary">
                        <I size={22} aria-hidden="true" />
                      </span>
                      <div>
                        <h2 className="font-bold text-lg">{s.title}</h2>
                        <p className="mt-2 text-sm text-slateink leading-relaxed">{s.text}</p>
                        <Link href={s.href} className="mt-4 inline-flex items-center gap-1.5 text-primary font-bold text-sm">
                          En savoir plus <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      <ContactCta />
    </>
  );
}
