"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Compteur animé au premier passage à l'écran.
 *
 * Les valeurs non numériques (« Casablanca ») sont rendues telles quelles :
 * on n'anime que ce qui se compte.
 */
export default function Counter({ value, prefix = "", suffix = "", duration = 1400 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  const parsed = Number(value);
  const numeric = Number.isFinite(parsed);
  // `Number("Casablanca")` vaut NaN, et NaN !== NaN : le laisser dans un tableau
  // de dépendances relancerait l'effet à chaque rendu.
  const target = numeric ? parsed : 0;

  // Le rendu serveur affiche directement la valeur finale : sans JavaScript —
  // ou pour un crawler — la page annonce le vrai chiffre, pas « 0 ». Le retour
  // à zéro n'a lieu qu'au montage côté client, juste avant l'animation.
  const [display, setDisplay] = useState(target);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (!numeric || reduce) return;
    setDisplay(0);
    setArmed(true);
  }, [numeric, reduce]);

  useEffect(() => {
    if (!armed || !inView) return;

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutCubic : rapide au départ, ralentit sur la fin.
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [armed, inView, target, duration]);

  if (!numeric) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("fr-FR").replace(/,/g, " ")}
      {suffix}
    </span>
  );
}
