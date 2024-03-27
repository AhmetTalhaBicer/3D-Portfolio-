import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  quick,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },

  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Team Lead & Full-Stack Developer",
    company_name: "Cedric Burger-Web App",
    icon: quick,
    iconBg: "#accbe1",
    date: "Octaber 2023",
    points: [
      "Leading a team of developers to design, develop, and deploy a web application for a local restaurant.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborating with designers and product managers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Quick And Quality Software",
    icon: quick,
    iconBg: "#accbe1",
    date: "January 2023 -",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/AhmetTalhaBicer",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ahmet-talha-bi%C3%A7er-597353177",
  },
];

export const projects = [
  {
    iconUrl: threads,
    theme: "btn-back-red",
    name: "Netflix Clone",
    description:
      "Built a complete clone of Netflix, allowing users to browse and watch movies, TV shows, and documentaries.",
    link: "https://github.com/AhmetTalhaBicer/NETFLI-X",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-green",
    name: "FaceAI-Recognition-System",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/AhmetTalhaBicer/FaceAI-Recognition-System",
  },
];
