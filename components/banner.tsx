import { TbProgressBolt } from "react-icons/tb";

import { cn } from "@/lib/utils";
import { sigmarOne } from "@/fonts";

const Banner: React.FC = () => {
  return (
    <div
      className={cn(
        "text-md absolute z-30 inline-flex w-full items-center justify-center bg-orange-600 px-3 text-white",
        sigmarOne.className,
      )}
    >
      <span className="text-outline m-2 font-medium tracking-widest">
        Site under construction
      </span>
      <TbProgressBolt className="text-outline stroke-2 text-2xl" />
    </div>
  );
};

export default Banner;
