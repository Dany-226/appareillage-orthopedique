import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { cn } from "@/lib/utils";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Appareillage Orthopédique",
    template: "%s — Appareillage Orthopédique",
  },
  description:
    "Ressources et conseils sur les appareillages orthopédiques : prothèses, orthèses et fauteuils roulants, pour les patients et leurs proches.",
  metadataBase: new URL("https://appareillageorthopedique.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Appareillage Orthopédique",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={cn(fraunces.variable, jakartaSans.variable, dmMono.variable)}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
