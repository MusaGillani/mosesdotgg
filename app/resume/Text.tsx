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

type TextLinkProps =
  | {
      as?: "link";
      href: string;
    }
  | {
      as?: "text";
    };

export type Props = VariantProps<typeof textVariants> & TextLinkProps;

const Text = ({ children, type, size, ...props }: PropsWithChildren<Props>) => {
  props.as = props.as ?? "text"; // default value
  if (props.as === "text") {
    return <p className={cn(textVariants({ type, size }))}>{children}</p>;
  } else if (props.as === "link") {
    return (
      <a href={props.href} className={cn(textVariants({ type, size }))}>
        {children}
      </a>
    );
  } else {
    throw new Error("Invalid element type");
  }
};

export default Text;
