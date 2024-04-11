import { motion } from "framer-motion";
import TechBanner from "./techBanner";

const Hero = () => {
  return (
    <>
      <div className="hero h-96 px-4">
        <div className="hero-content flex flex-col justify-center items-center ">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5, }}
            animate={{ opacity: 1, scale: 1, x: [-500, 0] }}
            transition={{
              duration: 0.5,
              ease: [0,1,0.3,0],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="text-5xl font-bold mb-4 text-primary"
          >
            Building the Future, One Line at a Time
          </motion.h1>

          <p className="sm:text-xl text-secondary opacity-75">
            Full-Stack Developer | Transforming Ideas into Powerful
            Applications.
          </p>

          <div className="mt-8 ">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-warning btn-md rounded-2xl mr-3">
                Resume
              </button>
            </a>
            <a href="#projects">
              <button className="btn btn-success btn-md rounded-2xl">
                See my work
              </button>
            </a>
          </div>
        </div>
      </div>

      <TechBanner />
    </>
  );
};

export default Hero;
