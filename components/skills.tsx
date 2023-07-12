import Card from "./card";
import { skills } from "@/constants/skills";
import { sigmar, roboto } from "@/fonts";
import { Fragment } from "react";
import ExpandableSection from "./expandableSection";

const Skills: React.FC = () => {
  return (
    <ExpandableSection sectionName="SKILLS">
      <p className={`${roboto.className}`}>
        Although I&apos;m curious to learn about new technologies, these are the
        tools I&apos;m experienced with
      </p>
      <div className="mx-auto my-10 grid w-4/5 grid-cols-1 place-items-center gap-y-8 sm:grid-cols-2 md:w-full md:grid-cols-6">
        {skills.map(({ icon, title, href }) => (
          <Fragment key={title}>
            <Card title={title} icon={icon} href={href} />
            <a
              href={href}
              className={`hidden overflow-hidden text-ellipsis text-2xl text-discord-purple dark:text-white md:block ${sigmar.className} transition delay-150 ease-in-out hover:-translate-y-5`}
            >
              {title}
            </a>
          </Fragment>
        ))}
      </div>
    </ExpandableSection>
  );
};

export default Skills;
