import { Metadata } from "next";

import { Providers } from "./providers";

import { cn } from "@/lib/utils";
import { roboto } from "@/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Moses.gg",
  description: "Welcome to Moses.gg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-full min-h-screen bg-white dark:bg-black dark:text-white",
          roboto.className,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
