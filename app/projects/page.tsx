"use client";
import Card from "@/app/components/ui/Cards";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ProjectsPage() {
  const { projects, t } = useLanguage(); 

  return (
    <main className="min-h-screen bg-neutral-950 text-white p-8">
      <div className="max-w-6xl mx-auto mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">{t.all_projects}</h1>
        <Link href="/" className="px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors text-sm">
          {t.back_home}
        </Link>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: any) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <Card className="group h-[300px] flex flex-col justify-end p-0 overflow-hidden cursor-pointer border border-neutral-800 hover:border-green-500/50 transition-all">
              <div className="absolute inset-0 bg-neutral-900">
                {project.listecapture && project.listecapture.length > 0 ? (
                  <Image src={project.listecapture[0]} alt={project.title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                ) : (
                  <div className="h-full w-full bg-neutral-800 flex items-center justify-center text-gray-700">Pas d'image</div>
                )}
              </div>
              <div className="relative z-10 p-6 bg-gradient-to-t from-black via-black/80 to-transparent w-full">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono text-green-400 border border-green-400/30 px-2 py-1 rounded">{project.year}</span>
                </div>
                <h2 className="text-2xl font-bold mb-1 text-white">{project.title}</h2>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t: string) => (
                    <span key={t} className="text-[10px] bg-white/10 px-2 py-1 rounded text-white/80">{t}</span>
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}