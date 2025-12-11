"use client";
import Link from "next/link";
import Carousel from "@/app/components/ui/Carousel";
import { useParams } from "next/navigation";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ProjectDetail() {
  const params = useParams();
  const id = Number(params.id);
  const { projects, t } = useLanguage(); 
  
  const project = projects.find((p: any) => p.id === id);

  if (!project) {
    return <div className="text-white text-center mt-20">{t.notFound}</div>;
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto mb-6">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
          {t.back_home}
        </Link>
      </div>

      <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black bg-neutral-900 aspect-video md:aspect-[21/9]">
        <div className="absolute inset-0 z-0">
          {project.listecapture && project.listecapture.length > 0 ? (
            <Carousel images={project.listecapture} />
          ) : (
            <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-gray-600">Pas d'images</div>
          )}
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-xl">{project.title}</h1>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white shadow-lg">🗓️ {project.year}</span>
              {project.duration && <span className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white shadow-lg">⏱️ {project.duration}</span>}
              {project.team && <span className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white shadow-lg">👥 {project.team}</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-400 flex items-center gap-2">{t.context}</h2>
            <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800">
              <p className="text-lg text-gray-300 leading-relaxed">{project.context || project.description}</p>
            </div>
          </section>

          <section>
            {project.features && project.features.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mb-4 text-green-400 flex items-center gap-2">{t.features}</h2>
                <div className="space-y-3">
                  {project.features.map((feature: any, index: number) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-green-500/50 transition-all group">
                      <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-green-500/10 text-green-500 font-bold group-hover:bg-green-500 group-hover:text-black transition-colors">{index + 1}</span>
                      <div>
                        <h3 className="font-medium text-white">{feature.name}</h3>
                        {feature.phase && <p className="text-xs text-gray-500 mt-0.5">{t.phase} : {feature.phase}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>
        </div>

        <div className="space-y-6">
          <div className="sticky top-8">
            <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-white">Stack Technique</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string) => (
                  <span key={tech} className="bg-neutral-800 px-3 py-1.5 rounded-lg text-sm text-gray-300 border border-neutral-700">{tech}</span>
                ))}
              </div>
            </div>

            {project.video && (
              <div className="mt-6">
                <a href={project.video} target="_blank" className="flex items-center justify-center gap-2 w-full py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/20">
                  <span></span> {t.demo}
                </a>
              </div>
            )}

            {project.lien && (
              <div className="mt-4">
                <a href={project.lien} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-900/20">
                  <span></span> {t.access}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}