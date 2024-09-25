import { StaticImageData } from "next/image";

import complaintronix from "@/public/complaintronix.png";
import porchpass from "@/public/porchpass.png";
import giki from "@/public/giki.png";
import flutter from "@/public/flutter.png";
import devsinc from "@/public/devsinc.png";
import mosesgg from "@/public/mosesgg.png";
import { github, website } from "./info";

export const projects: {
  name: string;
  type: string;
  tech: string;
  desc: string;
  link?: string;
  imageSrc?: StaticImageData;
  github?: string;
}[] = [
  {
    name: "Porchpass",
    type: "Client Project",
    tech: "Next.js , ShadCn UI, Hasura GraphQL, Nest.js",
    link: "braustin.porchpass.com",
    desc: "An application designed for new home owners to easily apply for and secure Manufactured Home Financing",
    imageSrc: porchpass,
  },
  {
    name: "mosesgg.dev",
    type: "Personal Project",
    tech: "Next.js , ShadCn UI, Framer Motion",
    github: github + "/mosesdotgg",
    desc: "Personal Website served as a Portfolio",
    imageSrc: mosesgg,
    link: website,
  },
  {
    name: "R-APP",
    type: "Devsinc Proprietary Software",
    tech: "Next.js, TailwindCSS, Seqeulize.js, PostgreSQL",
    github: undefined,
    desc: "An application tailored for Project Managers and Team Leads, empowering them to efficiently oversee their employees' performance, conduct reviews, and facilitate their professional growth.",
    imageSrc: devsinc,
  },
  {
    name: "GIKI OBE ",
    type: "Final Year Project",
    tech: "Node.js, React.js, MySQL, Github Actions",
    github: github + "/GikiObe",
    desc: "Devised an application for compliance and management of OBE - Outcome Based Education - Features included, Evaluation mechanisms, Progress Tracking, and Record maintenance",
    imageSrc: giki,
  },
  {
    name: "Complaintronix ",
    type: "Junior Year Project",
    tech: "Flutter, Node.js, MySQL, Firebase, Heroku",
    github: github + "/complaintronix-flutter",
    desc: "Developed an android application using flutter and firebase with a custom backend in Express.js and MySQL on Heroku for managing student complaints related to internet in GIKI. Firebase was used for Authentication",
    imageSrc: complaintronix,
  },
  {
    name: "Flex Eater",
    type: "Sophomore Project",
    tech: "Flutter, Firebase",
    github: github + "/flex-app",
    desc: "An android application built in Flutter, with firebase as a backend for Authentication, Storage and real-time Database, to provide users with the ability to view restaurants, filter out menu items according to their allergies and scan QR codes to check specific restaurants",
    imageSrc: flutter,
  },
];
