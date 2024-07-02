import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-neutral p-2 text-base-200 flex flex-col justify-center items-center ">
      <div className="text-center">Ivan Felipe Escobar, with &hearts; 2024</div>
      <div>
        <a
          href="/resume.pdf"
          rel="noreferrer"
          target="_blank"
          className="btn btn-success btn-wide mt-1"
        >
          Resume
        </a>
      </div>
      <nav>
        <ul className="flex gap-1">
          <li>
            <a href="#about" className="btn btn-ghost btn-sm">
              About me
            </a>
          </li>
          <li>
            <a href="#projects" className="btn btn-ghost btn-sm">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="btn btn-ghost btn-sm">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center gap-3">
        <a
          href="https://github.com/IvanFelipeEscobar"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub size={32} color={"white"} className="hover:skew-y-12" />
        </a>
        <a
          href="https://www.linkedin.com/in/ivan-felipe-escobar/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin size={32} color={"white"} className="hover:skew-y-12" />
        </a>
        <a
          href="https://stackoverflow.com/users/20161905/ivan-escobar"
          rel="noreferrer"
          target="_blank"
        >
          <FaStackOverflow
            size={32}
            color={"white"}
            className="hover:skew-y-12"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
