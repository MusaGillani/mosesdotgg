import ExpandableSection from "./expandableSection";
import ProjectCard from "./projectCard";

const Projects: React.FC = () => {
  return (
    <ExpandableSection sectionName="PROJECTS">
      <ProjectCard
        title="COMPLAINTRONIX"
        type="Semester Project"
        description="A Mobile application to register and manage student complaints
            related to their internet connections in GIKI hostels"
        technologies="Flutter Express Firebase MySQL"
        github="https://github.com/MusaGillani/complaintronix-flutter"
      />
    </ExpandableSection>
  );
};

export default Projects;
