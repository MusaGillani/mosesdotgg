"use client";
import Resume from "./resume";
import { Margin, usePDF } from "react-to-pdf";
import dynamic from "next/dynamic";
import { Loader } from "lucide-react";

// render PDF and also show download button
function Page() {
  const { toPDF, targetRef } = usePDF({
    method: "save",
    filename: "musagillani-resume.pdf",
    page: { margin: 0.1 },
  });

  const downloadPdf = () => toPDF();

  return (
    <div className="h-full min-h-screen min-w-full bg-white p-5">
      <button
        onClick={downloadPdf}
        className="max-w-max cursor-pointer rounded border border-gray-300 bg-gray-100 p-2 text-center text-black transition-all duration-300 ease-in-out hover:bg-gray-300"
      >
        Download Resume
      </button>
      <Resume ref={targetRef} />;
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
