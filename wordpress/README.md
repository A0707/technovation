# Refonte du thème WordPress — Technovation

Le contenu reste dans WordPress. Seule la présentation change.

## Ce qui ne bouge pas

Les 346 produits, les 23 catégories, les commandes, les comptes clients, les
pages institutionnelles et les réglages WooCommerce vivent dans la base de
données — totalement indépendante du thème. Panier, tunnel de commande et
back-office continuent de fonctionner à l'identique.

## État des lieux (relevé le 21/07/2026)

| | Actuel | Cible |
|---|---|---|
| Thème | `adrenalin` (ThemeForest, ~2014), sans child theme | Thème maintenu + child `technovation` |
| Page builder | WPBakery **inactif** → shortcodes en texte brut | Éditeur de blocs natif |
| WordPress | 6.3.1 (2023) | Dernière version stable |
| Slider | LayerSlider 6.10.0 (2019) | Retiré ou remplacé |
| Données structurées | aucune | JSON-LD Organization + Product |
| Images sans `alt` | 84 / 109 | 0 |
| H1 en page d'accueil | aucun | 1 |

## Ordre d'exécution

Chaque étape est validée avant de passer à la suivante. Rien ne touche la
production avant l'étape 8.

**1. Staging** — dupliquer le site sur `staging.technovation.ma`. La plupart des
hébergeurs marocains (LWS, Genious, HostMyServers) proposent un clonage en un
clic ; sinon le plugin *Duplicator* fait le travail. Protéger le staging par mot
de passe et le passer en `noindex` pour éviter le contenu dupliqué.

**2. Sauvegarde complète** — base + `wp-content`, téléchargée en local. À faire
avant toute mise à jour, pas seulement en confiance dans l'hébergeur.

**3. Mises à jour** — PHP, WordPress, WooCommerce, puis les plugins un par un en
vérifiant la boutique entre chaque. C'est l'étape la plus risquée : plusieurs
années de retard sur un site avec un thème abandonné.

**4. Thème de base** — installer le thème parent retenu (Blocksy, Kadence ou
Astra — tous gratuits et compatibles WooCommerce), puis le child theme
`technovation-child/` de ce dossier.

> Le child theme est écrit pour **Blocksy**. Pour en changer, modifier la ligne
> `Template:` dans `style.css` — le reste est du CSS et des hooks WooCommerce
> standards, valables sur les trois.

**5. Reconstruction de la page d'accueil** — sans WPBakery, avec l'éditeur de
blocs. La maquette Next.js à la racine de ce dépôt sert de référence visuelle
(sections : hero, catégories, marques, produits, services, chiffres, contact).

**6. SEO** — installer Rank Math ou Yoast, puis renseigner titre et méta
description sur les pages principales, ajouter les `alt` manquants, générer le
sitemap. Le JSON-LD Organization est déjà fourni par le child theme.

**7. Recette** — parcours complet sur staging : recherche, filtres catégorie,
fiche produit, ajout au panier, commande test, formulaire de contact, affichage
mobile. Mesurer avec PageSpeed Insights avant/après.

**8. Bascule** — en heures creuses, sauvegarde fraîche à disposition. Activer le
thème en production, purger le cache WP Rocket, vérifier le tunnel d'achat dans
les minutes qui suivent.

## Installation du child theme

```bash
# depuis ce dossier
zip -r technovation-child.zip technovation-child/
```

Puis dans WordPress : **Apparence → Thèmes → Ajouter → Téléverser**, installer
le thème parent d'abord, le child ensuite, et activer le child.

## Ce que le child theme apporte

- Design system Technovation en variables CSS (couleurs, typo, rayons, ombres)
- Cartes produit, badges promo et boutons alignés sur la maquette
- **Filtre anti-shortcodes orphelins** : neutralise les `[vc_row ...]` affichés
  en clair, sans modifier le contenu en base. Se désactive seul si WPBakery est
  réactivé.
- Étoiles de notation masquées tant qu'il n'y a pas d'avis (0 sur 346 produits)
- « Sur commande — nous consulter » au lieu de « Rupture de stock »
- Focus clavier visible et lien d'évitement (WCAG 2.4.1, 2.4.7)
- `prefers-reduced-motion` respecté
- JSON-LD Organization en page d'accueil

## Points en attente de décision

- **Chiffres commerciaux** : « 12+ années d'expérience », « 500+ clients »,
  « 99,9 % SLA », « < 4h d'intervention » figuraient dans la maquette sans
  source. Un SLA affiché engage contractuellement — à confirmer ou à retirer.
- **Réseaux sociaux** : seul le compte Facebook est vérifié. Les URL Instagram
  et LinkedIn de la maquette n'ont pas été validées.
- **Visuels produits erronés** : plusieurs fiches pointent vers l'image d'un
  autre produit (le HP V27i utilise `ecran-19-5-hd-dell-e2016hv.jpg`). À
  corriger dans la médiathèque, indépendamment du thème.
