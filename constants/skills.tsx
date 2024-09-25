import {
  SiTypescript,
  SiExpress,
  SiNotion,
  SiPostgresql,
  SiPostman,
  SiVercel,
  SiNestjs,
  SiVim,
  SiNeovim,
  SiZedindustries,
  SiBun,
  SiHasura,
  SiDocker,
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
    { title: "Next.js", icon: <TbBrandNextjs />, href: "https://nextjs.org/" },
    { title: "React.js", icon: <FaReact />, href: "https://react.dev/" },
    {
      title: "Tailwind CSS",
      icon: <BiLogoTailwindCss />,
      href: "https://tailwindcss.com/",
    },
    { title: "Node.js", icon: <IoLogoNodejs />, href: "https://nodejs.org/en" },
    { title: "Bun", icon: <SiBun />, href: "https://bun.sh/" },
    { title: "Nest.js", icon: <SiNestjs />, href: "https://nestjs.com/" },
    {
      title: "Express.js",
      icon: <SiExpress />,
      href: "https://expressjs.com/",
    },
    { title: "GraphQL", icon: <GrGraphQl />, href: "https://graphql.org/" },
    {
      title: "Hasura v2",
      icon: <SiHasura />,
      href: "https://hasura.io/docs/2.0/index/",
    },

    {
      title: "PostgreSQL",
      icon: <SiPostgresql />,
      href: "https://www.postgresql.org/",
    },
    { title: "Flutter", icon: <RiFlutterFill />, href: "https://flutter.dev/" },
  ],
  Tools: [
    {
      title: "Zed",
      icon: <SiZedindustries />,
      href: "https://zed.dev/",
    },
    {
      title: "Vim",
      icon: <SiVim />,
      href: "https://www.vim.org/",
    },
    {
      title: "Neovim",
      icon: <SiNeovim />,
      href: "https://neovim.io/",
    },
    {
      title: "VS Code",
      icon: <TbBrandVscode />,
      href: "https://code.visualstudio.com/",
    },
    {
      title: "Docker",
      icon: <SiDocker />,
      href: "https://www.docker.com/",
    },
    {
      title: "Linux, Bash, Zsh, Fish",
      icon: <DiLinux />,
      href: "https://www.linux.org/",
    },
    { title: "Postman", icon: <SiPostman />, href: "https://www.postman.com/" },
    { title: "Vercel", icon: <SiVercel />, href: "https://vercel.com/" },
    { title: "Notion", icon: <SiNotion />, href: "https://www.notion.so/" },
  ],
};
