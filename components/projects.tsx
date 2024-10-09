import Section from "./section";
import ProjectCard from "./projectCard";
import { projects } from "@/constants/projects";
import { cn } from "@/lib/utils";

const Projects: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Section
      sectionName="PROJECTS"
      className={cn(className)}
      contentClassName={cn("horizontal-spacing", "xl:w-4/6")}
    >
      {projects.map(
        ({ github, name, tech, type, link, desc, imageSrc }, index) => (
          <ProjectCard
            key={name}
            title={name.toUpperCase()}
            type={type}
            description={desc}
            technologies={tech}
            github={github}
            imageSrc={imageSrc}
            link={link}
            rightShift={(index + 1) % 2 === 0}
          />
        ),
      )}
    </Section>
  );
};

export default Projects;
