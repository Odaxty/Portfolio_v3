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

export const projectsEn: Project[] = [
  {
    id: 1,
    title: "TaskMate",
    category: "web",
    description:
      "Platform gathering multiple AI agents to assist you in your daily tasks. Includes an intelligent correction agent capable of analyzing and improving your texts.",
    tech: ["HTML", "Tailwind", "Node.js", "Gemini API", "EmailJS", "Firebase"],
    year: "3rd year Esaip",
    listecapture: [
      "/assets/vidéos/TaskMate/task1.png",
      "/assets/vidéos/TaskMate/task2.png",
      "/assets/vidéos/TaskMate/task3.png",
      "/assets/vidéos/TaskMate/task4.png",
      "/assets/vidéos/TaskMate/task5.png",
      "/assets/vidéos/TaskMate/task6.png",
    ],
    duration: "1 month",
    team: "Individual",
    context:
      "Personal project aiming to explore and integrate the Google Gemini API into a web application, to test the capabilities of generative AI.",
    features: [
      { name: "Integration and communication with Gemini API" },
      { name: "Responsive user interface for sending prompts" },
      { name: "Authentication and database via Firebase" },
      { name: "Favorites management and conversation history" },
    ],
    video: "https://youtu.be/-BwSeVp0CjQ",
    lien: "http://taskmate-theo.duckdns.org/",
  },
  {
    id: 2,
    title: "Tour De France",
    category: "web",
    description:
      "Creation of a website to centralize information about my charity Tour de France for children with Crohn's disease.",
    tech: ["HTML", "Tailwind", "JavaScript", "Web Scraping"],
    year: "2nd and 3rd year",
    listecapture: [
      "/assets/vidéos/tdf/tdf1.png",
      "/assets/vidéos/tdf/tdf2.png",
      "/assets/vidéos/tdf/tdf3.png",
      "/assets/vidéos/tdf/tdf4.png",
      "/assets/vidéos/tdf/tdf5.png",
      "/assets/vidéos/tdf/tdf6.png",
    ],
    duration: "2 months",
    team: "Individual",
    context:
      "Website allowing the tracking of my Tour de France (stages, profile, weather) and highlighting the supported cause.",
    features: [
      { name: "User Interface (UI) design" },
      { name: "Integration of an interactive map of the stages" },
      { name: "Web scraping to display the fundraising pot in real time" },
      { name: "Deployment on OVH and FTP transfer via FileZilla" },
    ],
    video: "https://youtu.be/WOdDZQLTLTo",
    lien: "https://theo.chauviere.eu",
  },
  {
    id: 3,
    title: "Sublime",
    category: "web",
    description:
      "Creation of a luxury watch brand and e-commerce site. Project realized in a team with complete management (users, products, orders).",
    tech: ["CodeIgniter", "PHP", "MySQL", "MVC", "JavaScript"],
    year: "2nd year BUT CS",
    listecapture: [
      "/assets/vidéos/sublime/sublime1.png",
      "/assets/vidéos/sublime/sublime2.png",
      "/assets/vidéos/sublime/sublime3.png",
      "/assets/vidéos/sublime/sublime4.png",
      "/assets/vidéos/sublime/sublime5.png",
      "/assets/vidéos/sublime/sublime6.png",
      "/assets/vidéos/sublime/sublime7.png",
      "/assets/vidéos/sublime/sublime8.png",
      "/assets/vidéos/sublime/sublime9.png",
      "/assets/vidéos/sublime/sublime10.png",
    ],
    duration: "2 months",
    team: "5 people",
    context:
      "Intensive project to create a brand from A to Z. Management of the entire value chain, from design to database architecture.",
    features: [
      { name: "User interface design", phase: "Week 1 to 2" },
      {
        name: "User management (Registration/Login)",
        phase: "Week 2 to 4",
      },
      { name: "Product catalog & Cart", phase: "Week 4 to 6" },
      { name: "Admin Panel & Order management", phase: "Week 6 to 8" },
    ],
    video: "https://www.youtube.com/watch?v=tio-Nz5ymWg",
  },
  {
    id: 4,
    title: "Melody Odyssey",
    category: "app",
    description:
      "Rhythm game created in 24h during the CodeGame Hackathon. The music is built dynamically as the player progresses.",
    tech: ["Godot Engine", "GDScript", "Game Design"],
    year: "2nd year",
    listecapture: [
      "/assets/vidéos/Mello/mello1.png",
      "/assets/vidéos/Mello/mello2.png",
      "/assets/vidéos/Mello/mello3.png",
      "/assets/vidéos/Mello/mello4.png",
      "/assets/vidéos/Mello/mello5.png",
      "/assets/vidéos/Mello/mello6.png",
      "/assets/vidéos/Mello/mello7.png",
      "/assets/vidéos/Mello/mello8.png",
      "/assets/vidéos/Mello/mello9.png",
    ],
    duration: "24 hours",
    team: "6 people",
    context:
      "CodeGame competition on the theme 'Infinite Melody'. Prototyping and development of a complete game in record time.",
    features: [
      { name: "Brainstorming and gameplay design in team" },
      { name: "Role distribution (Dev, Art, Sound) and time management" },
      { name: "User testing and intensive debugging" },
    ],
    video: "https://www.youtube.com/watch?v=X05Fqovcb44",
    lien: "https://koriaaaaaaaaaaa.itch.io/melody-odyssey",
  },
  {
    id: 5,
    title: "Agent n8n",
    category: "agent",
    description:
      "Automated intelligent agent that compiles and sends a summary of Tech news based on Google News.",
    tech: ["n8n", "Gemini API", "Automation", "RSS"],
    year: "3rd year Esaip",
    listecapture: [],
    duration: "1 month",
    team: "Individual",
    context:
      "Creation of an automated workflow that monitors tech news and sends me an AI-generated summary every 3 days by email.",
    features: [
      { name: "Mastery of n8n nodes and data flows" },
      { name: "HTTP requests to retrieve information feeds" },
      { name: "Configuration of email sending via Gmail API" },
    ],
    video: "",
  },
  {
    id: 6,
    title: "Skyjo Online",
    category: "app",
    description:
      "Adaptation of the Skyjo board game into a multiplayer version. Client/Server architecture and version control with Git.",
    tech: ["Kotlin", "JavaFX", "Sockets", "Git"],
    year: "1st year BUT CS",
    listecapture: [
      "/assets/vidéos/skyjo/skyjo1.png",
      "/assets/vidéos/skyjo/skyjo2.png",
      "/assets/vidéos/skyjo/skyjo3.png",
    ],
    video: "https://youtu.be/BepIttmBmug",
  },
  {
    id: 7,
    title: "Portfolio V2",
    category: "web",
    description:
      "Second iteration of my portfolio with a clean design and optimized user experience (UX) to highlight my projects.",
    tech: ["HTML5", "CSS3", "Responsive Design"],
    year: "2nd year",
    listecapture: [
      "/assets/vidéos/portfoliov2/port1.png",
      "/assets/vidéos/portfoliov2/port2.png",
      "/assets/vidéos/portfoliov2/port3.png",
      "/assets/vidéos/portfoliov2/port4.png",
      "/assets/vidéos/portfoliov2/port5.png",
      "/assets/vidéos/portfoliov2/port6.png",
    ],
    video: "https://youtu.be/a88Ij9eDcX4",
    lien: "https://portfoliov2-gamma-liard.vercel.app/",
  },
  {
    id: 8,
    title: "System Tic-Tac-Toe",
    category: "app",
    description:
      "Low-level Tic-Tac-Toe game to explore system programming: process management, IPC and deadlock detection.",
    tech: ["C", "Linux", "Multi-threading", "System"],
    year: "2nd year",
    listecapture: [
      "/assets/vidéos/Morpion/morpion1.png",
      "/assets/vidéos/Morpion/morpion2.png",
      "/assets/vidéos/Morpion/morpion3.png",
      "/assets/vidéos/Morpion/morpion4.png",
    ],
    video: "https://www.youtube.com/watch?v=w_Z2CdEH0SI&feature=youtu.be",
  },
];