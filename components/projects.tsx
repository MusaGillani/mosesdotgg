import Image from "next/image";
import { sigmar, rubik } from "@/fonts";
import complaintronix from "@/public/complaintronix.png";
import { AnimatedGithub } from "@/icons";

const Projects: React.FC = () => {
  return (
    <div>
      <h1 className={`mt-10 text-3xl ${sigmar.className}`}>PROJECTS</h1>
      <div className="relative my-5 flex w-full rounded-lg dark:border-4 dark:border-slate-500 md:static">
        {/* CARD */}
        <div className="absolute h-full w-full rounded-lg bg-black p-5 opacity-95 md:static md:h-1/6 md:w-2/3 md:opacity-100">
          <Image
            src={complaintronix}
            alt="complaintronix logo"
            className="m-auto h-72 w-72 rounded-lg"
          />
          <p className="text-center text-white dark:text-gray-400">
            COMPLAINTRONIX
          </p>
        </div>
        <div className="z-10 w-full md:w-1/3 md:text-right">
          <p
            className={`m-5 text-2xl font-bold text-white dark:text-gray-400 md:text-slate-600 ${rubik.className}`}
          >
            COMPLAINTRONIX
          </p>
          <p
            className={`m-5 text-2xl font-bold text-white dark:text-gray-400 md:text-slate-600 ${rubik.className}`}
          >
            Semester Project
          </p>
          <div className="right-3/4 w-[40vw] overflow-hidden rounded-lg bg-transparent p-6 shadow-lg md:relative md:m-5 md:bg-slate-200 dark:md:bg-gray-800 dark:md:shadow dark:md:shadow-black lg:w-[30vw]">
            <p className="text-white dark:text-white md:text-black">
              A Mobile application to register and manage student complaints
              related to their internet connections in GIKI hostels
            </p>
          </div>
          <div className="flex w-full justify-between md:block">
            <p
              className={`text-md m-5 truncate text-center font-bold text-white dark:text-gray-400 md:text-slate-600 ${rubik.className}`}
            >
              Flutter Express Firebase MySQL
            </p>
            <div className="m-5 text-3xl">
              <a
                href="https://github.com/MusaGillani/complaintronix-flutter"
                target="_blank"
              >
                <AnimatedGithub className="text-white dark:text-white md:text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
