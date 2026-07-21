import { ArrowRight } from "lucide-react";
import { services } from "@/lib/tokens";
import { icon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Nos services",
  description:
    "Infrastructure réseau, cybersécurité, vidéosurveillance, téléphonie IP, vente-installation et maintenance informatique pour les entreprises au Maroc.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Nos services"
        lead="Technovation accompagne les entreprises marocaines sur l'ensemble de leur infrastructure informatique, de l'étude au maintien en condition opérationnelle."
        breadcrumb={["Services"]}
      />

      <section className="max-w-7xl mx-auto px-5 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const I = icon(s.icon);
            const ready = Boolean(s.text);

            return (
              <Reveal key={s.slug} delay={i * 0.04}>
                <Card
                  hover={ready}
                  className={`h-full p-7 ${ready ? "" : "border-dashed border-2 bg-white/50"}`}
                >
                  <div className="flex gap-5">
                    <span
                      className={`w-14 h-14 shrink-0 rounded-2xl grid place-items-center ${
                        ready ? "bg-primary-soft text-primary" : "bg-surface text-line"
                      }`}
                    >
                      <I size={26} aria-hidden="true" />
                    </span>

                    <div className="flex-1">
                      <h2 className="font-bold text-lg">{s.title}</h2>

                      {ready ? (
                        <>
                          <p className="mt-2.5 text-sm text-slateink leading-relaxed">{s.text}</p>
                          <a
                            href={s.href}
                            className="mt-4 inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:gap-2.5 transition-all"
                          >
                            Consulter la page <ArrowRight size={15} aria-hidden="true" />
                          </a>
                        </>
                      ) : (
                        <p className="mt-2.5 text-sm text-slateink/70 leading-relaxed">
                          Emplacement réservé — aucune page ne décrit cette prestation
                          sur technovation.ma. Transmettez-nous le descriptif pour
                          l&apos;activer.
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
