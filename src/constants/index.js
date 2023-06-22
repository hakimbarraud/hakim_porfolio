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
  threejs,
  logof,
  logoODW,
  logoScrimba,
  logoiut,
  chackra,
  materialui,
  reactquery,
  vscode,
  shoppingHub,
  vanHub,
  gameHub,
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
      "Hakim a fait preuve d'une grande implication et du sérieux durant son stage. Sa passion pour le web et le SEO ont été une grande valeur ajoutée à l'agence. Je ne peux que vous le recommander.",
    name: "kandioura Haidara",
    designation: "Chef de projet SEO",
    company: "Agence ODW",
  },
  {
    testimonial:
      "Hakim a su se démarquer par son autonomie et sa rigeur au cours de son stage. Dommage que l'agence n'ait pas de team dev sinon on l'aurait gardé.",
    name: "Alexandre Vernier",
    designation: "Gérant",
    company: "Agence ODW",
  },
  {
    testimonial:
      "Hakim s'est montré très impliqué dans la refonte de notre site web, à la mise en place des pages responsives et à l'augmentation du traffic de notre site web dès sa prise de poste !",
    name: "Marc Vernier",
    designation: "Gérant",
    company: "Marc Vernier Immobilier",
  },
];

const projects = [
  {
    name: "Shopping List",
    description:
      "Une application web qui permet d'ajouter, de consulter, de modifier et de supprimer des articles sur sa liste de course. Une solution idéale pour ceux qui ne veulent pas passer par le papier.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "crud",
        color: "pink-text-gradient",
      },
    ],
    image: shoppingHub,
    source_code_link: "https://github.com/hakimbarraud/shopping-hub",
  },
  {
    name: "Van Life",
    description:
      "Une mini application web qui permet de louer des vans pour partir en week-end ou en vacances. Les users ont la possibilité de naviguer sur plusieurs pages et peuvent également trier les vans en fonction de leurs exigences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "data-loader",
        color: "green-text-gradient",
      },
      {
        name: "Suspense",
        color: "pink-text-gradient",
      },
    ],
    image: vanHub,
    source_code_link: "https://github.com/hakimbarraud/van-life-app",
  },
  {
    name: "Game Discovery",
    description:
      "La meilleure application web pour être à l'affût des meilleurs jeux du moment. Les utilisateurs ont la possibilité de trier les jeux par genre et/ou par plateforme. Ils peuvent également rechercher un jeu directement dans la barre de recherche. Les performances sont optimisées avec du caching et la limitation des requêtes au serveur grâce à l'importation des datas statics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "react-query",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "chakraui",
        color: "blue-text-gradient",
      },
    ],
    image: gameHub,
    source_code_link: "https://github.com/hakimbarraud/game-hub",
  },
];

export { services, technologies, experiences, testimonials, projects };
