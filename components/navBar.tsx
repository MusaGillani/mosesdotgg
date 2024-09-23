"use client";
import { sigmar } from "@/fonts";
import { cn } from "@/lib/utils";
import ThemeSwitch from "@/components/themeSwitch";
import PDFDownloadButton from "./pdfDownloadButton";
import { useCallback, useEffect, useState } from "react";

const SCROLL_DISTANCE = 20; // additional distance to travel in direction

const NavBar: React.FC<{ className?: string }> = ({ className }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollYPos, setLastScrollYPos] = useState(window.scrollY);

  const handler = useCallback(() => {
    const currScrollYPos = window.scrollY;
    // up scroll -> lastScrollYPos > currScrollYPos
    if (lastScrollYPos > currScrollYPos + SCROLL_DISTANCE) {
      setVisible(true);
    }
    // down scroll -> lastScrollYPos < currScrollYPos
    if (currScrollYPos > lastScrollYPos + SCROLL_DISTANCE) {
      setVisible(false);
    }

    setLastScrollYPos(currScrollYPos);
  }, [lastScrollYPos]);

  useEffect(() => {
    window.addEventListener("scroll", handler);
    () => window.removeEventListener("scroll", handler);
  }, [handler]);

  return (
    <nav
      className={cn(
        "fixed z-20 w-full bg-white opacity-75 transition-[top] duration-300 dark:bg-black",
        visible ? "top-0" : "-top-28",
      )}
    >
      <div
        className={cn(
          "flex w-full items-center justify-between",
          "!pt-14", // remove when banner is removed
          className,
        )}
      >
        <p
          className={`text-3xl text-black dark:text-white ${sigmar.className}`}
        >
          MOSES.GG
        </p>
        <div className="flex items-center gap-x-3">
          <ThemeSwitch />
          <PDFDownloadButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
