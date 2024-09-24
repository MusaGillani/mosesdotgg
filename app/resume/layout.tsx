import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

function layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default layout;
