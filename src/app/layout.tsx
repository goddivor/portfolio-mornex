import type { Metadata, Viewport } from "next";
import { Anton, DM_Sans, Permanent_Marker } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFlottant } from "@/components/WhatsAppFlottant";
import { site } from "@/lib/site";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const marker = Permanent_Marker({ weight: "400", subsets: ["latin"], variable: "--font-permanent-marker", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mornex Bakeyta | Illustrateur, graphiste et professeur de dessin à Lomé",
    template: "%s | Mornex Bakeyta",
  },
  description:
    "Mornex Bakeyta, illustrateur, graphiste designer et professeur de dessin à Lomé (Togo). Affiches, logos, personnages, cours de dessin et créateur de l'Orinu, la BD africaine moderne.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Mornex Bakeyta",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Mornex Bakeyta, portfolio" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#e60013",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${anton.variable} ${dmSans.variable} ${marker.variable} antialiased`}>
      <body className="flex min-h-svh flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-jaune focus:px-4 focus:py-2 focus:text-encre"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFlottant />
      </body>
    </html>
  );
}
