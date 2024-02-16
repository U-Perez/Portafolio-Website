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
];

export const projects = [
  {
    name: "ChatRoom",
    description:
      "Una Aplicación Web de mensajería en tiempo real con websockets implementados, login, registro y listado de contactos",
    image: "/img/ChatRoom.png",
    github: "https://github.com/U-Perez/Frontend-Chat",
    link: "https://thankfulthoughts.io/",
  },
  {
    name: "Edumark RRHH",
    description:
      "Edumark es diseñada para llevar un control y gestión de los empleados dentro de la plataforma, cuenta con 3 perfiles: empleados, empresa, sindicato cada perfil contiene información diferente donde podran interactuar",
    image: "/img/EdumarkRH.png",
    github: "https://github.com/U-Perez/Frontend-RH-Edumark",
    link: "https://platoio.com/register",
  },
]; 