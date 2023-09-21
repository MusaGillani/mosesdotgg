import React, { PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { roboto } from "@/fonts";

const textVariants = cva(roboto.className, {
  variants: {
    type: {
      primary: "font-extrabold",
      secondary: "text-slate-700",
      ternary: "text-gray-400 text-sm",
    },
    size: {
      sm: "text-sm",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
});

export interface TextProps
  extends React.ParamHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

const Text: React.FC<PropsWithChildren<TextProps>> = ({
  children,
  type,
  size,
}) => {
  return <p className={cn(textVariants({ type, size }))}>{children}</p>;
};

export default Text;
