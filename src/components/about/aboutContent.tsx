import { FaLinkedin } from "react-icons/fa";
import { FaAnglesDown, FaGithub } from "react-icons/fa6";
import AboutCard from "./aboutCard";

const AboutContent = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 justify-center items-center mt-10 mx-2 lg:mx-0 pb-6">
      <figure className="w-64 flex flex-col">
         
        <img
          className=" mask mask-squircle"
          src="/images/pp.png"
          alt="photo of felipe"
        />
        <figcaption className="flex items-center justify-center gap-5">
          <a href="https://www.linkedin.com/in/ivan-felipe-escobar/">
            <FaLinkedin size={"2rem"} />
          </a>
          <a href="https://github.com/IvanFelipeEscobar">
            <FaGithub size={"2rem"} />
          </a>
          
        </figcaption>
        <a href="#projects" className="btn btn-sm mt-2 mx-5 mb-3 btn-secondary">
            <FaAnglesDown />
            Look at my work
        </a>
      </figure>

      <AboutCard />
    </div>
  );
};

export default AboutContent;
