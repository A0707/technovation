import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { contact } from "@/lib/tokens";
import { SITE_URL, IS_INDEXABLE } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Technovation — Partenaire informatique des entreprises à Casablanca",
    template: "%s | Technovation",
  },
  description:
    "Matériel informatique professionnel, infrastructure réseau, cybersécurité, vidéosurveillance et maintenance pour les entreprises au Maroc. 346 références en catalogue.",
  keywords: [
    "matériel informatique Maroc", "infrastructure réseau Casablanca",
    "cybersécurité entreprise", "vidéosurveillance", "maintenance informatique", "Technovation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: SITE_URL,
    siteName: "Technovation",
    title: "Technovation — Partenaire informatique des entreprises",
    description:
      "Infrastructure, réseau, sécurité et matériel informatique pour les entreprises au Maroc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technovation — Partenaire informatique des entreprises",
    description:
      "Infrastructure, réseau, sécurité et matériel informatique pour les entreprises au Maroc.",
  },
  // Doublon volontaire du header X-Robots-Tag : la balise couvre les robots
  // qui lisent le HTML sans regarder les en-têtes HTTP.
  robots: IS_INDEXABLE
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Technovation",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "46 Bd Zerktouni, 2e étage, Appt N°6",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: contact.phoneIntl,
    contactType: "sales",
    areaServed: "MA",
    availableLanguage: ["fr", "ar"],
  },
  // Seul le compte Facebook est vérifié : un sameAs erroné dégrade la confiance
  // que Google accorde à l'entité.
  sameAs: [contact.facebook],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* Sans JavaScript, les blocs animés resteraient masqués : on force
            leur état final. Le contenu prime toujours sur l'animation. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-ink focus:text-white focus:px-5 focus:py-3 focus:rounded-br-xl focus:font-bold">
          Aller au contenu principal
        </a>
        <TopBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
