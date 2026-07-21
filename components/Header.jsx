"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, Phone, Menu, X, ChevronDown, ChevronRight, Zap } from "lucide-react";
import { site, contact, nav, services } from "@/lib/tokens";
import { icon } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Le tiroir mobile occupe tout l'écran : on bloque le défilement du document
  // derrière, sinon le fond continue de glisser sous le doigt.
  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawer]);

  // Échap ferme le méga-menu et le tiroir (WCAG 2.1.2).
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") { setMega(false); setDrawer(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-line transition-shadow ${
        scrolled ? "bg-white/85 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
      onMouseLeave={() => setMega(false)}
    >
      <div className="max-w-7xl mx-auto px-5 h-20 flex items-center gap-6">
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src={site.logo}
            alt={`${site.name} — ${site.tagline}`}
            width={44}
            height={44}
            className="rounded-lg object-contain"
            priority
          />
          <span className="leading-tight">
            <span className="block font-extrabold text-lg tracking-tight">
              TECHNO<span className="text-primary">VATION</span>
            </span>
            <span className="block text-[11px] text-slateink">{site.tagline}</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 mx-auto text-sm font-semibold uppercase">
          {nav.map((item) =>
            item.mega ? (
              <button
                key={item.label}
                onClick={() => setMega((v) => !v)}
                onMouseEnter={() => setMega(true)}
                aria-expanded={mega}
                className="px-3 py-2 flex items-center gap-1 border-b-2 border-transparent hover:text-primary hover:border-primary transition"
              >
                {item.label} <ChevronDown size={14} className="opacity-60" />
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 border-b-2 border-transparent hover:text-primary hover:border-primary transition"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden xl:flex items-center gap-2 rounded-xl border border-line bg-surface px-3 h-10 w-56">
          <Search size={16} className="text-slateink shrink-0" aria-hidden="true" />
          <label htmlFor="q" className="sr-only">Rechercher un produit</label>
          <input
            id="q"
            placeholder="Rechercher…"
            className="bg-transparent text-sm w-full outline-none"
          />
        </div>

        <a href={`tel:${contact.phoneIntl}`} className="hidden lg:block text-right shrink-0">
          <span className="block font-extrabold leading-tight">{contact.phones[0]}</span>
          <span className="block text-[11px] text-slateink">Appelez-nous</span>
        </a>

        <a
          href="https://technovation.ma/contactez-nous/"
          className="hidden sm:inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-accent hover:bg-accent-dark text-white font-bold text-sm uppercase transition shrink-0"
        >
          <Zap size={16} aria-hidden="true" /> Demander un devis
        </a>

        <button
          onClick={() => setDrawer(true)}
          aria-label="Ouvrir le menu"
          className="lg:hidden ml-auto grid place-items-center w-10 h-10 rounded-xl hover:bg-surface"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Méga-menu services */}
      {mega && (
        <div className="hidden lg:block border-t border-line bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-5 py-6 grid grid-cols-3 gap-4">
            {services.map((s) => {
              const I = icon(s.icon);
              return (
                <a key={s.href} href={s.href} className="flex gap-3 p-3 rounded-xl hover:bg-surface transition">
                  <span className="w-10 h-10 rounded-lg grid place-items-center bg-primary-soft text-primary shrink-0">
                    <I size={19} />
                  </span>
                  <span>
                    <span className="block font-bold text-sm">{s.title}</span>
                    <span className="block text-xs text-slateink mt-0.5 line-clamp-2">{s.text}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Tiroir mobile */}
      {drawer && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setDrawer(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white p-5 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="font-extrabold">Menu</span>
              <button onClick={() => setDrawer(false)} aria-label="Fermer le menu" className="w-9 h-9 grid place-items-center rounded-lg hover:bg-surface">
                <X size={22} />
              </button>
            </div>

            <nav className="space-y-1 font-semibold">
              {nav.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setDrawer(false)} className="flex items-center justify-between py-3 border-b border-line">
                  {item.label} <ChevronRight size={17} className="opacity-50" />
                </a>
              ))}
            </nav>

            <div className="mt-6 space-y-2 text-sm">
              {contact.phones.map((p) => (
                <a key={p} href={`tel:+212${p.replace(/\s/g, "").slice(1)}`} className="flex items-center gap-2 text-slateink">
                  <Phone size={15} aria-hidden="true" /> {p}
                </a>
              ))}
            </div>

            <a
              href="https://technovation.ma/contactez-nous/"
              className="mt-6 flex items-center justify-center gap-2 h-12 rounded-xl bg-accent text-white font-bold uppercase text-sm"
            >
              <Zap size={18} aria-hidden="true" /> Demander un devis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
