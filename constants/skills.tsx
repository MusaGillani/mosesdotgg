import {
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { RiFlutterFill } from "react-icons/ri";

export const skills = [
  {
    title: "Typescript",
    icon: <SiTypescript />,
    href: "https://www.typescriptlang.org/",
  },
  { title: "React", icon: <FaReact />, href: "https://react.dev/" },
  { title: "Next", icon: <TbBrandNextjs />, href: "https://nextjs.org/" },
  { title: "Flutter", icon: <RiFlutterFill />, href: "https://flutter.dev/" },
  { title: "Node", icon: <IoLogoNodejs />, href: "https://nodejs.org/en" },
  { title: "Express", icon: <SiExpress />, href: "https://expressjs.com/" },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql />,
    href: "https://www.postgresql.org/",
  },
  { title: "MongoDB", icon: <SiMongodb />, href: "https://www.mongodb.com/" },
];
