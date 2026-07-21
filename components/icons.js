// Registre d'icônes partagé — source unique pour Nav, Categories et Solutions.
// Auparavant chaque composant redéclarait sa propre map : un `icon` ajouté dans
// lib/tokens.js s'affichait dans un composant et disparaissait dans l'autre.
import {
  Laptop, Monitor, Server, Network, Cctv, Printer, HardDrive, Keyboard, Usb,
  Tv, Tablet, ScanLine, Briefcase, MemoryStick, BatteryCharging, Projector,
  Presentation, FileText, Shield, Wifi, Cloud, Wrench, ShoppingBag, Phone,
  Package,
} from "lucide-react";

const REGISTRY = {
  Laptop, Monitor, Server, Network, Cctv, Printer, HardDrive, Keyboard, Usb,
  Tv, Tablet, ScanLine, Briefcase, MemoryStick, BatteryCharging, Projector,
  Presentation, FileText, Shield, Wifi, Cloud, Wrench, ShoppingBag, Phone,
};

/** Renvoie toujours un composant valide — `Package` sert de repli. */
export const icon = (name) => REGISTRY[name] || Package;
