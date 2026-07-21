"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const FALLBACK_MS = 1200;

/**
 * Apparition au défilement.
 *
 * L'animation est un agrément, jamais une condition d'affichage. Le contenu
 * est visible par défaut ; on ne bascule sur la version animée qu'après avoir
 * vérifié, via un `requestAnimationFrame`, que le moteur d'animation tourne
 * vraiment. Résultat : rendu serveur, navigateur sans JavaScript, animations
 * réduites ou moteur de rendu partiel affichent tous le contenu.
 *
 * Un filet supplémentaire force l'état final au bout de FALLBACK_MS si
 * l'IntersectionObserver ne se déclenche jamais.
 */
export default function Reveal({ children, delay = 0, y = 18, className = "" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [canAnimate, setCanAnimate] = useState(false);
  const [show, setShow] = useState(false);

  // Une frame suffit à confirmer que rAF s'exécute. Le basculement est
  // imperceptible (~16 ms) et évite tout risque de contenu masqué.
  useEffect(() => {
    const frame = requestAnimationFrame(() => setCanAnimate(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (inView) setShow(true);
  }, [inView]);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), FALLBACK_MS);
    return () => clearTimeout(timer);
  }, []);

  if (reduce || !canAnimate) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
