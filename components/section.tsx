"use client";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

import { sigmar } from "@/fonts";
import useWindowSize from "@/hooks/useWindowSize";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type Props = PropsWithChildren<{ sectionName: string; className?: string }>;

const Section: React.FC<Props> = ({ sectionName, children, className }) => {
  const { width } = useWindowSize();
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // setIsExpanded(width ? width >= 768 : false);
  }, [width]);

  return (
    <div className={className}>
      <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
        <div className="mt-10 flex w-full items-center justify-between text-3xl">
          <h1 className={`${sigmar.className}`}>{sectionName}</h1>
          <CollapsibleTrigger asChild>
            <div className="md:hidden">
              <button
                className="rounded-full border-2 border-slate-300"
                onClick={() => {
                  if (isExpanded) ref.current!.scrollIntoView();
                  setIsExpanded((prev) => !prev);
                }}
              >
                {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
              </button>
              <span className="sr-only">Click to Expand</span>
            </div>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div ref={ref} className="py-5">
            {children}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Section;
