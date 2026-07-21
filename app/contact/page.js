import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact",
  description:
    "Contactez Technovation à Casablanca : 46 Bd Zerktouni, 06 07 173 005, Contact@technovation.ma. Devis gratuit pour les entreprises.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Nous contacter"
        lead="Une question, un besoin de matériel ou un projet d'infrastructure ? Nous vous répondons rapidement."
        breadcrumb={["Contact"]}
      />
      <Contact />
    </>
  );
}
