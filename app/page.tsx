import Card from "@/app/components/ui/Cards";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
const MY_IMAGE = "/assets/monvisage.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        <Card className="md:col-span-2 md:row-span-2 flex flex-row justify-between group overflow-hidden">
          {/* Partie Texte : prend 50% de la largeur (w-1/2) et un peu de padding */}
          <div className="z-10 w-1/2 p-2 flex flex-col justify-center">
            <h1 className="text-xl md:text-4xl font-bold mb-2">
              Théo CHAUVIERE
            </h1>
            <p className="text-xs md:text-base text-neutral-400">
              Étudiant à ESAIP Ecole d'Ingénieur Informatique
            </p>
            <p className="text-xs md:text-base text-neutral-600">
              en 3ème année
            </p>
          </div>

          {/* Partie Image : prend 50% de la largeur (w-1/2) et toute la hauteur disponible */}
          <div className="relative w-1/2 h-auto min-h-[150px] md:h-full rounded-2xl overflow-hidden">
            <Image
              src={MY_IMAGE}
              alt="Théo"
              fill
              // J'ai gardé ton object-center pour centrer le visage
              className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Card>

        <Link
          href="https://www.linkedin.com/in/th%C3%A9o-chauviere-68b3002aa/"
          target="_blank"
          className="w-full"
        >
          <Card className="flex flex-col items-center justify-center gap-2 hover:bg-[#0077b5]/20 cursor-pointer transition-colors h-full w-full">
            <h2 className="font-bold text-xl">LinkedIn</h2>
            <p className="text-xs text-neutral-400">Connectons-nous</p>
          </Card>
        </Link>

        <Link
          href="https://github.com/Odaxty"
          className="w-full"
          target="_blank"
        >
          <Card className="flex flex-col items-center justify-center gap-2 hover:bg-white/10 cursor-pointer w-full h-full">
            <h2 className="font-bold text-xl">GitHub</h2>
            <p className="text-xs text-neutral-400">Voir mon code</p>
          </Card>
        </Link>

        <Link href="/projects" className="md:col-span-2 md:row-span-2">
          <Card className="h-full group cursor-pointer hover:border-green-500/50 transition-colors">
            <div className="absolute m-2 inset-0 z-10 flex flex-col justify-between p-6 bg-gradient-to-t from-black/90 to-transparent">
              <div className="self-end bg-white/10 p-2 rounded-full group-hover:bg-green-500 group-hover:text-black transition-all">
                ↗
              </div>
              <Image
                src={
                  projects.find((p) => (p.title = "TaskMate"))
                    ?.listecapture[0] || ""
                }
                alt="Image TaskMate"
                fill
                className="object-cover -z-10 brightness-50 group-hover:brightness-75 transition-all rounded-2xl"
              />
              <div className="bg-black/70 rounded-xl p-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                  Mes Réalisations
                </h3>
                <p className="text-gray-400 mt-2">
                  Découvre l'ensemble de mes projets scolaires et personnels.
                  <br />
                  <span className="text-sm text-green-500 mt-2 block">
                    Voir les {projects.length} projets →
                  </span>
                </p>
              </div>
            </div>

            <div className="h-full w-full bg-neutral-800">
              <video
                src="/assets/vidéos/sublime.mp4"
                className="h-full w-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </Card>
        </Link>

        <Card className="md:row-span-2 flex flex-col gap-4 overflow-hidden">
          <h3 className="font-bold text-lg border-b border-neutral-800 pb-2">
            Ma Stack
          </h3>

          <div className="flex flex-col gap-3 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
            {/* FRONT END */}
            <div>
              <h4 className="text-neutral-500 text-xs font-bold mb-2 uppercase tracking-wider">
                Front End
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "HTML",
                  "CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-neutral-800 px-2 py-1 rounded-md text-xs border border-neutral-700 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* BACK END / LANGAGES */}
            <div>
              <h4 className="text-neutral-500 text-xs font-bold mb-2 uppercase tracking-wider">
                Back End & Langages
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Java",
                  "Golang",
                  "Python",
                  "PHP",
                  "C#",
                  "Kotlin",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-neutral-800 px-2 py-1 rounded-md text-xs border border-neutral-700 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* DATABASE */}
            <div>
              <h4 className="text-neutral-500 text-xs font-bold mb-2 uppercase tracking-wider">
                Data
              </h4>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "MongoDB", "SQL Server", "SQL"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-neutral-800 px-2 py-1 rounded-md text-xs border border-neutral-700 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* OUTILS */}
            <div>
              <h4 className="text-neutral-500 text-xs font-bold mb-2 uppercase tracking-wider">
                Outils
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Git", "VS Code", "JetBrains", "Linux"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-neutral-800 px-2 py-1 rounded-md text-xs border border-neutral-700 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Card className="flex flex-col items-center justify-center hover:rotate-3 transition-transform">
          <span className="text-4xl">🚴‍♂️</span>
          <p className="mt-2 font-medium text-sm">Cyclisme</p>
        </Card>
        <Link href="/assets/cv.pdf" target="_blank" className="w-full">
          <Card className="flex flex-col items-center justify-center bg-green-900/10 hover:bg-green-900/20 border-green-900/30 cursor-pointer h-full w-full">
            <span className="text-2xl font-bold text-green-500">CV</span>
            <p className="text-xs text-green-400 mt-1">Télécharger</p>
          </Card>
        </Link>
      </div>
    </main>
  );
}
