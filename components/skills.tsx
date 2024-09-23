import Card from "./card";
import { skills } from "@/constants/skills";
import { sigmar, roboto } from "@/fonts";
import { Fragment } from "react";
import Section from "./section";

const Skills: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Section sectionName="SKILLS" className={className}>
      <p className={`${roboto.className}`}>
        Although I&apos;m curious to learn about new technologies, these are the
        tools I&apos;m experienced with
      </p>
      {/* // TODO: fix spacing in smaller screens */}
      <div className="my-5 grid grid-cols-1 place-items-center gap-y-8 sm:mx-auto sm:my-10 sm:w-4/5 sm:grid-cols-2 md:w-full md:grid-cols-6">
        {skills.Frameworks_Technologies.map(({ icon, title, href }) => (
          <Fragment key={title}>
            <Card title={title} icon={icon} href={href} />
            <a
              href={href}
              className={`hidden overflow-hidden text-ellipsis text-center text-2xl text-black dark:text-white md:block ${sigmar.className} transition delay-150 ease-in-out hover:-translate-y-5`}
            >
              {title}
            </a>
          </Fragment>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
