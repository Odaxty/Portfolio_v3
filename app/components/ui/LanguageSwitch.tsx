"use client";
import { useLanguage } from "@/app/context/LanguageContext";

export default function LanguageSwitch() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-[9999] flex items-center gap-2 bg-neutral-900/80 backdrop-blur-md border border-neutral-700 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-all shadow-xl font-bold text-sm"
    >
      {lang === "fr" ? (
        <>
          <span>🇬🇧</span> <span className="hidden md:inline">English</span>
        </>
      ) : (
        <>
          <span>🇫🇷</span> <span className="hidden md:inline">Français</span>
        </>
      )}
    </button>
  );
}