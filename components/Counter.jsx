"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Compteur animé au premier passage à l'écran.
 *
 * La valeur finale est la valeur par défaut, côté serveur comme côté client :
 * sans JavaScript, avec les animations réduites, ou si l'IntersectionObserver
 * ne se déclenche jamais, la page affiche le vrai chiffre — jamais « 0 ».
 * Le décompte depuis zéro ne démarre que si l'élément est réellement vu.
 *
 * Les valeurs non numériques (« 24/7 ») sont rendues telles quelles.
 */
export default function Counter({ value, prefix = "", suffix = "", duration = 1400 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  const parsed = Number(value);
  const numeric = Number.isFinite(parsed);
  // `Number("24/7")` vaut NaN, et NaN !== NaN : le laisser dans un tableau de
  // dépendances relancerait l'effet à chaque rendu.
  const target = numeric ? parsed : 0;

  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!inView || !numeric || reduce) return;

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
  }, [inView, numeric, reduce, target, duration]);

  if (!numeric) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("fr-FR").replace(/,/g, " ")}
      {suffix}
    </span>
  );
}
