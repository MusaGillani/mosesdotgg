"use client";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { useState } from "react";

import { sigmar } from "@/fonts";
import ProjectCard from "./projectCard";
import useComponentSize from "@/hooks/useComponentSize";

const Projects: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [ref, contentMaxHeight] = useComponentSize();

  return (
    <>
      <div className="mt-10 flex w-full items-center justify-between text-3xl">
        <h1 className={`${sigmar.className}`}>PROJECTS</h1>
        <button
          className="rounded-full border-2 border-slate-300"
          onClick={() => {
            if (isExpanded) ref.current!.scrollIntoView();
            setIsExpanded((prev) => !prev);
          }}
        >
          {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          height: isExpanded ? contentMaxHeight : 0,
        }}
      >
        {isExpanded && (
          <div ref={ref} className="py-5">
            <ProjectCard
              title="COMPLAINTRONIX"
              type="Semester Project"
              description="A Mobile application to register and manage student complaints
            related to their internet connections in GIKI hostels"
              technologies="Flutter Express Firebase MySQL"
              github="https://github.com/MusaGillani/complaintronix-flutter"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
