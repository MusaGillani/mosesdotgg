import React from "react";
import { sigmar } from "@/fonts";

import ThemeSwitch from "@/components/themeSwitch";

const NavBar: React.FC = () => {
  return (
    <nav className="flex w-full items-center justify-between opacity-75">
      <p className={`text-3xl text-black dark:text-white ${sigmar.className}`}>
        MOSES.GG
      </p>
      <ThemeSwitch />
    </nav>
  );
};

export default NavBar;
