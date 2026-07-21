"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ShoppingCart, FileCheck2, Timer, Headphones, Server } from "lucide-react";
import { site } from "@/lib/tokens";
import { Button } from "./ui/button";

const BADGES = [
  { icon: FileCheck2, label: "Devis gratuit" },
  { icon: Timer, label: "Intervention rapide" },
  { icon: Headphones, label: "Support professionnel" },
];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Parallaxe volontairement discrète : au-delà de ~40 px le décalage se lit
  // comme un défaut d'alignement plutôt que comme de la profondeur.
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);

  return (
    <section ref={ref} className="relative bg-gradient-ink text-white overflow-hidden">
      {/* Trame de points — évoque la baie de serveurs sans image à charger. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Halo bleu, côté visuel. */}
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, #0057FF 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl lg:text-[3.4rem] font-extrabold leading-[1.08]">
            Solutions Informatiques<br />
            &amp; Sécurité pour les<br />
            <span className="text-primary-bright">Entreprises</span> au Maroc
          </h1>

          <p className="mt-6 text-[#C3D2E4] text-lg max-w-xl leading-relaxed">
            Technovation accompagne les entreprises dans leur transformation
            digitale grâce à des solutions complètes et sur mesure.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="/contact">
                Demander un devis <ArrowRight size={18} aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="/boutique">
                Découvrir la boutique <ShoppingCart size={18} aria-hidden="true" />
              </a>
            </Button>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#C3D2E4]">
            {BADGES.map(({ icon: I, label }) => (
              <li key={label} className="flex items-center gap-2">
                <I size={16} className="text-primary-bright" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div style={{ y }} className="relative">
          <div className="relative aspect-[4/3] rounded-card overflow-hidden ring-1 ring-white/10 shadow-float">
            {site.heroImage ? (
              <>
                <Image
                  src={site.heroImage}
                  alt="Équipe Technovation en intervention"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                {/* Voile sombre : garantit le contraste quelle que soit la photo. */}
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/80 via-ink/40 to-transparent" />
              </>
            ) : (
              /* Emplacement en attente d'une photo de Technovation. Publier une
                 image de banque en la présentant comme leurs locaux serait
                 trompeur — voir wordpress/CONTENU.md. */
              <div className="absolute inset-0 grid place-items-center bg-ink2/60 border border-white/10">
                <div className="text-center px-6">
                  <Server size={44} className="mx-auto text-primary-bright opacity-70" aria-hidden="true" />
                  <p className="mt-4 text-sm text-[#8FA6C0] max-w-xs">
                    Emplacement réservé à une photo de vos équipes ou de vos
                    installations.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
