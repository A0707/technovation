import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { contact } from "@/lib/tokens";
import Reveal from "./Reveal";

const MAP_QUERY = encodeURIComponent("46 Boulevard Zerktouni, Casablanca, Maroc");

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-[#C3D2E4]">
      <div className="max-w-7xl mx-auto px-5 py-16 grid lg:grid-cols-3 gap-10">
        <Reveal>
          <h2 className="text-2xl font-extrabold text-white leading-snug">
            Besoin d&apos;une solution<br />pour votre entreprise ?
          </h2>
          <p className="mt-3 text-sm">
            Contactez-nous dès aujourd&apos;hui pour un devis gratuit et personnalisé.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            {contact.phones.map((p) => (
              <li key={p}>
                <a href={`tel:+212${p.replace(/\s/g, "").slice(1)}`} className="flex items-center gap-3 hover:text-white transition">
                  <Phone size={17} className="text-primary-bright shrink-0" aria-hidden="true" /> {p}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-white transition">
                <Mail size={17} className="text-primary-bright shrink-0" aria-hidden="true" /> {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={17} className="text-primary-bright shrink-0 mt-0.5" aria-hidden="true" />
              {contact.address}
            </li>
            <li>
              {/* ⚠️ Numéro WhatsApp à confirmer : on reprend la ligne principale. */}
              <a
                href={`https://wa.me/${contact.phoneIntl.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <MessageCircle size={17} className="text-[#25D366] shrink-0" aria-hidden="true" /> WhatsApp
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <iframe
            title="Localisation de Technovation à Casablanca"
            src={`https://maps.google.com/maps?q=${MAP_QUERY}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[260px] rounded-card border-0"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <h3 className="font-bold text-white uppercase text-sm tracking-wide">
            Envoyez-nous un message
          </h3>

          {/*
            En attendant le portage WordPress, le formulaire ouvre le client mail
            de l'utilisateur. Sur le site final, Contact Form 7 — déjà installé —
            prendra le relais côté serveur.
          */}
          <form
            action={`mailto:${contact.email}`}
            method="post"
            encType="text/plain"
            className="mt-4 grid sm:grid-cols-2 gap-3"
          >
            <label className="sr-only" htmlFor="nom">Nom complet</label>
            <input id="nom" name="Nom" required placeholder="Nom complet" className="field" />

            <label className="sr-only" htmlFor="tel">Téléphone</label>
            <input id="tel" name="Telephone" type="tel" placeholder="Téléphone" className="field" />

            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" name="Email" type="email" required placeholder="Email" className="field sm:col-span-2" />

            <label className="sr-only" htmlFor="msg">Votre message</label>
            <textarea id="msg" name="Message" rows={4} required placeholder="Votre message" className="field sm:col-span-2 resize-y" />

            <button
              type="submit"
              className="sm:col-span-2 h-12 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-sm uppercase transition"
            >
              Envoyer le message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
