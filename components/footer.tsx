"use client";
import { cn } from "@/lib/utils";
import { roboto, sigmar } from "@/fonts";
import { email } from "@/constants/info";
import { projects } from "@/constants/projects";

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <>
      <div className={className}>
        <h1 className={cn("mb-5 mt-10 text-3xl", sigmar.className)}>
          Want to Connect
        </h1>
        <div className="flex w-full items-center gap-x-1">
          <p className={cn("text-2xl", roboto.className)}>
            I&apos;m reachable at{" "}
            <a
              href={`mailto:${email}`}
              className="text-xl font-bold text-discord-purple dark:text-teal-900"
            >
              {email}
            </a>
          </p>
        </div>
      </div>
      <div className="my-5 flex w-full items-center justify-center">
        <p className={cn(roboto.className)}>
          Crafted with{" "}
          {projects.find((project) => project.name === "Moses.gg")!.tech}
        </p>
      </div>
      <p className="mb-10 text-center">Moses.gg {new Date().getFullYear()}</p>
    </>
  );
};

export default Footer;
