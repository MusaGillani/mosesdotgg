import React, { PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { roboto } from "@/fonts";

const textVariants = cva(roboto.className, {
  variants: {
    type: {
      primary: "font-extrabold",
      secondary: "text-slate-700",
      ternary: "",
    },
  },
});

export interface TextProps
  extends React.ParamHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

const Text: React.FC<PropsWithChildren<TextProps>> = ({ children, type }) => {
  return <p className={cn(textVariants({ type }))}>{children}</p>;
};

export default Text;
