"use client";
import { sigmar } from "@/fonts";
import { cn } from "@/lib/utils";
import ThemeSwitch from "@/components/themeSwitch";
import PDFDownloadButton from "./pdfDownloadButton";
import { useVisibleOnUpScroll } from "@/hooks/useVisibleOnUpScroll";

const NavBar: React.FC<{ className?: string }> = ({ className }) => {
  const visible = useVisibleOnUpScroll();

  return (
    <nav
      className={cn(
        "fixed z-20 w-full bg-white opacity-75 transition-[top] duration-300 dark:bg-black",
        visible ? "top-0" : "-top-28",
      )}
    >
      <div
        className={cn(
          "flex w-full items-center justify-between py-5",
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
