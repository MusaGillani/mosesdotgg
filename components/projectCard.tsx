import Image, { StaticImageData } from "next/image";

import { AnimatedGithub, AnimatedLink } from "@/icons";
import { roboto, rubik } from "@/fonts";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  type: string;
  description: string;
  technologies: string;
  rightShift: boolean;
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
  rightShift,
}) => {
  const tech = technologies.split(",");
  // TODO: light mode colors in small card view
  return (
    <div className="relative my-5 flex w-full rounded-lg">
      {/* same size as parent div */}
      <div
        className={cn(
          "absolute flex h-full w-full items-center justify-center rounded-lg bg-black p-5 opacity-95 md:bg-inherit md:opacity-100",
          rightShift ? "md:justify-start" : "md:justify-end",
          rightShift ? "md:bg-gradient-to-r" : "md:bg-gradient-to-l",
          "bg-gradient-to-r dark:from-gray-900 dark:to-black",
        )}
      >
        {imageSrc && (
          <div className="shadow-custom w-72 rounded-lg md:h-auto">
            <Image
              src={imageSrc}
              alt="logo"
              className="object-scale-down opacity-40 md:opacity-100"
            />
          </div>
        )}
      </div>
      {/* relative used to style in mobile for overlapping */}
      <div
        className={cn(
          "relative w-full md:w-3/5",
          rightShift && "md:ml-auto md:text-right",
        )}
      >
        <p
          className={cn(
            rubik.className,
            "dark:text-gray-40 m-5 text-2xl font-extrabold text-white md:text-black",
          )}
        >
          {title}
        </p>
        <p
          className={`m-5 text-xl font-bold text-white dark:text-gray-400 md:text-slate-600 ${rubik.className}`}
        >
          {type}
        </p>
        <div className="shadow-custom w-full overflow-hidden rounded-lg bg-transparent p-6 dark:md:shadow-black">
          <p className="w-full text-white dark:text-white md:text-black">
            {description}
          </p>
        </div>
        <div className="flex w-full justify-between md:block">
          <div
            className={cn(
              "mx-5 my-4 flex truncate",
              rightShift && "md:justify-end",
            )}
          >
            {tech.map((t, i) => (
              <p
                key={t}
                className={cn(
                  `text-md text-center font-bold text-white dark:text-gray-400 md:text-slate-600`,
                  rubik.className,
                  i !== tech.length - 1 && "mr-5 md:mr-8",
                )}
              >
                {t}
              </p>
            ))}
          </div>
          <div
            className={cn("flex items-center", rightShift && "md:justify-end")}
          >
            {github && (
              <div className="m-5 text-3xl sm:m-1">
                <a href={github} target="_blank">
                  <AnimatedGithub className="text-white dark:text-white md:text-black" />
                </a>
              </div>
            )}
            {link && (
              <div className="m-5 text-3xl">
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
