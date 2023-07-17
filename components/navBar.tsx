import { sigmar } from "@/fonts";
import { cn } from "@/lib/utils";
import ThemeSwitch from "@/components/themeSwitch";
import PDFDownloadButton from "./pdfDownloadButton";

const NavBar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <nav
      className={cn(
        "flex w-full items-center justify-between opacity-75",
        className
      )}
    >
      <p className={`text-3xl text-black dark:text-white ${sigmar.className}`}>
        MOSES.GG
      </p>
      <div className="flex items-center gap-x-3">
        <ThemeSwitch />
        <PDFDownloadButton />
      </div>
    </nav>
  );
};

export default NavBar;
