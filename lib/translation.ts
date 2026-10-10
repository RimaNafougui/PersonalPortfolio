export const translations = {
  "en": {
    "nav": {
      "projects": "Projects",
      "experience": "Experience",
      "skills": "Skills",
      "contact": "Contact",
      "blog": "Blog",
      "activities": "Activities"
    },
    "ui": {
      "skip": "Skip to main content",
      "mainNav": "Main navigation",
      "intro": "Introduction"
    },
    "hero": {
      "description": "First-year Computer Science student at the University of Montreal who ships production software: full-stack web apps, AI retrieval pipelines and backend APIs, with tests and CI behind them. I like to understand how a system works before I build on it.",
      "ctaResume": "Download Resume"
    },
    "about": {
      "text": "I grew up speaking French and Arabic, and I am currently learning Mandarin. I chose tech for the freedom to build things on my own terms. I finished a DEC in Computer Science Technology (Web and Mobile) at Collège Ahuntsic in May 2026 and am now in my first year of Computer Science at the University of Montreal, on an accelerated path (15 credits exempted), with a B.Sc. expected in December 2028."
    },
    "skills": {
      "title": "Skills",
      "languages": "Languages",
      "framework": "Frameworks",
      "databases": "Databases",
      "cloud": "Cloud & DevOps"
    },
    "projects": {
      "title": "Projects",
      "more": "More projects",
      "less": "Show fewer",
      "labels": {
        "sourceCode": "Source Code",
        "liveDemo": "Live demo"
      },
      "items": {
        "project1": {
          "title": "RCapsule: AI Wardrobe Platform",
          "description": "Full-stack wardrobe platform with weather-aware AI outfit recommendations, Stripe subscription billing, AWS Lambda background removal, and a Chrome extension for importing items from shopping sites.",
          "technologies": "Next.js 16, React 19, TypeScript, PostgreSQL, Supabase, Stripe, AWS Lambda, Redis, OpenAI API",
          "github": "https://github.com/RimaNafougui/rcapsule",
          "url": "https://rcapsule.com"
        },
        "project3": {
          "title": "ArXiv RAG Research Assistant",
          "description": "Conversational research assistant over 1,200+ indexed ArXiv papers: a daily ETL pipeline, hybrid retrieval (vector plus full-text) and streamed, source-cited answers, backed by a retrieval evaluation harness.",
          "technologies": "Python, Supabase (pgvector), OpenAI API, sentence-transformers, GitHub Actions, Streamlit",
          "github": "https://github.com/RimaNafougui/ArxivSearchEngine",
          "url": "https://huggingface.co/spaces/RimaNafougui/ArxivSearchEngine"
        },
        "project4": {
          "title": "ExpenseFlow: Finance REST API",
          "description": "RESTful personal finance API built with Spring Boot 3: JWT authentication, role-based authorization, pagination, filtering and monthly summaries, with 40+ unit and integration tests and CI on every push.",
          "technologies": "Spring Boot 3, Java 21, PostgreSQL, JWT, Maven, JaCoCo",
          "github": "https://github.com/RimaNafougui/expenseflow",
          "url": "https://expenseflow-production.up.railway.app/"
        },
        "project5": {
          "title": "Accessible Component Library",
          "description": "Small React and TypeScript component library (Button, Input, Modal) built to WCAG 2.1 AA, with a focus-trapped modal, full keyboard support and a 100/100 Lighthouse accessibility score.",
          "technologies": "React, TypeScript, WCAG 2.1, ARIA, CSS Modules",
          "github": "https://github.com/RimaNafougui/accessible-components",
          "url": "https://accessible-components-six.vercel.app/"
        },
        "project6": {
          "title": "To Do App: Android Task Manager",
          "description": "Android task manager with MVVM architecture, Hilt dependency injection, and a reactive 5-stream StateFlow pipeline merging Room data, search, filters and DataStore preferences into a single UI state.",
          "technologies": "Kotlin, Jetpack Compose, Hilt, Room, WorkManager, DataStore, Coroutines + Flow, Material 3",
          "github": "https://github.com/RimaNafougui/Androidtodo",
          "url": null
        },
        "project2": {
          "title": "Supply Chain Analytics Dashboard",
          "description": "End-to-end Power BI analysis of 10,000 shipment records (public Kaggle dataset) with a star schema, 50+ DAX measures and a 4-page interactive dashboard. Found that expedited air freight saves 2.83 days on high-value shipments once selection bias is accounted for.",
          "technologies": "Power BI, Python, DAX",
          "github": "https://github.com/RimaNafougui/SupplyChainBI",
          "url": "https://app.powerbi.com/groups/me/reports/1b049350-80b0-4644-bd5b-46ca816147c7/1c89a3a18280f05f105e?experience=power-bi"
        }
      }
    },
    "experience": {
      "title": "Experience",
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
    "contact": {
      "title": "Get in Touch",
      "intro": "The quickest way to reach me is by email. You can also find me on LinkedIn and GitHub.",
      "email": "nafouguirima@gmail.com",
      "emailLabel": "Email",
      "linkedinLabel": "LinkedIn",
      "githubLabel": "GitHub"
    },
    "footer": {
      "rights": "All rights reserved"
    },
    "activities": {
      "title": "Activities & Hobbies",
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
      ],
      "hobbiesTitle": "Hobbies",
      "hobbies": "Fashion, and learning languages (currently Mandarin)."
    }
  },
  "fr": {
    "nav": {
      "projects": "Projets",
      "experience": "Expériences",
      "skills": "Compétences",
      "contact": "Contactez-moi",
      "blog": "Blog",
      "activities": "Activités"
    },
    "ui": {
      "skip": "Aller au contenu principal",
      "mainNav": "Navigation principale",
      "intro": "Introduction"
    },
    "hero": {
      "description": "Étudiante de première année en informatique à l'Université de Montréal qui livre des logiciels de production : applications web full-stack, pipelines de recherche IA et API backend, avec tests et CI. J'aime comprendre comment fonctionne un système avant de construire dessus.",
      "ctaResume": "Télécharger le CV"
    },
    "about": {
      "text": "J'ai grandi en parlant français et arabe, et j'apprends actuellement le mandarin. J'ai choisi la tech pour la liberté de construire des choses selon mes propres termes. J'ai terminé un DEC en techniques de l'informatique (Web et mobile) au Collège Ahuntsic en mai 2026 et je suis maintenant en première année d'informatique à l'Université de Montréal, par un cheminement accéléré (15 crédits exemptés), avec un baccalauréat prévu en décembre 2028."
    },
    "skills": {
      "title": "Compétences",
      "languages": "Langages",
      "framework": "Frameworks",
      "databases": "Bases de données",
      "cloud": "Cloud & DevOps"
    },
    "projects": {
      "title": "Projets",
      "more": "Plus de projets",
      "less": "Afficher moins",
      "labels": {
        "sourceCode": "Code source",
        "liveDemo": "Démo en ligne"
      },
      "items": {
        "project1": {
          "title": "RCapsule : Plateforme de garde-robe IA",
          "description": "Plateforme full-stack de garde-robe avec recommandations de tenues par IA selon la météo, facturation par abonnement Stripe, suppression d'arrière-plan sur AWS Lambda et extension Chrome pour importer des articles depuis des sites de magasinage.",
          "technologies": "Next.js 16, React 19, TypeScript, PostgreSQL, Supabase, Stripe, AWS Lambda, Redis, OpenAI API",
          "github": "https://github.com/RimaNafougui/rcapsule",
          "url": "https://rcapsule.com"
        },
        "project3": {
          "title": "Assistant de recherche ArXiv RAG",
          "description": "Assistant de recherche conversationnel sur plus de 1 200 articles ArXiv indexés : pipeline ETL quotidien, récupération hybride (vectorielle et plein texte) et réponses diffusées en continu avec sources citées, appuyé par un banc d'évaluation de la récupération.",
          "technologies": "Python, Supabase (pgvector), OpenAI API, sentence-transformers, GitHub Actions, Streamlit",
          "github": "https://github.com/RimaNafougui/ArxivSearchEngine",
          "url": "https://huggingface.co/spaces/RimaNafougui/ArxivSearchEngine"
        },
        "project4": {
          "title": "ExpenseFlow : API REST Finance",
          "description": "API REST de finances personnelles avec Spring Boot 3 : authentification JWT, autorisation par rôles, pagination, filtres et sommaires mensuels, avec plus de 40 tests unitaires et d'intégration et une CI à chaque push.",
          "technologies": "Spring Boot 3, Java 21, PostgreSQL, JWT, Maven, JaCoCo",
          "github": "https://github.com/RimaNafougui/expenseflow",
          "url": "https://expenseflow-production.up.railway.app/"
        },
        "project5": {
          "title": "Bibliothèque de composants accessibles",
          "description": "Petite bibliothèque de composants React et TypeScript (Button, Input, Modal) conforme aux WCAG 2.1 AA, avec une fenêtre modale à piège de focus, une navigation complète au clavier et un score Lighthouse d'accessibilité de 100/100.",
          "technologies": "React, TypeScript, WCAG 2.1, ARIA, Modules CSS",
          "github": "https://github.com/RimaNafougui/accessible-components",
          "url": "https://accessible-components-six.vercel.app/"
        },
        "project6": {
          "title": "To Do App : Gestionnaire de tâches Android",
          "description": "Gestionnaire de tâches Android avec architecture MVVM, injection de dépendances Hilt et pipeline StateFlow réactif à 5 flux fusionnant données Room, recherche, filtres et préférences DataStore en un seul état d'interface.",
          "technologies": "Kotlin, Jetpack Compose, Hilt, Room, WorkManager, DataStore, Coroutines + Flow, Material 3",
          "github": "https://github.com/RimaNafougui/Androidtodo",
          "url": null
        },
        "project2": {
          "title": "Tableau de bord Chaîne d'approvisionnement",
          "description": "Analyse Power BI complète de 10 000 expéditions (jeu de données public Kaggle) avec modèle en étoile, 50+ mesures DAX et tableau de bord interactif de 4 pages. Montre que le fret aérien accéléré fait gagner 2,83 jours sur les expéditions à haute valeur une fois le biais de sélection pris en compte.",
          "technologies": "Power BI, Python, DAX",
          "github": "https://github.com/RimaNafougui/SupplyChainBI",
          "url": "https://app.powerbi.com/groups/me/reports/1b049350-80b0-4644-bd5b-46ca816147c7/1c89a3a18280f05f105e?experience=power-bi"
        }
      }
    },
    "experience": {
      "title": "Expériences",
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
    "contact": {
      "title": "Me Joindre",
      "intro": "Le moyen le plus rapide de me joindre est le courriel. Vous pouvez aussi me trouver sur LinkedIn et GitHub.",
      "email": "nafouguirima@gmail.com",
      "emailLabel": "Courriel",
      "linkedinLabel": "LinkedIn",
      "githubLabel": "GitHub"
    },
    "footer": {
      "rights": "Tous droits réservés"
    },
    "activities": {
      "title": "Activités et loisirs",
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
      ],
      "hobbiesTitle": "Loisirs",
      "hobbies": "La mode et l'apprentissage des langues (actuellement le mandarin)."
    }
  }
};

export type Language = "en" | "fr";
export type Translation = typeof translations.en;
