import { useRef } from "react";
import { motion } from "framer-motion";

const TechBanner = () => {
  const constraintsRef = useRef(null);

  return (
    <>
      <motion.div
      layout
        ref={constraintsRef}
        className="h-16  flex flex-wrap flex-col justify-center items-center overflow-x-auto -mx-12 sm:-mx-16 gap-1 my-4"
      >
        <motion.img
        layout
        src="/images/css.png"
          className="h-12 w-12 rounded-md"
         animate={{
            x: [0, -100, 0, 100, 0]
         }}
         transition={{
            duration:7,
            repeat: Infinity,

         }}
        />
          <motion.img
          layout
        src="/images/html.png"
          className="h-12 w-12 rounded-md"
         animate={{
            x: [0, -100, 0, 100, 0]


         }}
         transition={{
            duration:7,
            repeat: Infinity,

         }}
        />
          <motion.img
          layout
        src="/images/js.png"
          className="h-12 w-12 rounded-md"
         animate={{
            x: [0, -100, 0, 100, 0]


         }}
         transition={{
            duration:7,
            repeat: Infinity,

         }}
        />
        <motion.img
          layout
        src="/images/ts.png"
          className="h-12 w-12 rounded-md"
         animate={{
            x: [0, -100, 0, 100, 0]


         }}
         transition={{
            duration:7,
            repeat: Infinity,

         }}
        />
        <motion.img
          layout
          src="/images/node-js-icon-8.jpg"

          className="h-12 w-12 rounded-md"
         animate={{
            x: [0, -100, 0, 100, 0]


         }}
         transition={{
            duration:7,
            repeat: Infinity,

         }}
        />
        <motion.img
          layout
        src="/images/react.png"
          className="h-12 w-12 rounded-md"
         animate={{
            x: [0, -100, 0, 100, 0]


         }}
         transition={{
            duration:7,
            repeat: Infinity,

         }}
        />
        <motion.img
          layout
        src="/images/nextjs-icon.png"
          className="h-12 w-12 rounded-md"
         animate={{
            x: [0, -100, 0, 100, 0]


         }}
         transition={{
            duration:7,
            repeat: Infinity,

         }}
        />
         <motion.img
          layout
        src="/images/mongo.png"
          className="h-12 w-12 rounded-md"
         animate={{
            x: [0, -100, 0, 100, 0]


         }}
         transition={{
            duration:7,
            repeat: Infinity,

         }}
        />
         <motion.img
          layout
        src="/images/mysql.png"
          className="h-12 w-12 rounded-md"
         animate={{
            x: [0, -100, 0, 100, 0]


         }}
         transition={{
            duration:7,
            repeat: Infinity,

         }}
        />
        <motion.img
          layout
        src="/images/bootstrap-5-logo-icon.png"
          className="h-12 w-12 rounded-md"
         animate={{
            x: [0, -100, 0, 100, 0]


         }}
         transition={{
            duration:7,
            repeat: Infinity,

         }}
        />
        <motion.img
          layout
        src="/images/tailwind-css-icon.png"
          className="h-12 w-12 rounded-md"
         animate={{
            x: [0, -100, 0, 100, 0]


         }}
         transition={{
            duration:7,
            repeat: Infinity,

         }}
        />
        
        <motion.img
          layout
        src="/images/framer.png"
          className="h-12 w-12 rounded-md"
         animate={{
            x: [0, -100, 0, 100, 0]


         }}
         transition={{
            duration:7,
            repeat: Infinity,

         }}
        />
        
        
      </motion.div>

    </>
  );
};

export default TechBanner;
