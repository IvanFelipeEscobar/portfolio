import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({
  imageSrc,
  title,
  description,
  link,
  github,
  badge,
}: {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  github: string;
  badge: string[];
}) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className="h-96 w-full hover:opacity-35 mt-24 sm:mt-12 lg:rounded-3xl"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
          }}
        >
        </div>
      </a>
      <div className="flex absolute top-0 left-3 z-10">
        <h2 className="font-bold uppercase text-xl">{title}</h2>
          <a href={github} target="_blank" rel="noopener noreferrer">
        <div className="tooltip tooltip-bottom" data-tip="Visit Repository">
            <FaGithub size={30} className="ml-5 hover:skew-x-12" />
        </div>
          </a>
      </div>
      <p className="italic my-2 px-2">-{description}</p>

      <div className="flex flex-wrap absolute top-8">
        {badge.map((x, i) => (
          <div className="badge m-0.5" key={i}>
            {x}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
