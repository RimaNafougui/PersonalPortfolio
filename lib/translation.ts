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
    ui: {
      "skip": "Skip to main content",
      "toggleMenu": "Toggle navigation menu",
      "mainNav": "Main navigation",
      "mobileNav": "Mobile navigation",
      "scrollTop": "Scroll to top",
      "careerMilestones": "Career milestones",
      "intro": "Introduction"
    },
    hero: {
      "badge": "",
      "intro": "",
      "description": "Computer Science student at the University of Montreal who ships production software: full-stack web apps, AI retrieval pipelines and backend APIs, with tests and CI behind them. I like to understand how a system works before I build on it.",
      "ctaProjects": "View Projects",
      "ctaResume": "Download Resume",
      "scroll": "Scroll",
    },
    about: {
      title: "About Me",
      accordion1: {
        title: "Background & Education",
        content:
          "I grew up speaking Arabic, then French, then English, and I am currently teaching myself Korean. I chose tech for the freedom to build things on my own terms. I finished a DEC in Computer Science Technology (Web and Mobile) at Collège Ahuntsic in May 2026 and now study Computer Science at the University of Montreal on an accelerated path (15 credits exempted), with a B.Sc. expected in December 2028.",
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
      "title": "Projects",
      "more": "More projects",
      "less": "Show fewer",
    "labels": {
      "problem": "Problem",
      "keyDecisions": "Key Decisions",
      "sourceCode": "Source Code",
      "viewSource": "View source on GitHub",
      "selectedWorks": "selected works"
    },
      "items": {
        "project1": {
          "title": "RCapsule: AI Wardrobe Platform",
          "description": "Full-stack wardrobe platform with weather-aware AI outfit recommendations, Stripe subscription billing, AWS Lambda background removal, and a Chrome extension for importing items from shopping sites.",
          "problem": "My first production application, built around fashion as a design problem. Managing a wardrobe across dozens of shopping tabs with no view of what you already own leads to repeat purchases and underused clothing.",
          "features": [
            "60 API routes with Zod validation, ownership checks and tiered Upstash Redis rate limiting",
            "137 tests across 14 suites (Vitest, MSW) with 70% line and 60% branch coverage thresholds, enforced by GitHub Actions CI (lint, typecheck, test, build)",
            "Stripe billing with signed webhooks, made idempotent by storing processed event IDs in Redis"
          ],
          "keyDecisions": [
            "Ran background removal in a containerized AWS Lambda (rembg on ONNX Runtime, deployed through ECR) instead of a third-party API, to avoid per-image fees and control the model version.",
            "Enforced ownership with PostgreSQL Row-Level Security (Supabase) behind NextAuth v5, so access rules hold at the data layer and not only in application code.",
            "Put the AI provider behind one interface so recommendations can run on OpenAI (gpt-4o-mini) or Anthropic, instead of tying the product to a single vendor."
          ],
          "technologies": "Next.js 16, React 19, TypeScript, PostgreSQL, Supabase, Stripe, AWS Lambda, Redis, OpenAI API",
          "github": "https://github.com/RimaNafougui/rcapsule",
          "url": "https://rcapsule.com",
          "image": "/images/projects/rcapsule.png"
        },
        "project3": {
          "title": "ArXiv RAG Research Assistant",
          "description": "Conversational research assistant over 1,200+ indexed ArXiv papers: a daily ETL pipeline, hybrid retrieval (vector plus full-text) and streamed, source-cited answers, backed by a retrieval evaluation harness.",
          "problem": "Reading full papers to find relevant insights takes hours. A well-designed retrieval system reduces that to seconds, as long as you can show that it retrieves the right passages.",
          "features": [
            "Daily GitHub Actions ETL that fetches, chunks (about 800 characters, sentence boundaries), embeds (384-dim MiniLM) and idempotently loads papers into Supabase pgvector",
            "Hybrid search fusing pgvector cosine similarity with full-text search through reciprocal rank fusion, plus a gpt-4o-mini query router",
            "20-question evaluation set scored with hit rate@5 and MRR"
          ],
          "keyDecisions": [
            "Used pgvector on Supabase rather than a standalone vector database. It kept the stack on one host and avoided running a separate service for what is essentially an index.",
            "Fused vector and full-text rankings with reciprocal rank fusion, so one ranking benefits from both semantic matches and exact keyword matches such as model names.",
            "Chose 384-dim sentence-transformers over larger models because the speed and quality tradeoff suits academic text, and added an evaluation harness so retrieval quality is measured, not eyeballed."
          ],
          "technologies": "Python, Supabase (pgvector), OpenAI API, sentence-transformers, GitHub Actions, Streamlit",
          "github": "https://github.com/RimaNafougui/ArxivSearchEngine",
          "url": "https://huggingface.co/spaces/RimaNafougui/ArxivSearchEngine",
          "image": "/images/projects/arxiv-rag.png"
        },
        "project4": {
          "title": "ExpenseFlow: Finance REST API",
          "description": "RESTful personal finance API built with Spring Boot 3: JWT authentication, role-based authorization, pagination, filtering and monthly summaries, with 40+ unit and integration tests and CI on every push.",
          "problem": "Finance APIs commonly become untestable as role and rule complexity grows, causing production bugs that are expensive to trace back to a specific layer.",
          "features": [
            "JWT authentication with role-based authorization, pagination, sorting and category filtering",
            "Unit and integration tests with JUnit 5, Mockito and MockMvc, and a JaCoCo coverage report produced by GitHub Actions CI",
            "Containerized with Docker and deployed to Railway"
          ],
          "keyDecisions": [
            "Used JWT over session-based auth to keep the API stateless and horizontally scalable. With no shared session store, deployment needs no sticky sessions.",
            "Applied strict layering (controller, service, repository) from the start so adding a new expense category never requires cross-layer rewrites.",
            "Generated a JaCoCo coverage report in CI on every run, so test coverage stays visible instead of being checked by hand."
          ],
          "technologies": "Spring Boot 3, Java 21, PostgreSQL, JWT, Maven, JaCoCo",
          "github": "https://github.com/RimaNafougui/expenseflow",
          "url": "https://expenseflow-production.up.railway.app/",
          "image": "/images/projects/expenseflow.png",
          "type": "backend" as const
        },
        "project5": {
          "title": "Accessible Component Library",
          "description": "Small React and TypeScript component library (Button, Input, Modal) built to WCAG 2.1 AA, with a focus-trapped modal, full keyboard support and a 100/100 Lighthouse accessibility score.",
          "problem": "Most component libraries achieve visual polish while treating keyboard navigation and screen reader support as an afterthought, forcing teams to retrofit compliance after shipping.",
          "features": [
            "Modal with focus trap, Escape to close, scroll lock and focus restored on close",
            "Input with associated labels, helper and error text, required indicators and ARIA descriptions",
            "Button variants with loading and disabled states, typed with TypeScript props"
          ],
          "keyDecisions": [
            "Implemented the focus trap by hand rather than using a library, so I could understand and document the exact behavior a modal requires.",
            "Used CSS Modules to keep styles co-located with each component's logic.",
            "Treated the Lighthouse score as a starting point, since automated audits cover only part of WCAG, and documented the keyboard behavior of each component."
          ],
          "technologies": "React, TypeScript, WCAG 2.1, ARIA, CSS Modules",
          "github": "https://github.com/RimaNafougui/accessible-components",
          "url": "https://accessible-components-six.vercel.app/",
          "image": "/images/projects/accessible-components.png"
        },
        "project6": {
          "title": "To Do App: Android Task Manager",
          "description": "Android task manager with MVVM architecture, Hilt dependency injection, and a reactive 5-stream StateFlow pipeline merging Room data, search, filters and DataStore preferences into a single UI state.",
          "problem": "Most Android task apps manage search, filters and persistence as separate states, causing UI flicker and stale reads whenever any one of them changes.",
          "features": [
            "Sealed TaskUiState (Loading, Success, Error) driven by a combine() pipeline over 5 flows (Room data, text search, priority filter, completed toggle, DataStore sort order) exposed as one StateFlow",
            "WorkManager reminders scheduled one hour before each deadline, rescheduled when a task is edited and cancelled when it is deleted",
            "GitHub Actions CI running unit tests (Turbine, MockK) on every push and pull request"
          ],
          "keyDecisions": [
            "Combined five independent flows into one StateFlow with combine() so the UI always derives from a single consistent snapshot.",
            "Used Hilt over manual DI because its compile-time verification catches missing bindings before runtime, which matters for a WorkManager worker that must survive process death.",
            "Chose WorkManager over AlarmManager for reminders because it handles Doze mode, reboots and cancellation, which AlarmManager leaves to custom receivers."
          ],
          "technologies": "Kotlin, Jetpack Compose, Hilt, Room, WorkManager, DataStore, Coroutines + Flow, Material 3",
          "github": "https://github.com/RimaNafougui/Androidtodo",
          "url": null,
          "image": "/images/projects/Todo.png"
        },
        "project2": {
          "title": "Supply Chain Analytics Dashboard",
          "description": "End-to-end Power BI analysis of 10,000 shipment records (public Kaggle dataset) with a star schema, 50+ DAX measures and a 4-page interactive dashboard. Found that expedited air freight saves 2.83 days on high-value shipments once selection bias is accounted for.",
          "problem": "Shipping disruptions are invisible in standard reports because aggregation hides the selection bias that distorts cost and delay estimates.",
          "features": [
            "Star schema data model with 50+ DAX measures for prescriptive analytics",
            "4-page interactive dashboard with drill-through across routes, products and mitigation actions",
            "Estimated mitigation value of about $99K under an assumed $100 per day delay penalty"
          ],
          "keyDecisions": [
            "Chose a star schema over a flat model to support complex DAX relationships without query fan-traps across 50+ measures.",
            "Surfaced the selection bias explicitly in the report rather than silently correcting it, because decision-makers need to see the distortion to trust the analysis.",
            "Used what-if parameters for prescriptive analytics instead of stopping at descriptive, since the goal was to support decisions, not just describe past data."
          ],
          "technologies": "Power BI, Python, DAX",
          "github": "https://github.com/RimaNafougui/SupplyChainBI",
          "url": "https://app.powerbi.com/groups/me/reports/1b049350-80b0-4644-bd5b-46ca816147c7/1c89a3a18280f05f105e?experience=power-bi",
          "image": "/images/projects/supply-chain.png"
        }
      }
    },
    footer: {
      rights: "All rights reserved",
      tagline: "Designing & building things for the web",
      backToTop: "Back to top",
      badge: "",
    },
    experience: {
      "title": "Experience",
      "viewMore": "Download Resume",
      "fileName": "NafouguiRima_EN.pdf",
      "items": [
        {
          "position": "Director of Technology (Volunteer)",
          "company": "Careforall.org",
          "duration": "March – August 2026",
          "description": "Built a full-stack member portal (Next.js 16, TypeScript, Supabase, NextAuth v5) with role-based access control, a service-hour submission and approval workflow, and live impact dashboards. Owned production infrastructure end to end: migrated a legacy WordPress site, hardened security, and set up the organization's first SEO and email-deliverability pipeline.",
          "reference": ""
        },
        {
          "position": "Software Developer (Contractor)",
          "company": "Diligence Wealth Management, Manulife Wealth",
          "duration": "March – May 2026",
          "description": "Automated prospect data entry with Python pipelines, cutting manual effort from about 10 hours a week to about 15 minutes. Developed and deployed Chrome extensions firm-wide to streamline daily data-entry workflows.",
          "reference": ""
        },
        {
          "position": "Programming Tutor",
          "company": "Ahuntsic College",
          "duration": "May 2025 – May 2026",
          "description": "One of 4 students selected by the college to tutor peers. Taught data structures and algorithms (Big-O, recursion) to 15+ students in Java, Python and SQL, raising average grades by 10 to 15%.",
          "reference": "Professional Reference Available"
        },
        {
          "position": "Mathematics Tutor",
          "company": "Ahuntsic College",
          "duration": "Aug 2024 – May 2025",
          "description": "Tutored 5 CS students in linear algebra and discrete mathematics, creating 10+ Python visualization scripts to connect theory to programming, including ray tracing, graph theory and probability.",
          "reference": "Professional Reference Available"
        }
      ]
    },
    activities: {
      "title": "Activities",
      "items": [
        {
          "position": "Calculum, Competitive Programming Club",
          "company": "University of Montreal",
          "duration": "September 2026 – Present",
          "description": "Qualified for the 2026 ICPC North America Qualifier. Practicing algorithms in C++ and Python on Kattis, and in C++ on Codeforces.",
          "reference": ""
        },
        {
          "position": "Can-CWiC 2026",
          "company": "Canadian Celebration of Women in Computing, University of Waterloo",
          "duration": "November 20 – 21, 2026",
          "description": "Selected to attend, with funding from the University of Montreal's computer science department (DIRO) through the Bengio-McMurray donation.",
          "reference": ""
        }
      ]
    },
    contact: {
      "title": "Get in Touch",
      "intro": "The quickest way to reach me is by email. You can also find me on LinkedIn and GitHub.",
      "email": "nafouguirima@gmail.com",
      "emailLabel": "Email",
      "linkedinLabel": "LinkedIn",
      "githubLabel": "GitHub"
    },
    roadmap: {
      "title": "Technical Journey",
      "milestones": [
        {
          "status": "completed",
          "date": "MAY 2026",
          "title": "DEC in Computer Science Technology",
          "institution": "Collège Ahuntsic",
          "description": "Completed intensive training in full-stack web development, mobile applications and systems analysis, with strong foundations in OOP, algorithms, databases and cloud computing. Scrum Master for a four-person team project."
        },
        {
          "status": "completed",
          "date": "MARCH – MAY 2026",
          "title": "Software Developer (Contractor)",
          "institution": "Diligence Wealth Management",
          "description": "Replaced a roughly 10-hour weekly manual data-entry process with Python pipelines and shipped Chrome extensions used across the firm."
        },
        {
          "status": "completed",
          "date": "MARCH – AUGUST 2026",
          "title": "Director of Technology (Volunteer)",
          "institution": "Careforall.org",
          "description": "Built the member portal and owned production infrastructure for the non-profit's platform: WordPress migration, security hardening, SEO and email deliverability."
        },
        {
          "status": "active",
          "date": "AUGUST 2026 – PRESENT",
          "title": "BSc in Computer Science",
          "institution": "University of Montreal",
          "description": "Studying on an accelerated path (15 credits exempted), expected December 2028. Member of the Calculum competitive programming club, which qualified for the 2026 ICPC North America Qualifier."
        },
        {
          "status": "future",
          "date": "2027+",
          "title": "Build Something of My Own",
          "institution": "To Be Written",
          "description": "Working toward founding a company or research initiative that solves a real problem for real people. The next chapter is still being decided, but the direction is clear."
        }
      ]
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
    ui: {
      "skip": "Aller au contenu principal",
      "toggleMenu": "Ouvrir ou fermer le menu de navigation",
      "mainNav": "Navigation principale",
      "mobileNav": "Navigation mobile",
      "scrollTop": "Retour en haut de la page",
      "careerMilestones": "Étapes du parcours",
      "intro": "Introduction"
    },
    hero: {
      "badge": "",
      "intro": "",
      "description": "Étudiante en informatique à l'Université de Montréal qui livre des logiciels de production : applications web full-stack, pipelines de recherche IA et API backend, avec tests et CI. J'aime comprendre comment fonctionne un système avant de construire dessus.",
      "ctaProjects": "Voir mes projets",
      "ctaResume": "Télécharger le CV",
      "scroll": "Défiler",
    },
    about: {
      title: "À Propos de Moi",
      accordion1: {
        title: "Parcours & Éducation",
        content:
          "J'ai grandi en parlant arabe, puis français, puis anglais, et j'apprends actuellement le coréen par moi-même. J'ai choisi la tech pour la liberté de construire des choses selon mes propres termes. J'ai terminé un DEC en techniques de l'informatique (Web et mobile) au Collège Ahuntsic en mai 2026 et j'étudie maintenant en informatique à l'Université de Montréal par un cheminement accéléré (15 crédits exemptés), avec un baccalauréat prévu en décembre 2028.",
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
      "title": "Projets",
      "more": "Plus de projets",
      "less": "Afficher moins",
    "labels": {
      "problem": "Problème",
      "keyDecisions": "Décisions clés",
      "sourceCode": "Code source",
      "viewSource": "Voir le code source sur GitHub",
      "selectedWorks": "projets"
    },
      "items": {
        "project1": {
          "title": "RCapsule : Plateforme de garde-robe IA",
          "description": "Plateforme full-stack de garde-robe avec recommandations de tenues par IA selon la météo, facturation par abonnement Stripe, suppression d'arrière-plan sur AWS Lambda et extension Chrome pour importer des articles depuis des sites de magasinage.",
          "problem": "Ma première application en production, construite autour de la mode comme problème de design. Gérer une garde-robe sur des dizaines d'onglets, sans vue d'ensemble de ce qu'on possède déjà, mène à des achats répétés et à des vêtements sous-utilisés.",
          "features": [
            "60 routes d'API avec validation Zod, vérification de propriété et limitation de débit Redis (Upstash) à plusieurs paliers",
            "137 tests répartis en 14 suites (Vitest, MSW) avec des seuils de couverture de 70 % (lignes) et 60 % (branches), imposés par une CI GitHub Actions (lint, typecheck, tests, build)",
            "Facturation Stripe avec webhooks signés, rendus idempotents grâce au stockage des identifiants d'événements traités dans Redis"
          ],
          "keyDecisions": [
            "Suppression d'arrière-plan exécutée dans une fonction AWS Lambda conteneurisée (rembg sur ONNX Runtime, déployée via ECR) plutôt qu'une API tierce, pour éviter les frais par image et contrôler la version du modèle.",
            "Contrôle d'accès assuré par le Row-Level Security de PostgreSQL (Supabase) derrière NextAuth v5, afin que les règles tiennent au niveau des données et pas seulement dans le code applicatif.",
            "Fournisseur d'IA placé derrière une seule interface pour que les recommandations puissent utiliser OpenAI (gpt-4o-mini) ou Anthropic, sans lier le produit à un seul fournisseur."
          ],
          "technologies": "Next.js 16, React 19, TypeScript, PostgreSQL, Supabase, Stripe, AWS Lambda, Redis, OpenAI API",
          "github": "https://github.com/RimaNafougui/rcapsule",
          "url": "https://rcapsule.com",
          "image": "/images/projects/rcapsule.png"
        },
        "project3": {
          "title": "Assistant de recherche ArXiv RAG",
          "description": "Assistant de recherche conversationnel sur plus de 1 200 articles ArXiv indexés : pipeline ETL quotidien, récupération hybride (vectorielle et plein texte) et réponses diffusées en continu avec sources citées, appuyé par un banc d'évaluation de la récupération.",
          "problem": "Lire des articles entiers pour trouver une information pertinente prend des heures. Un système de récupération bien conçu la réduit à quelques secondes, à condition de pouvoir démontrer qu'il retrouve les bons passages.",
          "features": [
            "ETL quotidien via GitHub Actions : extraction, découpage (environ 800 caractères, aux limites de phrases), embeddings (MiniLM 384 dimensions) et chargement idempotent dans Supabase pgvector",
            "Recherche hybride combinant la similarité cosinus de pgvector et la recherche plein texte par fusion de rangs réciproques (RRF), avec un routeur de requêtes gpt-4o-mini",
            "Jeu d'évaluation de 20 questions mesuré par le taux de succès@5 et le MRR"
          ],
          "keyDecisions": [
            "Utilisation de pgvector sur Supabase plutôt qu'une base vectorielle dédiée : un seul hôte, sans service supplémentaire à exploiter pour ce qui est essentiellement un index.",
            "Fusion des classements vectoriel et plein texte par RRF, pour qu'un seul classement profite des correspondances sémantiques et des correspondances exactes de mots-clés, comme les noms de modèles.",
            "Choix de sentence-transformers 384 dimensions plutôt que de modèles plus grands, car le compromis vitesse-qualité convient aux textes académiques, et ajout d'un banc d'évaluation pour mesurer la qualité de récupération plutôt que l'estimer à l'œil."
          ],
          "technologies": "Python, Supabase (pgvector), OpenAI API, sentence-transformers, GitHub Actions, Streamlit",
          "github": "https://github.com/RimaNafougui/ArxivSearchEngine",
          "url": "https://huggingface.co/spaces/RimaNafougui/ArxivSearchEngine",
          "image": "/images/projects/arxiv-rag.png"
        },
        "project4": {
          "title": "ExpenseFlow : API REST Finance",
          "description": "API REST de finances personnelles avec Spring Boot 3 : authentification JWT, autorisation par rôles, pagination, filtres et sommaires mensuels, avec plus de 40 tests unitaires et d'intégration et une CI à chaque push.",
          "problem": "Les API financières deviennent couramment non testables à mesure que la complexité des rôles et des règles augmente, causant des bugs en production difficiles à remonter à une couche précise.",
          "features": [
            "Authentification JWT avec autorisation par rôles, pagination, tri et filtre par catégorie",
            "Tests unitaires et d'intégration avec JUnit 5, Mockito et MockMvc, et rapport de couverture JaCoCo produit par la CI GitHub Actions",
            "Conteneurisé avec Docker et déployé sur Railway"
          ],
          "keyDecisions": [
            "JWT plutôt qu'une authentification par session pour garder l'API sans état et horizontalement scalable : sans magasin de sessions partagé, le déploiement ne demande pas de sessions collantes.",
            "Découpage strict en couches (contrôleur, service, référentiel) dès le départ pour que l'ajout d'une catégorie de dépenses ne nécessite jamais de réécritures inter-couches.",
            "Rapport de couverture JaCoCo généré en CI à chaque exécution, pour que la couverture de tests reste visible plutôt que vérifiée à la main."
          ],
          "technologies": "Spring Boot 3, Java 21, PostgreSQL, JWT, Maven, JaCoCo",
          "github": "https://github.com/RimaNafougui/expenseflow",
          "url": "https://expenseflow-production.up.railway.app/",
          "image": "/images/projects/expenseflow.png",
          "type": "backend" as const
        },
        "project5": {
          "title": "Bibliothèque de composants accessibles",
          "description": "Petite bibliothèque de composants React et TypeScript (Button, Input, Modal) conforme aux WCAG 2.1 AA, avec une fenêtre modale à piège de focus, une navigation complète au clavier et un score Lighthouse d'accessibilité de 100/100.",
          "problem": "La plupart des bibliothèques de composants soignent l'aspect visuel mais traitent la navigation au clavier et le support des lecteurs d'écran comme un détail, forçant les équipes à corriger la conformité après la livraison.",
          "features": [
            "Modal avec piège de focus, fermeture par Échap, verrouillage du défilement et retour du focus à la fermeture",
            "Input avec étiquettes associées, texte d'aide et d'erreur, indicateurs de champ requis et descriptions ARIA",
            "Variantes de Button avec états de chargement et désactivé, props typées en TypeScript"
          ],
          "keyDecisions": [
            "Implémentation du piège de focus à la main plutôt qu'avec une bibliothèque, pour comprendre et documenter le comportement exact qu'exige une modale.",
            "Utilisation de CSS Modules pour garder les styles co-localisés avec la logique de chaque composant.",
            "Score Lighthouse traité comme un point de départ, puisque les audits automatisés ne couvrent qu'une partie des WCAG, et comportement clavier documenté pour chaque composant."
          ],
          "technologies": "React, TypeScript, WCAG 2.1, ARIA, Modules CSS",
          "github": "https://github.com/RimaNafougui/accessible-components",
          "url": "https://accessible-components-six.vercel.app/",
          "image": "/images/projects/accessible-components.png"
        },
        "project6": {
          "title": "To Do App : Gestionnaire de tâches Android",
          "description": "Gestionnaire de tâches Android avec architecture MVVM, injection de dépendances Hilt et pipeline StateFlow réactif à 5 flux fusionnant données Room, recherche, filtres et préférences DataStore en un seul état d'interface.",
          "problem": "La plupart des applications Android de tâches gèrent la recherche, les filtres et la persistance comme des états séparés, ce qui cause des scintillements d'interface et des lectures obsolètes dès que l'un d'eux change.",
          "features": [
            "Classe scellée TaskUiState (Loading, Success, Error) alimentée par un pipeline combine() sur 5 flux (données Room, recherche textuelle, filtre de priorité, affichage des tâches terminées, tri DataStore) exposé comme un seul StateFlow",
            "Rappels WorkManager planifiés une heure avant chaque échéance, replanifiés à la modification d'une tâche et annulés à sa suppression",
            "CI GitHub Actions exécutant les tests unitaires (Turbine, MockK) à chaque push et pull request"
          ],
          "keyDecisions": [
            "Combinaison de cinq flux indépendants en un seul StateFlow avec combine(), pour que l'interface dérive toujours d'un instantané cohérent.",
            "Hilt plutôt qu'une injection manuelle, car sa vérification à la compilation détecte les liaisons manquantes avant l'exécution, ce qui compte pour un worker WorkManager qui doit survivre à la mort du processus.",
            "WorkManager plutôt qu'AlarmManager pour les rappels, car il gère le mode Doze, les redémarrages et l'annulation, que AlarmManager laisse à des récepteurs personnalisés."
          ],
          "technologies": "Kotlin, Jetpack Compose, Hilt, Room, WorkManager, DataStore, Coroutines + Flow, Material 3",
          "github": "https://github.com/RimaNafougui/Androidtodo",
          "url": null,
          "image": "/images/projects/Todo.png"
        },
        "project2": {
          "title": "Tableau de bord Chaîne d'approvisionnement",
          "description": "Analyse Power BI complète de 10 000 expéditions (jeu de données public Kaggle) avec modèle en étoile, 50+ mesures DAX et tableau de bord interactif de 4 pages. Montre que le fret aérien accéléré fait gagner 2,83 jours sur les expéditions à haute valeur une fois le biais de sélection pris en compte.",
          "problem": "Les perturbations de la chaîne d'approvisionnement sont invisibles dans les rapports standards, car l'agrégation masque le biais de sélection qui fausse les estimations de coût et de délai.",
          "features": [
            "Modèle de données en étoile avec 50+ mesures DAX pour l'analyse prescriptive",
            "Tableau de bord interactif de 4 pages avec exploration détaillée par route, produit et action d'atténuation",
            "Valeur d'atténuation estimée à environ 99 000 $ selon une pénalité de retard supposée de 100 $ par jour"
          ],
          "keyDecisions": [
            "Choix d'un schéma en étoile plutôt qu'un modèle plat pour supporter des relations DAX complexes sans fan-trap sur 50+ mesures.",
            "Exposition explicite du biais de sélection dans le rapport plutôt qu'une correction silencieuse, car les décideurs doivent voir la distorsion pour faire confiance à l'analyse.",
            "Utilisation de paramètres de simulation pour l'analyse prescriptive plutôt que de s'arrêter au descriptif, l'objectif étant d'appuyer les décisions et pas seulement de décrire le passé."
          ],
          "technologies": "Power BI, Python, DAX",
          "github": "https://github.com/RimaNafougui/SupplyChainBI",
          "url": "https://app.powerbi.com/groups/me/reports/1b049350-80b0-4644-bd5b-46ca816147c7/1c89a3a18280f05f105e?experience=power-bi",
          "image": "/images/projects/supply-chain.png"
        }
      }
    },
    footer: {
      rights: "Tous droits réservés",
      tagline: "Concevoir et construire pour le web",
      backToTop: "Retour en haut",
      badge: "",
    },
    experience: {
      "title": "Expériences",
      "viewMore": "Télécharger le CV",
      "fileName": "NafouguiRima_FR.pdf",
      "items": [
        {
          "position": "Directrice Technologie (bénévole)",
          "company": "Careforall.org",
          "duration": "Mars – Août 2026",
          "description": "Conception d'un portail membres full-stack (Next.js 16, TypeScript, Supabase, NextAuth v5) avec contrôle d'accès par rôles, flux de soumission et d'approbation des heures de service, et tableaux de bord d'impact en direct. Responsable de l'infrastructure de production de bout en bout : migration d'un site WordPress existant, renforcement de la sécurité et mise en place du premier pipeline SEO et de délivrabilité des courriels de l'organisme.",
          "reference": ""
        },
        {
          "position": "Développeuse logiciel (contractuelle)",
          "company": "Diligence Wealth Management, Manulife Wealth",
          "duration": "Mars – Mai 2026",
          "description": "Automatisation de la saisie de données de prospects avec des pipelines Python, faisant passer l'effort manuel d'environ 10 heures par semaine à environ 15 minutes. Développement et déploiement d'extensions Chrome à l'échelle de l'entreprise pour simplifier la saisie de données quotidienne.",
          "reference": ""
        },
        {
          "position": "Tutrice en programmation",
          "company": "Collège Ahuntsic",
          "duration": "Mai 2025 – Mai 2026",
          "description": "Une des 4 étudiantes sélectionnées par le collège pour encadrer leurs pairs. Enseignement des structures de données et des algorithmes (notation grand O, récursivité) à 15+ étudiants en Java, Python et SQL, avec une hausse des moyennes de 10 à 15 %.",
          "reference": "Référence professionnelle disponible"
        },
        {
          "position": "Tutrice en mathématiques",
          "company": "Collège Ahuntsic",
          "duration": "Août 2024 – Mai 2025",
          "description": "Tutorat de 5 étudiants en informatique en algèbre linéaire et mathématiques discrètes, avec création de 10+ scripts Python de visualisation pour relier la théorie à la programmation (ray tracing, théorie des graphes, probabilités).",
          "reference": "Référence professionnelle disponible"
        }
      ]
    },
    activities: {
      "title": "Activités",
      "items": [
        {
          "position": "Calculum, Club de programmation compétitive",
          "company": "Université de Montréal",
          "duration": "Septembre 2026 – Présent",
          "description": "Qualifiée pour les qualifications nord-américaines de l'ICPC 2026. Pratique des algorithmes en C++ et Python sur Kattis, et en C++ sur Codeforces.",
          "reference": ""
        },
        {
          "position": "Can-CWiC 2026",
          "company": "Canadian Celebration of Women in Computing, Université de Waterloo",
          "duration": "20 – 21 novembre 2026",
          "description": "Sélectionnée pour y participer, avec un financement du département d'informatique de l'Université de Montréal (DIRO) grâce au don Bengio-McMurray.",
          "reference": ""
        }
      ]
    },
    contact: {
      "title": "Me Joindre",
      "intro": "Le moyen le plus rapide de me joindre est le courriel. Vous pouvez aussi me trouver sur LinkedIn et GitHub.",
      "email": "nafouguirima@gmail.com",
      "emailLabel": "Courriel",
      "linkedinLabel": "LinkedIn",
      "githubLabel": "GitHub"
    },
    roadmap: {
      "title": "Parcours Technique",
      "milestones": [
        {
          "status": "completed",
          "date": "MAI 2026",
          "title": "DEC en techniques de l'informatique",
          "institution": "Collège Ahuntsic",
          "description": "Formation intensive en développement web full-stack, applications mobiles et analyse de systèmes, avec des bases solides en POO, algorithmes, bases de données et infonuagique. Scrum Master d'un projet d'équipe de quatre personnes."
        },
        {
          "status": "completed",
          "date": "MARS – MAI 2026",
          "title": "Développeuse logiciel (contractuelle)",
          "institution": "Diligence Wealth Management",
          "description": "Remplacement d'un processus manuel d'environ 10 heures par semaine par des pipelines Python, et livraison d'extensions Chrome utilisées dans toute l'entreprise."
        },
        {
          "status": "completed",
          "date": "MARS – AOÛT 2026",
          "title": "Directrice Technologie (bénévole)",
          "institution": "Careforall.org",
          "description": "Conception du portail membres et responsabilité de l'infrastructure de production de la plateforme de l'organisme : migration depuis WordPress, renforcement de la sécurité, SEO et délivrabilité des courriels."
        },
        {
          "status": "active",
          "date": "AOÛT 2026 – PRÉSENT",
          "title": "Baccalauréat en informatique",
          "institution": "Université de Montréal",
          "description": "Cheminement accéléré (15 crédits exemptés), fin prévue en décembre 2028. Membre du club de programmation compétitive Calculum, qualifié pour les qualifications nord-américaines de l'ICPC 2026."
        },
        {
          "status": "future",
          "date": "2027+",
          "title": "Construire quelque chose de mien",
          "institution": "À écrire",
          "description": "Travailler vers la création d'une entreprise ou d'une initiative de recherche qui résout un vrai problème pour de vraies personnes. Le prochain chapitre se décide encore, mais la direction est claire."
        }
      ]
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
