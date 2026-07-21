import { Briefcase } from "lucide-react";
import { projects } from "@/lib/tokens";
import { Card, PlaceholderCard } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Réalisations",
  description:
    "Projets d'infrastructure, de sécurité et de déploiement menés par Technovation pour des entreprises au Maroc.",
  alternates: { canonical: "/realisations" },
  // Page sans contenu publiable pour l'instant : on évite de l'indexer vide.
  robots: { index: false, follow: true },
};

export default function ProjectsPage() {
  const empty = projects.length === 0;

  return (
    <>
      <PageHeader
        title="Nos réalisations"
        lead="Les projets menés pour nos clients entreprises."
        breadcrumb={["Réalisations"]}
      />

      <section className="max-w-7xl mx-auto px-5 py-16 lg:py-20">
        {empty ? (
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-extrabold">Section en préparation</h2>
              <p className="mt-3 text-slateink leading-relaxed">
                Aucune réalisation n&apos;est publiée sur technovation.ma à ce jour.
                La structure est prête : il suffit de renseigner{" "}
                <code className="text-primary font-mono text-sm">projects</code> dans{" "}
                <code className="text-primary font-mono text-sm">lib/tokens.js</code>{" "}
                pour que les fiches s&apos;affichent.
              </p>
              <p className="mt-3 text-sm text-slateink/70">
                Pour chaque projet : intitulé, client (avec son accord écrit),
                secteur et description de la prestation.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 3 }, (_, i) => (
                <PlaceholderCard
                  key={i}
                  icon={Briefcase}
                  title={`Réalisation ${i + 1}`}
                  hint="Intitulé, client, secteur, description"
                />
              ))}
            </div>
          </Reveal>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <Card hover className="h-full p-6">
                  <span className="text-xs uppercase tracking-wide text-primary font-semibold">
                    {p.sector}
                  </span>
                  <h2 className="mt-2 font-bold text-lg">{p.title}</h2>
                  <p className="mt-1 text-sm text-slateink/80">{p.client}</p>
                  <p className="mt-3 text-sm text-slateink leading-relaxed">{p.summary}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <ContactCta />
    </>
  );
}
