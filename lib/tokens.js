import { SITE_URL } from "./site";

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
  url: SITE_URL,
  // Visuel d'arrière-plan de la médiathèque Technovation.
  heroImage: "/api/media/wp-content/uploads/2022/05/Arriere-plan.jpg",
  banner: "/api/media/wp-content/uploads/2022/05/Banner-Technovation.jpg",
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
// Texte repris mot pour mot de la page « À propos de nous » de technovation.ma,
// simplement redécoupé en paragraphes. Aucune reformulation commerciale.
export const company = {
  founded: 2019,
  city: "Casablanca",
  photo: "/api/media/wp-content/uploads/2020/07/rm22-256-kul-09.jpg",
  intro:
    "Technovation est une société créée par des jeunes expérimentés qui offrent et délivrent du matériel et service informatique permettant aux entreprises d'améliorer leur rendement et leur productivité.",
  mission:
    "Grâce à une forte maîtrise des activités de ses clients et à son expertise sur les nouvelles technologies, notre société vous assiste dans l'utilisation quotidienne des outils informatiques, tout en s'efforçant de répondre le plus précisément possible à vos attentes.",
  coverage:
    "Nous vous offrons une solution complète et nous vous assurons des services de qualité grâce à nos spécialistes.",
};

// Les 4 piliers listés sur la page « À propos de nous ».
export const pillars = [
  { icon: "PackageCheck", title: "Vente / Installation", text: "Nous proposons le matériel informatique adapté à vos besoins." },
  { icon: "Wrench", title: "Maintenance", text: "Un accompagnement essentiel pour votre parc informatique." },
  { icon: "ShieldCheck", title: "Protection", text: "Protégez votre outil informatique dans son ensemble." },
  { icon: "ClipboardList", title: "Audit & Conseil", text: "La première démarche de tout projet informatique." },
];

