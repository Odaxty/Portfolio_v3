"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { projects } from "@/data/projects";       
import { projectsEn } from "@/data/projectsEn";   

const uiTranslations = {
  fr: {
    role: "Étudiant à ESAIP Ecole d'Ingénieur Informatique",
    year: "en 3ème année",
    stack: "Ma Stack Technique",
    connect: "Connectons-nous",
    code: "Voir mon code",
    passion_title: "Cyclisme & Tour de France",
    passion_desc: "Un défi sportif de 4000km pour les enfants...",
    passion_tag: "PASSION",
    my_work: "Mes Réalisations",
    see_projects: "Voir les projets",
    download_cv: "Télécharger le CV",
    back_home: "← Retour à l'accueil",
    all_projects: "Tous mes projets",
    context: "💡 Le Contexte",
    features: "🚀 Fonctionnalités Clés",
    demo: "▶️ Voir la démo vidéo",
    access: "🌐 Accéder au projet",
    notFound: "Projet introuvable 😢",
    phase: "Phase",
  },
  en: {
    role: "Student at ESAIP Computer Engineering School",
    year: "3rd year",
    stack: "My Tech Stack",
    connect: "Let's Connect",
    code: "See my code",
    passion_title: "Cycling & Tour de France",
    passion_desc: "A 4000km athletic challenge for children...",
    passion_tag: "PASSION",
    my_work: "My Work",
    see_projects: "See projects",
    download_cv: "Download CV",
    back_home: "← Back to Home",
    all_projects: "All my projects",
    context: "💡 Context",
    features: "🚀 Key Features",
    demo: "▶️ Watch Demo",
    access: "🌐 Open Project",
    notFound: "Project not found 😢",
    phase: "Phase",
  }
};

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  const currentProjects = lang === "fr" ? projects : projectsEn;
  const t = uiTranslations[lang];

  const toggleLanguage = () => setLang((l) => (l === "fr" ? "en" : "fr"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, projects: currentProjects, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);