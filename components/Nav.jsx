"use client";
import React, { useState, useEffect } from "react";
import {
  Search, ShoppingCart, User, Phone, MessageCircle, Menu, X, ChevronDown,
  ChevronRight, MapPin, Activity, Zap, Network, Server, Shield, Wifi, Cctv, Cloud,
} from "lucide-react";
import { c, display, mono, solutions } from "@/lib/tokens";

const ICONS = { Network, Server, Shield, Wifi, Cctv, Cloud };

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [openMega, setOpenMega] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* top bar */}
      <div style={{ background: c.ink, color: "#C7D2DF", fontFamily: mono }} className="hidden md:block text-xs">
        <div className="max-w-7xl mx-auto px-5 h-9 flex items-center justify-between">
          <span className="flex items-center gap-2"><MapPin size={13} /> 46 Bd Zerktouni, Casablanca • MAROC</span>
          <span className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><Phone size={13} /> 06 07 173 005</span>
            <span className="flex items-center gap-1.5"><Activity size={13} style={{ color: c.primaryBright }} /> Support B2B actif</span>
          </span>
        </div>
      </div>

      {/* header */}
      <header
        style={{ borderBottom: `1px solid ${c.line}`, background: "rgba(255,255,255,.9)", backdropFilter: "blur(8px)" }}
        className={`sticky top-0 z-40 ${scrolled ? "shadow-sm" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center gap-4">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div style={{ background: c.ink, color: "#fff", fontFamily: display }} className="w-9 h-9 rounded-lg grid place-items-center font-extrabold">T</div>
            <span style={{ fontFamily: display }} className="font-extrabold text-lg tracking-tight">TECHNOVATION</span>
          </a>

          <nav style={{ fontFamily: display }} className="hidden lg:flex items-center gap-1 ml-3 text-sm font-semibold">
            <button onClick={() => setOpenMega(!openMega)} className="px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-gray-50">
              Solutions <ChevronDown size={15} className="opacity-60" />
            </button>
            {["Ordinateurs", "Réseau & Sécurité", "Impression", "Services"].map((x) => (
              <a key={x} href="#" className="px-3 py-2 rounded-lg hover:bg-gray-50">{x}</a>
            ))}
          </nav>

          <div className="hidden md:flex flex-1 max-w-md mx-auto">
            <div style={{ border: `1px solid ${c.line}`, background: c.surface }} className="flex items-center gap-2 w-full rounded-xl px-3 h-10">
              <Search size={17} style={{ color: c.slate }} />
              <input aria-label="Rechercher" placeholder="Rechercher un produit, une marque, une référence…" className="bg-transparent text-sm w-full outline-none" />
            </div>
          </div>

          <div className="flex items-center gap-1.5 ml-auto lg:ml-0">
            <a href="#" style={{ background: c.accent, color: c.ink, fontFamily: display }} className="hidden sm:flex items-center gap-1.5 h-10 px-4 rounded-xl font-bold text-sm lift">
              <Zap size={16} /> Devis
            </a>
            <a href="#" aria-label="WhatsApp" style={{ color: c.success }} className="hidden sm:grid place-items-center w-10 h-10 rounded-xl hover:bg-gray-50"><MessageCircle size={20} /></a>
            <a href="#" aria-label="Compte" className="hidden sm:grid place-items-center w-10 h-10 rounded-xl hover:bg-gray-50"><User size={20} /></a>
            <a href="#" aria-label="Panier" className="relative grid place-items-center w-10 h-10 rounded-xl hover:bg-gray-50">
              <ShoppingCart size={20} />
              <span style={{ background: c.primary }} className="absolute top-1 right-1 text-white text-[10px] w-4 h-4 grid place-items-center rounded-full">0</span>
            </a>
            <button onClick={() => setMobile(true)} aria-label="Ouvrir le menu" className="lg:hidden grid place-items-center w-10 h-10 rounded-xl hover:bg-gray-50"><Menu size={22} /></button>
          </div>
        </div>

        {openMega && (
          <div style={{ borderTop: `1px solid ${c.line}`, background: "#fff" }} className="hidden lg:block reveal">
            <div className="max-w-7xl mx-auto px-5 py-6 grid grid-cols-3 gap-6">
              {solutions.map((s, i) => {
                const I = ICONS[s.icon];
                return (
                  <a key={i} href="#" className="flex gap-3 p-3 rounded-xl hover:bg-gray-50">
                    <div style={{ background: c.primarySoft, color: c.primary }} className="w-10 h-10 rounded-lg grid place-items-center shrink-0">{I && <I size={19} />}</div>
                    <div>
                      <div style={{ fontFamily: display }} className="font-bold text-sm">{s.t}</div>
                      <div style={{ color: c.slate }} className="text-xs mt-0.5">{s.d}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* mobile bottom nav */}
      <div style={{ background: "#fff", borderTop: `1px solid ${c.line}` }} className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-4 h-16">
        {[[Menu, "Menu", () => setMobile(true)], [Search, "Rechercher", null], [MessageCircle, "WhatsApp", null], [ShoppingCart, "Panier", null]].map(([I, t, fn], i) => (
          <button key={i} onClick={fn || undefined} className="flex flex-col items-center justify-center gap-1">
            <I size={20} style={{ color: c.ink }} />
            <span style={{ color: c.slate }} className="text-[10px]">{t}</span>
          </button>
        ))}
      </div>

      <a href="#" style={{ background: c.accent, color: c.ink, fontFamily: display }} className="lg:hidden fixed bottom-20 right-4 z-40 flex items-center gap-2 h-12 px-5 rounded-full font-bold shadow-lg">
        <Zap size={18} /> Devis
      </a>

      {/* mobile drawer */}
      {mobile && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobile(false)} />
          <div style={{ background: "#fff" }} className="absolute right-0 top-0 h-full w-80 max-w-[85%] p-5 overflow-y-auto reveal">
            <div className="flex items-center justify-between mb-6">
              <span style={{ fontFamily: display }} className="font-extrabold">Menu</span>
              <button onClick={() => setMobile(false)} aria-label="Fermer" className="w-9 h-9 grid place-items-center rounded-lg hover:bg-gray-50"><X size={22} /></button>
            </div>
            <nav style={{ fontFamily: display }} className="space-y-1 font-semibold">
              {["Solutions", "Ordinateurs", "Réseau & Sécurité", "Impression", "Vidéosurveillance", "Services", "Mon compte"].map((x) => (
                <a key={x} href="#" style={{ borderBottom: `1px solid ${c.line}` }} className="flex items-center justify-between py-3">{x}<ChevronRight size={17} className="opacity-50" /></a>
              ))}
            </nav>
            <a href="#" style={{ background: c.accent, color: c.ink, fontFamily: display }} className="mt-6 flex items-center justify-center gap-2 h-12 rounded-xl font-bold">
              <Zap size={18} /> Demander un devis
            </a>
          </div>
        </div>
      )}
    </>
  );
}
