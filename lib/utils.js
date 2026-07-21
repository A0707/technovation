import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fusionne des classes Tailwind en résolvant les conflits.
 * `cn("p-4", "p-6")` renvoie "p-6" — indispensable pour que les classes
 * passées en prop puissent surcharger celles du composant.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
