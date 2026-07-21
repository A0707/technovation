import { MapPin, Clock, Mail, Facebook } from "lucide-react";
import { contact } from "@/lib/tokens";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-ink text-[#C3D2E4] text-xs">
      <div className="max-w-7xl mx-auto px-5 h-10 flex items-center gap-6">
        <span className="flex items-center gap-1.5">
          <MapPin size={13} aria-hidden="true" /> {contact.addressShort}
        </span>

        {/* Les horaires ne sont publiés nulle part sur technovation.ma :
            l'entrée reste masquée plutôt que d'afficher une plage inventée. */}
        {contact.hours && (
          <span className="flex items-center gap-1.5">
            <Clock size={13} aria-hidden="true" /> {contact.hours}
          </span>
        )}

        <a href={`mailto:${contact.email}`} className="flex items-center gap-1.5 hover:text-white transition">
          <Mail size={13} aria-hidden="true" /> {contact.email}
        </a>

        {/* Seul Facebook est vérifié — voir wordpress/CONTENU.md */}
        <a
          href={contact.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Technovation sur Facebook"
          className="ml-auto hover:text-white transition"
        >
          <Facebook size={15} />
        </a>
      </div>
    </div>
  );
}
