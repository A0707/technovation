import { testimonials } from "@/lib/tokens";

/**
 * Section « Ils nous font confiance ».
 *
 * Elle ne s'affiche pas tant qu'aucun témoignage réel n'est fourni. La boutique
 * compte 0 avis sur 346 produits : publier des citations attribuées à des
 * clients qui n'existent pas relève de la publicité trompeuse (loi 31-08).
 *
 * Pour l'activer : renseigner `testimonials` dans lib/tokens.js avec des
 * citations dont Technovation a l'autorisation écrite.
 */
export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-5 py-16 lg:py-20">
      <h2 className="text-center text-3xl font-extrabold uppercase">Ils nous font confiance</h2>

      <div className="mt-10 grid md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <figure key={t.author} className="bg-white border border-line rounded-card p-6">
            <div className="text-accent tracking-widest" aria-label={`Note : ${t.rating} sur 5`}>
              {"★".repeat(t.rating)}
            </div>
            <blockquote className="mt-3.5 text-sm italic leading-relaxed">{t.text}</blockquote>
            <figcaption className="mt-3.5 text-xs font-bold text-slateink">— {t.author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
