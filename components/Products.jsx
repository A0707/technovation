import { productTabs, site } from "@/lib/tokens";
import { getFeaturedTabs } from "@/lib/woo";
import ProductTabs from "./ProductTabs";
import Reveal from "./Reveal";

/**
 * Composant serveur : les produits sont lus sur l'API WooCommerce au moment du
 * rendu, jamais saisis en dur. Prix, stocks et visuels ne peuvent donc pas
 * diverger de la boutique.
 */
export default async function Products() {
  const tabs = await getFeaturedTabs(productTabs, 6);

  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold uppercase">Nos produits phares</h2>
          <p className="text-center text-slateink mt-2 mb-8">
            Matériel professionnel disponible en boutique
          </p>
        </Reveal>

        <ProductTabs tabs={tabs} shopUrl={`${site.url}/shop/`} />
      </div>
    </section>
  );
}
