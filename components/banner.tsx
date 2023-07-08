import { cn } from "@/lib/utils";
import { sigmar } from "@/fonts";

const Banner: React.FC = () => {
  return (
    <div
      className={cn(
        "text-md inline-flex w-full items-center justify-center bg-orange-600 px-3 font-medium tracking-widest",
        sigmar.className
      )}
    >
      <span className="">Site under construction</span>
    </div>
  );
};

export default Banner;
