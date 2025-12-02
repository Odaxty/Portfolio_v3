import Card from "@/app/components/ui/Cards";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
const MY_IMAGE = "/assets/monvisage.png"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-4 md:p-8 flex items-center justify-center">
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">

        <Card className="md:col-span-2 md:row-span-2 flex flex-col justify-between group">
            <div className="z-10">
                <h1 className="text-4xl font-bold mb-2">Théo CHAUVIERE</h1>
                <p className="text-neutral-400">Étudiant à ESAIP Ecole d'Ingénieur Informatique</p>
                <p className="text-neutral-600">en 3ème années</p>
            </div>
            <div className="relative min-[200]: w-auto h-full mt-4 rounded-2xl overflow-hidden">
                 <div className="absolute inset-0 bg-neutral-800 animate-pulse" /> 
                <Image src={MY_IMAGE} alt="Théo" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
        </Card>

        <Card className="flex flex-col items-center justify-center gap-2 hover:bg-[#0077b5]/20 cursor-pointer transition-colors">
            <h2 className="font-bold text-xl">LinkedIn</h2>
            <p className="text-xs text-neutral-400">Connectons-nous</p>
        </Card>

        <Card className="flex flex-col items-center justify-center gap-2 hover:bg-white/10 cursor-pointer">
             <h2 className="font-bold text-xl">GitHub</h2>
             <p className="text-xs text-neutral-400">Voir mon code</p>
        </Card>

        <Link href="/projects" className="md:col-span-2 md:row-span-2">
            <Card className="h-full group cursor-pointer hover:border-green-500/50 transition-colors">
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="self-end bg-white/10 p-2 rounded-full group-hover:bg-green-500 group-hover:text-black transition-all">
                        ↗
                    </div>
                    
                    <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                            Mes Réalisations
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Découvre l'ensemble de mes projets scolaires et personnels.
                            <br/>
                            <span className="text-sm text-green-500 mt-2 block">Voir les {projects.length} projets →</span>
                        </p>
                    </div>
                </div>
                
                <div className="h-full w-full bg-neutral-800">
                    <video 
                        src="/assets/vidéos/sublime.mp4" 
                        className="h-full w-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                        autoPlay muted loop playsInline
                    />
                </div>
            </Card>
        </Link>

        <Card className="md:row-span-2 flex flex-col gap-4">
            <h3 className="font-bold text-lg border-b border-neutral-800 pb-2">Ma Stack</h3>
            <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind", "Java", "SQL", "Golang"].map((tech) => (
                    <span key={tech} className="bg-neutral-800 px-3 py-1 rounded-full text-xs border border-neutral-700">
                        {tech}
                    </span>
                ))}
            </div>
        </Card>

        <Card className="flex flex-col items-center justify-center hover:rotate-3 transition-transform">
            <span className="text-4xl">🚴‍♂️</span>
            <p className="mt-2 font-medium text-sm">Cyclisme</p>
        </Card>

         <Card className="flex flex-col items-center justify-center bg-green-900/10 hover:bg-green-900/20 border-green-900/30 cursor-pointer">
            <span className="text-2xl font-bold text-green-500">CV</span>
            <p className="text-xs text-green-400 mt-1">Télécharger</p>
        </Card>

      </div>
    </main>
  );
}