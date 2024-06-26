import { FaReadme } from "react-icons/fa6";

const AboutModal = () => {
  return (
    <>
      <button
        className="w-full btn btn-neutral text-xl md:w-fit mb-12"
        onClick={() => {
          const modal = document.getElementById(
            "about-modal"
          )! as HTMLDialogElement;
          return modal.showModal();
        }}
      >
       <FaReadme /> Continue reading
      </button>
      <dialog id="about-modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-success">
        <p className="py-4">Press ESC key or click outside to close</p>
<hr />
          <h3 className="font-bold text-2xl  text-balance mt-5">
            From Mechanic to Modern Web Developer
          </h3>
          <br />
          <p>
            I bring a unique perspective to software development, having
            transitioned from a fulfilling 15-year career in automotive repair,
            modifications and maint. My passion for problem-solving and building
            led me to the world of web development, where I honed my skills
            through a rigorous Flex Full Stack Web Development Bootcamp at the
            Georgia Institute of Technology.
          </p>
          <div className="divider"></div>
          <h3 className="font-bold text-2xl mt-5">
            Full-Stack Expertise with a Focus on User Experience
          </h3>
          <br />
          <p>
            I'm a proficient full-stack developer with a strong foundation in
            the MERN stack (MongoDB, Express, React, Node.js). Building
            user-friendly interfaces is a priority for me, and I leverage my
            mastery of CSS frameworks like Bootstrap, Tailwind CSS, Material UI,
            and Chakra UI to achieve this.
          </p>
          <div className="divider"></div>
          <h3 className="font-bold text-2xl mt-5">
            Modern Web Development Tools and Technologies
          </h3>
          <br />
          <p>
            I'm well-versed in HTML, JavaScript, and TypeScript, and I'm
            comfortable working with React and modern frameworks like Next.js to
            build dynamic and performant web applications. Node.js serves as my
            preferred runtime environment, and I utilize Docker for efficient
            development and deployment workflows.
          </p>
          <div className="divider"></div>

          <h3 className="font-bold text-2xl mt-5">
            Continuous Learning and Deployment Experience
          </h3>
          <br />
          <p>
            My commitment to learning extends beyond core languages and
            frameworks. I possess a basic understanding of deploying
            applications on AWS EC2 and am comfortable using bash commands and
            scripting for automation. Furthermore, I'm proficient in Git for
            version control and collaboration.
          </p>
          <div className="divider"></div>

          <h3 className="font-bold text-2xl mt-5">
            Deployment Flexibility and Database Management
          </h3>
          <br />
          <p>
            I have hands-on experience deploying applications on various
            platforms like Heroku, Vercel, and Render. When it comes to data
            storage, I'm comfortable working with both NoSQL (MongoDB) and SQL
            databases (MySQL, PostgreSQL) to provide flexible solutions. Looking
            Forward to New Challenges This unique blend of mechanical and
            software development knowledge allows me to approach problems from a
            different angle. I'm eager to take on new challenges, collaborate
            with talented teams, and continuously grow as a developer.
          </p>

          <hr />
          <p className="py-4 mt-5" >Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default AboutModal;
