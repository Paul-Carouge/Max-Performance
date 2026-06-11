import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Max Performance | Coach Sportif à Arras",
  description:
    "Coach sportif à Arras, Douai et Cambrai. Coaching individuel, collectif, running et préparation physique personnalisée. Séance à partir de 20€.",
  keywords: [
    "coach sportif Arras",
    "coach sportif Douai",
    "coach sportif Cambrai",
    "coaching sportif",
    "préparation physique",
    "running Arras",
    "Max Performance",
  ],
  openGraph: {
    title: "Max Performance | Coach Sportif à Arras",
    description:
      "Coach sportif à Arras. Coaching individuel dès 20€, collectif, running et préparation physique.",
    type: "website",
    locale: "fr_FR",
    siteName: "Max Performance",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://max-performance.vercel.app" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Max Performance",
  description:
    "Coach sportif à Arras, Douai et Cambrai. Coaching individuel, collectif, running et préparation physique.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Arras",
    addressRegion: "Hauts-de-France",
    addressCountry: "FR",
  },
  priceRange: "€€",
  areaServed: ["Arras", "Douai", "Cambrai"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}
    >
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-offwhite font-body text-text antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
