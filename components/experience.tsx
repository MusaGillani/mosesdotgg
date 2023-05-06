import { sigmar, roboto } from "@/fonts";
import Stepper from "./stepper";
import { experiences } from "@/constants/experiences";

const Experience: React.FC = () => {
  return (
    <div>
      <h1 className={`mt-10 text-3xl ${sigmar.className} sticky top-5`}>
        EXPERIENCE
      </h1>
      <p className={`${roboto.className}`}>
        I&apos;ve had the honour of working at these amazing companies.
        Hopefully your company will be there too.
      </p>
      <div className="m-5 grid grid-cols-1 gap-y-10 md:grid-cols-2">
        {experiences.map(({ company, position, location, tenure }) => (
          <div className="flex" key={company}>
            <Stepper />
            <div className="mx-2 overflow-hidden text-ellipsis">
              <p className="text-3xl text-gray-800 dark:text-slate-200">
                {company}
              </p>
              <p className="text-gray-700 dark:text-slate-300">{position}</p>
              <p className="text-gray-700 dark:text-slate-300">{location}</p>
              <p className="italic text-gray-600 dark:text-slate-400">
                {tenure}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
