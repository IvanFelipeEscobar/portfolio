import { motion } from "framer-motion";
const Logo = () => {
  return (
    <a href="#" className="btn btn-ghost btn-sm font-mono tracking-tighter">
      <motion.div className="avatar" whileHover={{ scale: 1.5, rotate: 360}}>
        <div className="w-8 mask mask-hexagon">
          <img src="/images/pp.png" alt="profile pic" />
        </div>
      </motion.div>
      <h1 className="-m-2">Ivan Felipe Escobar</h1>
    </a>
  );
};

export default Logo;
