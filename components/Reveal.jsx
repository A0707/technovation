"use client";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Apparition au défilement.
 *
 * Isolé dans un composant client pour que les sections qui l'utilisent restent
 * des composants serveur — seul ce wrapper part dans le bundle navigateur.
 *
 * `useReducedMotion` neutralise le déplacement pour les personnes ayant activé
 * la réduction d'animations : le contenu apparaît directement, sans glissement.
 */
export default function Reveal({ children, delay = 0, y = 18, className = "" }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduce ? 0.2 : 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
