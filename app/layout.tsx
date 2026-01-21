import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
        <LanguageProvider>
          
          <LanguageSwitch />
          
          {children}
          
        </LanguageProvider>
      </body>
    </html>
  );
}