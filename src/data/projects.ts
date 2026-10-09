import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "api-gestio-biblioteca",
    title: "API de Gestió de Biblioteca",
    summary:
      "API REST per gestionar llibres, socis i préstecs amb autenticació JWT.",
    description:
      "Backend complet desenvolupat amb Node.js i Express que exposa una API REST documentada amb Swagger. Inclou autenticació basada en JWT, rols d'usuari, validació de dades amb Zod i persistència en PostgreSQL mitjançant Prisma. Disposa de tests d'integració amb Jest i un pipeline de CI que executa els tests i aplica les migracions de base de dades.",
    category: "backend",
    tags: ["API REST", "Autenticació", "Testing"],
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Jest"],
    year: 2025,
    featured: true,
    repo: "https://github.com/exemple/api-biblioteca",
  },
  {
    slug: "app-finances-personals",
    title: "App de Finances Personals",
    summary:
      "Aplicació web per registrar ingressos i despeses amb gràfics interactius.",
    description:
      "Interfície construïda amb React i Next.js que permet categoritzar moviments, veure l'evolució mensual i fixar objectius d'estalvi. La gràfica interactiva es renderitza amb la llibreria de components i s'emmagatzemen les dades al navegador. És un projecte 100% client-side amb desplegament estàtic.",
    category: "frontend",
    tags: ["Interfície", "Gràfics", "Client-side"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"],
    year: 2025,
    featured: true,
    repo: "https://github.com/exemple/finances",
    demo: "https://finances.exemple.com",
  },
  {
    slug: "botiga-online",
    title: "Botiga Online Full Stack",
    summary:
      "E-commerce complet amb catàleg, carret i pagament simulat.",
    description:
      "Projecte full stack que integra un frontend en Next.js amb una API pròpia. Gestiona el catàleg de productes, el carret de la compra, el procés de checkout i un panell d'administració per gestionar comandes i estocs. Utilitza Stripe en mode de prova per simular els pagaments.",
    category: "fullstack",
    tags: ["E-commerce", "Pagaments", "Panell admin"],
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    year: 2024,
    featured: true,
    repo: "https://github.com/exemple/botiga",
    demo: "https://botiga.exemple.com",
  },
  {
    slug: "app-receptes-mobil",
    title: "App de Receptes",
    summary:
      "Aplicació mòbil per explorar i guardar receptes de cuina.",
    description:
      "Aplicació multiplataforma desenvolupada amb React Native i Expo. Consumeix una API pública de receptes, permet guardar favorites de manera local i funciona tant en Android com en iOS des d'una sola base de codi. Inclou cerca per ingredients i mode fosc.",
    category: "mobile",
    tags: ["Mòbil", "Consum d'API", "Offline"],
    technologies: ["React Native", "Expo", "TypeScript", "AsyncStorage"],
    year: 2024,
    repo: "https://github.com/exemple/receptes",
  },
  {
    slug: "pipeline-ci-cd-docker",
    title: "Pipeline CI/CD amb Docker",
    summary:
      "Automatització de builds i desplegaments amb contenidors i GitHub Actions.",
    description:
      "Conjunt de configuracions per empaquetar aplicacions en imatges Docker i desplegar-les automàticament. Els workflows de GitHub Actions executen lint, tests i build, publiquen la imatge al registre i la despleguen a un servidor. Redueix el temps de publicació de manera dràstica.",
    category: "devops",
    tags: ["CI/CD", "Contenidors", "Automatització"],
    technologies: ["Docker", "GitHub Actions", "Nginx", "Linux"],
    year: 2024,
    repo: "https://github.com/exemple/ci-cd",
  },
  {
    slug: "disseny-sistema-portafolis",
    title: "Sistema de Disseny Personal",
    summary:
      "Llibreria de components i tokens de disseny reutilitzables.",
    description:
      "Disseny i implementació d'un sistema de disseny propi amb tokens de color, tipografia i espaiat. Els components (botons, targetes, formularis) són accessibles, responsius i estan documentats. Serveix com a base visual per a tots els projectes personals.",
    category: "disseny",
    tags: ["Design System", "Accessibilitat", "UI"],
    technologies: ["Figma", "Tailwind CSS", "React", "Storybook"],
    year: 2025,
    repo: "https://github.com/exemple/design-system",
  },
  {
    slug: "xarxa-social-estudis",
    title: "Xarxa Social d'Estudis",
    summary:
      "Plataforma per compartir apunts i organitzar grups d'estudi.",
    description:
      "Projecte full stack amb autenticació, perfils d'usuari, pujada de fitxers i un mur d'activitat en temps real. El backend utilitza WebSockets per a la missatgeria i Firebase Storage per als apunts. La interfície és responsiva i accessible.",
    category: "fullstack",
    tags: ["Temps real", "WebSockets", "Fitxers"],
    technologies: ["React", "Express", "Socket.io", "Firebase", "PostgreSQL"],
    year: 2023,
    repo: "https://github.com/exemple/estudis",
  },
  {
    slug: "cli-organitzador-fitxers",
    title: "CLI Organitzador de Fitxers",
    summary:
      "Eina de línia de comandes per classificar i renombrar fitxers.",
    description:
      "Petita eina de terminal escrita en Python que analitza una carpeta, classifica els fitxers per tipus i extensió, i els renombra de forma consistent. Inclou opcions configurables, mode simulació (dry-run) i logs. Va ser el meu primer contacte amb la programació d'scripts d'automatització.",
    category: "altres",
    tags: ["CLI", "Automatització", "Scripts"],
    technologies: ["Python", "argparse", "Pathlib"],
    year: 2023,
    repo: "https://github.com/exemple/organitzador",
  },
  {
    slug: "panell-analitica",
    title: "Panell d'Analítica",
    summary:
      "Dashboard amb mètriques en temps real i visualitzacions.",
    description:
      "Aplicació web de visualització de dades que es connecta a diferents fonts per mostrar mètriques en directe. Utilitza Server-Sent Events per actualitzar les dades sense recarregar la pàgina i compon les visualitzacions de forma modular.",
    category: "frontend",
    tags: ["Dashboard", "Dades", "Temps real"],
    technologies: ["Vue 3", "Vite", "Chart.js", "SSE"],
    year: 2024,
    repo: "https://github.com/exemple/analitica",
  },
];
