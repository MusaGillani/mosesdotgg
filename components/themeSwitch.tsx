import { useAutoAnimate } from "@formkit/auto-animate/react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

import useDarkSide from "@/hooks/useDarkSide";

const ThemeSwitch: React.FC = () => {
  const [parent] = useAutoAnimate();
  const { theme, toggleTheme } = useDarkSide();
  return (
    <button
      onClick={toggleTheme}
      ref={parent}
      className="rounded-lg bg-purple-200 p-5 dark:bg-teal-900"
    >
      {theme === "dark" ? <BsSunFill className="text-white" /> : <BsMoonFill />}
    </button>
  );
};

export default ThemeSwitch;
