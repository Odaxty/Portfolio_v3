export interface Project {
  id: number;
  title: string;
  category: "web" | "app" | "data" | "agent";
  description: string;
  tech: string[];
  year: string;
  listecapture: string[];
  duration?: string;
  team?: string;
  context?: string;
  features?: { name: string; phase?: string }[];
  video?: string; 
  lien?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TaskMate",
    category: "web",
    description: "Jeu de rythme créé en 24h lors du Hackathon CodeGame. La musique se construit au fur et à mesure de l'avancée du joueur.",
    tech: ["Java", "Hackathon", "Game Design"],
    year: "2ème année",
    listecapture: ["/assets/vidéos/TaskMate/task1.png", "/assets/vidéos/TaskMate/task2.png", "/assets/vidéos/TaskMate/task3.png", "/assets/vidéos/TaskMate/task4.png", "/assets/vidéos/TaskMate/task5.png", "/assets/vidéos/TaskMate/task6.png"],
    duration: "24 heures",
    team: "6 personnes",
    context: "Compétition CodeGame sur le thème 'Mélodie à l'infini'. Nous avons dû prototyper et développer un jeu complet en un temps record.",
    features: [
      { name: "Génération procédurale de la musique" },
      { name: "Système de score dynamique" },
      { name: "Graphismes synchronisés au rythme" },
    ],
    video: "https://youtu.be/-BwSeVp0CjQ",
    lien: "http://taskmate-theo.duckdns.org/",
  },
  {
    id: 2,
    title: "Sublime",
    category: "web",
    description: "Création d'une marque et d'un site e-commerce de montres de luxe. Projet réalisé en équipe avec gestion complète (utilisateurs, produits, commandes).",
    tech: ["CodeIgniter", "PHP", "SQL", "MVC"],
    year: "2ème année de BUT Informatique",
    listecapture: ["/assets/vidéos/sublime/sublime1.png", "/assets/vidéos/sublime/sublime2.png", "/assets/vidéos/sublime/sublime3.png", "/assets/vidéos/sublime/sublime4.png", "/assets/vidéos/sublime/sublime5.png", "/assets/vidéos/sublime/sublime6.png", "/assets/vidéos/sublime/sublime7.png", "/assets/vidéos/sublime/sublime8.png", "/assets/vidéos/sublime/sublime9.png", "/assets/vidéos/sublime/sublime10.png"],
    duration: "2 mois",
    team: "5 personnes",
    context: "Projet intensif pour créer une marque de A à Z avec contrainte de temps. Nous devions gérer toute la chaîne de valeur, du design à la base de données.",
    features: [
      { name: "Gestion des utilisateurs (Inscription/Connexion)", phase: "Semaine 1" },
      { name: "Catalogue produits & Panier", phase: "Semaine 2" },
      { name: "Panel Administrateur & Commandes", phase: "Semaine 3" },
    ],
    video: "https://www.youtube.com/watch?v=tio-Nz5ymWg",
  },
  {
    id: 3,
    title: "Skyjo En Ligne",
    category: "app",
    description: "Adaptation du jeu de société Skyjo en version multijoueur réseau. Gestion de versions avec Git et expérience utilisateur fluide.",
    tech: ["Kotlin", "Java", "Réseau", "Git"],
    year: "1ère année",
    listecapture: ["/assets/vidéos/skyjo/skyjo1.png", "/assets/vidéos/skyjo/skyjo2.png", "/assets/vidéos/skyjo/skyjo3.png"],
    video: "https://youtu.be/BepIttmBmug",
  },
  {
    id: 4,
    title: "Portfolio V2",
    category: "web",
    description: "Seconde itération avec un design plus épuré et une UX simplifiée pour mieux valoriser les projets.",
    tech: ["HTML", "CSS", "Design"],
    year: "2ème année",
    listecapture: ["/assets/vidéos/portfoliov2/port1.png", "/assets/vidéos/portfoliov2/port2.png", "/assets/vidéos/portfoliov2/port3.png", "/assets/vidéos/portfoliov2/port4.png", "/assets/vidéos/portfoliov2/port5.png", "/assets/vidéos/portfoliov2/port6.png"],
    video: "https://youtu.be/a88Ij9eDcX4",
  },
  {
    id: 5,
    title: "Melody Odyssey",
    category: "app",
    description: "Jeu de rythme créé en 24h lors du Hackathon CodeGame. La musique se construit au fur et à mesure de l'avancée du joueur.",
    tech: ["Java", "Hackathon", "Game Design"],
    year: "2ème année",
    listecapture: ["/assets/vidéos/Mello/mello1.png", "/assets/vidéos/Mello/mello2.png", "/assets/vidéos/Mello/mello3.png", "/assets/vidéos/Mello/mello4.png", "/assets/vidéos/Mello/mello5.png", "/assets/vidéos/Mello/mello6.png", "/assets/vidéos/Mello/mello7.png", "/assets/vidéos/Mello/mello8.png", "/assets/vidéos/Mello/mello9.png"],
    duration: "24 heures",
    team: "6 personnes",
    context: "Compétition CodeGame sur le thème 'Mélodie à l'infini'. Nous avons dû prototyper et développer un jeu complet en un temps record.",
    features: [
      { name: "Génération procédurale de la musique" },
      { name: "Système de score dynamique" },
      { name: "Graphismes synchronisés au rythme" },
    ],
    video: "https://www.youtube.com/watch?v=X05Fqovcb44",
  },
  {
    id: 6,
    title: "Morpion",
    category: "app",
    description: "Jeu de morpion bas niveau pour explorer la programmation système : gestion des processus, canaux de communication et détection de deadlocks.",
    tech: ["C", "Linux", "Threads", "Système"],
    year: "2ème année",
    listecapture: ["/assets/vidéos/Morpion/morpion1.png", "/assets/vidéos/Morpion/morpion2.png", "/assets/vidéos/Morpion/morpion3.png", "/assets/vidéos/Morpion/morpion4.png"],
    video: "https://www.youtube.com/watch?v=w_Z2CdEH0SI&feature=youtu.be",
  },
  {
    id: 7,
    title: "Agent n8n",
    category: "agent",
    description: "Jeu de rythme créé en 24h lors du Hackathon CodeGame. La musique se construit au fur et à mesure de l'avancée du joueur.",
    tech: ["Java", "Hackathon", "Game Design"],
    year: "2ème année",
    listecapture: ["/assets/vidéos/sublime/sublime1.png", "/assets/vidéos/sublime/sublime2.png", "/assets/vidéos/sublime/sublime3.png", "/assets/vidéos/sublime/sublime4.png", "/assets/vidéos/sublime/sublime5.png", "/assets/vidéos/sublime/sublime6.png", "/assets/vidéos/sublime/sublime7.png", "/assets/vidéos/sublime/sublime8.png", "/assets/vidéos/sublime/sublime9.png", "/assets/vidéos/sublime/sublime10.png"],
    duration: "24 heures",
    team: "6 personnes",
    context: "Compétition CodeGame sur le thème 'Mélodie à l'infini'. Nous avons dû prototyper et développer un jeu complet en un temps record.",
    features: [
      { name: "Génération procédurale de la musique" },
      { name: "Système de score dynamique" },
      { name: "Graphismes synchronisés au rythme" },
    ],
    video: "",
  },
];