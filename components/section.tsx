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
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

type Props = PropsWithChildren<{
  sectionName: string;
  className?: string;
  contentClassName?: string;
}>;

const Section: React.FC<Props> = ({
  sectionName,
  children,
  className,
  contentClassName,
}) => {
  const { width } = useWindowSize();
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    // threshold: 0.4,
    rootMargin: "-200px 0px",
  });

  useEffect(() => {
    // setIsExpanded(width ? width >= 768 : false);
  }, [width]);

  const screenMd = width ? width >= 768 : false;

  return (
    <>
      <Collapsible
        open={isExpanded}
        onOpenChange={setIsExpanded}
        ref={ref}
        className={cn(
          "transition-opacity delay-150 duration-700 ease-in-out",
          screenMd ? (inView ? "opacity-100" : "opacity-0") : "opacity-100",
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between text-3xl",
            className,
          )}
        >
          <h1 className={`${sigmar.className}`}>{sectionName}</h1>
          <CollapsibleTrigger asChild>
            <div className="md:hidden">
              <button
                className="rounded-full border-2 border-slate-300"
                onClick={() => {
                  if (isExpanded) scrollRef.current!.scrollIntoView();
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
          <div
            ref={scrollRef}
            className={cn("py-5", contentClassName ?? className)}
          >
            {children}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default Section;
