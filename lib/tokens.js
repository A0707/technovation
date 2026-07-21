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

export const categories = [
  { icon: "Laptop", name: "Ordinateurs portables", count: 42, d: "ProBook, ThinkPad, ZBook" },
  { icon: "Monitor", name: "PC & Stations de travail", count: 28, d: "Bureau, AiO, Workstation" },
  { icon: "Server", name: "Serveurs", count: 15, d: "Tour, Rack, NAS" },
  { icon: "Network", name: "Réseau & Sécurité", count: 34, d: "Switch, Firewall, WiFi" },
  { icon: "Cctv", name: "Vidéosurveillance", count: 22, d: "Caméras IP, NVR" },
  { icon: "Printer", name: "Impression", count: 31, d: "Laser, EcoTank, Scanner" },
  { icon: "Monitor", name: "Écrans", count: 26, d: "24\" à 34\" incurvés" },
  { icon: "HardDrive", name: "Stockage", count: 19, d: "SSD, NAS, Externe" },
];

export const brands = ["HP", "Dell", "Lenovo", "Cisco", "Fortinet", "Epson", "Microsoft", "Canon", "WD", "Seagate", "Hikvision", "QNAP"];

export const products = [
  { name: "HP ProBook 450 G10 i7", cat: "Portable Pro", price: 11640, badge: "Pro", rating: 4.8 },
  { name: "Lenovo ThinkPad L14 i5", cat: "Portable Pro", price: 13800, old: 15000, badge: "Promo", rating: 4.9 },
  { name: "HP ZBook Fury 16 G10 i7", cat: "Workstation", price: 32000, badge: "Puissance", rating: 5.0 },
  { name: "Lenovo ThinkBook 15 i7 512Go", cat: "Portable Pro", price: 9588, badge: "Best-seller", rating: 4.7 },
  { name: "Epson EcoTank L6570", cat: "Impression", price: 10990, badge: null, rating: 4.6 },
  { name: "Écran HP V27i 27\" Full HD", cat: "Écran", price: 2930, badge: null, rating: 4.5 },
];

export const solutions = [
  { icon: "Network", t: "Infrastructure & Réseau", d: "Câblage, switching, VLAN, haute disponibilité." },
  { icon: "Server", t: "Serveurs & Virtualisation", d: "Déploiement, cluster, sauvegarde, PRA." },
  { icon: "Shield", t: "Cybersécurité & Firewall", d: "Fortinet, filtrage, VPN, durcissement." },
  { icon: "Wifi", t: "WiFi Entreprise", d: "Couverture, contrôleurs, portail captif." },
  { icon: "Cctv", t: "Vidéosurveillance", d: "Caméras IP, NVR, supervision à distance." },
  { icon: "Cloud", t: "Cloud & Sauvegarde", d: "Microsoft 365, backup, continuité." },
];

export const stats = [
  { k: "12+", l: "années d'expertise" },
  { k: "500+", l: "clients entreprises" },
  { k: "99,9%", l: "disponibilité SLA" },
  { k: "< 4h", l: "délai d'intervention" },
];
