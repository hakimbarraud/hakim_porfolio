import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  logof,
  logoODW,
  logoScrimba,
  logoiut,
  chackra,
  materialui,
  reactquery,
  vscode,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos de moi",
  },
  {
    id: "work",
    title: "Expériences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur Front-End",
    icon: web,
  },
  {
    title: "Aspirant Full-Stack Développeur",
    icon: mobile,
  },
  {
    title: "App & Mobile Designer",
    icon: backend,
  },
  {
    title: "SEO Expert",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "chackra",
    icon: chackra,
  },
  {
    name: "materialui",
    icon: materialui,
  },
  {
    name: "reactquery",
    icon: reactquery,
  },
  {
    name: "vscode",
    icon: vscode,
  },
];

const experiences = [
  {
    title: "Co-dirigeant d'une association étudiante",
    company_name: "Gala GEA",
    icon: logoiut,
    iconBg: "#383E56",
    date: "Octobre 2019 - Juin 2021",
    points: [
      "Création et animation de réseaux sociaux.",
      "Tenue d'une comptabilité sérieuse et régulière.",
      "Organisation de concours, de tombola et d’événements pour récolter des fonds.",
    ],
  },
  {
    title: "Fondateur de startup (à Station F)",
    company_name: "spaceCoupe",
    icon: logof,
    iconBg: "#E6DEDD",
    date: "Septembre 2021 - Juin 2022",
    points: [
      "Design et prototypage d'une application mobile.",
      "Établissement d'une relation solidaire avec mes potentiels utilisateurs afin de mieux développer le produit.",
      "Création et maintient d'une landing page dans le cadre de la création d'un minimum viable product (MVP).",
      "Capacité à concevoir des interfaces utilisateurs conviviales et intuitives.",
      "Capacité à m'adapter rapidement aux nouvelles technologies et à apprendre de nouvelles choses constamment.",
      "Capacité à communiquer de manière claire et concise avec tous les membres de mon équipe.",
    ],
  },
  {
    title: "Assistant chef de projet digital",
    company_name: "Agence ODW",
    icon: logoODW,
    iconBg: "#383E56",
    date: "Août 2022 - Mars 2023",
    points: [
      "Gestion et optimisation de projets de création de sites web.",
      "Collaboration avec différentes teams (designers, product manager, gérant, développeurs) pour créer des projets de haute qualité.",
      "Implémentation de pages responsives et vérification du bon fonctionnement des sites de mes clients sur tous les navigateurs.",
      "Participation à des codes reviews et optimisation des fichiers CSS & JavaScript.",
      "Gestion et optimisation des stratégies de référencement naturel (SEO) des sites de mes clients afin d'améliorer leur visibilité et leur classement sur les moteurs de recherche.",
      "Gestion des campagnes d'acquisitions payantes (principalement Facebook Business Manager).",
      "Participation aux briefs et aux recommandations client.",
    ],
  },
  {
    title: "Front-end Bootcamp",
    company_name: "Scrimba",
    icon: logoScrimba,
    iconBg: "#E6DEDD",
    date: "Avril 2023 - Present",
    points: [
      "Création de sites web responsives en utilisant les languages HTML, CSS & JavaScript.",
      "Maîtrise de la librairie React (State, Props, JSX, Components...) et de son écosystème (react hook form, react router dom, react query, TypeScript).",
      "Maîtrise des différentes façon de styler une app (CSS, Bootstrap/Tailwind, Material UI/Chakra UI).",
      "Maîtrise de l'outil Git pour versionner le développement d'un projet web.",
      "Implémentation de routes afin de permettre aux utilisateurs de naviguer sur plusieurs pages.",
      "Optimisation des performances en réduisant le temps de chargement, les requêtes au serveur et la mise en place de caching.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
