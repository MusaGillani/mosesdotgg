"use client";
import { sigmar } from "@/fonts";
import {
  motion,
  stagger,
  useAnimate,
  useAnimationControls,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  title: string;
  icon: React.ReactElement;
  href: string;
  index: number;
};

const Card: React.FC<Props> = ({ icon, title, href, index }) => {
  const animation = useAnimationControls();
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      animation.start({
        opacity: 1,
        transition: {
          delay: (index + 1) * 0.1,
        },
      });
    }
  }, [animation, index, isInView, ref]);

  return (
    <motion.a
      ref={ref}
      href={href}
      className="flex h-52 w-full scale-100 flex-col items-center justify-center rounded-xl bg-discord-purple-lightened p-5 shadow-lg transition delay-150 ease-in-out hover:-translate-y-3 hover:-rotate-6 hover:skew-y-3 hover:scale-105 dark:bg-teal-900 md:h-32 md:w-3/4"
      initial={{
        opacity: 0,
      }}
      animate={animation}
    >
      <div className="my-2 text-7xl text-black dark:text-white md:text-5xl">
        {icon}
      </div>
      <p
        className={`overflow-hidden text-ellipsis text-center text-2xl text-black dark:text-white ${sigmar.className}`}
      >
        {title}
      </p>
    </motion.a>
  );
};

export default Card;
