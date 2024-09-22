"use client";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const ThemeSwitch: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (resolvedTheme === "dark") setTheme("light");
    if (resolvedTheme === "light") setTheme("dark");
  };
  return (
    <button
      onClick={toggleTheme}
      className="bg-discord-purple-lightened inline-flex items-center justify-center rounded-lg p-5 dark:bg-teal-900"
    >
      <BsSunFill className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <BsMoonFill className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeSwitch;
