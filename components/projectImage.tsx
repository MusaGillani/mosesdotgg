"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useHover } from "usehooks-ts";
import { useRef } from "react";

const ProjectImage: React.FC<{ img: StaticImageData }> = ({ img }) => {
  const hoverRef = useRef(null);
  const isHovered = useHover(hoverRef);
  return (
    <motion.div
      style={{ zIndex: -1 }}
      variants={{
        initial: {
          y: 0,
        },
        hovered: {
          y: -10,
        },
      }}
      animate={isHovered ? "hovered" : "initial"}
      initial="initial"
      ref={hoverRef}
    >
      <Image
        src={img}
        alt="complaintronix logo"
        className="m-auto h-72 w-72 rounded-lg"
      />
    </motion.div>
  );
};

export default ProjectImage;
