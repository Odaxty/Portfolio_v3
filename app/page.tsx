"use client";
import Card from "@/app/components/ui/Cards";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext"; 

const MY_IMAGE = "/assets/monvisage.png";

const stackData = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", className: "invert" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
];

export default function Home() {
  const { t, projects, toggleLanguage, lang } = useLanguage(); 

  return (
    // MODIFICATION 1: h-screen (hauteur écran fixe) et overflow-hidden (pas de scrollbar)
    <main className="h-screen w-full bg-neutral-950 text-white p-2 md:p-4 flex items-center justify-center overflow-hidden">
      
      {/* MODIFICATION 2: h-full pour prendre toute la hauteur, et grid-rows-5 pour diviser l'espace mathématiquement */}
      <div className="max-w-7xl w-full h-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-5 gap-3 md:gap-4 overflow-y-auto md:overflow-hidden">
        
        {/* PROFIL */}
        <Card className="md:col-span-2 md:row-span-2 flex flex-row justify-between group overflow-hidden min-h-[200px] md:min-h-0">
          <div className="z-10 w-1/2 p-4 flex flex-col justify-center">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2">Théo CHAUVIERE</h1>
            <p className="text-xs md:text-sm text-neutral-400">{t.role}</p>
            <p className="text-xs md:text-sm text-neutral-600">{t.year}</p>
          </div>
          <div className="relative w-1/2 h-full rounded-2xl overflow-hidden my-2 mr-2">
            <Image src={MY_IMAGE} alt="Théo" fill className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-500 rounded-xl" />
          </div>
        </Card>

        {/* STACK */}
        <Card className="md:col-span-2 md:row-span-2 p-4 flex flex-col gap-2 min-h-[200px] md:min-h-0">
          <h3 className="font-bold text-lg md:text-xl border-b border-neutral-800 pb-1 mb-1">{t.stack}</h3>
          <div className="grid grid-cols-4 gap-2 h-full content-center flex-1">
            {stackData.map((tech) => (
               <div key={tech.name} className="flex flex-col items-center justify-center gap-1 group select-none">
                  {/* Ajustement taille icones pour écrans compacts */}
                  <div className="relative w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:-translate-y-1">
                    <img src={tech.icon} alt={tech.name} className={`object-contain w-full h-full ${tech.className || ''}`} />
                  </div>
                  <span className="text-[9px] md:text-[10px] text-neutral-500 group-hover:text-neutral-200 transition-colors text-center font-medium">{tech.name}</span>
               </div>
            ))}
          </div>
        </Card>

        {/* LINKEDIN - h-full pour remplir la case de la grille */}
        <Link href="https://www.linkedin.com/in/th%C3%A9o-chauviere-68b3002aa/" target="_blank" className="w-full h-full">
          <Card className="flex flex-col items-center justify-center gap-2 hover:bg-[#0077b5]/20 cursor-pointer transition-colors h-full w-full py-4 md:py-0">
            <div className="relative w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:-translate-y-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" />
            </div>
            <p className="text-[10px] md:text-xs text-neutral-400">{t.connect}</p>
          </Card>
        </Link>

        {/* GITHUB */}
        <Link href="https://github.com/Odaxty" target="_blank" className="w-full h-full">
          <Card className="flex flex-col items-center justify-center gap-2 bg-gray-400 hover:bg-white cursor-pointer w-full h-full py-4 md:py-0">
            <div className="relative w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:-translate-y-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />
            </div>
            <p className="text-[10px] md:text-xs text-black">{t.code}</p>
          </Card>
        </Link>

        {/* PASSIONS */}
        <Link href="/passions" className="md:col-span-2 md:row-span-2 group min-h-[200px] md:min-h-0 h-full">
          <Card className="relative h-full w-full overflow-hidden flex flex-col justify-end p-4 md:p-6 cursor-pointer border-yellow-500/30 hover:border-yellow-500/60 transition-colors">
            <Image src="/assets/videos/tdf/carte_polarstep.png" alt="Tour de France" fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-yellow-400 text-black text-[10px] md:text-xs font-bold px-2 py-0.5 rounded">{t.passion_tag}</div>
                <div className="bg-green-600 text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded">3700€ RÉCOLTÉS</div>
              </div>
              <h3 className="font-bold text-xl md:text-2xl lg:text-3xl leading-tight mb-2">
                {lang === 'fr' ? <>Cyclisme & <br /> <span className="text-yellow-400">Tour de France</span></> : <>Cycling & <br /> <span className="text-yellow-400">Tour de France</span></>}
              </h3>
              <p className="text-xs md:text-sm text-neutral-200 opacity-90 group-hover:text-white transition-colors line-clamp-2">{t.passion_desc}</p>
            </div>
          </Card>
        </Link>

        {/* PROJECTS */}
        <Link href="/projects" className="md:col-span-2 md:row-span-2 min-h-[200px] md:min-h-0 h-full">
          <Card className="h-full w-full group cursor-pointer hover:border-green-500/50 transition-colors relative">
            <div className="absolute m-2 inset-0 z-10 flex flex-col justify-between p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent">
              <div className="self-end bg-white/10 p-2 rounded-full group-hover:bg-green-500 group-hover:text-black transition-all text-xs">↗</div>
              <Image 
                src={projects.find((p: any) => p.title === "TaskMate")?.listecapture[0] || ""} 
                alt="Image TaskMate" fill className="object-cover -z-10 brightness-50 group-hover:brightness-75 transition-all rounded-2xl" 
              />
              <div className="bg-black/70 rounded-xl p-2">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-green-400 transition-colors">{t.my_work}</h3>
                <p className="text-gray-400 mt-1 md:mt-2">
                  <span className="text-xs md:text-sm text-green-500 block">{t.see_projects} ({projects.length}) →</span>
                </p>
              </div>
            </div>
          </Card>
        </Link>

        {/* CV - Utilisation de col-span-2 pour remplir le trou restant en bas à gauche */}
        <Link href="/assets/cv.pdf" target="_blank" className="w-full md:col-span-2 h-full">
          <Card className="bg-gray-400 hover:bg-white border border-gray-200 cursor-pointer h-full w-full p-4 md:p-6 flex flex-row items-center justify-center gap-6 md:gap-10 transition-colors">
            <div className="flex flex-col items-start gap-1">
              <span className="text-2xl md:text-3xl mb-1 md:mb-2">📄</span>
              <span className="text-lg md:text-xl font-bold text-gray-900 block">{t.download_cv}</span>
              <p className="text-xs md:text-sm text-gray-600">PDF</p>
            </div>
            <div className="relative h-16 w-16 md:h-24 md:w-24 shrink-0">
              <img src="assets/esaip.png" alt="Logo ESAIP" className="w-full h-full object-contain" />
            </div>
          </Card>
        </Link>

      </div>
    </main>
  );
}