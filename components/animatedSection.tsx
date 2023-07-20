"use client";
import { motion, useAnimation } from "framer-motion";
import { PropsWithChildren, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedSection: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      className={className}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {
          y: 30,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        delay: 0.4,
        duration: 0.7,
        damping: 5,
        mass: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
