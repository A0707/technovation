"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/tokens";

const PER_PAGE = 3;
const INTERVAL = 6000;

/**
 * Section « Ils nous font confiance ».
 *
 * La section reste toujours visible : tant qu'aucun témoignage n'est fourni,
 * elle affiche des emplacements vides, explicitement identifiés comme tels.
 * Aucune citation n'est inventée — la boutique compte 0 avis sur 346 produits,
 * et attribuer de fausses citations à des clients relève de la publicité
 * trompeuse (loi 31-08).
 *
 * Pour l'activer : renseigner `testimonials` dans lib/tokens.js
 * au format { text, author, rating }.
 */
export default function Testimonials() {
  const reduce = useReducedMotion();
  const [page, setPage] = useState(0);

  const pageCount = Math.max(1, Math.ceil(testimonials.length / PER_PAGE));
  const next = useCallback(() => setPage((p) => (p + 1) % pageCount), [pageCount]);

  useEffect(() => {
    if (pageCount <= 1 || reduce) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [pageCount, reduce, next]);

  const empty = testimonials.length === 0;
  const slice = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="max-w-7xl mx-auto px-5 py-16 lg:py-20">
      <h2 className="text-center text-3xl font-extrabold uppercase">Ils nous font confiance</h2>

      {empty ? (
        <>
          <p className="text-center text-slateink mt-2">
            Emplacements réservés à vos témoignages clients
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {Array.from({ length: PER_PAGE }, (_, i) => (
              <div
                key={i}
                className="rounded-card border-2 border-dashed border-line p-6 text-center bg-white/50"
              >
                <Quote size={28} className="mx-auto text-line" aria-hidden="true" />
                <p className="mt-3 text-sm text-slateink">
                  Témoignage {i + 1}
                </p>
                <p className="mt-1 text-xs text-slateink/70">
                  Citation, nom du client et fonction
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-3 gap-5"
            >
              {slice.map((t) => (
                <figure key={t.author} className="bg-white border border-line rounded-card p-6 h-full">
                  <div className="flex gap-0.5" aria-label={`Note : ${t.rating} sur 5`}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < t.rating ? "text-accent" : "text-line"}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-3.5 text-sm italic leading-relaxed text-ink">
                    {t.text}
                  </blockquote>
                  <figcaption className="mt-3.5 text-xs font-bold text-slateink">
                    — {t.author}
                  </figcaption>
                </figure>
              ))}
            </motion.div>
          </AnimatePresence>

          {pageCount > 1 && (
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: pageCount }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Afficher les témoignages ${i + 1} sur ${pageCount}`}
                  aria-current={i === page}
                  className={`h-2 rounded-full transition-all ${
                    i === page ? "w-6 bg-primary" : "w-2 bg-line hover:bg-slateink/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
