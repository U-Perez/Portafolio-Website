import { items } from "@/lib/type";

export const NavItems: items[] = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About ",
    path: "about",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Experience",
    path: "experience",
  },
];

export const skills = [
  { skill: "HTML5" },
  { skill: "CSS3" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "TailwindCSS" },
  { skill: "React" },
  { skill: "Next Js" },
  { skill: "Git" },
  { skill: "Github" },
  { skill: "Node Js" },
  { skill: "Express Js" },
  { skill: "JWT" },
  { skill: "MySql" },
  { skill: "NPM" },
  { skill: "Sequelize" },
  { skill: "Framer" },
  { skill: "Postman" },
];

export const projects = [
  {
    title: "ChatRoom",
    description:
      "Una Aplicación Web de mensajería en tiempo real con websockets implementados, login, registro y listado de contactos",
    tags: [
      "React",
      "Ionic",
      "Tailwind Css",
      "Node Js",
      "Express",
      "Sequelize",
      "WebSockets",
      "Mysql",
    ],
    image: "/img/ChatRoom.png",
    frontend: "https://github.com/U-Perez/Frontend-Chat",
    backend: "https://github.com/U-Perez/Backend-Chat",
  },
  {
    title: "Sistema de Gestión RH",
    description:
      "Diseñada para llevar un control y gestión de los empleados dentro de la empresa, cuenta con dos perfiles: empleados y empresa",
    tags: ["Angular", "Ionic", "Css3", "Node Js", "JWT", "Express", "MySql"],
    image: "/img/EdumarkRH.png",
    frontend: "https://github.com/U-Perez/Frontend-RH-Edumark",
    backend: "https://github.com/U-Perez/Backend-RH-Edumark",
  },
];
