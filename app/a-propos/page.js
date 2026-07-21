import { MapPin, Mail, Phone } from "lucide-react";
import { contact, services } from "@/lib/tokens";
import { getCatalogueSize, getCategories } from "@/lib/woo";
import { Card } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "À propos",
  description:
    "Technovation, partenaire informatique des entreprises à Casablanca : matériel professionnel, infrastructure réseau, sécurité et maintenance.",
  alternates: { canonical: "/a-propos" },
};

export default async function AboutPage() {
  const [size, categories] = await Promise.all([getCatalogueSize(), getCategories()]);

  const facts = [
    { k: size, l: "Références en catalogue" },
    { k: categories.length, l: "Catégories produits" },
    { k: services.filter((s) => s.text).length, l: "Services documentés" },
  ].filter((f) => f.k);

  return (
    <>
      <PageHeader
        title="À propos de Technovation"
        lead="Partenaire informatique des entreprises, basé à Casablanca."
        breadcrumb={["À propos"]}
      />

      <section className="max-w-7xl mx-auto px-5 py-16 lg:py-20 grid lg:grid-cols-3 gap-10">
        <Reveal className="lg:col-span-2">
          <h2 className="text-2xl font-extrabold">Notre métier</h2>
          <div className="mt-4 space-y-4 text-slateink leading-relaxed">
            <p>
              Technovation fournit aux entreprises marocaines le matériel
              informatique et les services nécessaires à leur activité
              quotidienne : postes de travail, serveurs, impression, réseau,
              vidéosurveillance et téléphonie.
            </p>
            <p>
              Nous choisissons nos fabricants partenaires parmi les leaders du
              marché, selon des critères précis : la qualité du matériel et les
              possibilités de renouvellement, l&apos;efficacité des échanges
              techniques.
            </p>
          </div>

          {/*
            Le reste de la page « À propos » de technovation.ma est construit
            avec WPBakery, dont les shortcodes ne sont plus interprétés : le
            texte n'est pas récupérable de façon fiable. Les paragraphes
            ci-dessus proviennent de la page Vente & Installation, qui est
            lisible. Voir wordpress/CONTENU.md.
          */}
          <p className="mt-6 text-xs text-slateink/70 border-l-2 border-line pl-4">
            Texte repris des pages existantes de technovation.ma. La page
            « À propos » actuelle est encodée en shortcodes WPBakery non
            interprétés : transmettez-nous le texte définitif pour l&apos;enrichir.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="p-6">
            <h2 className="font-bold text-lg">Coordonnées</h2>
            <ul className="mt-4 space-y-3 text-sm text-slateink">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                {contact.address}
              </li>
              {contact.phones.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <Phone size={17} className="text-primary shrink-0" aria-hidden="true" />
                  <a href={`tel:+212${p.replace(/\s/g, "").slice(1)}`} className="hover:text-primary transition">{p}</a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail size={17} className="text-primary shrink-0" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary transition">{contact.email}</a>
              </li>
            </ul>
          </Card>
        </Reveal>
      </section>

      {facts.length > 0 && (
        <section className="bg-surface py-14">
          <div className="max-w-7xl mx-auto px-5 grid sm:grid-cols-3 gap-6 text-center">
            {facts.map((f) => (
              <div key={f.l}>
                <div className="text-4xl font-extrabold text-primary">{f.k}</div>
                <div className="mt-1 text-sm text-slateink">{f.l}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <ContactCta />
    </>
  );
}
