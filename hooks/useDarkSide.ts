import { useEffect, useState } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState<string | null>(null);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme ?? defaultTheme);

    localStorage.setItem("theme", theme ?? defaultTheme);
  }, [theme, colorTheme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme } as const;
}
