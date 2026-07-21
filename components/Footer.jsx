import Image from "next/image";
import { Facebook } from "lucide-react";
import { site, contact, services, legalPages } from "@/lib/tokens";

export default function Footer() {
  return (
    <footer className="bg-ink text-[#8FA6C0] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <Image
              src={site.logo}
              alt={site.name}
              width={38}
              height={38}
              className="rounded-lg object-contain"
            />
            <span className="font-extrabold text-white">
              TECHNO<span className="text-primary-bright">VATION</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">{contact.address}</p>
        </div>

        <div>
          <h3 className="font-bold text-white text-sm mb-4">Nos services</h3>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="hover:text-white transition">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white text-sm mb-4">Informations</h3>
          <ul className="space-y-2.5 text-sm">
            {legalPages.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="hover:text-white transition">{p.t}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white text-sm mb-4">Nous contacter</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-white transition">{contact.email}</a>
            </li>
            {contact.phones.map((p) => (
              <li key={p}>
                <a href={`tel:+212${p.replace(/\s/g, "").slice(1)}`} className="hover:text-white transition">
                  Tél : {p}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="font-bold text-white text-sm mt-6 mb-3">Nous suivre</h3>
          {/* Seul Facebook est vérifié — voir wordpress/CONTENU.md */}
          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Technovation sur Facebook"
            className="inline-grid place-items-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
          >
            <Facebook size={17} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col sm:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} Technovation.ma — Tous droits réservés.</span>
          <span className="flex gap-5">
            <a href="https://technovation.ma/mentions-legales/" className="hover:text-white transition">Mentions légales</a>
            <a href="https://technovation.ma/politique-de-confidentialite/" className="hover:text-white transition">Politique de confidentialité</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
