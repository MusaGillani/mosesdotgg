import React from "react";
import { Sigmar } from "next/font/google";

import ThemeSwitch from "@/components/themeSwitch";

const sigmar = Sigmar({ weight: "400", subsets: ["latin"] });

const NavBar: React.FC = () => {
  return (
    <nav className="sticky top-5 flex w-full items-center justify-between opacity-75">
      <p className={`text-3xl text-black dark:text-white ${sigmar.className}`}>
        MOSES.GG
      </p>
      <ThemeSwitch />
    </nav>
  );
};

export default NavBar;
