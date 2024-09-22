import Image, { StaticImageData } from "next/image";

import { AnimatedGithub, AnimatedLink } from "@/icons";
import { rubik } from "@/fonts";

type Props = {
  title: string;
  type: string;
  description: string;
  technologies: string;
  github?: string;
  link?: string;
  imageSrc?: StaticImageData;
};

const ProjectCard: React.FC<Props> = ({
  title,
  type,
  description,
  technologies,
  github,
  link,
  imageSrc,
}) => {
  return (
    <div className="relative my-5 flex w-full rounded-lg dark:border-4 dark:border-slate-500 md:static md:border md:border-black">
      <div className="absolute flex h-full w-full items-center justify-center rounded-lg bg-black bg-gradient-to-r from-gray-900 to-black p-5 opacity-95 md:static md:w-2/3 md:bg-inherit md:opacity-100">
        {imageSrc && (
          <>
            <Image
              src={imageSrc}
              alt="logo"
              className="h-72 w-72 rounded-lg opacity-40 md:opacity-100"
            />
          </>
        )}
      </div>
      <div className="relative z-10 w-full md:w-1/3 md:text-right">
        <p
          className={`m-5 text-2xl font-bold text-white dark:text-gray-400 md:text-slate-600 ${rubik.className}`}
        >
          {title}
        </p>
        <p
          className={`m-5 text-2xl font-bold text-white dark:text-gray-400 md:text-slate-600 ${rubik.className}`}
        >
          {type}
        </p>
        <div className="right-3/4 w-[40vw] overflow-hidden rounded-lg bg-transparent p-6 shadow-lg md:relative md:m-5 md:bg-discord-purple-lightened dark:md:bg-teal-900 dark:md:shadow dark:md:shadow-black xl:w-[25vw]">
          <p className="w-full text-white dark:text-white md:text-black">
            {description}
          </p>
        </div>
        <div className="flex w-full justify-between md:block">
          <p
            className={`text-md m-5 truncate text-center font-bold text-white dark:text-gray-400 md:text-slate-600 ${rubik.className}`}
          >
            {technologies}
          </p>
          <div className="flex items-center">
            {github && (
              <div className="m-5 text-3xl sm:m-1">
                <a href={github} target="_blank">
                  <AnimatedGithub className="text-white dark:text-white md:text-black" />
                </a>
              </div>
            )}
            {link && (
              <div className="sm:1 m-5 text-3xl">
                <a href={link} target="_blank">
                  <AnimatedLink className="text-white dark:text-white md:text-black" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
