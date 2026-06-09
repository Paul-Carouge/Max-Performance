import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Max Performance | Coach Sportif à Arras",
  description:
    "Coach sportif à Arras, Douai et Cambrai. Coaching individuel, collectif, running et préparation physique avec Max Performance.",
  keywords: [
    "coach sportif Arras",
    "coach sportif Douai",
    "coach sportif Cambrai",
    "coaching personnel Arras",
    "préparation physique Arras",
    "running Arras",
    "Max Performance",
  ],
  openGraph: {
    title: "Max Performance | Coach Sportif à Arras",
    description:
      "Coach sportif à Arras. Coaching individuel dès 20€, collectif, running et préparation physique.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={sora.variable}>
      <body className="min-h-screen bg-ivory text-navy antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
