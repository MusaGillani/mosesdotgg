"use client";
import Resume from "./resume";
import { usePDF } from "react-to-pdf";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

// render PDF and also show download button
function Page() {
  const { toPDF, targetRef } = usePDF({
    method: "save",
    filename: "musagillani-resume.pdf",
    page: { margin: 0.1 },
  });

  const [downloading, setDownloading] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // * Adjusting viewport scale in smaller devices to show entire Resume on page load
  useEffect(() => {
    function adjustScale() {
      const a4WidthInPixels = 793.7; // PPI (pixels per inch) on web is 96, 210 mm width = ~793.7pixels
      const screenWidth = window.screen.width; // screen width of device
      let scale;
      // scale is 1 for devices having width > A4
      if (screenWidth >= a4WidthInPixels) {
        scale = 1;
      }
      scale = parseFloat((screenWidth / a4WidthInPixels).toFixed(2));
      console.log("scale >>", scale);
      document
        ?.querySelector('meta[name="viewport"]')
        ?.setAttribute("content", `width=device-width, initial-scale=${scale}`);
      setLoading(false);
    }

    adjustScale();
  }, []);

  useEffect(() => {
    if (downloading) {
      toPDF();
      setDownloading(false);
    }
  }, [downloading, toPDF]);

  const downloadPdf = () => {
    setDownloading(true);
  };

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="h-full min-h-screen w-full min-w-fit bg-white py-5 md:px-5">
      <div className="flex flex-col items-center gap-y-4 lg:gap-0">
        <div className="flex w-full flex-col items-center justify-between gap-y-2 lg:flex-row lg:items-start">
          <button
            onClick={() => router.replace("/")}
            className="h-fit max-w-max cursor-pointer rounded border border-gray-300 bg-gray-100 p-2 text-center text-black transition-all duration-300 ease-in-out hover:bg-gray-300"
          >
            Back to Home
          </button>
          <Button
            loading={downloading}
            onClick={downloadPdf}
            className="h-fit max-w-max cursor-pointer rounded border border-gray-300 bg-gray-100 p-2 text-center text-black transition-all duration-300 ease-in-out hover:bg-gray-300"
          >
            Download Resume
          </Button>
        </div>
        <Resume mode="render" />
        {/* Render diff to make PDF, hidden in normal view */}
        <div
          style={{
            position: "absolute",
            top: 4000,
            display: downloading ? "block" : "none",
          }}
        >
          <div
            ref={targetRef}
            className="flex items-center justify-center"
            style={{
              width: "210mm",
              height: "297mm",
            }}
          >
            <Resume ref={targetRef} mode="pdf" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
