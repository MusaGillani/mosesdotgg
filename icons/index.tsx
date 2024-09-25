"use client";
import { VscGithubInverted } from "react-icons/vsc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedLinkIconProps {
  icon: ReactNode;
  href: string;
  className?: string;
}

const AnimatedLinkIcon = ({ icon, href, className }: AnimatedLinkIconProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover="hover"
      initial="initial"
      className={cn("relative", className)}
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
        {icon}
      </motion.div>
    </motion.a>
  );
};

interface AnimatedIconProps extends Omit<AnimatedLinkIconProps, "icon"> {}

export const AnimatedGithub: React.FC<AnimatedIconProps> = ({
  href,
  className,
}) => (
  <AnimatedLinkIcon
    icon={<VscGithubInverted className={cn("m-2 ml-0", className)} />}
    href={href}
  />
);

export const AnimatedTwitter: React.FC<AnimatedIconProps> = ({
  href,
  className,
}) => (
  <AnimatedLinkIcon
    icon={<FaSquareXTwitter className={cn("m-2", className)} />}
    href={href}
  />
);

export const AnimatedLinkedIn: React.FC<AnimatedIconProps> = ({
  href,
  className,
}) => (
  <AnimatedLinkIcon
    icon={<SiLinkedin className={cn("m-2", className)} />}
    href={href}
  />
);

export const AnimatedLink: React.FC<AnimatedIconProps> = ({
  href,
  className,
}) => (
  <AnimatedLinkIcon
    icon={<Link className={cn("m-2", className)} />}
    href={href}
  />
);
