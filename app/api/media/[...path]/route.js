// Proxy média — technovation.ma uniquement.
//
// Le serveur de technovation.ma applique une protection anti-hotlink : toute
// requête dont le Referer n'est pas le site lui-même reçoit un 403. Les visuels
// produits et le logo sont donc inaccessibles depuis la maquette hébergée
// ailleurs, alors qu'ils s'afficheront normalement une fois le thème installé
// sur le domaine (même origine).
//
// Route par chemin plutôt que par query string : next/image impose de déclarer
// `images.localPatterns` pour toute source locale contenant un « ? », et le
// champ `search` n'accepte pas de joker. Un chemin simple évite le problème.
//
// L'accès est restreint à wp-content/uploads : sans cette limite, la route
// permettrait d'atteindre n'importe quelle URL du domaine depuis notre serveur.

const ORIGIN = "https://technovation.ma";
const ALLOWED_PREFIX = "wp-content/uploads/";

export async function GET(_request, { params }) {
  const { path } = await params;
  const relative = (path || []).join("/");

  if (!relative.startsWith(ALLOWED_PREFIX) || relative.includes("..")) {
    return new Response("Chemin non autorisé", { status: 403 });
  }

  let upstream;
  try {
    upstream = await fetch(`${ORIGIN}/${relative}`, {
      headers: {
        Referer: `${ORIGIN}/`,
        // Certaines règles anti-hotlink filtrent aussi sur l'agent.
        "User-Agent": "Mozilla/5.0 (compatible; TechnovationSite/1.0)",
        Accept: "image/avif,image/webp,image/*,*/*;q=0.8",
      },
      next: { revalidate: 86400 },
    });
  } catch {
    return new Response("Média injoignable", { status: 502 });
  }

  if (!upstream.ok) {
    return new Response("Média indisponible", { status: upstream.status });
  }

  const contentType = upstream.headers.get("content-type") || "";
  // On ne relaie que des images : la route ne doit pas servir à récupérer du
  // HTML ou du JSON depuis le domaine.
  if (!contentType.startsWith("image/")) {
    return new Response("Type de contenu non autorisé", { status: 415 });
  }

  return new Response(upstream.body, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
