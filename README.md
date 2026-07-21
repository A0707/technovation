# Technovation — Refonte (Next.js 15 + Tailwind)

Refonte moderne du site technovation.ma. Homepage premium B2B, responsive,
SEO (metadata + JSON-LD Organization), accessibilité, animations légères.

## Stack
- Next.js 15 (App Router)
- Tailwind CSS 3
- lucide-react (icônes)

## Lancer en local
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## Déployer sur Vercel

### Méthode 1 — via GitHub (recommandée)
1. Pousser ce dossier sur le repo GitHub :
```bash
git init
git add .
git commit -m "Refonte homepage Technovation (Next.js)"
git branch -M main
git remote add origin https://github.com/A0707/technovation.git
git push -u origin main
```
2. Aller sur https://vercel.com/new → « Import Git Repository » → choisir `A0707/technovation`.
3. Vercel détecte Next.js automatiquement. Cliquer **Deploy**. Rien à configurer.

### Méthode 2 — via CLI
```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

## Structure
```
app/
  layout.js      metadata SEO + JSON-LD + fonts
  page.js        assemblage des sections
  globals.css    tokens, animations, focus, reduced-motion
components/       Nav, Hero, Categories, Brands, Products, Solutions, Stats, WhyUs, Newsletter, Footer, ui
lib/tokens.js     design tokens + données catalogue
```

## À personnaliser
- `lib/tokens.js` : chiffres du panneau supervision et des stats (placeholders), produits, catégories.
- Remplacer les icônes produits par les vraies photos via `next/image`.
- Brancher WooCommerce en backend (API REST `/wp-json/wc/v3` ou GraphQL) pour un vrai catalogue.

## Prochaines pages à créer
- `app/produit/[slug]/page.js` — fiche produit (galerie, specs, avis, FAQ) + JSON-LD Product
- `app/categorie/[slug]/page.js` — grille + filtres
- `app/devis/page.js` — formulaire de devis
