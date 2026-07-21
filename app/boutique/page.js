import { ExternalLink } from "lucide-react";
import { site } from "@/lib/tokens";
import { getCategories, getCatalogueSize } from "@/lib/woo";
import { icon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import Products from "@/components/Products";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Boutique",
  description:
    "Ordinateurs, écrans, imprimantes, serveurs, onduleurs et accessoires professionnels. Catalogue Technovation, livraison au Maroc.",
  alternates: { canonical: "/boutique" },
};

export default async function ShopPage() {
  const [categories, size] = await Promise.all([getCategories(), getCatalogueSize()]);

  return (
    <>
      <PageHeader
        title="Boutique"
        lead={
          size
            ? `${size} références professionnelles réparties en ${categories.length} catégories.`
            : "Matériel informatique professionnel pour les entreprises."
        }
        breadcrumb={["Boutique"]}
      />

      <section className="max-w-7xl mx-auto px-5 py-16">
        <Reveal>
          <h2 className="text-2xl lg:text-3xl font-extrabold">Toutes les catégories</h2>
          <p className="text-slateink mt-2">
            Les compteurs proviennent directement du catalogue WooCommerce.
          </p>
        </Reveal>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={Math.min(i * 0.03, 0.3)}>
              <Card hover className="h-full p-5">
                <a href={`${site.url}/product-category/${cat.slug}/`} className="block">
                  <h3 className="font-bold text-sm leading-snug">{cat.name}</h3>
                  <p className="mt-2 text-xs text-primary font-semibold">
                    {cat.count} produit{cat.count > 1 ? "s" : ""}
                  </p>
                </a>
              </Card>
            </Reveal>
          ))}
        </div>

        {categories.length === 0 && (
          <p className="text-slateink">
            Le catalogue est momentanément indisponible.{" "}
            <a href={`${site.url}/shop/`} className="text-primary font-semibold underline">
              Voir la boutique
            </a>
          </p>
        )}
      </section>

      <Products />

      <section className="max-w-7xl mx-auto px-5 pb-16 text-center">
        {/* Le tunnel de commande reste sur WordPress/WooCommerce : panier,
            paiement et comptes clients y sont déjà en place. */}
        <Button asChild variant="outline" size="lg">
          <a href={`${site.url}/shop/`} target="_blank" rel="noopener noreferrer">
            Commander sur la boutique <ExternalLink size={17} aria-hidden="true" />
          </a>
        </Button>
      </section>

      <ContactCta />
    </>
  );
}
