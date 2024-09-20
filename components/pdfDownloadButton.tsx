"use client";
import { ChevronDown, FileText, Loader } from "lucide-react";
import { ComponentProps, ComponentType } from "react";
import dynamic from "next/dynamic";
import { useCopyToClipboard } from "usehooks-ts";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";

const PDFDownloadButton: React.FC = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="block rounded-lg bg-purple-200 p-4 dark:bg-teal-900">
                    <div className="flex gap-x-3">
                      <FileText />
                      <ChevronDown />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click for options</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <ListItems Component={DropdownMenuItem} />
          </DropdownMenuContent>
        </DropdownMenu>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ListItems Component={ContextMenuItem} />
      </ContextMenuContent>
    </ContextMenu>
  );
};

const LoadingSkeleton = () => {
  return (
    <div className="block rounded-lg bg-purple-200 p-4 dark:bg-teal-900">
      <Loader className="mx-4 animate-spin" />
    </div>
  );
};

const PDFDownloadButtonNoSSR = dynamic(
  () => Promise.resolve(PDFDownloadButton),
  { ssr: false, loading: LoadingSkeleton }
);

export default PDFDownloadButtonNoSSR;

const ListItems: React.FC<{
  Component: ComponentType<
    ComponentProps<typeof DropdownMenuItem | typeof ContextMenuItem>
  >;
}> = ({ Component }) => {
  const [, copy] = useCopyToClipboard();
  return (
    <>
      <Component onClick={() => copy("musagillaniwork@gmail.com")}>
        Copy Email
      </Component>
      <Component>
        <Link href={"/resume"}>Download Resume</Link>
      </Component>
    </>
  );
};
