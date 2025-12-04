import Card from "@/app/components/ui/Cards";
import Image from "next/image";
import Link from "next/link";

export default function Passions() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-4 md:p-8 flex justify-center">
      <div className="max-w-5xl w-full flex flex-col gap-6">
        
        <div className="mb-4">
          <Link href="/" className="text-neutral-400 hover:text-white text-sm mb-4 inline-block">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold">
            Au-delà du <span className="text-green-500">Code</span>
          </h1>
          <p className="text-neutral-400 mt-2">
            Mes échappatoires, mes défis et mes engagements personnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <Card className="md:col-span-2 flex flex-col justify-center p-6 relative overflow-hidden group min-h-[200px]">
            <div className="absolute inset-0 z-0">
               <div className="w-full h-full bg-neutral-800 opacity-50" /> 
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">🚴‍♂️ Le Vélo sous toutes ses formes</h2>
              <p className="text-neutral-300 mb-4 max-w-lg">
                Que ce soit en <strong>Gravel</strong> pour l'aventure, en <strong>VTT</strong> pour les sensations ou sur <strong>Route</strong> pour la performance. Le vélo est mon moyen de décompresser et de me dépasser.
              </p>
              <div className="flex gap-2">
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs">Gravel</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs">VTT</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs">Route</span>
              </div>
            </div>
          </Card>

          <Card className="flex flex-col justify-center p-6 bg-purple-900/10 border-purple-500/20 hover:bg-purple-900/20 transition-colors">
            <span className="text-4xl mb-3">🎮</span>
            <h2 className="text-xl font-bold mb-1">Gaming</h2>
            <p className="text-neutral-400 text-sm">
              Quand je ne suis pas sur le vélo ou en train de coder, je me détends sur des jeux vidéo. Une autre façon d'explorer des mondes virtuels.
            </p>
          </Card>
        </div>

        <section className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold">Mon Tour de France Solidaire</h2>
            <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">PROJET ACCOMPLI</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min">
            
            <Card className="flex flex-col items-center justify-center p-4 bg-neutral-900">
              <span className="text-3xl font-bold text-green-500">3 969 km</span>
              <span className="text-neutral-400 text-xs uppercase tracking-wider">Parcourus</span>
            </Card>
            <Card className="flex flex-col items-center justify-center p-4 bg-neutral-900">
              <span className="text-3xl font-bold text-green-500">3 400 €</span>
              <span className="text-neutral-400 text-xs uppercase tracking-wider">Reversés à l'AFA</span>
            </Card>
            <Card className="flex flex-col items-center justify-center p-4 bg-neutral-900">
              <span className="text-3xl font-bold text-green-500">28 407 m</span>
              <span className="text-neutral-400 text-xs uppercase tracking-wider">Dénivelé positif</span>
            </Card>
             <Card className="flex flex-col items-center justify-center p-4 bg-neutral-900">
              <span className="text-3xl font-bold text-green-500">32</span>
              <span className="text-neutral-400 text-xs uppercase tracking-wider">Étapes</span>
            </Card>

            <Card className="md:col-span-2 md:row-span-2 p-6 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-white">Pourquoi ce projet ?</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Diagnostiqué de la <strong>maladie de Crohn à 13 ans</strong>, j'ai voulu prouver que la maladie n'est pas une fatalité.
              </p>
              <p className="text-neutral-300 text-sm leading-relaxed">
                J'ai réalisé un tour de France en solitaire, en autonomie complète avec mon vélo Gravel et mes sacoches. L'objectif était de récolter 1€ par kilomètre pour soutenir la recherche et les enfants atteints de la maladie via l'association <strong>AFA Crohn RCH</strong>.
              </p>
              <div className="mt-auto pt-4 border-t border-neutral-800">
                <p className="text-xs text-neutral-500 italic">
                  "Je suis un battant et un releveur de défis."
                </p>
              </div>
            </Card>

            <Card className="md:col-span-2 md:row-span-2 p-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl">📰</div>
               <h3 className="text-xl font-bold mb-4 relative z-10">Impact & Médias</h3>
               <ul className="space-y-3 relative z-10">
                 <li className="flex items-center gap-2 text-sm text-neutral-300">
                   ✅ <span className="font-bold text-white">Ouest France</span> (Scanner & Arrivée)
                 </li>
                 <li className="flex items-center gap-2 text-sm text-neutral-300">
                   ✅ <span className="font-bold text-white">TV Vendée</span> (Interview)
                 </li>
                 <li className="flex items-center gap-2 text-sm text-neutral-300">
                   ✅ <span className="font-bold text-white">Article AFA</span> (Site officiel)
                 </li>
               </ul>
               
               <div className="mt-6 relative z-10">
                 <Link 
                   href="https://theo.chauviere.eu" 
                   target="_blank"
                   className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl transition-all"
                 >
                   Voir le site complet du projet ↗
                 </Link>
                 <p className="text-center text-xs text-neutral-500 mt-2">
                   Retrouvez le parcours détaillé, la carte interactive et le blog sur theo.chauviere.eu
                 </p>
               </div>
            </Card>
          </div>
        </section>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
            <Link href="https://www.instagram.com/rideforcrohn" target="_blank" className="flex-1">
                <Card className="p-4 flex items-center justify-center gap-2 hover:bg-pink-900/20 cursor-pointer border-pink-900/30 transition-colors">
                    <span className="text-xl">📸</span>
                    <span className="font-bold">Instagram @rideforcrohn</span>
                </Card>
            </Link>
             <Link href="https://www.strava.com/athletes/68468741" target="_blank" className="flex-1">
                <Card className="p-4 flex items-center justify-center gap-2 hover:bg-orange-900/20 cursor-pointer border-orange-900/30 transition-colors">
                    <span className="text-xl">🚴</span>
                    <span className="font-bold">Mon profil Strava</span>
                </Card>
            </Link>
        </div>

      </div>
    </main>
  );
}