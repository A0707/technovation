// Design tokens — source unique (miroir de tailwind.config.js)
export const c = {
  primary: "#0057FF",
  primaryDark: "#0044CC",
  primaryBright: "#3B8BFF",
  primarySoft: "#E6EEFF",
  ink: "#081B3A",
  ink2: "#0F2A55",
  slate: "#5B6B82",
  line: "#E3E8EF",
  bg: "#FFFFFF",
  surface: "#F5F7FA",
  accent: "#FF6A00",
  accentDark: "#E05D00",
  success: "#16A34A",
  whatsapp: "#25D366",
  danger: "#E11D48",
};

export const fmt = (n) =>
  `${Number(n).toLocaleString("fr-FR").replace(/,/g, " ")} Dhs`;

// ---------------------------------------------------------------------------
// Identité — relevée sur technovation.ma, rien n'est inventé.
// ---------------------------------------------------------------------------
export const site = {
  name: "TECHNOVATION",
  tagline: "Votre partenaire IT",
  // Servi via /api/media : le domaine refuse les requêtes image dont le Referer
  // n'est pas technovation.ma. Voir app/api/media/[...path]/route.js.
  logo: "/api/media/wp-content/uploads/2020/06/LOGO-SITE.jpg",
  url: "https://technovation.ma",
  // Aucune photo de Technovation n'est disponible sur le site actuel.
  heroImage: null,
};

export const contact = {
  address: "46 Boulevard Zerktouni, 2ème étage, Appartement N° 6 — Casablanca, Maroc",
  addressShort: "Casablanca, Maroc",
  email: "Contact@technovation.ma",
  phones: ["06 07 173 005", "07 66 605 690"],
  phoneIntl: "+212607173005",
  facebook: "https://www.facebook.com/Technovationmaroc/",
  // ⚠️ Horaires non publiés sur le site actuel — à fournir par Technovation.
  hours: null,
};

// Menu principal — routes internes de la refonte.
export const nav = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services", mega: true },
  { label: "Boutique", href: "/boutique" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ---------------------------------------------------------------------------
// Services.
//
// `featured` = les 6 rubriques de la maquette, affichées sur la homepage.
// `text: null` = rubrique demandée par la maquette mais sans page ni contenu
// sur technovation.ma : la carte reste un emplacement à remplir, aucune
// description n'est inventée.
//
// Téléphonie IP et Vente & Installation ne figurent pas dans la grille de la
// maquette mais existent réellement : ils restent listés sur /services et dans
// le méga-menu pour ne pas perdre de contenu.
// ---------------------------------------------------------------------------
export const services = [
  {
    slug: "infrastructure-reseau",
    icon: "Network",
    title: "Infrastructure Réseau",
    text: "Étude et analyse fonctionnelle et d'architecture, rédaction du cahier des charges, planification des étapes, déploiement, tests et mise en marche.",
    href: "https://technovation.ma/deploiement-dinfrastructure-reseau/",
    featured: true,
  },
  {
    slug: "cybersecurite",
    icon: "ShieldCheck",
    title: "Cybersécurité",
    text: "Les meilleures solutions pour la protection de votre matériel et la sécurisation de vos données. Empêchez virus, logiciels malveillants et ransomwares d'infecter vos équipements.",
    href: "https://technovation.ma/protection/",
    featured: true,
  },
  {
    slug: "videosurveillance",
    icon: "Cctv",
    title: "Vidéosurveillance",
    text: "Surveiller les zones sensibles de votre exploitation, contrôler les flux entrant et sortant, sécuriser les flux d'argent et de marchandises.",
    href: "https://technovation.ma/videosurveillance/",
    featured: true,
  },
  {
    slug: "controle-acces",
    icon: "Fingerprint",
    title: "Contrôle d'accès",
    text: null,
    href: null,
    featured: true,
  },
  {
    slug: "serveurs-stockage",
    icon: "Server",
    title: "Serveurs & Stockage",
    text: null,
    href: null,
    featured: true,
  },
  {
    slug: "maintenance",
    icon: "Wrench",
    title: "Maintenance Informatique",
    text: "Maintenance sur site : nos spécialistes collaborent avec vos équipes, sur place, pour maintenir votre outil informatique dans d'excellentes conditions.",
    href: "https://technovation.ma/maintenance-casablanca/",
    featured: true,
  },
  {
    slug: "telephonie-ip",
    icon: "PhoneCall",
    title: "Téléphonie IP",
    text: "Un service clé en main dédié aux entreprises : la téléphonie fixe sur Internet vous permet d'échanger sans contraintes et de bénéficier de fonctionnalités riches et évolutives.",
    href: "https://technovation.ma/telephonie-ip/",
    featured: false,
  },
  {
    slug: "vente-installation",
    icon: "PackageCheck",
    title: "Vente & Installation",
    text: "Nous choisissons nos fabricants partenaires parmi les leaders du marché : qualité du matériel, possibilités de renouvellement, efficacité des échanges techniques.",
    href: "https://technovation.ma/vente-installation/",
    featured: false,
  },
];

export const featuredServices = services.filter((s) => s.featured);

// Onglets « Produits phares » — catégories WooCommerce existantes uniquement.
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

// Cartes statistiques du hero — formulations sans engagement chiffré invérifiable.
export const advantages = [
  { icon: "Building2", title: "Basée à Casablanca", text: "46 Bd Zerktouni, au cœur de la ville" },
  { icon: "Users", title: "Équipe dédiée aux entreprises", text: "Interlocuteur unique pour votre parc" },
  { icon: "Headphones", title: "Support réactif", text: "Par téléphone, à distance et sur site" },
  { icon: "BadgeCheck", title: "Solutions professionnelles", text: "Matériel et services certifiés" },
];

// Marques réellement présentes au catalogue.
export const brands = ["HP", "Lenovo", "Dell", "Epson", "Samsung", "ASUS", "Microsoft", "Eaton", "Rivacase"];

// ⚠️ Aucun avis client n'existe (0 sur 346 produits). Renseigner ce tableau
// active le slider ; tant qu'il est vide, la section affiche des emplacements.
export const testimonials = [];

// ⚠️ Aucune page « Réalisations » sur technovation.ma. Format attendu :
// { title, client, sector, summary }
export const projects = [];

export const legalPages = [
  { t: "À propos de nous", href: "/a-propos" },
  { t: "Livraison", href: "https://technovation.ma/livraison/" },
  { t: "Conditions générales de vente", href: "https://technovation.ma/conditions-generales-de-vente/" },
  { t: "Mentions légales", href: "https://technovation.ma/mentions-legales/" },
  { t: "Politique de confidentialité", href: "https://technovation.ma/politique-de-confidentialite/" },
  { t: "Contactez-nous", href: "/contact" },
];
