import { GiHamburgerMenu } from "react-icons/gi";
const Menu = () => {
  return (
    <nav>
      <ul className="hidden sm:flex sm:gap-1">
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
        <li>
          <a
            href="https://docs.google.com/document/d/17Aw-E1eh9iOF9uW4VQX1DSyYzwHuMcKe/edit?usp=sharing&ouid=106679092608625552104&rtpof=true&sd=true"
            rel="noreferrer"
            target="_blank"
            className="btn btn-primary btn-sm mr-2"
          >
            Resume
          </a>
        </li>
      </ul>
      <div className="sm:hidden dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-success btn-sm">
          <GiHamburgerMenu />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
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
         
          <li>
            <a
              href="https://docs.google.com/document/d/17Aw-E1eh9iOF9uW4VQX1DSyYzwHuMcKe/edit?usp=sharing&ouid=106679092608625552104&rtpof=true&sd=true"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary btn-sm mr-2"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
