import Section from "./section";
import ProjectCard from "./projectCard";
import { projects } from "@/constants/projects";

const Projects: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Section sectionName="PROJECTS" className={className}>
      {projects.map(({ github, name, tech, type, link, desc, imageSrc }) => (
        <ProjectCard
          key={name}
          title={name.toUpperCase()}
          type={type}
          description={desc}
          technologies={tech}
          github={github && `https://${github}`}
          imageSrc={imageSrc}
          link={link && `https://${link}`}
        />
      ))}
    </Section>
  );
};

export default Projects;
