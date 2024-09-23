import { sigmar } from "@/fonts";

type Props = { title: string; icon: React.ReactElement; href: string };

const Card: React.FC<Props> = ({ icon, title, href }) => {
  return (
    <a
      href={href}
      className="bg-discord-purple-lightened flex h-52 w-full scale-100 flex-col items-center justify-center rounded-xl p-5 shadow-lg transition delay-150 ease-in-out hover:-translate-y-3 hover:-rotate-6 hover:skew-y-3 hover:scale-105 dark:bg-teal-900 md:h-20 md:w-20"
    >
      <div className="my-2 text-7xl text-black dark:text-white md:text-5xl">
        {icon}
      </div>
      <p
        className={`overflow-hidden text-ellipsis text-center text-2xl text-black dark:text-white md:hidden ${sigmar.className}`}
      >
        {title}
      </p>
    </a>
  );
};

export default Card;
