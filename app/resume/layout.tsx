import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

import type { Viewport } from "next";

export const viewport: Viewport = {
  width: 1023,
};

function layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default layout;
