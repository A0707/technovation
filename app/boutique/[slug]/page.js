import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Package, Phone } from "lucide-react";
import { fmt, contact } from "@/lib/tokens";
import { getProductBySlug } from "@/lib/woo";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/JsonLd";
import { productSchema } from "@/lib/schema";
import PageHeader from "@/components/PageHeader";
import ContactCta from "@/components/ContactCta";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description:
      product.description?.slice(0, 155) ||
      `${product.name} — disponible chez Technovation, Casablanca.`,
    alternates: { canonical: `/boutique/${product.slug}` },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const category = product.categories[0];
  const image = product.images[0];

  return (
    <>
      <JsonLd schema={productSchema(product)} />
      <PageHeader
        title={product.name}
        breadcrumb={[
          { label: "Boutique", href: "/boutique" },
          { label: category?.name || "Produit" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-5 py-16 grid lg:grid-cols-2 gap-12">
        <div className="relative aspect-square rounded-card overflow-hidden bg-white border border-line">
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-8"
              priority
            />
          ) : (
            <span className="absolute inset-0 grid place-items-center text-line">
              <Package size={64} strokeWidth={1.2} aria-hidden="true" />
            </span>
          )}
        </div>

        <div>
          {category && (
            <span className="text-xs uppercase tracking-wide text-slateink">{category.name}</span>
          )}
          <h2 className="mt-2 text-2xl font-extrabold leading-snug">{product.name}</h2>

          <div className="mt-5 flex items-baseline gap-3">
            {product.onSale && product.regularPrice > product.price && (
              <span className="text-lg text-slateink line-through">{fmt(product.regularPrice)}</span>
            )}
            <span className="text-3xl font-extrabold text-accent">{fmt(product.price)}</span>
            <span className="text-sm text-slateink">TTC</span>
          </div>

          <p className={`mt-3 inline-flex items-center gap-2 text-sm ${product.inStock ? "text-[#16A34A]" : "text-slateink"}`}>
            <span className={`w-2 h-2 rounded-full ${product.inStock ? "bg-[#16A34A]" : "bg-slateink"}`} />
            {product.inStock ? "En stock" : "Sur commande — nous consulter"}
          </p>

          {product.sku && (
            <p className="mt-4 text-sm text-slateink">
              Référence : <span className="font-semibold text-ink">{product.sku}</span>
            </p>
          )}

          {product.description && (
            <p className="mt-5 text-slateink leading-relaxed">{product.description}</p>
          )}

          {product.attributes.length > 0 && (
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {product.attributes.map((a) => (
                <div key={a.name} className="py-3 flex gap-4 text-sm">
                  <dt className="w-40 shrink-0 text-slateink">{a.name}</dt>
                  <dd className="font-medium">{a.values.join(", ")}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {/*
              Le tunnel de commande (panier, paiement, compte client) est encore
              assuré par WooCommerce : le bouton d'achat pointe donc vers la
              fiche d'origine. À rebrancher lors de la reprise de la vente
              côté Next — voir RAPPORT-CORRECTIONS.md.
            */}
            <Button asChild variant="accent" size="lg">
              <a href={product.permalink} target="_blank" rel="noopener noreferrer">
                Commander <ExternalLink size={17} aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${contact.phoneIntl}`}>
                <Phone size={17} aria-hidden="true" /> Demander un conseil
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm">
            <Link href="/boutique" className="text-primary font-semibold hover:underline">
              ← Retour à la boutique
            </Link>
          </p>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
