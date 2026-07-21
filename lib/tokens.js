// Design tokens — source unique (miroir de tailwind.config.js et du child theme)
export const c = {
  primary: "#0057D9",       // bleu — CTA, liens, onglets actifs
  primaryDark: "#0046AE",
  primaryBright: "#3B8BFF",
  primarySoft: "#E6EFFC",
  ink: "#081B3A",           // bleu nuit — hero, bandeau chiffres, footer
  ink2: "#0F2A55",
  slate: "#5B6B82",
  line: "#E3E8EF",
  bg: "#FFFFFF",
  surface: "#F5F7FA",
  accent: "#FF6A00",        // orange — devis, prix
  accentDark: "#E05D00",
  success: "#16A34A",
  whatsapp: "#25D366",
  danger: "#E11D48",
};

export const radius = "18px";

export const fmt = (n) =>
  `${Number(n).toLocaleString("fr-FR").replace(/,/g, " ")} Dhs`;

// ---------------------------------------------------------------------------
// Identité — relevée sur technovation.ma, rien n'est inventé.
// ---------------------------------------------------------------------------
export const site = {
  name: "TECHNOVATION",
  tagline: "Votre partenaire IT",
  // Servi via /api/media : le domaine refuse les requêtes image dont le Referer
  // n'est pas technovation.ma. Voir app/api/media/route.js.
  logo: `/api/media?src=${encodeURIComponent("https://technovation.ma/wp-content/uploads/2020/06/LOGO-SITE.jpg")}`,
  url: "https://technovation.ma",
  // Aucune photo de Technovation n'est disponible sur le site actuel.
  // Renseigner une URL ici affichera le visuel du hero à la place de
  // l'emplacement réservé.
  heroImage: null,
};

export const contact = {
  address: "46 Boulevard Zerktouni, 2ème étage, Appartement N° 6 — Casablanca, Maroc",
  addressShort: "Casablanca, Maroc",
  city: "Casablanca",
  email: "Contact@technovation.ma",
  phones: ["06 07 173 005", "07 66 605 690"],
  // Numéro international pour les liens tel: et wa.me
  phoneIntl: "+212607173005",
  facebook: "https://www.facebook.com/Technovationmaroc/",
  // ⚠️ Horaires non publiés sur le site actuel — à fournir par Technovation.
  hours: null,
};

// Menu principal — uniquement des pages qui existent réellement.
// « Réalisations » n'existe pas et le blog ne contient aucun article :
// ces entrées sont volontairement absentes (voir wordpress/CONTENU.md).
export const nav = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "https://technovation.ma/propos-nous/" },
  { label: "Services", href: "#expertises", mega: true },
  { label: "Boutique", href: "https://technovation.ma/shop/" },
  { label: "Contact", href: "https://technovation.ma/contactez-nous/" },
];

// ---------------------------------------------------------------------------
// Services — les 6 pôles réellement publiés, avec leurs textes d'origine
// (condensés depuis les pages du site, sans reformulation commerciale).
// ---------------------------------------------------------------------------
export const services = [
  {
    icon: "Network",
    title: "Déploiement d'infrastructure réseau",
    text: "Étude et analyse fonctionnelle et d'architecture, rédaction du cahier des charges, planification des étapes, déploiement, tests et mise en marche.",
    href: "https://technovation.ma/deploiement-dinfrastructure-reseau/",
  },
  {
    icon: "ShieldCheck",
    title: "Protection",
    text: "Les meilleures solutions pour la protection de votre matériel et la sécurisation de vos données. Empêchez virus, logiciels malveillants et ransomwares d'infecter vos équipements.",
    href: "https://technovation.ma/protection/",
  },
  {
    icon: "Cctv",
    title: "Vidéosurveillance",
    text: "Surveiller les zones sensibles de votre exploitation, contrôler les flux entrant et sortant, sécuriser les flux d'argent et de marchandises.",
    href: "https://technovation.ma/videosurveillance/",
  },
  {
    icon: "PhoneCall",
    title: "Téléphonie IP",
    text: "Un service clé en main dédié aux entreprises : la téléphonie fixe sur Internet vous permet d'échanger sans contraintes et de bénéficier de fonctionnalités riches et évolutives.",
    href: "https://technovation.ma/telephonie-ip/",
  },
  {
    icon: "PackageCheck",
    title: "Vente & Installation",
    text: "Nous choisissons nos fabricants partenaires parmi les leaders du marché : qualité du matériel, possibilités de renouvellement, efficacité des échanges techniques.",
    href: "https://technovation.ma/vente-installation/",
  },
  {
    icon: "Wrench",
    title: "Maintenance",
    text: "Maintenance sur site : nos spécialistes collaborent avec vos équipes, sur place, pour maintenir votre outil informatique dans d'excellentes conditions.",
    href: "https://technovation.ma/maintenance-casablanca/",
  },
];

// ---------------------------------------------------------------------------
// Onglets « Nos produits phares ».
// Chaque onglet regroupe des catégories WooCommerce existantes ; les slugs
// inconnus sont ignorés côté lib/woo.js. Pas d'onglet « Réseau » ni
// « Caméras » : aucune catégorie correspondante en boutique.
// ---------------------------------------------------------------------------
export const productTabs = [
  { label: "Ordinateurs", slugs: ["ordinateur-bureau", "ordinateur-portable"] },
  { label: "Écrans", slugs: ["ecran"] },
  { label: "Imprimantes", slugs: ["imprimante-jet-dencre", "imprimante-laser"] },
  { label: "Tout-en-un", slugs: ["all-in-one"] },
  { label: "Serveurs", slugs: ["serveur"] },
  { label: "Stockage", slugs: ["disque-dur-ssd", "disque-interne", "disque-externe"] },
  { label: "Onduleurs", slugs: ["onduleur"] },
  { label: "Vidéoprojecteurs", slugs: ["videoprojecteur"] },
];

// Arguments de réassurance — formulations sans engagement chiffré invérifiable.
export const advantages = [
  { icon: "Building2", title: "Basée à Casablanca", text: "46 Bd Zerktouni, au cœur de la ville" },
  { icon: "Users", title: "Équipe dédiée aux entreprises", text: "Interlocuteur unique pour votre parc" },
  { icon: "Headphones", title: "Support réactif", text: "Par téléphone, à distance et sur site" },
  { icon: "BadgeCheck", title: "Solutions professionnelles", text: "Matériel et services certifiés" },
];

// Marques réellement présentes au catalogue.
export const brands = ["HP", "Lenovo", "Dell", "Epson", "Samsung", "ASUS", "Microsoft", "Eaton", "Rivacase"];

// ⚠️ Aucun témoignage client n'existe (0 avis sur le catalogue). La section
// reste vide tant que Technovation n'a pas fourni de citations autorisées.
export const testimonials = [];

// Pages institutionnelles existantes.
export const legalPages = [
  { t: "À propos de nous", href: "https://technovation.ma/propos-nous/" },
  { t: "Livraison", href: "https://technovation.ma/livraison/" },
  { t: "Conditions générales de vente", href: "https://technovation.ma/conditions-generales-de-vente/" },
  { t: "Mentions légales", href: "https://technovation.ma/mentions-legales/" },
  { t: "Politique de confidentialité", href: "https://technovation.ma/politique-de-confidentialite/" },
  { t: "Contactez-nous", href: "https://technovation.ma/contactez-nous/" },
];
