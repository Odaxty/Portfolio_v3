// app/projects/[id]/page.tsx
import { projects } from "@/data/projects";
import ProjectClient from "./ProjectClient";

// Cette fonction s'exécute uniquement au build pour générer les fichiers HTML
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

// Composant Serveur par défaut
export default function ProjectPage() {
  return <ProjectClient />;
}
