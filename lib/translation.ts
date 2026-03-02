export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      roadmap: "Roadmap",
      blog: "Blog",
    },
    hero: {
      badge: "Available for Internships: March – Aug 2026",
      intro: "Hi, I am",
      description:
        "Full-stack developer with a passion for Data Engineering & AI. I build scalable web applications, automated data pipelines, and intelligent systems , combining technical precision with modern architecture.",
      ctaProjects: "View Projects",
      ctaResume: "Download Resume",
      scroll: "Scroll",
      stats: [
        { value: "15+", label: "Students Tutored" },
        { value: "10+", label: "Projects Built" },
        { value: "3", label: "Languages Spoken" },
      ],
    },
    about: {
      title: "About Me",
      accordion1: {
        title: "Background & Education",
        content:
          "I'm a software development student graduating from Collège Ahuntsic in May 2026, and an incoming Computer Science student at Concordia University (Fall 2026). I combine formal technical training with self-driven learning in AI and Data Engineering.",
      },
      accordion2: {
        title: "My Journey",
        content:
          "My journey began in 2020 by building my first PC, which sparked a curiosity about how systems work under the hood. This evolved from hardware to software, leading me to explore full-stack development and, more recently, the complexities of data pipelines and machine learning architectures.",
      },
      accordion3: {
        title: "What I Build",
        content:
          "I sit at the intersection of creative frontend work and analytical backend logic. I enjoy crafting intuitive user interfaces with Next.js while simultaneously architecting robust data systems using Python, SQL, and Vector Databases.",
      },
      accordion4: {
        title: "What Drives Me",
        content:
          "Beyond coding, I'm constantly learning — whether it's new spoken languages or new tech stacks like RAG (Retrieval-Augmented Generation). I'm driven by the engineering challenge of optimizing performance, automating workflows, and building software that solves real-world problems.",
      },
    },
    skills: {
      title: "Skills",
      languages: "Languages",
      others: "Others",
      framework: "Frameworks",
      ides: "IDEs & Tools",
      cloud: "Cloud & DevOps",
      databases: "Databases",
      versionControl: "Version Control",
    },
    projects: {
      title: "Projects",
      items: {
        project1: {
          title: "Supply Chain Analytics Dashboard",
          description:
            "End-to-end BI pipeline analyzing 10,000+ global shipments to identify disruption patterns. Uncovered selection bias masking $99K in mitigation value using DAX prescriptive analytics.",
          features: [
            "Star schema data model with 50+ DAX measures for prescriptive analytics",
            "4-page interactive dashboard with drill-through on $17M+ shipping costs",
            "Reduced delivery time by 2.83 days for high-value products",
          ],
          technologies: "Power BI, Python, DAX",
          github: "https://github.com/RimaNafougui/SupplyChainBI",
          url: "https://app.powerbi.com/groups/me/reports/1b049350-80b0-4644-bd5b-46ca816147c7/1c89a3a18280f05f105e?experience=power-bi",
          image: "/images/projects/supply-chain.png",
        },
        project2: {
          title: "ArXiv RAG Research Assistant",
          description:
            "Automated AI pipeline that scrapes ArXiv papers and enables semantic chat with research documents using RAG architecture for accurate, cited answers.",
          features: [
            "Automated ETL pipeline via GitHub Actions with weekly scheduled scraping",
            "384-dim vector embeddings + Supabase pgvector for semantic search",
            "Google Gemini Pro LLM for cited natural-language summaries",
          ],
          technologies:
            "Python, Supabase (pgvector), Google Gemini API, GitHub Actions, Streamlit",
          github: "https://github.com/RimaNafougui/arxivsearchengine",
          url: "https://arxivsearchengine.streamlit.app",
          image: "/images/projects/arxiv-rag.png",
        },
        project3: {
          title: "RCapsule — Smart Closet Manager",
          description:
            "Full-stack wardrobe app with AI outfit recommendations, serverless ML pipeline for background removal, and Chrome extension for auto-importing e-commerce products.",
          features: [
            "AWS Lambda + ECR pipeline processing 176MB ONNX models for real-time BG removal",
            "Chrome Extension with DOM scraping reducing manual data entry by 90%",
            "OpenAI + OpenWeatherMap integration for weather-aware outfit suggestions",
          ],
          technologies:
            "Next.js, TypeScript, PostgreSQL, Supabase, OpenAI API, AWS Lambda, NextAuth.js",
          github: "https://github.com/RimaNafougui/rcapsule",
          url: "https://rcapsule.com",
          image: "/images/projects/rcapsule.png",
        },
        project4: {
          title: "ExpenseFlow — Finance REST API",
          description:
            "Production-grade RESTful API with Spring Boot 3 for income/expense tracking with JWT auth, role-based authorization, and 50% test coverage across 18+ tests.",
          features: [
            "JWT authentication with role-based authorization and pagination",
            "50% test coverage using JUnit 5, Mockito, MockMvc",
            "Deployed to Railway with automated CI/CD via GitHub",
          ],
          technologies:
            "Spring Boot 3, Java 21, PostgreSQL, JWT, Maven, JaCoCo",
          github: "https://github.com/RimaNafougui/expenseflow",
          url: "https://expenseflow-production.up.railway.app/",
          image: "/images/projects/expenseflow.png",
          type: "backend" as const,
        },
        project5: {
          title: "Accessible Component Library",
          description:
            "Reusable React component system achieving 100/100 Lighthouse accessibility score with TypeScript interfaces, WCAG 2.1 AA compliance, and keyboard navigation.",
          features: [
            "Focus trap management and Tab cycling across 3 accessible components",
            "15+ TypeScript component variants with strict typing",
            "Reduced code duplication by 70% through shared prop patterns",
          ],
          technologies: "React, TypeScript, WCAG 2.1, ARIA, CSS Modules",
          github: "https://github.com/RimaNafougui/accessible-components",
          url: "https://accessible-components-six.vercel.app/",
          image: "/images/projects/accessible-components.png",
        },
        project6: {
          title: "Fruit Basket Game",
          description:
            "Interactive Unity game with progressive difficulty, physics-based collision, and 95% test coverage across Unit, Play Mode, and Configuration test suites.",
          features: [
            "95% test coverage with comprehensive Unity Test Framework suite",
            "Dynamic spawning with progressive difficulty scaling at 60fps",
            "Polished UI with TextMesh Pro and VFX particle systems",
          ],
          technologies: "Unity, C#, Unity Test Framework, Rigidbody Physics",
          github: "https://github.com/RimaNafougui/foodbasket",
          url: null,
          image: "/images/projects/fruit-basket.png",
        },
        project7: {
          title: "To Do App — Android Task Manager",
          description:
            "Production-grade Android task manager with MVVM architecture, Hilt DI, and a reactive 5-stream StateFlow pipeline merging Room data, search, filters, and DataStore preferences into a single state.",
          features: [
            "Sealed TaskUiState (Loading | Success | Error) powered by a combine() pipeline merging 5 flows — Room data, text search, priority filter, completed-task toggle, and DataStore sort order — into one WhileSubscribed(5000) StateFlow",
            "WorkManager OneTimeWorkRequest reminders per task triggered 1h before deadline, auto-rescheduled on edit and cancelled on delete via a custom HiltWorkerFactory",
            "GitHub Actions CI/CD running unit tests (Turbine + MockK) and uploading a debug APK artifact on every push and pull request to main",
          ],
          technologies:
            "Kotlin, Jetpack Compose, Hilt, Room, WorkManager, DataStore, Coroutines + Flow, Material 3",
          github: "https://github.com/RimaNafougui/Androidtodo",
          url: null,
          image: "/images/projects/Todo.png",
        },
      },
    },
    footer: {
      rights: "All rights reserved",
      badge: "Available for Internships: March – Aug 2026",
    },
    experience: {
      title: "Experience",
      viewMore: "Download Resume",
      fileName: "NafouguiRima_EN.pdf",
      items: [
        {
          position: "Programming Tutor",
          company: "Cégep Ahuntsic / Freelance",
          duration: "May 2025 – Present",
          description:
            "Mentoring 15+ students weekly in SQL, Java, Python, JavaScript, Kotlin, and Swift. Improved student pass rates by 85% through real-time debugging, algorithm problem-solving, and personalized learning materials including interactive dashboards and visualization tools.",
          reference: "Professional Reference Available",
        },
        {
          position: "Mathematics Tutor",
          company: "Cégep Ahuntsic",
          duration: "Aug 2024 – May 2025",
          description:
            "Tutored 5 CS students in linear algebra and discrete mathematics, creating 10+ Python visualization scripts to bridge theory to real-world programming. Topics included ray tracing calculations, graph theory, and probability for ML applications.",
          reference: "Professional Reference Available",
        },
      ],
    },
    contact: {
      title: "Contact Me",
      name: {
        errorMessage: "Please enter a valid name",
        label: "Full Name:",
        placeholder: "Enter your full name",
      },
      email: {
        errorMessage: "Please enter a valid email",
        label: "Email:",
        placeholder: "Enter your email",
      },
      message: {
        errorMessage: "Please enter a message",
        label: "Message: ",
        placeholder: "Your message...",
      },
      submit: "Submit",
      reset: "Reset",
    },
    roadmap: {
      title: "Technical Journey",
      milestones: [
        {
          status: "completed",
          date: "MAY 2026",
          title: "DEC in Web & Applications",
          institution: "Collège Ahuntsic",
          description:
            "Graduating from intensive training in full-stack web development, mobile applications, and systems analysis. Strong foundations in OOP, algorithms, database management, and cloud computing.",
        },
        {
          status: "active",
          date: "MARCH – AUGUST 2026",
          title: "Seeking Internship",
          institution: "Software / Data Engineering",
          description:
            "Immediately available for a 270h+ internship. Eager to contribute to dynamic teams using Next.js, Python, or Cloud technologies to build scalable, production-ready solutions.",
        },
        {
          status: "future",
          date: "FALL 2026",
          title: "BSc in Computer Science",
          institution: "Concordia University",
          description:
            "Incoming Engineering student. Preparing to deepen theoretical knowledge in software architecture and large-scale system design while continuing to build production projects.",
        },
      ],
    },
  },
  fr: {
    nav: {
      about: "À Propos",
      skills: "Compétences",
      experience: "Expériences",
      projects: "Projets",
      contact: "Contactez-moi",
      roadmap: "Parcours",
      blog: "Blog",
    },
    hero: {
      badge: "Disponible pour stages : Mars – Août 2026",
      intro: "Bonjour, je suis",
      description:
        "Développeuse full-stack passionnée par l'ingénierie des données et l'IA. Je conçois des applications web évolutives, des pipelines automatisés et des systèmes intelligents, alliant précision technique et architecture moderne.",
      ctaProjects: "Voir mes projets",
      ctaResume: "Télécharger le CV",
      scroll: "Défiler",
      stats: [
        { value: "15+", label: "Étudiants encadrés" },
        { value: "10+", label: "Projets réalisés" },
        { value: "3", label: "Langues parlées" },
      ],
    },
    about: {
      title: "À Propos de Moi",
      accordion1: {
        title: "Parcours & Éducation",
        content:
          "Je suis une étudiante en développement logiciel finissant au Collège Ahuntsic en mai 2026, et future étudiante en Informatique à l'Université Concordia (Automne 2026). Je combine une formation technique formelle avec un apprentissage autodidacte en IA et en ingénierie des données.",
      },
      accordion2: {
        title: "Mon Parcours",
        content:
          "Mon parcours a commencé en 2020 par la construction de mon premier PC, éveillant une curiosité sur le fonctionnement des systèmes. Cela a évolué du matériel vers le logiciel, me menant au développement full-stack et, plus récemment, à la complexité des pipelines de données et des architectures d'apprentissage automatique.",
      },
      accordion3: {
        title: "Ce que je construis",
        content:
          "Je me situe à l'intersection du travail créatif frontend et de la logique backend analytique. J'aime concevoir des interfaces intuitives avec Next.js tout en architecturant des systèmes de données robustes en Python, SQL et bases de données vectorielles.",
      },
      accordion4: {
        title: "Ce qui me motive",
        content:
          "Au-delà du code, j'apprends constamment — que ce soit de nouvelles langues parlées ou des technologies comme le RAG. Je suis motivée par le défi d'optimiser les performances, automatiser les workflows et créer des logiciels qui résolvent des problèmes réels.",
      },
    },
    skills: {
      title: "Compétences",
      languages: "Langages",
      others: "Autres",
      framework: "Frameworks",
      ides: "IDEs & Outils",
      cloud: "Cloud & DevOps",
      databases: "Bases de données",
      versionControl: "Contrôle de version",
    },
    projects: {
      title: "Projets",
      items: {
        project1: {
          title: "Tableau de Bord Chaîne d'Approvisionnement",
          description:
            "Pipeline BI complet analysant 10 000+ expéditions mondiales pour identifier les perturbations. A révélé un biais de sélection masquant 99 000 $ de valeur avec des analyses DAX prescriptives.",
          features: [
            "Modèle de données en étoile avec 50+ mesures DAX pour l'analyse prescriptive",
            "Tableau de bord interactif 4 pages avec exploration sur 17M$+ de coûts",
            "Réduction des délais de livraison de 2,83 jours pour les produits à haute valeur",
          ],
          technologies: "Power BI, Python, DAX",
          github: "https://github.com/RimaNafougui/SupplyChainBI",
          url: "https://app.powerbi.com/groups/me/reports/1b049350-80b0-4644-bd5b-46ca816147c7/1c89a3a18280f05f105e?experience=power-bi",
          image: "/images/projects/supply-chain.png",
        },
        project2: {
          title: "Assistant de Recherche ArXiv RAG",
          description:
            "Pipeline IA automatisé qui extrait des articles ArXiv et permet de discuter avec les documents via architecture RAG pour des réponses précises et citées.",
          features: [
            "Pipeline ETL automatisé via GitHub Actions avec scraping hebdomadaire",
            "Embeddings 384-dim + Supabase pgvector pour la recherche sémantique",
            "LLM Google Gemini Pro pour des résumés citées en langage naturel",
          ],
          technologies:
            "Python, Supabase (pgvector), Google Gemini API, GitHub Actions, Streamlit",
          github: "https://github.com/RimaNafougui/arxivsearchengine",
          url: "https://arxivsearchengine.streamlit.app",
          image: "/images/projects/arxiv-rag.png",
        },
        project3: {
          title: "RCapsule — Gestionnaire de Garde-robe",
          description:
            "Application full-stack avec recommandations IA, pipeline ML serverless pour suppression d'arrière-plan, et extension Chrome pour importer automatiquement des produits e-commerce.",
          features: [
            "Pipeline AWS Lambda + ECR traitant des modèles ONNX 176 Mo",
            "Extension Chrome avec scraping DOM réduisant la saisie de 90%",
            "Intégration OpenAI + OpenWeatherMap pour suggestions météo-adaptées",
          ],
          technologies:
            "Next.js, TypeScript, PostgreSQL, Supabase, OpenAI API, AWS Lambda, NextAuth.js",
          github: "https://github.com/RimaNafougui/rcapsule",
          url: "https://rcapsule.com",
          image: "/images/projects/rcapsule.png",
        },
        project4: {
          title: "ExpenseFlow — API REST Finance",
          description:
            "API RESTful de qualité production avec Spring Boot 3 pour le suivi des finances avec auth JWT, autorisation basée sur les rôles et 50% de couverture de tests.",
          features: [
            "Authentification JWT avec autorisation par rôles et pagination",
            "50% de couverture avec JUnit 5, Mockito et MockMvc",
            "Déployé sur Railway avec CI/CD automatisé via GitHub",
          ],
          technologies:
            "Spring Boot 3, Java 21, PostgreSQL, JWT, Maven, JaCoCo",
          github: "https://github.com/RimaNafougui/expenseflow",
          url: "https://expenseflow-production.up.railway.app/",
          image: "/images/projects/expenseflow.png",
          type: "backend" as const,
        },
        project5: {
          title: "Bibliothèque de Composants Accessibles",
          description:
            "Système de composants React réutilisables atteignant 100/100 Lighthouse avec TypeScript, conformité WCAG 2.1 AA et navigation au clavier complète.",
          features: [
            "Piège de focus et navigation Tab pour 3 composants accessibles",
            "15+ variantes TypeScript avec typage strict",
            "Réduction de la duplication de code de 70% via patrons de props partagés",
          ],
          technologies: "React, TypeScript, WCAG 2.1, ARIA, Modules CSS",
          github: "https://github.com/RimaNafougui/accessible-components",
          url: "https://accessible-components-six.vercel.app/",
          image: "/images/projects/accessible-components.png",
        },
        project6: {
          title: "Jeu Panier de Fruits",
          description:
            "Jeu Unity interactif avec difficulté progressive, collisions physiques et 95% de couverture de tests sur les suites Unit, Play Mode et Configuration.",
          features: [
            "95% de couverture avec suite complète Unity Test Framework",
            "Apparition dynamique avec difficulté progressive à 60fps",
            "Interface soignée avec TextMesh Pro et systèmes VFX",
          ],
          technologies: "Unity, C#, Unity Test Framework, Physique Rigidbody",
          github: "https://github.com/RimaNafougui/foodbasket",
          url: null,
          image: "/images/projects/fruit-basket.png",
        },
        project7: {
          title: "To Do App — Gestionnaire de Tâches Android",
          description:
            "Application Android MVVM de qualité production avec Hilt, Room et un pipeline StateFlow à 5 flux fusionnant données, recherche, filtres et préférences DataStore en un seul état réactif.",
          features: [
            "Classe scellée TaskUiState alimentée par un pipeline combine() à 5 flux (Room, recherche textuelle, filtre priorité, masquage des tâches complètes, tri DataStore) dans un StateFlow WhileSubscribed(5000)",
            "WorkManager pour rappels OneTimeWorkRequest par tâche déclenchés 1h avant l'échéance, replanifiés à la modification et annulés à la suppression via HiltWorkerFactory",
            "Pipeline CI GitHub Actions exécutant les tests unitaires (Turbine + MockK) et téléversant un APK de débogage comme artefact à chaque push et pull request sur main",
          ],
          technologies:
            "Kotlin, Jetpack Compose, Hilt, Room, WorkManager, DataStore, Coroutines + Flow, Material 3",
          github: "https://github.com/RimaNafougui/AndroidTodo",
          url: null,
          image: "/images/projects/Todo.png",
        },
      },
    },
    footer: {
      rights: "Tous droits réservés",
      badge: "Disponible pour stages : Mars – Août 2026",
    },
    experience: {
      title: "Expériences",
      viewMore: "Télécharger le CV",
      fileName: "NafouguiRima_FR.pdf",
      items: [
        {
          position: "Tutrice en Programmation",
          company: "Cégep Ahuntsic / Travail Autonome",
          duration: "Mai 2025 – Présent",
          description:
            "Encadrement de 15+ étudiants hebdomadairement en SQL, Java, Python, JavaScript, Kotlin et Swift. Amélioration des taux de réussite de 85% grâce au débogage en temps réel, résolution d'algorithmes et création de matériaux d'apprentissage personnalisés.",
          reference: "Référence professionnelle disponible",
        },
        {
          position: "Tutrice en Mathématiques",
          company: "Cégep Ahuntsic",
          duration: "Août 2024 – Mai 2025",
          description:
            "Tutorat de 5 étudiants en informatique en algèbre linéaire et mathématiques discrètes. Création de 10+ scripts Python pour illustrer les concepts (ray tracing, théorie des graphes, probabilités pour l'IA).",
          reference: "Référence professionnelle disponible",
        },
      ],
    },
    contact: {
      title: "Contactez Moi",
      name: {
        errorMessage: "Veuillez entrer un nom valide",
        label: "Nom Complet:",
        placeholder: "Entrez votre nom complet",
      },
      email: {
        errorMessage: "Veuillez entrer une adresse courriel valide",
        label: "Adresse courriel:",
        placeholder: "Entrez votre adresse courriel",
      },
      message: {
        errorMessage: "Veuillez entrer un message",
        label: "Message:",
        placeholder: "Votre message...",
      },
      submit: "Soumettre",
      reset: "Réinitialiser",
    },
    roadmap: {
      title: "Parcours Technique",
      milestones: [
        {
          status: "completed",
          date: "MAI 2026",
          title: "Technique Informatique (DEC)",
          institution: "Collège Ahuntsic",
          description:
            "Finissant d'une formation intensive en développement web full-stack, applications mobiles et analyse de systèmes. Bases solides en POO, algorithmes, bases de données et cloud.",
        },
        {
          status: "active",
          date: "MARS – AOÛT 2026",
          title: "Recherche de Stage",
          institution: "Génie Logiciel / Données",
          description:
            "Disponibilité immédiate pour un stage de 270h+. Désireuse de contribuer à des équipes dynamiques avec Next.js, Python ou le Cloud pour bâtir des solutions évolutives.",
        },
        {
          status: "future",
          date: "AUTOMNE 2026",
          title: "Baccalauréat en Informatique",
          institution: "Université Concordia",
          description:
            "Future étudiante en Informatique. Prête à approfondir les connaissances théoriques en architecture logicielle et conception de systèmes à grande échelle.",
        },
      ],
    },
  },
};

export type Language = "en" | "fr";
export type TranslationKey = keyof typeof translations.en;
export type Translation = typeof translations.en;
export type Project = {
  title: string;
  description: string;
  features: string[];
  technologies: string;
  github: string;
  url: string | null;
  image?: string;
  type?: "frontend" | "backend";
};
