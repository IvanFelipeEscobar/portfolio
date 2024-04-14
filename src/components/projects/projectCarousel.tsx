import ProjectCard from "./projectCard";

const projects = [
  {
    src: `/images/maxi-screenshot.png`, //img path
    title: `Maximotor`, //project title
    description: `Mern full stack application meant to act as public facing site of auto repair shop, featuring user authentication. Written in typescript, styled with Chakra UI`,
    link: `https://maximotor.vercel.app/`, //deployed app link
    github: `https://github.com/IvanFelipeEscobar/maximotor`,
    badge: ["MongoDb", "Express", "React", "Node", "TypeScript", "ChakraUI"],
  },
  {
    src: "/images/gemspark.png",
    title: "Gem Spark Usa",
    description: "Ecommerce site, built with next. still under construction",
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
  // {
  //   src: `/images/tomatoduck.png`,
  //   title: `Tomato Duck`,
  //   description: `React application featuring 3 timer intervals, and a section allowing the user to set tasks (based on pomodoro focus technique). Application features user authentication via json webtokens, a "duck" chat bot configured with open ai to help answer questions`,
  //   link: `https://tomatoduck.herokuapp.com/`,
  //   github: `https://github.com/indwomt/tomatoduck`,
  //   badge: ["MongoDb", "Express", "React", "Node", "Bootstrap", "openAI"],
  // },
  {
    src: `/images/day-in-the-life.png`, //img path
    title: `Day in the Life`, //project title
    description: `Blog style application featuring server-side rendering with handlebars.js. User authentication is achieved using express session middleware and cookies. User data along with journal entries are stored in a MySql database using sequelize.`,
    link: `https://day-in-the-life.herokuapp.com/`, //deployed app link
    github: `https://github.com/IvanFelipeEscobar/Day-in-the-Life`,
    badge: ["MySQL", "Handlebars.JS", "Bootstrap", "Express"],
  },
  {
    src: `/images/meme-lib.png`, //img path
    title: `Meme-Lib`, //project title
    description: `Static web site allows user to fetch a desired number of memes from either the reddit API or the igmFlip APi. The user can also save selected Meme's in a library which is persisted through local storage`,
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

  {
    src: `/images/password.png`, //img path
    title: `Password-Generator`, //project title
    description: `Using javascript pop-up boxes, this applicationg gathers user password preferences and generates a random password based on selections`,
    link: `https://ivanfelipeescobar.github.io/Password-Generator/`, //deployed app link
    github: `https://github.com/IvanFelipeEscobar/Password-Generator`,
    badge: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectCarousel = () => {
  return (<>
    <div className="carousel w-full">
      {projects.map((p) => (
          <div id={p.title} className="carousel-item  w-full">
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
{projects.map((p, i) => ( //using second argument in map function to map carousel links
  <div className="tooltip" data-tip={p.title}>
    <a href={`#${p.title}`} className="btn btn-primary btn-xs">{i+1}</a>
  </div>
))}
    </div></>
  );
};

export default ProjectCarousel;
