// import ContactForm from "./contactForm"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ContactForm from "./contactForm";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa6";
const ContactCard = () => {
  const timeRef = useRef<number | null>(null);
  interface Img {
    url: string, id: number
  }
  const imgArray = [
    { url: "/images/html.png", id: 1 },
    { url: "/images/ts.png", id: 2 },
    { url: "/images/js.png", id: 3 },
    { url: "/images/css.png", id: 4 },
    { url: "/images/node-js-icon-8.jpg", id: 5 },
    { url: "/images/react.png", id: 6 },
    { url: "/images/mongo.png", id: 7 },
    { url: "/images/nextjs-icon.png", id: 8 },
    { url: "/images/mysql.png", id: 9 },
    { url: "/images/tailwind-css-icon.png", id: 10 },
    { url: "images/bootstrap-5-logo-icon.png", id: 11 },
    { url: "/images/framer.png", id: 12 },
  ];
  const shuffleArray = (array: Img[]) => {
    //Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  };

  const generateGrid = () =>
    shuffleArray(imgArray).map(
      (
        imgUrl, //generating an array of components that shffles order every time its called
      ) => (
        <motion.div
          key={imgUrl.id}
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="h-28 w-28"
          style={{
            backgroundImage: `url(${imgUrl.url})`,
            backgroundSize: "cover",
          }}
        ></motion.div>
      )
    );

  const [grid, setGrid] = useState(generateGrid());
  const shuffleTech = () => {
    setGrid(generateGrid());
    timeRef.current = setTimeout(shuffleTech, 3000);
  };

  useEffect(() => {
    shuffleTech();
    return () => clearTimeout(timeRef.current!);
  }, []);

  return (
    <div className="w-full px-8 py-12 flex flex-col md:flex-row-reverse md:justify-evenly gap-12 md:gap-0 items-center max-w-6xl mx-auto">
      <div className="hero md:min-h-full mx-12 md:mx-0 md:w-1/2">
        <div className="hero-content text-center">
          <div className="">
            <div className="flex justify-center gap-3 mb-2">
              <a
                href="https://github.com/IvanFelipeEscobar"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub
                  size={48}
                  color={"white"}
                  className="hover:skew-y-12"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ivan-felipe-escobar/"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedin
                  size={48}
                  color={"white"}
                  className="hover:skew-y-12"
                />
              </a>
              <a
                href="https://stackoverflow.com/users/20161905/ivan-escobar"
                rel="noreferrer"
                target="_blank"
              >
                <FaStackOverflow
                  size={48}
                  color={"white"}
                  className="hover:skew-y-12"
                />
              </a>
            </div>
            <h2 className="text-4xl font-bold text-base-100">
              Connect With Me
            </h2>
            <p className="py-4 text-secondary text-balance">
              Got questions? Want to discuss a project? Don't be shy, Drop me a
              line!
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-4 gap-2">{grid}</div>
    </div>
  );
};

export default ContactCard;
