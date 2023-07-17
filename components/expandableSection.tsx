"use client";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { PropsWithChildren, useEffect, useState } from "react";

import { sigmar } from "@/fonts";
import useComponentSize from "@/hooks/useComponentSize";
import useWindowSize from "@/hooks/useWindowSize";

type Props = PropsWithChildren<{ sectionName: string; className?: string }>;

const ExpandableSection: React.FC<Props> = ({
  sectionName,
  children,
  className,
}) => {
  const { width } = useWindowSize();
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [ref, contentMaxHeight] = useComponentSize();

  useEffect(() => {
    setIsExpanded(width ? width >= 768 : false);
  }, [width]);

  return (
    <div className={className}>
      {/* @ts-expect-error */}
      {width < 768 && (
        <div className="mt-10 flex w-full items-center justify-between text-3xl">
          <h1 className={`${sigmar.className}`}>{sectionName}</h1>
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
      )}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          height: isExpanded ? contentMaxHeight : 0,
        }}
      >
        {isExpanded && (
          <div ref={ref} className="py-5">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandableSection;
