"use client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";


const ThemeSwitch: React.FC = () => {
  const [parent] = useAutoAnimate();
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (resolvedTheme === "dark") setTheme("light");
    if (resolvedTheme === "light") setTheme("dark");
  };
  return (
    <button
      onClick={toggleTheme}
      ref={parent}
      className="rounded-lg bg-purple-200 p-5 dark:bg-teal-900"
    >
      {resolvedTheme === "dark" ? <BsSunFill className="text-white" /> : <BsMoonFill />}
    </button>
  );
};

export default ThemeSwitch;
