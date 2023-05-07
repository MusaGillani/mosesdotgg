import Image from "next/image";
import { sigmar, rubik } from "@/fonts";
import complaintronix from "@/public/complaintronix.png";
import { AnimatedGithub } from "@/icons";

const Projects: React.FC = () => {
  return (
    <div>
      <h1 className={`mt-10 text-3xl ${sigmar.className}`}>PROJECTS</h1>
      <div className="my-5 flex w-full rounded-lg">
        {/* CARD */}
        <div className="h-1/6 w-2/3 rounded-lg bg-black p-5">
          <Image
            src={complaintronix}
            alt="complaintronix logo"
            className="m-auto h-72 w-72 rounded-lg"
          />
          <p className="text-center text-white dark:text-gray-400">
            COMPLAINTRONIX
          </p>
        </div>
        <div className="w-1/3 text-right">
          <p
            className={`m-5 text-2xl font-bold text-slate-600 dark:text-gray-400 ${rubik.className}`}
          >
            COMPLAINTRONIX
          </p>
          <p
            className={`m-5 text-2xl font-bold text-slate-600 dark:text-gray-400 ${rubik.className}`}
          >
            Semester Project
          </p>
          <div className="relative right-3/4 m-5 w-[40vw] overflow-hidden rounded-lg bg-slate-200 p-6 shadow-lg dark:bg-gray-800 dark:shadow dark:shadow-black lg:w-[30vw]">
            <p className="">
              A Mobile application to register and manage student complaints
              related to their internet connections in GIKI hostels
            </p>
          </div>
          <p
            className={`m-5 font-bold text-slate-600 dark:text-gray-400 ${rubik.className}`}
          >
            Flutter Express Firebase MySQL
          </p>
          <div className="m-5 text-3xl">
            <a
              href="https://github.com/MusaGillani/complaintronix-flutter"
              target="_blank"
            >
              <AnimatedGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
