import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lapauselaverie.fr"),
  title: "La Pause Laverie — Laverie automatique à Compiègne",
  description:
    "Laverie automatique à Compiègne. Machines grande capacité, lessive incluse. Service de blanchisserie et livraison à domicile. Ouvert 7j/7 de 6h à 22h.",
  keywords: [
    "laverie",
    "Compiègne",
    "laverie automatique",
    "blanchisserie",
    "livraison linge",
    "pressing Compiègne",
  ],
  icons: {
    icon: "/images/newlogo.png",
    shortcut: "/images/newlogo.png",
    apple: "/images/newlogo.png",
  },
  openGraph: {
    title: "La Pause Laverie — Votre laverie automatique à Compiègne",
    description:
      "Machines grande capacité, lessive incluse. Service blanchisserie et livraison dans un rayon de 10 km.",
    url: "https://lapauselaverie.fr",
    siteName: "La Pause Laverie",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/newlogo.png",
        width: 1200,
        height: 630,
        alt: "La Pause Laverie - Compiègne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Pause Laverie — Votre laverie automatique à Compiègne",
    description:
      "Machines grande capacité, lessive incluse. Service blanchisserie et livraison dans un rayon de 10 km.",
    images: ["/images/newlogo.png"],
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
  openingHours: "Mo-Su 06:00-22:00",
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
