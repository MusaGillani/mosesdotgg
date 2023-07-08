import { TbProgressBolt } from "react-icons/tb";

import { cn } from "@/lib/utils";
import { sigmar } from "@/fonts";

const Banner: React.FC = () => {
  return (
    <div
      className={cn(
        "text-md inline-flex w-full items-center justify-center bg-orange-600 px-3 text-white ",
        sigmar.className
      )}
    >
      <span className="m-2 font-medium tracking-widest">
        Site under construction
      </span>
      <TbProgressBolt className="stroke-2 text-2xl" />
    </div>
  );
};

export default Banner;
