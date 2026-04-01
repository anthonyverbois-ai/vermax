import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Pause Laverie — Laverie automatique à Compiègne",
  description:
    "Laverie automatique à Compiègne. Machines grande capacité, lessive incluse. Service de blanchisserie et livraison à domicile. Ouvert 7j/7 de 7h à 23h.",
  keywords: [
    "laverie",
    "Compiègne",
    "laverie automatique",
    "blanchisserie",
    "livraison linge",
    "pressing Compiègne",
  ],
  openGraph: {
    title: "La Pause Laverie — Votre laverie automatique à Compiègne",
    description:
      "Machines grande capacité, lessive incluse. Service blanchisserie et livraison dans un rayon de 10 km.",
    type: "website",
    locale: "fr_FR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Laundromat",
  name: BUSINESS.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: "FR",
  },
  telephone: BUSINESS.phoneDisplay,
  email: BUSINESS.email,
  openingHours: "Mo-Su 07:00-23:00",
  priceRange: "€",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.4178,
    longitude: 2.8267,
  },
  url: "https://la-pause-laverie.fr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
