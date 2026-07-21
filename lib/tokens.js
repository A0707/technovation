// Design tokens — source unique (miroir de tailwind.config.js)
export const c = {
  primary: "#2563EB",
  primaryDark: "#1D4ED8",
  primaryBright: "#60A5FA",
  primarySoft: "#EFF6FF",
  ink: "#0F172A",
  ink2: "#1E293B",
  slate: "#64748B",
  line: "#E2E8F0",
  bg: "#FFFFFF",
  surface: "#F8FAFC",
  accent: "#F97316",
  accentDark: "#EA580C",
  brandCyan: "#06B6D4",
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
  hours: "Lun - Ven 08:30 - 18:30",
  hoursFull: "Lundi – Vendredi : 08:30 – 18:30\nSamedi : sur rendez-vous",
};

// ---------------------------------------------------------------------------
// Faits d'entreprise.
//
// Ces valeurs ne sont pas vérifiables depuis l'extérieur : elles sont
// affirmées par Technovation, qui en porte la responsabilité éditoriale.
// Elles sont regroupées ici pour être modifiables en un seul endroit.
// ---------------------------------------------------------------------------
export const company = {
  founded: 2019,
  city: "Casablanca",
  intro:
    "Fondée en 2019 à Casablanca, Technovation est une société spécialisée dans la vente de matériel informatique et les prestations de services IT auprès des professionnels.",
  mission:
    "Nous accompagnons les entreprises marocaines dans leur transformation digitale en proposant des solutions complètes : infrastructure réseau, cybersécurité, vidéosurveillance, serveurs, stockage et maintenance informatique.",
  coverage:
    "Notre équipe de techniciens qualifiés intervient sur tout le Maroc, avec un engagement fort sur la qualité, la réactivité et le suivi client.",
};

// Chiffres affichés dans le bandeau. Fournis par Technovation.
// Note : « 24/7 » et « +500 projets » sont des engagements commerciaux
// opposables — les modifier ici les met à jour partout.
export const stats = [
  { value: 500, prefix: "+", label: "Projets réalisés" },
  { value: 300, prefix: "+", label: "Clients satisfaits" },
  { value: 1000, prefix: "+", label: "Produits en stock" },
  { value: 7, suffix: "+", label: "Années d'expérience" },
  { value: "24/7", label: "Support technique" },
];

export const values = [
  { icon: "ShieldCheck", title: "Fiabilité", text: "Matériel certifié et solutions éprouvées pour la continuité de votre activité." },
  { icon: "Zap", title: "Réactivité", text: "Intervention rapide et support technique disponible pour minimiser les interruptions." },
  { icon: "Users", title: "Proximité", text: "Une relation de confiance et un accompagnement personnalisé sur le long terme." },
];

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
    text: "Badges, biométrie, tourniquets, pointeuses et gestion centralisée des accès.",
    href: "/services",
    featured: true,
  },
  {
    slug: "serveurs-stockage",
    icon: "Server",
    title: "Serveurs & Stockage",
    text: "Serveurs Dell et HPE, NAS Synology, virtualisation et solutions de stockage haute disponibilité.",
    href: "/services",
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
  { icon: "Building2", title: "Basée à Casablanca", text: "Intervention sur tout le Maroc" },
  { icon: "Clock", title: "+7 ans d'expérience", text: "Au service des entreprises" },
  { icon: "Headphones", title: "Support réactif", text: "Par téléphone et à distance" },
  { icon: "BadgeCheck", title: "Solutions professionnelles", text: "Matériel et services certifiés" },
];

// Marques partenaires déclarées par Technovation. Les neuf premières sont
// confirmées par des produits au catalogue WooCommerce ; les suivantes sont
// des partenariats affirmés, sans référence en boutique aujourd'hui.
export const brands = [
  "HP", "Dell", "Lenovo", "Epson", "Samsung", "ASUS", "Microsoft", "Eaton", "Rivacase",
  "Hikvision", "Dahua", "Synology", "Cisco", "Ubiquiti",
];

// ⚠️ Vide volontairement. Un témoignage est une parole attribuée à un tiers :
// contrairement aux chiffres ci-dessus, Technovation ne peut pas l'affirmer à
// la place du client. Renseigner { text, author, rating } active le slider.
export const testimonials = [];

// ⚠️ Vide volontairement, même raison : une étude de cas engage un client
// identifiable. Dès que ces projets sont confirmés comme réels (même
// anonymisés), renseigner { title, client, sector, summary } les publie.
export const projects = [];

export const legalPages = [
  { t: "À propos de nous", href: "/a-propos" },
  { t: "Livraison", href: "https://technovation.ma/livraison/" },
  { t: "Conditions générales de vente", href: "https://technovation.ma/conditions-generales-de-vente/" },
  { t: "Mentions légales", href: "https://technovation.ma/mentions-legales/" },
  { t: "Politique de confidentialité", href: "https://technovation.ma/politique-de-confidentialite/" },
  { t: "Contactez-nous", href: "/contact" },
];
