import Card from "./card";
import { skills } from "@/constants/skills";
import { roboto } from "@/fonts";
import Section from "./section";

const Skills: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Section sectionName="SKILLS" className={className}>
      <p className={`${roboto.className}`}>
        Although I&apos;m curious to learn about new technologies, these are the
        tools I&apos;m experienced with
      </p>
      <div className="my-5 grid grid-cols-1 place-items-center gap-x-2 gap-y-8 sm:mx-auto sm:my-10 sm:w-4/5 sm:grid-cols-2 md:w-full md:grid-cols-3">
        {skills.Frameworks_Technologies.map(({ icon, title, href }, i) => (
          <Card key={title} title={title} icon={icon} href={href} index={i} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
