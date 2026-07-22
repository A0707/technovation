"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Package, ArrowRight } from "lucide-react";
import { fmt } from "@/lib/tokens";

function ProductCard({ p }) {
  return (
    <Link
      href={`/boutique/${p.slug}`}
      className="lift group flex flex-col bg-white border border-line rounded-card overflow-hidden text-center"
    >
      <span className="relative block aspect-[4/3] bg-white">
        {p.image ? (
          <Image
            src={p.image}
            alt={p.imageAlt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            className="object-contain p-4"
            loading="lazy"
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center text-line">
            <Package size={48} strokeWidth={1.2} aria-hidden="true" />
          </span>
        )}
        {p.onSale && (
          <span className="absolute top-3 left-3 bg-[#E11D48] text-white text-[11px] font-semibold px-2 py-1 rounded-md">
            Promo
          </span>
        )}
      </span>

      <span className="flex flex-col flex-1 p-4">
        <span className="text-[11px] uppercase tracking-wide text-slateink">{p.category}</span>
        <span className="clamp-2 mt-1 font-bold text-sm leading-snug flex-1">{p.name}</span>

        <span className="mt-2.5 block">
          {p.onSale && p.regularPrice > p.price && (
            <span className="block text-xs text-slateink line-through">{fmt(p.regularPrice)}</span>
          )}
          <span className="block font-extrabold text-lg text-accent">{fmt(p.price)}</span>
          <span className="block text-[11px] text-slateink">TTC</span>
        </span>

        <span
          className={`mt-2 inline-flex items-center justify-center gap-1.5 text-xs ${
            p.inStock ? "text-[#16A34A]" : "text-slateink"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${p.inStock ? "bg-[#16A34A]" : "bg-slateink"}`} />
          {p.inStock ? "En stock" : "Sur commande"}
        </span>
      </span>
    </Link>
  );
}

export default function ProductTabs({ tabs, shopUrl }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  if (!tabs.length) {
    // WooCommerce injoignable : on n'affiche pas une grille vide sans explication.
    return (
      <p className="text-center text-slateink">
        Le catalogue est momentanément indisponible.{" "}
        <Link href={shopUrl} className="text-primary font-semibold underline">Voir la boutique</Link>
      </p>
    );
  }

  const current = tabs[active];

  return (
    <>
      <div role="tablist" aria-label="Catégories de produits" className="flex flex-wrap justify-center gap-1 border-b border-line mb-8">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            role="tab"
            id={`tab-${i}`}
            aria-selected={i === active}
            aria-controls={`panel-${i}`}
            onClick={() => setActive(i)}
            className={`px-4 py-3 text-xs font-semibold uppercase tracking-wide border-b-2 transition ${
              i === active
                ? "text-primary border-primary"
                : "text-slateink border-transparent hover:text-ink"
            }`}
          >
            {t.label}
            <span className="ml-1.5 text-[10px] opacity-60">{t.count}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          id={`panel-${active}`}
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4"
        >
          {current.products.map((p) => <ProductCard key={p.id} p={p} />)}
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 text-center">
        <Link
          href={shopUrl}
          className="inline-flex items-center gap-2 h-12 px-7 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-sm uppercase transition"
        >
          Voir toute la boutique <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
