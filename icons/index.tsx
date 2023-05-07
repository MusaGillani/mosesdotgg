import { VscGithubInverted } from "react-icons/vsc";
import { BsTwitter } from "react-icons/bs";

export const AnimatedGithub: React.FC<{ className?: string }> = ({
  className,
}) => (
  <VscGithubInverted
    className={`m-2 ml-0 transition delay-150 ease-in-out hover:rotate-12 hover:scale-150 ${className}`}
  />
);

export const AnimatedTwitter: React.FC<{ className?: string }> = ({
  className,
}) => (
  <BsTwitter
    className={`m-2 transition delay-150 ease-in-out hover:rotate-12 hover:scale-150 ${className}`}
  />
);
