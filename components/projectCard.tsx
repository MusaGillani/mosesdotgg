import complaintronix from "@/public/complaintronix.png";
import { AnimatedGithub } from "@/icons";
import { rubik } from "@/fonts";
import ProjectImage from "./projectImage";

type Props = {
  title: string;
  type: string;
  description: string;
  technologies: string;
  github: string;
};

const ProjectCard: React.FC<Props> = ({
  title,
  type,
  description,
  technologies,
  github,
}) => {
  return (
    <div className="relative my-5 flex w-full rounded-lg dark:border-4 dark:border-slate-500 md:static">
      <div className="absolute h-full w-full rounded-lg bg-black p-5 opacity-95 md:static md:h-1/6  md:w-2/3 md:bg-inherit md:opacity-100">
        <ProjectImage img={complaintronix} />
        <p className={`text-center  dark:text-gray-400 ${rubik.className}`}>
          {title}
        </p>
      </div>
      <div className="z-10 w-full md:w-1/3 md:text-right">
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
        <div className="right-3/4 w-[40vw] overflow-hidden rounded-lg bg-transparent p-6 shadow-lg md:relative md:m-5 md:bg-slate-200 dark:md:bg-gray-800 dark:md:shadow dark:md:shadow-black xl:w-[25vw]">
          <p className="text-white dark:text-white md:text-black">
            {description}
          </p>
        </div>
        <div className="flex w-full justify-between md:block">
          <p
            className={`text-md m-5 truncate text-center font-bold text-white dark:text-gray-400 md:text-slate-600 ${rubik.className}`}
          >
            {technologies}
          </p>
          <div className="m-5 text-3xl">
            <AnimatedGithub
              href={github}
              className="text-white dark:text-white md:text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
