/**
 * Injecte un bloc schema.org.
 *
 * `JSON.stringify` échappe les guillemets mais pas `<`, qui permettrait de
 * fermer la balise <script> depuis une donnée produit venant de WordPress.
 * On neutralise donc la séquence.
 */
export default function JsonLd({ schema }) {
  if (!schema) return null;

  const json = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
