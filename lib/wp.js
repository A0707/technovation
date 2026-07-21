// Client WordPress REST API — technovation.ma
//
// Sert au blog. L'endpoint /wp-json/wp/v2 est public et en lecture seule.

import { decode } from "./woo";

const BASE = process.env.NEXT_PUBLIC_WP_BASE || "https://technovation.ma/wp-json/wp/v2";
const REVALIDATE = 1800;

/**
 * Articles publiés.
 *
 * Le blog de technovation.ma existe mais ne contient aucun article : cette
 * fonction renvoie donc [] aujourd'hui. Dès qu'un article est publié dans
 * WordPress, il apparaît ici sans modification de code.
 */
export async function getPosts(perPage = 9) {
  try {
    const res = await fetch(
      `${BASE}/posts?per_page=${perPage}&_embed=wp:featuredmedia&_fields=id,slug,link,title,excerpt,date,_links,_embedded`,
      { next: { revalidate: REVALIDATE } },
    );
    if (!res.ok) return [];

    const data = await res.json();
    if (!Array.isArray(data)) return [];

    return data.map((p) => ({
      id: p.id,
      slug: p.slug,
      link: p.link,
      title: decode(p.title?.rendered || ""),
      excerpt: decode((p.excerpt?.rendered || "").replace(/<[^>]+>/g, "")).slice(0, 180),
      date: p.date,
      image: p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
    }));
  } catch (err) {
    console.error(`[wp] posts → ${err.message}`);
    return [];
  }
}
