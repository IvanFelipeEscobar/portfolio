import ProjectCard from "./projectCard";

const projects = [
  {
    src: `/images/maxi-screenshot.png`, //img path
    title: `Maximotor - Auto Repair Shop Site`, //project title
    description: 'Maximotor is a MERN full-stack application designed as the public-facing site for an auto repair shop. It incorporates user authentication and is written in TypeScript, with styling provided by Chakra UI.',
    link: `https://maximotor.vercel.app/`, //deployed app link
    github: `https://github.com/IvanFelipeEscobar/maximotor`,
    badge: ["MongoDb", "Express", "React", "Node", "TypeScript", "ChakraUI"],
  },
  {
    src: `/images/tomatoduck.png`,
    title: `Tomato Duck v2 - Pomodoro Timer with Chatbot`,
    description:
      "Tomato Duck v2 is a Pomodoro timer application featuring a duck chatbot. It utilizes TypeScript, Tailwind CSS, and Zustand for state management. Security features include JWT integration and email verification via Nodemailer. The chatbot adds a unique interactive element, enhancing user productivity and engagement.",
   link: `https://tomato-duck-v2.vercel.app/`,
    github: `https://github.com/IvanFelipeEscobar/portfolio`,
    badge: [
      "MongoDb",
      "Express",
      "React",
      "Node",
      "TailwindCSS",
      "openAI",
      "TypeScript",
      "Zustand",
      "NodeMailer",
    ],
  },
  {
    src: "/images/gemspark.png",
    title: "Gem Spark Usa - Ecommerce Platform",
    description: "Gem Spark USA is an ongoing ecommerce site built with Next.js. It is currently under construction.",
   link: `https://gemspark-usa.vercel.app/`,
    github: `https://github.com/IvanFelipeEscobar/gem-spark`,
    badge: [
      "TypeScript",
      "Next.JS",
      "tailwind css",
      "DaisyUI",
      "Zustand",
      "... under construction",
    ],
  },
  {
    src: `/images/day-in-the-life.png`, //img path
    title: `Day in the Life - Blog`,
    description: `Day in the Life is a blog-style application featuring server-side rendering with Handlebars.js. User authentication is achieved using Express session middleware and cookies. User data, along with journal entries, are stored in a MySQL database using Sequelize.`,
    link: `https://day-in-the-life.herokuapp.com/`, //deployed app link
    github: `https://github.com/IvanFelipeEscobar/Day-in-the-Life`,
    badge: ["MySQL", "Handlebars.JS", "Bootstrap", "Express"],
  },
  {
    src: `/images/meme-lib.png`, //img path
    title: `Meme-Lib`, //project title
    description: `Meme-Lib is a static website allowing users to fetch a desired number of memes from either the Reddit API or the imgFlip API. Users can also save selected memes in a library, persisted through local storage.`,
    link: `https://ivanfelipeescobar.github.io/MemeLib/`, //deployed app link
    github: `https://github.com/IvanFelipeEscobar/MemeLib`,
    badge: ["reddit API", "Foundation Framework", "HTML", "JavaScript"],
  },
  {
    src: `/images/weather-dash.png`, //img path
    title: `Weather Dashboard`, //project title
    description: `Simple weather application styled using bootstrap. Weather information acquired via the open weather API`,
    link: `https://ivanfelipeescobar.github.io/Weather-Dashboard/`, //deployed app link
    github: `https://github.com/IvanFelipeEscobar/Weather-Dashboard`,
    badge: ["Open Weather API", "Bootstrap", "HTML"],
  },
  {
    src: `/images/code-quizSS.png`, //img path
    title: `Code Quiz`, //project title
    description: `Simple static site is an example of basic DOM manipulation using javascript`,
    link: `https://ivanfelipeescobar.github.io/Code-Quiz/`, //deployed app link
    github: `https://github.com/IvanFelipeEscobar/Code-Quiz`,
    badge: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectCarousel = () => {
  return (
    <>
      <div className="carousel w-full">
        {projects.map((p) => (
          <div id={p.title} key={p.title} className="carousel-item  w-full">
            <ProjectCard
              key={p.title}
              imageSrc={p.src}
              title={p.title}
              description={p.description}
              link={p.link}
              github={p.github}
              badge={p.badge}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {projects.map(
          (
            p,
            i //using second argument in map function to map carousel links
          ) => (
            <div key={p.title}>
              <div className="tooltip" data-tip={p.title}>
                <a href={`#${p.title}`} className="btn btn-success btn-xs">
                  {i + 1}
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ProjectCarousel;
