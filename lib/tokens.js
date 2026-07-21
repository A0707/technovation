// Design tokens — single source of truth (maps to tailwind.config.js)
export const c = {
  ink: "#0B1220",
  ink2: "#111C2E",
  slate: "#5B6B82",
  line: "#E3E8EF",
  bg: "#FFFFFF",
  surface: "#F6F8FB",
  primary: "#0E8FA3",
  primaryBright: "#12B5CB",
  primarySoft: "#E6F6F9",
  accent: "#F5A524",
  accentDark: "#D98A0B",
  success: "#16A34A",
  danger: "#E11D48",
};

export const display = "var(--font-display)";
export const body = "var(--font-body)";
export const mono = "var(--font-mono)";

export const fmt = (n) =>
  n.toLocaleString("fr-FR").replace(/,/g, " ") + " DH";

// ---------------------------------------------------------------------------
// Catalogue — relevé sur l'API WooCommerce Store de technovation.ma (21/07/2026)
// Endpoint public, sans clé : /wp-json/wc/store/v1/products/categories
// Ces données sont un instantané de secours ; elles seront remplacées par un
// fetch live via lib/woo.js. Ne pas inventer de compteurs : ils sont vérifiables.
// ---------------------------------------------------------------------------

// Les 23 catégories réelles de la boutique, comptes exacts.
export const allCategories = [
  { name: "Écrans", slug: "ecran", count: 57, icon: "Monitor", d: "19\" à 34\", incurvés, portables" },
  { name: "Ordinateurs de bureau", slug: "ordinateur-bureau", count: 45, icon: "Monitor", d: "Tour, SFF, stations de travail" },
  { name: "Imprimantes jet d'encre", slug: "imprimante-jet-dencre", count: 36, icon: "Printer", d: "EcoTank, Ink Tank, A3+" },
  { name: "Sacoches & sacs à dos", slug: "sacoche", count: 26, icon: "Briefcase", d: "13\" à 17\", Rivacase, HP" },
  { name: "Imprimantes laser", slug: "imprimante-laser", count: 24, icon: "Printer", d: "Mono, couleur, multifonction" },
  { name: "Onduleurs", slug: "onduleur", count: 17, icon: "BatteryCharging", d: "Eaton, APC — 650 VA à 3 kVA" },
  { name: "Tout en un (All in One)", slug: "all-in-one", count: 17, icon: "Monitor", d: "HP Pavilion, AiO 22\" à 24\"" },
  { name: "Vidéoprojecteurs", slug: "videoprojecteur", count: 17, icon: "Projector", d: "Epson, WXGA, Full HD" },
  { name: "Serveurs", slug: "serveur", count: 15, icon: "Server", d: "Tour, rack, NAS" },
  { name: "Claviers & souris", slug: "clavier-souris", count: 13, icon: "Keyboard", d: "Filaire, sans fil, packs" },
  { name: "Écrans de projection", slug: "ecran-projection", count: 11, icon: "Presentation", d: "Trépied, mural, motorisé" },
  { name: "Disques durs internes", slug: "disque-interne", count: 9, icon: "HardDrive", d: "SATA, SAS, 3.5\" et 2.5\"" },
  { name: "Logiciels", slug: "logiciel", count: 9, icon: "FileText", d: "Windows, Office 365, licences" },
  { name: "Téléviseurs", slug: "televiseur", count: 9, icon: "Tv", d: "Affichage dynamique, salles" },
  { name: "Mémoire", slug: "memoire", count: 8, icon: "MemoryStick", d: "DDR4, DDR5, barrettes serveur" },
  { name: "Ordinateurs portables", slug: "ordinateur-portable", count: 8, icon: "Laptop", d: "ProBook, ThinkPad, ZBook" },
  { name: "Clés USB", slug: "usb", count: 6, icon: "Usb", d: "16 Go à 256 Go" },
  { name: "Scanners", slug: "scanner", count: 6, icon: "ScanLine", d: "À plat, chargeur automatique" },
  { name: "Disques durs externes", slug: "disque-externe", count: 4, icon: "HardDrive", d: "USB 3.0, 1 To à 5 To" },
  { name: "Disques SSD", slug: "disque-dur-ssd", count: 4, icon: "HardDrive", d: "SATA, NVMe M.2" },
  { name: "Tablettes", slug: "tablette", count: 3, icon: "Tablet", d: "Android, Windows" },
  { name: "Fax & télécopieurs", slug: "fax-telecopieur", count: 2, icon: "Printer", d: "Laser, jet d'encre" },
  { name: "Imprimantes matricielles", slug: "imprimante-matricielle", count: 2, icon: "Printer", d: "Épson LQ, liasses" },
];

// Sous-ensemble mis en avant sur la homepage (grille 4×2).
export const categories = allCategories.slice(0, 8);

