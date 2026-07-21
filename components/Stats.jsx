import { services } from "@/lib/tokens";
import { getCategories, getCatalogueSize } from "@/lib/woo";
import Counter from "./Counter";

/**
 * Bandeau chiffres.
 *
 * Chaque valeur est lue sur la boutique réelle. Les indicateurs commerciaux de
 * la maquette de référence (« +500 projets », « +300 clients », « 24/7 ») ne
 * sont pas repris : Technovation ne les a pas encore justifiés, et un support
 * « 24/7 » affiché engage contractuellement. Voir wordpress/CONTENU.md.
 */
export default async function Stats() {
  const [categories, size] = await Promise.all([getCategories(), getCatalogueSize()]);

  const items = [
    { value: size, suffix: "", label: "Références en catalogue" },
    { value: categories.length, suffix: "", label: "Catégories produits" },
    { value: services.length, suffix: "", label: "Domaines d'expertise" },
    { value: "Casablanca", label: "Intervention au Maroc" },
  ].filter((item) => item.value !== null && item.value !== 0);

  if (!items.length) return null;

  return (
    <section className="bg-ink text-white py-12">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {items.map((item) => (
          <div key={item.label}>
            <div className="text-3xl lg:text-4xl font-extrabold">
              <Counter value={item.value} suffix={item.suffix} />
            </div>
            <div className="mt-1 text-sm text-[#A9C0DA]">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
