"use client";
import { VscGithubInverted } from "react-icons/vsc";
import { BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AnimatedLinkIcon: React.FC<
  React.PropsWithChildren<{ className?: string; href: string }>
> = ({ children, className, href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover="hover"
      initial="initial"
      className={cn("m-2", className)}
    >
      <motion.div
        variants={{
          initial: {
            rotate: 0,
            scale: 1,
          },
          hover: {
            rotate: 10,
            scale: 1.2,
          },
        }}
      >
        {children}
      </motion.div>
    </motion.a>
  );
};

export const AnimatedGithub: React.FC<{ href: string; className?: string }> = ({
  className,
  href,
}) => (
  <AnimatedLinkIcon href={href} className={className}>
    <VscGithubInverted />
  </AnimatedLinkIcon>
);

export const AnimatedTwitter: React.FC<{
  href: string;
  className?: string;
}> = ({ className, href }) => (
  <AnimatedLinkIcon href={href} className={className}>
    <BsTwitter />
  </AnimatedLinkIcon>
);
