# Pages absentes du site Next

Ces pages existent sur WordPress et sont encore liées en externe depuis le
nouveau site. Les liens **fonctionnent** — rien n'est cassé — mais ils sortent
du domaine Next, ce qui casse le maillage interne et fuite du PageRank.

À migrer avant la bascule DNS (scénario C), sans quoi les redirections 301 de
la priorité 8 renverront vers des pages inexistantes.

## 1. Pages légales et commerciales

Textes intégralement disponibles via l'API WordPress — je peux les migrer sur
demande, ils n'ont pas besoin d'être réécrits.

| Page | Source WordPress | Volume | Route cible |
|---|---|---|---|
| Livraison | `/livraison/` | 1 677 car. | `/livraison` |
| Conditions générales de vente | `/conditions-generales-de-vente/` | 8 764 car. | `/cgv` |
| Mentions légales | `/mentions-legales/` | 478 car. | `/mentions-legales` |
| Politique de confidentialité | `/politique-de-confidentialite/` | 4 985 car. | `/politique-de-confidentialite` |

**Liens à basculer une fois créées :** [lib/tokens.js](lib/tokens.js) →
`legalPages`, et [components/Footer.jsx](components/Footer.jsx) → la barre
inférieure.

### Informations relevées dans les Mentions légales

À vérifier avant publication, elles n'apparaissent nulle part ailleurs :

- Registre de commerce : **44865**
- Téléphone déclaré : **+212 (0) 7 666 056 90**
- E-mail déclaré : contact@technovation.ma
- Siège : 46, Bd Zerktouni, 2ème étage, Appt 6, Casablanca

⚠️ La politique de confidentialité mentionne `www.technovation.ma`. Si le
domaine final change, le texte doit être mis à jour — une politique qui désigne
un autre domaine que celui qui la sert n'a pas de valeur.

## 2. Pages catégories boutique

Les 23 cartes de `/boutique` pointent encore vers
`technovation.ma/product-category/<slug>/`.

Il manque une route `/boutique/categorie/[slug]` : listing filtré, pagination,
tri. Les données sont déjà disponibles via `getProducts({ category })` dans
[lib/woo.js](lib/woo.js).

Sans cette route, un visiteur qui clique sur une catégorie quitte le site.

## 3. Compte client et tunnel de commande

Non couvert par les 8 priorités, mais bloquant pour le scénario C :

| Fonction | WordPress | Next |
|---|---|---|
| Panier | ✅ | ❌ |
| Tunnel de commande | ✅ | ❌ |
| Paiement | ✅ | ❌ |
| Compte client / historique | ✅ | ❌ |
| Suivi de commande | ✅ | ❌ |

Le bouton « Commander » des fiches produits pointe donc encore vers la fiche
WooCommerce d'origine ([app/boutique/[slug]/page.js](app/boutique/[slug]/page.js)).

**Tant que ce tableau n'est pas rempli côté Next, WordPress ne peut pas être
éteint** — au mieux rendu invisible (`noindex`, hors index, servant l'API).

## 4. Blog

La route `/blog` interroge l'API WordPress et affiche un état vide : le blog
contient **0 article**. Il manque une route `/blog/[slug]` pour les articles à
venir. À créer au premier article publié, pas avant.

## 5. Réalisations

`/realisations` est en `noindex` et affiche un état vide : aucune réalisation
n'est publiée sur technovation.ma. Structure de données prête dans
[lib/tokens.js](lib/tokens.js) → `projects`.
