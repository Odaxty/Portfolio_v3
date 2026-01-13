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
  features?: { name: string}[];
  video?: string;
  lien?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TaskMate",
    category: "web",
    description:
      "Plateforme regroupant plusieurs agents IA pour vous assister dans vos tâches quotidiennes. Inclut un agent de correction intelligent capable d'analyser et d'améliorer vos textes.",
    tech: ["HTML", "Tailwind", "Node.js", "Gemini API", "EmailJS", "Firebase"],
    year: "3ème année Esaip",
    listecapture: [
      "/assets/videos/TaskMate/task1.png",
      "/assets/videos/TaskMate/task2.png",
      "/assets/videos/TaskMate/task3.png",
      "/assets/videos/TaskMate/task4.png",
      "/assets/videos/TaskMate/task5.png",
      "/assets/videos/TaskMate/task6.png",
    ],
    duration: "1 mois",
    team: "Individuel",
    context:
      "Projet personnel visant à explorer et intégrer l'API Google Gemini dans une application web, afin de tester les capacités de l'IA générative.",
    features: [
      { name: "Intégration et communication avec l'API Gemini" },
      { name: "Interface utilisateur responsive pour l'envoi de prompts" },
      { name: "Authentification et base de données via Firebase" },
      { name: "Gestion des favoris et historique des conversations" },
    ],
    video: "https://youtu.be/-BwSeVp0CjQ",
    lien: "http://taskmate-theo.duckdns.org:5000/",
  },
  {
    id: 9,
    title: "Balance ton pote",
    category: "web",
    description:
      "Jeu multijoueur en ligne où chaque joueur joue individuellement contre d’autres participants. Des questions sont générées aléatoirement par une IA à partir d’un thème donné. Les joueurs doivent voter pour la personne qui correspond le mieux à la question. À la fin de chaque tour, la personne ayant reçu le plus de votes est considérée comme la bonne réponse. Les joueurs ayant voté pour cette personne remportent un point. Le jeu repose sur des interactions en temps réel grâce aux WebSockets, renforçant l’aspect social et compétitif.",
    tech: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Gemini API",
      "WebSocket",
      "EmailJS",
    ],
    year: "3ème années à Esaip",
    listecapture: ["/assets/videos/jeu/1.png",
      "/assets/videos/jeu/2.png",
      "/assets/videos/jeu/3.png",
      "/assets/videos/jeu/4.png",
      "/assets/videos/jeu/5.png",
      "/assets/videos/jeu/6.png",
    ],
    duration: "1 mois",
    team: "Individual",
    context:
      "Projet visant à concevoir un jeu multijoueur en temps réel en combinant génération de questions par intelligence artificielle et communication instantanée entre joueurs. L’objectif était de créer une expérience ludique et sociale tout en maîtrisant la logique de jeu, le temps réel et le déploiement d’une application web.",
    features: [
      { name: "Création et implémentation de la logique complète du jeu" },
      { name: "Mise en place d’un système multijoueur en temps réel avec WebSockets" },
      { name: "Génération dynamique des questions via l’API Gemini" },
      { name: "Amélioration et modification de l’interface visuelle avec Tailwind CSS" },
      { name: "Gestion des votes, des scores et du déroulement des parties" },
      { name: "Déploiement de l’application sur Render" },
    ],
    video: "",
    lien: "https://mini-jeu-soiree.onrender.com/",
  },
  {
    id: 2,
    title: "Tour De France",
    category: "web",
    description:
      "Création d'un site internet pour centraliser les informations de mon Tour de France caritatif au profit des enfants atteints de la maladie de Crohn.",
    tech: ["HTML", "Tailwind", "JavaScript", "Web Scraping"],
    year: "2ème et 3ème année",
    listecapture: [
      "/assets/videos/tdf/tdf1.png",
      "/assets/videos/tdf/tdf2.png",
      "/assets/videos/tdf/tdf3.png",
      "/assets/videos/tdf/tdf4.png",
      "/assets/videos/tdf/tdf5.png",
      "/assets/videos/tdf/tdf6.png",
    ],
    duration: "2 mois",
    team: "Individuel",
    context:
      "Site permettant le suivi de mon Tour de France (étapes, profil, météo) et la mise en avant de la cause soutenue.",
    features: [
      { name: "Conception de l'interface utilisateur (UI)" },
      { name: "Intégration d'une carte interactive des étapes" },
      { name: "Web scraping pour afficher la cagnotte en temps réel" },
      { name: "Déploiement sur OVH et transfert FTP via FileZilla" },
    ],
    video: "https://youtu.be/WOdDZQLTLTo",
    lien: "https://theo.chauviere.eu",
  },
  {
    id: 3,
    title: "Sublime",
    category: "web",
    description:
      "Création d'une marque et d'un site e-commerce de montres de luxe. Projet réalisé en équipe avec gestion complète (utilisateurs, produits, commandes).",
    tech: ["CodeIgniter", "PHP", "MySQL", "MVC", "JavaScript"],
    year: "2ème année BUT Informatique",
    listecapture: [
      "/assets/videos/sublime/sublime1.png",
      "/assets/videos/sublime/sublime2.png",
      "/assets/videos/sublime/sublime3.png",
      "/assets/videos/sublime/sublime4.png",
      "/assets/videos/sublime/sublime5.png",
      "/assets/videos/sublime/sublime6.png",
      "/assets/videos/sublime/sublime7.png",
      "/assets/videos/sublime/sublime8.png",
      "/assets/videos/sublime/sublime9.png",
      "/assets/videos/sublime/sublime10.png",
    ],
    duration: "2 mois",
    team: "5 personnes",
    context:
      "Projet intensif de création de marque de A à Z. Gestion de toute la chaîne de valeur, du design à l'architecture de la base de données.",
    features: [
      { name: "Conception de l'interface utilisateur" },
      {
        name: "Gestion des utilisateurs (Inscription/Connexion)",
      },
      { name: "Catalogue produits & Panier"},
      { name: "Panel Administrateur & Gestion des commandes"},
    ],
    video: "https://www.youtube.com/watch?v=tio-Nz5ymWg",
  },
  {
    id: 4,
    title: "Melody Odyssey",
    category: "app",
    description:
      "Jeu de rythme créé en 24h lors du Hackathon CodeGame. La musique se construit dynamiquement au fur et à mesure de la progression du joueur.",
    tech: ["Godot Engine", "GDScript", "Game Design"],
    year: "2ème année",
    listecapture: [
      "/assets/videos/Mello/mello1.png",
      "/assets/videos/Mello/mello2.png",
      "/assets/videos/Mello/mello3.png",
      "/assets/videos/Mello/mello4.png",
      "/assets/videos/Mello/mello5.png",
      "/assets/videos/Mello/mello6.png",
      "/assets/videos/Mello/mello7.png",
      "/assets/videos/Mello/mello8.png",
      "/assets/videos/Mello/mello9.png",
    ],
    duration: "24 heures",
    team: "6 personnes",
    context:
      "Compétition CodeGame sur le thème 'Mélodie à l'infini'. Prototypage et développement d'un jeu complet en un temps record.",
    features: [
      { name: "Brainstorming et conception du gameplay en équipe" },
      { name: "Répartition des rôles (Dév, Art, Son) et gestion du temps" },
      { name: "Tests utilisateurs et débogage intensif" },
    ],
    video: "https://www.youtube.com/watch?v=X05Fqovcb44",
    lien: "https://koriaaaaaaaaaaa.itch.io/melody-odyssey",
  },
  {
    id: 5,
    title: "Agent n8n",
    category: "agent",
    description:
      "Agent intelligent automatisé qui compile et envoie un résumé de l'actualité Tech en se basant sur Google News.",
    tech: ["n8n", "Gemini API", "Automation", "RSS"],
    year: "3ème année Esaip",
    listecapture: ["/assets/videos/n8n/n8n.png"],
    duration: "1 mois",
    team: "Individuel",
    context:
      "Création d'un workflow automatisé qui surveille l'actualité tech et m'envoie un résumé généré par IA tous les 3 jours par email.",
    features: [
      { name: "Maîtrise des nœuds et flux de données n8n" },
      { name: "Requêtes HTTP pour récupérer les flux d'informations" },
      { name: "Configuration de l'envoi d'emails via l'API Gmail" },
    ],
    video: "",
  },
  {
    id: 6,
    title: "Skyjo En Ligne",
    category: "app",
    description:
      "Adaptation du jeu de société Skyjo en version multijoueur. Architecture Client/Serveur et gestion de versions avec Git.",
    tech: ["Kotlin", "JavaFX", "Sockets", "Git"],
    year: "1ère année BUT Informatique",
    listecapture: [
      "/assets/videos/skyjo/skyjo1.png",
      "/assets/videos/skyjo/skyjo2.png",
      "/assets/videos/skyjo/skyjo3.png",
    ],
    video: "https://youtu.be/BepIttmBmug",
  },
  {
    id: 7,
    title: "Portfolio V2",
    category: "web",
    description:
      "Seconde itération de mon portfolio avec un design épuré et une expérience utilisateur (UX) optimisée pour valoriser mes projets.",
    tech: ["HTML5", "CSS3", "Responsive Design"],
    year: "2ème année",
    listecapture: [
      "/assets/videos/portfoliov2/port1.png",
      "/assets/videos/portfoliov2/port2.png",
      "/assets/videos/portfoliov2/port3.png",
      "/assets/videos/portfoliov2/port4.png",
      "/assets/videos/portfoliov2/port5.png",
      "/assets/videos/portfoliov2/port6.png",
    ],
    video: "https://youtu.be/a88Ij9eDcX4",
    lien: "https://portfoliov2-gamma-liard.vercel.app/",
  },
  {
    id: 8,
    title: "Morpion Système",
    category: "app",
    description:
      "Jeu de morpion bas niveau pour explorer la programmation système : gestion des processus, IPC et détection de deadlocks.",
    tech: ["C", "Linux", "Multi-threading", "Système"],
    year: "2ème année",
    listecapture: [
      "/assets/videos/Morpion/morpion1.png",
      "/assets/videos/Morpion/morpion2.png",
      "/assets/videos/Morpion/morpion3.png",
      "/assets/videos/Morpion/morpion4.png",
    ],
    video: "https://www.youtube.com/watch?v=w_Z2CdEH0SI&feature=youtu.be",
  },
];
