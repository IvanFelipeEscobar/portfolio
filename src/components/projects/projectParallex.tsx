import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./projectCard";

const ProjectParallex = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["end end", "end start"],
    });
  
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (<>
<motion.div
    style={{
        backgroundImage: `url("/images/code.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:`100vh`,
        scale
    }}
    ref={targetRef}
    className="sticky z-0 overflow-hidden"
>
<motion.div
        className="absolute bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
      
</motion.div>
<ProjectCard/>
</>
  )
}

export default ProjectParallex