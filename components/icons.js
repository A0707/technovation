// Registre d'icônes partagé — source unique pour tous les composants.
// Une map par composant finissait toujours par diverger de lib/tokens.js.
import {
  Network, ShieldCheck, Cctv, Fingerprint, Server, Wrench, PhoneCall,
  PackageCheck, Building2, Users, Headphones, BadgeCheck, Clock, Zap,
  ClipboardList, Package,
} from "lucide-react";

const REGISTRY = {
  Network, ShieldCheck, Cctv, Fingerprint, Server, Wrench, PhoneCall,
  PackageCheck, Building2, Users, Headphones, BadgeCheck, Clock, Zap,
  ClipboardList,
};

/** Renvoie toujours un composant valide — `Package` sert de repli. */
export const icon = (name) => REGISTRY[name] || Package;
