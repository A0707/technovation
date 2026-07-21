import { MapPin, Mail, Phone, Building2 } from "lucide-react";
import { contact, company, values } from "@/lib/tokens";
import { icon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "À propos",
  description:
    "Technovation, votre partenaire IT à Casablanca depuis 2019 : matériel informatique, infrastructure réseau, cybersécurité, vidéosurveillance et maintenance.",
  alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="À propos de Technovation"
        lead={`Votre partenaire IT de confiance à ${company.city} depuis ${company.founded}`}
        breadcrumb={["À propos"]}
      />

      <section className="max-w-7xl mx-auto px-5 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <h2 className="text-2xl lg:text-3xl font-extrabold">Qui sommes-nous ?</h2>
          <div className="mt-6 space-y-4 text-slateink leading-relaxed">
            <p>{company.intro}</p>
            <p>{company.mission}</p>
            <p>{company.coverage}</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-surface rounded-card p-5 text-center">
              <div className="text-2xl font-extrabold text-primary">{company.founded}</div>
              <div className="text-sm text-slateink mt-1">Année de création</div>
            </div>
            <div className="bg-surface rounded-card p-5 text-center">
              <div className="text-2xl font-extrabold text-primary">{company.city}</div>
              <div className="text-sm text-slateink mt-1">Siège social</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="p-7">
            <h2 className="font-bold text-lg">Coordonnées</h2>
            <ul className="mt-5 space-y-4 text-sm text-slateink">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                {contact.address}
              </li>
              {contact.phones.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <Phone size={18} className="text-primary shrink-0" aria-hidden="true" />
                  <a href={`tel:+212${p.replace(/\s/g, "").slice(1)}`} className="hover:text-primary transition">{p}</a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary transition">{contact.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Building2 size={18} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span className="whitespace-pre-line">{contact.hoursFull}</span>
              </li>
            </ul>
          </Card>
        </Reveal>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <Reveal>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-center">Nos valeurs</h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const I = icon(v.icon);
              return (
                <Reveal key={v.title} delay={i * 0.06}>
                  <Card hover className="h-full p-7 text-center">
                    <span className="w-14 h-14 mx-auto rounded-full grid place-items-center bg-primary-soft text-primary">
                      <I size={26} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-bold text-lg">{v.title}</h3>
                    <p className="mt-2 text-sm text-slateink leading-relaxed">{v.text}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
