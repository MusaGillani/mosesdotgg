"use client";
import Resume from "./resume";
import { usePDF } from "react-to-pdf";
import dynamic from "next/dynamic";
import { Loader } from "lucide-react";

// render PDF and also show download button
function Page() {
  // some way to render links in display mode and p tags in download mode
  const { toPDF, targetRef } = usePDF({
    method: "save",
    filename: "musagillani-resume.pdf",
    page: { margin: 0.1 },
  });

  const downloadPdf = () => toPDF();

  return (
    <div className="h-full min-h-screen w-auto bg-white p-5">
      <div className="flex flex-col items-center gap-y-4 lg:flex-row lg:items-start lg:gap-0">
        <button
          onClick={downloadPdf}
          className="h-fit max-w-max cursor-pointer rounded border border-gray-300 bg-gray-100 p-2 text-center text-black transition-all duration-300 ease-in-out hover:bg-gray-300"
        >
          Download Resume
        </button>
        <Resume ref={targetRef} />
      </div>
    </div>
  );
}

export default Page;

const CsrPage = dynamic(() => Promise.resolve(Page), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-screen">
      <Loader className="m-auto animate-spin" />
    </div>
  ),
});
