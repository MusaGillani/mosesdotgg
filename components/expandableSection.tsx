"use client";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { PropsWithChildren, useEffect, useState } from "react";

import { sigmar } from "@/fonts";
import useWindowSize from "@/hooks/useWindowSize";
import dynamic from "next/dynamic";
import { Skeleton } from "./ui/skeleton";
import { useElementSize } from "usehooks-ts";

type Props = PropsWithChildren<{ sectionName: string; className?: string }>;

const ExpandableSectionComponent: React.FC<Props> = ({
  sectionName,
  children,
  className,
}) => {
  const { width } = useWindowSize();
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [squareRef, { height }] = useElementSize();

  useEffect(() => {
    setIsExpanded(width ? width >= 768 : false);
  }, [width]);

  return (
    <>
      <div className="mt-10 flex w-[calc(100vw_-_5rem)] items-center justify-between text-3xl lg:mx-auto lg:w-[30vw]">
        <h1 className={`${sigmar.className}`}>{sectionName}</h1>
        <button
          className="rounded-full border-2 border-slate-300 md:hidden"
          onClick={() => {
            setIsExpanded((prev) => !prev);
          }}
        >
          {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <span className="sr-only">Click to Expand</span>
      </div>
      <div
        className={`overflow-y-hidden overflow-x-visible transition-all duration-300 ease-in-out scrollbar-hide`}
        style={{
          height: isExpanded ? height + 20 : undefined,
        }}
      >
        {isExpanded && (
          <div ref={squareRef} className={className}>
            {children}
          </div>
        )}
      </div>
    </>
  );
};

const LoadingSkeleton: React.FC = () => {
  return <Skeleton className="h-4 w-3/4" />;
};

const ExpandableSection = dynamic(
  () => Promise.resolve(ExpandableSectionComponent),
  {
    loading: LoadingSkeleton,
  }
);

export default ExpandableSection;
