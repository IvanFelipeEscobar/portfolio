import { motion } from "framer-motion";
const Logo = () => {
  return (
    <a href="#" className="btn btn-ghost font-mono tracking-tighter">
      <motion.div
        className="avatar"
        animate={{
          scale: [1, 2, 2, 1],
          rotate: [0, 230, 360, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 7
        }}
      >
        <div className="w-5 mask mask-hexagon">
          <img src="/images/pp.png" alt="profile pic" />
        </div>
      </motion.div>
      Ivan Felipe Escobar
    </a>
  );
};

export default Logo;
