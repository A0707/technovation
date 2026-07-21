// Proxy média — technovation.ma uniquement.
//
// Le serveur de technovation.ma applique une protection anti-hotlink : toute
// requête dont le Referer n'est pas le site lui-même reçoit un 403. Les visuels
// produits et le logo sont donc inaccessibles depuis la maquette hébergée
// ailleurs (Vercel), alors qu'ils s'afficheront normalement une fois le thème
// installé sur le domaine (même origine).
//
// Ce proxy relaie la requête avec le bon Referer. Il est volontairement limité
// aux hôtes ci-dessous : sans cette liste, la route serait un proxy ouvert
// utilisable pour atteindre n'importe quelle URL depuis notre serveur (SSRF).

const ALLOWED_HOSTS = new Set(["technovation.ma", "www.technovation.ma"]);
const ORIGIN = "https://technovation.ma";

export async function GET(request) {
  const src = request.nextUrl.searchParams.get("src");
  if (!src) {
    return new Response("Paramètre `src` manquant", { status: 400 });
  }

  let url;
  try {
    url = new URL(src);
  } catch {
    return new Response("URL invalide", { status: 400 });
  }

  if (url.protocol !== "https:" || !ALLOWED_HOSTS.has(url.hostname)) {
    return new Response("Hôte non autorisé", { status: 403 });
  }

  const upstream = await fetch(url, {
    headers: {
      Referer: `${ORIGIN}/`,
      // Certaines règles anti-hotlink filtrent aussi sur l'agent.
      "User-Agent": "Mozilla/5.0 (compatible; TechnovationSite/1.0)",
      Accept: "image/avif,image/webp,image/*,*/*;q=0.8",
    },
    next: { revalidate: 86400 },
  });

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
