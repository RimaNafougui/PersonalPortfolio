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
      badge: "",
      intro: "",
      description:
        "I build things the way I approach everything else: with full commitment and a need to understand how it works. Software developer, Director of Technology at Careforall.org, and someone who has yet to find a problem worth walking away from.",
      ctaProjects: "View Projects",
      ctaResume: "Download Resume",
      scroll: "Scroll",
      stats: [
        { value: "15+", label: "Students Tutored" },
        { value: "10+", label: "Projects Built" },
        { value: "4", label: "Languages Spoken" },
      ],
    },
    about: {
      title: "About Me",
      accordion1: {
        title: "Background & Education",
        content:
          "I grew up speaking Arabic, then French, then English, and I am currently teaching myself Korean. I chose tech for the freedom to build things on my own terms. Graduating from Collège Ahuntsic in May 2026 with a DEC in Computer Science, and incoming CS student at Concordia University (Fall 2026).",
      },
      accordion2: {
        title: "My Journey",
        content:
          "I wanted the freedom to build things on my own terms. Curiosity about how systems work evolved into a drive to build them. Full-stack led me to data engineering, which led me to AI pipelines. I also happen to love fashion. My first production app was a fashion platform that still runs today. Each layer reveals a deeper problem worth solving.",
      },
      accordion3: {
        title: "How I Work",
        content:
          "I don't jump to solutions. I map the problem, consider multiple approaches, then build the one worth maintaining. I optimize for correctness first, performance second. Whether it is a RAG pipeline, a BI dashboard, or a non-profit's infrastructure, the standard is the same.",
      },
      accordion4: {
        title: "Where I Am Going",
        content:
          "I am working toward building something of my own: a company or research that solves a real problem for real people. I want to work alongside people who are as driven as I am, who treat good enough as a starting point, not a destination.",
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
          problem:
            "Shipping disruptions are invisible in standard reports because data aggregation hides the selection bias that distorts cost and delay estimates.",
          features: [
            "Star schema data model with 50+ DAX measures for prescriptive analytics",
            "4-page interactive dashboard with drill-through on $17M+ shipping costs",
            "Reduced delivery time by 2.83 days for high-value products",
          ],
          keyDecisions: [
            "Chose a star schema over a flat model to support complex DAX relationships without query fan-traps across 50+ measures.",
            "Surfaced the selection bias explicitly in the report rather than silently correcting it — decision-makers need to see the distortion to trust the analysis.",
            "Used what-if parameters for prescriptive analytics instead of stopping at descriptive — the goal was to support decisions, not just describe past data.",
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
          problem:
            "Reading full papers to find relevant insights is hours of manual work that a well-designed retrieval system can reduce to seconds.",
          features: [
            "Automated ETL pipeline via GitHub Actions with weekly scheduled scraping",
            "384-dim vector embeddings + Supabase pgvector for semantic search",
            "Google Gemini Pro LLM for cited natural-language summaries",
          ],
          keyDecisions: [
            "Used pgvector on Supabase rather than a standalone vector DB — it kept the stack at one host and avoided the operational overhead of a separate service for what was essentially an index.",
            "Chose 384-dim sentence-transformers over larger models because the speed-quality tradeoff is optimal for academic abstracts, and latency matters more than marginal embedding precision.",
            "Scheduled weekly GitHub Actions scraping instead of real-time ingestion — ArXiv relevance doesn't decay in hours, so weekly freshness avoids rate-limit complexity for no practical gain.",
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
          problem:
            "My first production-level application, built around something I genuinely care about: fashion as a design problem. Managing a wardrobe across dozens of e-commerce tabs with no inventory visibility leads to repeat purchases and underused clothing.",
          features: [
            "AWS Lambda + ECR pipeline processing 176MB ONNX models for real-time BG removal",
            "Chrome Extension with DOM scraping reducing manual data entry by 90%",
            "OpenAI + OpenWeatherMap integration for weather-aware outfit suggestions",
          ],
          keyDecisions: [
            "Used AWS Lambda with a containerized ONNX model for background removal rather than a third-party API to avoid per-image fees at scale and control the model version.",
            "Built a Chrome Extension for auto-import rather than requiring manual uploads — reducing input friction was the most important retention factor surfaced in early user testing.",
            "Chose NextAuth.js with Supabase over custom auth to shrink the security surface area and ship the core product logic faster.",
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
          problem:
            "Finance APIs commonly become untestable as role and rule complexity grows, causing production bugs that are expensive to trace back to a specific layer.",
          features: [
            "JWT authentication with role-based authorization and pagination",
            "50% test coverage using JUnit 5, Mockito, MockMvc",
            "Deployed to Railway with automated CI/CD via GitHub",
          ],
          keyDecisions: [
            "Used JWT over session-based auth to keep the API stateless and horizontally scalable — no shared session store means simpler deployment without sticky sessions.",
            "Enforced a JaCoCo 50% coverage floor in CI rather than treating coverage as aspirational — a build gate creates accountability that a goal does not.",
            "Applied strict domain layering (controller / service / repository) from the start so adding new expense categories never requires cross-layer rewrites.",
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
          problem:
            "Most component libraries achieve visual polish while treating keyboard navigation and screen reader support as an afterthought, forcing teams to retrofit compliance after shipping.",
          features: [
            "Focus trap management and Tab cycling across 3 accessible components",
            "15+ TypeScript component variants with strict typing",
            "Reduced code duplication by 70% through shared prop patterns",
          ],
          keyDecisions: [
            "Implemented focus trap management from scratch rather than using a library so I could fully understand and document the exact behavior required per component type.",
            "Used CSS Modules over utility classes to keep styles co-located with component logic and avoid purge-related class stripping in consumer build systems.",
            "Validated with VoiceOver and NVDA alongside axe-core — automated tools catch roughly 40% of WCAG failures, so manual testing is non-negotiable for a real accessibility guarantee.",
          ],
          technologies: "React, TypeScript, WCAG 2.1, ARIA, CSS Modules",
          github: "https://github.com/RimaNafougui/accessible-components",
          url: "https://accessible-components-six.vercel.app/",
          image: "/images/projects/accessible-components.png",
        },
        project6: {
          title: "To Do App — Android Task Manager",
          description:
            "Production-grade Android task manager with MVVM architecture, Hilt DI, and a reactive 5-stream StateFlow pipeline merging Room data, search, filters, and DataStore preferences into a single state.",
          problem:
            "Most Android task apps manage search, filters, and persistence as separate states, causing UI flicker and stale reads whenever any one of them changes.",
          features: [
            "Sealed TaskUiState (Loading | Success | Error) powered by a combine() pipeline merging 5 flows — Room data, text search, priority filter, completed-task toggle, and DataStore sort order — into one WhileSubscribed(5000) StateFlow",
            "WorkManager OneTimeWorkRequest reminders per task triggered 1h before deadline, auto-rescheduled on edit and cancelled on delete via a custom HiltWorkerFactory",
            "GitHub Actions CI/CD running unit tests (Turbine + MockK) and uploading a debug APK artifact on every push and pull request to main",
          ],
          keyDecisions: [
            "Combined five independent flows (Room data, search, priority filter, completed toggle, DataStore sort) into one StateFlow using combine() so the UI always derives from a single consistent snapshot.",
            "Used Hilt over manual DI because its compile-time verification catches missing bindings before runtime — critical for a WorkManager component that must survive process death.",
            "Chose WorkManager over AlarmManager for reminders because it handles Doze mode, device reboots, and cancellation automatically — AlarmManager requires custom broadcast receivers for each of those edge cases.",
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
      badge: "",
    },
    experience: {
      title: "Experience",
      viewMore: "Download Resume",
      fileName: "NafouguiRima_EN.pdf",
      items: [
        {
          position: "Director of Technology",
          company: "Careforall.org",
          duration: "March 2026 – Present",
          description:
            "Managing website infrastructure maintenance, security, and email delivery systems for a non-profit platform. Leading SEO optimization, performance improvements, and compliance efforts to ensure a reliable and accessible experience for users.",
          reference: "",
        },
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
          status: "active",
          date: "MAY 2026",
          title: "DEC in Web & Applications",
          institution: "Collège Ahuntsic",
          description:
            "Graduating from intensive training in full-stack web development, mobile applications, and systems analysis. Strong foundations in OOP, algorithms, database management, and cloud computing.",
        },
        {
          status: "active",
          date: "MARCH 2026 – PRESENT",
          title: "Director of Technology",
          institution: "Careforall.org",
          description:
            "Managing website infrastructure maintenance, security, and email delivery systems. Driving SEO optimization, performance improvements, and compliance for the non-profit platform.",
        },
        {
          status: "future",
          date: "FALL 2026",
          title: "BSc in Computer Science",
          institution: "Concordia University",
          description:
            "Incoming CS student. Deepening theoretical foundations in software architecture and large-scale systems while continuing to ship production projects.",
        },
        {
          status: "future",
          date: "2027+",
          title: "Build Something of My Own",
          institution: "To Be Written",
          description:
            "Working toward founding a company or research initiative that solves a real problem for real people. The next chapter is still being decided — but the direction is clear.",
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
      badge: "",
      intro: "",
      description:
        "Je construis les choses comme j'aborde tout le reste : avec un engagement total et le besoin de comprendre comment ca fonctionne. Développeuse, Directrice Technologie chez Careforall.org, et quelqu'un qui n'a pas encore trouvé de problème qui vaille la peine d'abandonner.",
      ctaProjects: "Voir mes projets",
      ctaResume: "Télécharger le CV",
      scroll: "Défiler",
      stats: [
        { value: "15+", label: "Étudiants encadrés" },
        { value: "10+", label: "Projets réalisés" },
        { value: "4", label: "Langues parlées" },
      ],
    },
    about: {
      title: "À Propos de Moi",
      accordion1: {
        title: "Parcours & Éducation",
        content:
          "J'ai grandi en parlant arabe, puis français, puis anglais, et j'apprends actuellement le coréen par moi-même. J'ai choisi la tech pour la liberté de construire des choses selon mes propres termes. Finissante au Collège Ahuntsic en mai 2026 (DEC en informatique) et future étudiante en informatique à l'Université Concordia (automne 2026).",
      },
      accordion2: {
        title: "Mon Parcours",
        content:
          "Je voulais la liberté de construire des choses selon mes propres termes. La curiosité sur le fonctionnement des systèmes s'est transformée en envie de les construire. Le full-stack m'a menée à l'ingénierie des données, puis aux pipelines IA. J'aime aussi la mode. Ma première application en production était une plateforme de mode qui fonctionne encore aujourd'hui. Chaque couche révèle un problème plus profond à résoudre.",
      },
      accordion3: {
        title: "Comment je travaille",
        content:
          "Je ne saute pas aux solutions. Je cartographie le problème, considère plusieurs approches, puis construis celle qui vaut la peine d'être maintenue. J'optimise d'abord pour l'exactitude, ensuite pour la performance. Que ce soit un pipeline RAG, un tableau de bord BI ou l'infrastructure d'un organisme à but non lucratif, le standard est le même.",
      },
      accordion4: {
        title: "Où je vais",
        content:
          "Je travaille à construire quelque chose de mien : une entreprise ou une recherche qui résout un vrai problème pour de vraies personnes. Je veux travailler avec des gens aussi ambitieux que moi, qui considèrent le suffisant comme un point de départ, pas une destination.",
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
          problem:
            "Les perturbations de la chaîne d'approvisionnement sont invisibles dans les rapports standards car l'agrégation masque le biais de sélection qui fausse les estimations de coût et de délai.",
          features: [
            "Modèle de données en étoile avec 50+ mesures DAX pour l'analyse prescriptive",
            "Tableau de bord interactif 4 pages avec exploration sur 17M$+ de coûts",
            "Réduction des délais de livraison de 2,83 jours pour les produits à haute valeur",
          ],
          keyDecisions: [
            "Choix d'un schéma en étoile plutôt qu'un modèle plat pour supporter des relations DAX complexes sans fan-trap sur 50+ mesures.",
            "Exposition explicite du biais de sélection dans le rapport plutôt que correction silencieuse — les décideurs doivent voir la distorsion pour faire confiance à l'analyse.",
            "Utilisation de paramètres de simulation pour l'analyse prescriptive plutôt que de s'arrêter au descriptif — l'objectif était d'appuyer les décisions, pas seulement de décrire le passé.",
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
          problem:
            "Lire des articles entiers pour trouver des informations pertinentes représente des heures de travail manuel qu'un système de récupération bien conçu réduit à quelques secondes.",
          features: [
            "Pipeline ETL automatisé via GitHub Actions avec scraping hebdomadaire",
            "Embeddings 384-dim + Supabase pgvector pour la recherche sémantique",
            "LLM Google Gemini Pro pour des résumés citées en langage naturel",
          ],
          keyDecisions: [
            "Utilisation de pgvector sur Supabase plutôt qu'une base vectorielle dédiée — un seul hôte, sans surcharge opérationnelle pour ce qui était essentiellement un index.",
            "Choix de sentence-transformers 384-dim plutôt que des modèles plus grands car le compromis vitesse-qualité est optimal pour les résumés académiques, et la latence compte plus que la précision marginale.",
            "Scraping hebdomadaire via GitHub Actions plutôt qu'une ingestion en temps réel — la pertinence ArXiv ne se dégrade pas en quelques heures, donc la fraîcheur hebdomadaire évite la complexité de limitation de taux sans gain pratique.",
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
          problem:
            "Ma première application en production, construite autour de quelque chose qui me tient vraiment à coeur : la mode comme problème de design. Gérer une garde-robe sur des dizaines d'onglets sans visibilité sur son inventaire mène à des achats répétés et des vêtements sous-utilisés.",
          features: [
            "Pipeline AWS Lambda + ECR traitant des modèles ONNX 176 Mo",
            "Extension Chrome avec scraping DOM réduisant la saisie de 90%",
            "Intégration OpenAI + OpenWeatherMap pour suggestions météo-adaptées",
          ],
          keyDecisions: [
            "Utilisation d'AWS Lambda avec un modèle ONNX conteneurisé pour la suppression d'arrière-plan plutôt qu'une API tierce — évite les frais par image à l'échelle et contrôle la version du modèle.",
            "Construction d'une extension Chrome pour l'import automatique plutôt qu'uploads manuels — réduire la friction de saisie était le facteur de rétention principal identifié lors des tests utilisateurs.",
            "Choix de NextAuth.js avec Supabase plutôt qu'une auth personnalisée pour réduire la surface de sécurité et livrer la logique produit principale plus rapidement.",
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
          problem:
            "Les API financières deviennent couramment non-testables à mesure que la complexité des rôles augmente, causant des bugs en production difficiles à remonter à une couche précise.",
          features: [
            "Authentification JWT avec autorisation par rôles et pagination",
            "50% de couverture avec JUnit 5, Mockito et MockMvc",
            "Déployé sur Railway avec CI/CD automatisé via GitHub",
          ],
          keyDecisions: [
            "JWT plutôt qu'une auth par session pour garder l'API sans état et horizontalement scalable — pas de session partagée, déploiement simplifié sans sessions collantes.",
            "Seuil de couverture JaCoCo de 50% imposé en CI plutôt que traité comme aspirationnel — une gate de build crée une responsabilité qu'un objectif seul ne crée pas.",
            "Découpage strict en couches (contrôleur / service / référentiel) dès le départ pour que l'ajout de nouvelles catégories de dépenses ne nécessite jamais de réécritures inter-couches.",
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
          problem:
            "La plupart des bibliothèques de composants sacrifient la navigation au clavier et le support des lecteurs d'écran au profit de l'aspect visuel, forçant les équipes à corriger la conformité après la livraison.",
          features: [
            "Piège de focus et navigation Tab pour 3 composants accessibles",
            "15+ variantes TypeScript avec typage strict",
            "Réduction de la duplication de code de 70% via patrons de props partagés",
          ],
          keyDecisions: [
            "Implémentation de la gestion du piège de focus depuis zéro plutôt qu'une bibliothèque — pour comprendre et documenter le comportement exact requis par type de composant.",
            "CSS Modules plutôt que des classes utilitaires pour garder les styles co-localisés avec la logique des composants et éviter la suppression de classes dans les builds consommateurs.",
            "Validation avec VoiceOver et NVDA en plus d'axe-core — les outils automatisés détectent environ 40% des défaillances WCAG, donc les tests manuels sont incontournables.",
          ],
          technologies: "React, TypeScript, WCAG 2.1, ARIA, Modules CSS",
          github: "https://github.com/RimaNafougui/accessible-components",
          url: "https://accessible-components-six.vercel.app/",
          image: "/images/projects/accessible-components.png",
        },
        project6: {
          title: "To Do App — Gestionnaire de Tâches Android",
          description:
            "Application Android MVVM de qualité production avec Hilt, Room et un pipeline StateFlow à 5 flux fusionnant données, recherche, filtres et préférences DataStore en un seul état réactif.",
          problem:
            "La plupart des applications Android gèrent recherche, filtres et persistance comme des états séparés, causant des scintillements d'interface et des lectures obsolètes lors d'un changement.",
          features: [
            "Classe scellée TaskUiState alimentée par un pipeline combine() à 5 flux (Room, recherche textuelle, filtre priorité, masquage des tâches complètes, tri DataStore) dans un StateFlow WhileSubscribed(5000)",
            "WorkManager pour rappels OneTimeWorkRequest par tâche déclenchés 1h avant l'échéance, replanifiés à la modification et annulés à la suppression via HiltWorkerFactory",
            "Pipeline CI GitHub Actions exécutant les tests unitaires (Turbine + MockK) et téléversant un APK de débogage comme artefact à chaque push et pull request sur main",
          ],
          keyDecisions: [
            "Combinaison de cinq flux indépendants (Room, recherche, filtre priorité, toggle tâches complètes, tri DataStore) en un seul StateFlow via combine() — l'UI dérive toujours d'un état cohérent.",
            "Hilt plutôt que DI manuelle car sa vérification à la compilation détecte les liaisons manquantes avant l'exécution — essentiel pour un WorkManager qui doit survivre à la mort du processus.",
            "WorkManager plutôt qu'AlarmManager pour les rappels car il gère automatiquement le mode Doze, les redémarrages et l'annulation — AlarmManager nécessiterait des broadcast receivers personnalisés pour chacun de ces cas.",
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
      badge: "",
    },
    experience: {
      title: "Expériences",
      viewMore: "Télécharger le CV",
      fileName: "NafouguiRima_FR.pdf",
      items: [
        {
          position: "Directrice Technologie",
          company: "Careforall.org",
          duration: "Mars 2026 – Présent",
          description:
            "Gestion de la maintenance de l'infrastructure web, de la sécurité et des systèmes d'envoi de courriels pour une plateforme à but non lucratif. Pilotage de l'optimisation SEO, des performances et de la conformité afin d'assurer une expérience fiable et accessible.",
          reference: "",
        },
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
          status: "active",
          date: "MAI 2026",
          title: "Technique Informatique (DEC)",
          institution: "Collège Ahuntsic",
          description:
            "Finissant d'une formation intensive en développement web full-stack, applications mobiles et analyse de systèmes. Bases solides en POO, algorithmes, bases de données et cloud.",
        },
        {
          status: "active",
          date: "MARS 2026 – PRÉSENT",
          title: "Directrice Technologie",
          institution: "Careforall.org",
          description:
            "Gestion de la maintenance de l'infrastructure web, de la sécurité et des systèmes d'envoi de courriels. Optimisation du référencement, des performances et de la conformité pour la plateforme à but non lucratif.",
        },
        {
          status: "future",
          date: "AUTOMNE 2026",
          title: "Baccalauréat en Informatique",
          institution: "Université Concordia",
          description:
            "Future étudiante en informatique. Approfondissement des fondements théoriques en architecture logicielle et systèmes à grande échelle, tout en continuant à livrer des projets en production.",
        },
        {
          status: "future",
          date: "2027+",
          title: "Construire quelque chose de mien",
          institution: "À écrire",
          description:
            "Travailler vers la création d'une entreprise ou d'une initiative de recherche qui résout un vrai problème pour de vraies personnes. Le prochain chapitre se décide — mais la direction est claire.",
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
