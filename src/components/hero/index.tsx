import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const constraintsRef = useRef(null);

  return (
    <>
      <motion.div
        ref={constraintsRef}
        className="h-16 bg-base-200  flex flex-wrap flex-col justify-center items-center shadow-md shadow-neutral-400 overflow-x-auto gap-1"
      >
        <motion.div
          className="h-12 w-12 bg-primary rounded-md"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="h-12 w-12 bg-primary rounded-md"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="h-12 w-12 bg-primary rounded-md"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="h-12 w-12 bg-primary rounded-md"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="h-12 w-12 bg-primary rounded-md"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="h-12 w-12 bg-primary rounded-md"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="h-12 w-12 bg-primary rounded-md"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="h-12 w-12 bg-primary rounded-md"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="h-12 w-12 bg-primary rounded-md"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="h-12 w-12 bg-primary rounded-md"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="h-12 w-12 bg-primary rounded-md"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="h-12 w-12 bg-primary rounded-md"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="h-12 w-12 bg-primary rounded-md"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="h-12 w-12 bg-primary rounded-md"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="h-12 w-12 bg-primary rounded-md"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="h-12 w-12 bg-primary rounded-md"
          drag
          dragConstraints={constraintsRef}
        />
      </motion.div>
      
    </>
  );
};

export default Hero;
