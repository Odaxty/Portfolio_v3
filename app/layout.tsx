import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 1. Importe ton provider et ton nouveau bouton
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitch from "@/app/components/ui/LanguageSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Théo Chauvière - Portfolio",
  description: "Portfolio de Théo Chauvière, étudiant ingénieur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* 2. Tout le site est dans le Provider */}
        <LanguageProvider>
          
          {/* 3. Le bouton est posé ici, il flottera au-dessus de tout le reste */}
          <LanguageSwitch />
          
          {children}
          
        </LanguageProvider>
      </body>
    </html>
  );
}