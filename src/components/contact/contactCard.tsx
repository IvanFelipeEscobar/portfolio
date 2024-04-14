// import ContactForm from "./contactForm"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const ContactCard = () => {
  const timeRef = useRef<number|null>(null)
  const imgArray = [
    "/images/html.png",
    "/images/css.png",
    "/images/ts.png",
    "/images/js.png",
    "/images/node-js-icon-8.jpg",
    "/images/react.png",
    "/images/mongo.png",
    "/images/nextjs-icon.png",
    "/images/mysql.png",
    "/images/tailwind-css-icon.png",
    "images/bootstrap-5-logo-icon.png",
    "/images/framer.png",
  ];
  console.log(imgArray);
  const shuffleArray = (array: string[]) => {//Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  };

  const generateGrid = () =>
    shuffleArray(imgArray).map((imgUrl, i) => ( //generating an array of components that shffles order every time its called
      <motion.div
        key={i}
        layout
        transition={{ duration: 1.8, type: "spring" }}
        className="h-28 w-28"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
        }}
      ></motion.div>
    ));

    const [grid, setGrid] = useState(generateGrid());
   

    useEffect(()=> {
        shuffleTech();
        return ()=>clearTimeout(timeRef.current!)
    }, [])

    const shuffleTech = () => {
        setGrid(generateGrid())
        timeRef.current = setTimeout(shuffleTech, 3000)    
    }

  return (
    <div className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
    <div className="grid grid-cols-3 grid-rows-4 gap-2">
      {grid.map(x=>x)}
    </div>
      <div className="hero min-h-full mt-12">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold text-base-100">Connect With Me</h2>
            <p className="py-4 text-secondary">Got questions? Want to discuss a project? Don't be shy, Drop me a line!</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