// Repris de la page « Livraison ».
export const delivery =
  "Vous commandez et vous vous faites livrer partout au Maroc sans vous déplacer chez Technovation. La livraison est assurée par l'un de nos transporteurs à l'adresse que vous spécifiez.";

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
// Textes et visuels repris des pages correspondantes de technovation.ma.
// `points` = les listes à puces telles qu'elles figurent sur chaque page.
export const services = [
  {
    slug: "infrastructure-reseau",
    icon: "Network",
    title: "Déploiement d'infrastructure réseau",
    short: "Étude, cahier des charges, planification, déploiement, tests et transfert de compétence.",
    text: "Les services de déploiement des infrastructures se concentrent sur l'installation des réseaux et le fonctionnement des applications. Cela couvre l'architecture, la conception, le développement et les tests des applications, y compris la gestion des versions et la garantie de qualité.",
    points: [
      "Étude et analyse fonctionnelle et d'architecture",
      "Rédaction du cahier des charges",
      "Planification des étapes du déploiement",
      "Déploiement, tests et mise en marche",
      "Formation et transfert de compétence",
    ],
    image: "/api/media/wp-content/uploads/2020/07/rm22-200-kul-06.jpg",
    href: "https://technovation.ma/deploiement-dinfrastructure-reseau/",
    featured: true,
  },
  {
    slug: "protection",
    icon: "ShieldCheck",
    title: "Protection",
    short: "Protection de votre matériel et sécurisation de vos données.",
    text: "Nous vous proposons les meilleures solutions pour la protection de votre matériel ainsi qu'à la sécurisation de vos données. Empêchez les virus, logiciels malveillants et ransomwares d'infecter vos PC et équipements informatiques.",
    points: [
      "Protection contre les virus",
      "Optimisation des performances",
      "Navigation web sécurisée",
    ],
    image: "/api/media/wp-content/uploads/2020/07/protection.jpg",
    href: "https://technovation.ma/protection/",
    featured: true,
  },
  {
    slug: "videosurveillance",
    icon: "Cctv",
    title: "Vidéosurveillance",
    short: "Surveiller, contrôler et sécuriser les zones sensibles de votre exploitation.",
    text: "Selon la sensibilité de votre site, sa taille et vos exigences opérationnelles d'exploitation, Technovation met à votre disposition une installation de vidéosurveillance qui se compose d'une à plusieurs dizaines de caméras fixes, dômes ou rails.",
    points: [
      "Surveiller les zones sensibles de votre exploitation",
      "Contrôler les flux entrant et sortant",
      "Sécuriser les flux d'argent et de marchandises",
      "Sécuriser la périphérie : parking, circulations extérieures, réserves",
      "Contrôler, enregistrer, analyser et transmettre depuis votre PC ou smartphone",
    ],
    image: "/api/media/wp-content/uploads/2020/06/Artboard-13.jpg",
    href: "https://technovation.ma/videosurveillance/",
    featured: true,
  },
  {
    slug: "telephonie-ip",
    icon: "PhoneCall",
    title: "Téléphonie IP",
    short: "Un service clé en main de téléphonie fixe sur Internet.",
    text: "Un véritable service clé en main dédié aux entreprises, la téléphonie fixe sur Internet (IP) vous permet d'échanger sans contraintes et de bénéficier de fonctionnalités riches et évolutives. La téléphonie IP est la solution la plus simple à déployer en termes de technologie de communication.",
    points: [
      "Votre ligne fixe utilisable sur votre mobile ou votre ordinateur",
      "Des applications intuitives et des fonctionnalités convergentes",
      "Un pilotage d'activité en quelques clics grâce aux indicateurs",
    ],
    image: "/api/media/wp-content/uploads/2020/07/rm22-132-kul-10.jpg",
    href: "https://technovation.ma/telephonie-ip/",
    featured: true,
  },
  {
    slug: "vente-installation",
    icon: "PackageCheck",
    title: "Vente & Installation",
    short: "Le matériel informatique adapté à vos besoins, choisi chez les leaders du marché.",
    text: "Si les produits que nous offrons sont de haute qualité, c'est parce que nous choisissons nos fabricants partenaires parmi les leaders du marché, et selon des critères de choix : la qualité du matériel et les possibilités de renouvellement, l'efficacité des échanges techniques, mais aussi la réactivité de leur service après-vente.",
    points: [],
    image: null,
    href: "https://technovation.ma/vente-installation/",
    featured: true,
  },
  {
    slug: "maintenance",
    icon: "Wrench",
    title: "Maintenance",
    short: "Sur site, externalisée ou à distance, pour la continuité de votre activité.",
    text: "La maintenance de votre parc est indispensable à son bon fonctionnement. C'est la certitude d'apporter aux utilisateurs une prestation de qualité et au système d'information une maintenance fiable et adaptée.",
    points: [
      "Maintenance sur site : nos spécialistes collaborent avec vos équipes, sur place",
      "Externaliser sa maintenance : un contrat lié à une obligation de résultat",
      "Télémaintenance : le savoir-faire de nos techniciens dans un délai très rapide",
    ],
    image: "/api/media/wp-content/uploads/2020/07/Artboard-1.jpg",
    href: "https://technovation.ma/maintenance-casablanca/",
    featured: true,
  },
  {
    slug: "audit-conseil",
    icon: "ClipboardList",
    title: "Audit & Conseil",
    short: "La première démarche de tout projet informatique.",
    text: "La première démarche de tout projet informatique.",
    points: [],
    image: null,
    // Cité sur la page « À propos de nous », sans page dédiée.
    href: null,
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

// Logos du carrousel « partenaires » de la page Vente – Installation de
// technovation.ma. Ce sont les fichiers réellement publiés par Technovation.
//
// `name` n'est renseigné que lorsque le nom de fichier l'établit sans doute :
// les autres logos s'affichent sans étiquette plutôt que d'être mal nommés.
// À compléter par Technovation.
const LOGO = "/api/media/wp-content/uploads/2020/07";

export const partners = [
  { file: `${LOGO}/1.png`, name: null },
  { file: `${LOGO}/2.png`, name: null },
  { file: `${LOGO}/Untitled-1.png`, name: null },
  { file: `${LOGO}/Untitled-2.png`, name: null },
  { file: `${LOGO}/Untitled-2-1.png`, name: null },
  { file: `${LOGO}/Untitled-3.png`, name: null },
  { file: `${LOGO}/qcq.png`, name: null },
  { file: `${LOGO}/grs.png`, name: null },
  { file: `${LOGO}/canon-1.png`, name: "Canon" },
  { file: `${LOGO}/microsoftlogo.png`, name: "Microsoft" },
  { file: `${LOGO}/kasp.png`, name: "Kaspersky" },
  { file: `${LOGO}/qnap.png`, name: "QNAP" },
  { file: `${LOGO}/Transcend.jpg`, name: "Transcend" },
  { file: `${LOGO}/western-digital-corp.-500x500-1.jpg`, name: "Western Digital" },
  { file: `${LOGO}/jabrea-jpg.png`, name: "Jabra" },
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
