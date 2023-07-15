"use client";
import { ChevronDown, FileText, Loader } from "lucide-react";
import { ComponentPropsWithRef, ComponentType } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import { usePDF } from "@react-pdf/renderer";

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

import MyPdf from "./pdf";

const PDFDownloadButton: React.FC = () => {
  const [instance] = usePDF({ document: <MyPdf /> });
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="block rounded-lg bg-purple-200 p-4 dark:bg-teal-900">
                    {instance.loading ? (
                      <Loader className="animate-spin" />
                    ) : (
                      <div className="flex gap-x-3">
                        <FileText />
                        <ChevronDown />
                      </div>
                    )}
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
            <ListItems Component={DropdownMenuItem} instance={instance} />
          </DropdownMenuContent>
        </DropdownMenu>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ListItems Component={ContextMenuItem} instance={instance} />
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default PDFDownloadButton;

const ListItems: React.FC<{
  Component: ComponentType<
    ComponentPropsWithRef<typeof DropdownMenuItem | typeof ContextMenuItem>
  >;
  instance: ReturnType<typeof usePDF>[0];
}> = ({ Component, instance }) => {
  const [, copy] = useCopyToClipboard();
  return (
    <>
      <Component onClick={() => copy("musagillaniwork@gmail.com")}>
        Copy Email
      </Component>
      {!(instance.loading || instance.error) && (
        <Component>
          <a href={instance.url!} download="musagillani-CV.pdf">
            Download Resume
          </a>
        </Component>
      )}
    </>
  );
};
