import { FaLinkedin } from "react-icons/fa";
import { FaAnglesDown, FaGithub } from "react-icons/fa6";
import AboutCard from "./aboutCard";

const AboutContent = () => {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <div className="col-span-1 text-3xl font-bold md:col-span-4 mx-auto">
        <figure className="w-64 flex flex-col md:flex-col-reverse">
          <img
            className=" mask mask-squircle"
            src="/images/pp.png"
            alt="photo of felipe"
          />
          <figcaption className="flex items-center justify-center gap-5">
            <a href="https://www.linkedin.com/in/ivan-felipe-escobar/">
              <FaLinkedin size={"2rem"} className="hover:skew-y-12" />
            </a>
            <a
              href="https://github.com/IvanFelipeEscobar"
              className="hover:skew-y-12"
            >
              <FaGithub size={"2rem"} />
            </a>
          </figcaption>
          <a
            href="#projects"
            className="btn btn-sm mt-2 mx-5 mb-3 btn-primary bg-opacity-50"
          >
            <FaAnglesDown />
            Look at my work
          </a>
        </figure>
      </div>

      <div className="col-span-1 md:col-span-8">
        <AboutCard />
      </div>
    </div>
  );
};

export default AboutContent;
