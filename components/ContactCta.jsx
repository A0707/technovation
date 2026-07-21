import { ArrowRight, Phone } from "lucide-react";
import { contact } from "@/lib/tokens";
import { Button } from "./ui/button";
import Reveal from "./Reveal";

export default function ContactCta() {
  return (
    <section className="bg-gradient-ink text-white">
      <div className="max-w-7xl mx-auto px-5 py-14 lg:py-16">
        <Reveal className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <h2 className="text-2xl lg:text-3xl font-extrabold leading-snug">
              Un projet informatique pour votre entreprise ?
            </h2>
            <p className="mt-2 text-[#C3D2E4]">
              Décrivez-nous votre besoin, nous revenons vers vous avec une proposition chiffrée.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 shrink-0">
            <Button asChild variant="accent" size="lg">
              <a href="/contact">
                Demander un devis <ArrowRight size={18} aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href={`tel:${contact.phoneIntl}`}>
                <Phone size={18} aria-hidden="true" /> {contact.phones[0]}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
