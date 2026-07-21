import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/tokens";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${contact.phoneIntl.replace("+", "")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className="fixed right-5 bottom-5 z-40 grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-float hover:scale-105 transition-transform"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
