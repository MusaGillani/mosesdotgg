import {
  SiTypescript,
  SiExpress,
  SiNotion,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiVercel,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { RiFlutterFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";
import { DiLinux } from "react-icons/di";

export const skills = {
  Frameworks_Technologies: [
    {
      title: "Typescript",
      icon: <SiTypescript />,
      href: "https://www.typescriptlang.org/",
    },
    { title: "Prisma", icon: <SiPrisma />, href: "https://www.prisma.io/" },
    { title: "React", icon: <FaReact />, href: "https://react.dev/" },
    { title: "Next JS", icon: <TbBrandNextjs />, href: "https://nextjs.org/" },
    { title: "Node JS", icon: <IoLogoNodejs />, href: "https://nodejs.org/en" },
    { title: "Express", icon: <SiExpress />, href: "https://expressjs.com/" },
    {
      title: "PostgreSQL",
      icon: <SiPostgresql />,
      href: "https://www.postgresql.org/",
    },
    { title: "Flutter", icon: <RiFlutterFill />, href: "https://flutter.dev/" },
    { title: "GraphQL", icon: <GrGraphQl />, href: "https://graphql.org/" },
    {
      title: "TailwindCSS",
      icon: <BiLogoTailwindCss />,
      href: "https://tailwindcss.com/",
    },
  ],
  Tools: [
    {
      title: "VS Code",
      icon: <TbBrandVscode />,
      href: "https://code.visualstudio.com/",
    },
    { title: "Postman", icon: <SiPostman />, href: "https://www.postman.com/" },
    {
      title: "Linux, Mac OS",
      icon: <DiLinux />,
      href: "https://www.linux.org/",
    },
    { title: "Vercel", icon: <SiVercel />, href: "https://vercel.com/" },
    { title: "Notion", icon: <SiNotion />, href: "https://www.notion.so/" },
  ],
};