// Marques réellement présentes au catalogue.
export const brands = ["HP", "Lenovo", "Dell", "Epson", "Samsung", "ASUS", "Microsoft", "Eaton", "Rivacase", "Canon", "APC", "Seagate"];

// ---------------------------------------------------------------------------
// Produits — noms, prix, SKU, slugs et visuels réels (API Store, 21/07/2026).
// `stock` reflète l'état réel : ne pas afficher « En stock » en dur.
// Aucun avis client n'existe sur la boutique (0 review sur 346 produits) :
// pas de note affichée tant qu'il n'y en a pas.
// ---------------------------------------------------------------------------
export const products = [
  {
    name: "HP ProBook 450 G10 i7",
    slug: "hp-probook-450-g10-i7",
    sku: "450G10-I7",
    cat: "Ordinateur portable",
    price: 11640,
    stock: true,
    img: "https://technovation.ma/wp-content/uploads/2024/02/ordinateur-portable-hp-probook-450-g10-85d06ea.jpg",
  },
  {
    name: "Lenovo ThinkPad L14 i5-1335U 14\" FHD IPS 8 Go 512 Go SSD Win 11 Pro",
    slug: "lenovo-thinkpad-l14-i5-1335u",
    sku: "L14-I5",
    cat: "Ordinateur portable",
    price: 13800,
    old: 15000,
    badge: "Promo",
    stock: true,
  },
  {
    name: "HP ZBook Fury 16 G10 i7-13700HX 16 Go 512 Go SSD CG 6 Go",
    slug: "hp-zbook-fury-16-g10",
    sku: "ZBOOK16-G10",
    cat: "Station de travail",
    price: 32000,
    stock: true,
  },
  {
    name: "Écran 27\" Full HD HP V27i",
    slug: "9sv94aa-ecran-27-full-hd-hp-v27i",
    sku: "9SV94AA",
    cat: "Écran",
    price: 2930,
    stock: true,
    img: "https://technovation.ma/wp-content/uploads/2022/05/ecran-19-5-hd-dell-e2016hv-1-9.jpg",
  },
  {
    name: "Epson EcoTank L6570 — multifonction à réservoirs rechargeables",
    slug: "epson-ecotank-l6570",
    sku: "C11CJ29403",
    cat: "Imprimante jet d'encre",
    price: 10990,
    stock: true,
  },
  {
    name: "Station de travail HP Z4 G4",
    slug: "station-de-travail-hp-z4-g4",
    sku: "1JP11AV",
    cat: "Ordinateur de bureau",
    price: 26290,
    stock: true,
  },
];

// ---------------------------------------------------------------------------
// Services — les 6 pôles réellement publiés sur technovation.ma.
// Chaque `href` pointe vers la page existante : le contenu ne se perd pas.
// ---------------------------------------------------------------------------
export const solutions = [
  { icon: "Wrench", t: "Maintenance", d: "Contrats de maintenance préventive et curative du parc informatique.", href: "/services/maintenance" },
  { icon: "Network", t: "Déploiement d'infrastructure réseau", d: "Câblage, switching, VLAN, haute disponibilité.", href: "/services/deploiement-infrastructure-reseau" },
  { icon: "ShoppingBag", t: "Vente & Installation", d: "Fourniture, configuration et mise en service du matériel.", href: "/services/vente-installation" },
  { icon: "Cctv", t: "Vidéosurveillance", d: "Caméras IP, NVR, supervision à distance.", href: "/services/videosurveillance" },
  { icon: "Shield", t: "Protection", d: "Antivirus, pare-feu, sauvegarde et continuité de service.", href: "/services/protection" },
  { icon: "Phone", t: "Téléphonie IP", d: "Standards IP, postes SIP, trunk et convergence voix-données.", href: "/services/telephonie-ip" },
];

// Chiffres vérifiés sur le catalogue live — pas de promesse commerciale inventée.
// (Les claims type « X années d'expérience » / « SLA 99,9 % » doivent être
// confirmés par Technovation avant publication : voir l'audit.)
export const stats = [
  { k: "346", l: "références en catalogue" },
  { k: "23", l: "catégories produits" },
  { k: "6", l: "services IT dédiés" },
  { k: "25", l: "promotions en cours" },
];

// Pages institutionnelles présentes sur l'ancien site — à ne pas perdre.
export const legalPages = [
  { t: "À propos de nous", href: "/a-propos" },
  { t: "Livraison", href: "/livraison" },
  { t: "Conditions générales de vente", href: "/cgv" },
  { t: "Mentions légales", href: "/mentions-legales" },
  { t: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { t: "Contactez-nous", href: "/contact" },
];

export const contact = {
  address: "46 Boulevard Zerktouni, 2ème étage, Appartement N° 6 — Casablanca, Maroc",
  addressShort: "46 Bd Zerktouni, Casablanca",
  email: "Contact@technovation.ma",
  phones: ["06 07 173 005", "07 66 605 690"],
  facebook: "https://www.facebook.com/Technovationmaroc/",
};
