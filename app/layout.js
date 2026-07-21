import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://technovation.ma"),
  title: {
    default: "Technovation — Partenaire informatique des entreprises à Casablanca",
    template: "%s | Technovation",
  },
  description:
    "Matériel informatique professionnel, infrastructure réseau, cybersécurité, serveurs, vidéosurveillance et maintenance pour les entreprises au Maroc. Marques certifiées HP, Dell, Lenovo, Cisco, Fortinet.",
  keywords: [
    "matériel informatique Maroc", "infrastructure réseau Casablanca",
    "cybersécurité entreprise", "serveurs", "vidéosurveillance", "Fortinet", "Technovation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://technovation.ma",
    siteName: "Technovation",
    title: "Technovation — Partenaire informatique des entreprises",
    description:
      "Infrastructure, réseau, sécurité, cloud et matériel informatique pour les entreprises au Maroc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technovation — Partenaire informatique des entreprises",
    description:
      "Infrastructure, réseau, sécurité, cloud et matériel informatique pour les entreprises au Maroc.",
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Technovation",
  url: "https://technovation.ma",
  logo: "https://technovation.ma/wp-content/uploads/2020/06/LOGO-SITE.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "46 Bd Zerktouni, 2e étage, Appt N°6",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+212607173005",
    contactType: "sales",
    areaServed: "MA",
    availableLanguage: ["fr", "ar"],
  },
  sameAs: [
    "https://www.facebook.com/Technovation-Maroc-111289120357689/",
    "https://www.instagram.com/technovation.ma/",
    "https://www.linkedin.com/company/technovation-maroc",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
