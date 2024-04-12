import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const ProjectsHeader = () => {
    const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      
      <h3 className="text-center text-4xl font-bold md:text-7xl">Project Gallery</h3>
      <p className="mt-2 text-center text-xl md:mb-4 md:text-3xl">
        See whats in store
      </p>
    </motion.div>
  )
}

export default ProjectsHeader