import { Metadata } from "next";

import { Providers } from "./providers";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Moses.gg new",
  description: "Welcome to Moses.gg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
