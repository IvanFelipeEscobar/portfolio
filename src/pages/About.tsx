import TypingAnimation from "../components/TypingAnimation";

const About = () => {
  return (
    <div className="text-stone-600 m-4 rounded-sm md:p-3 bg-blue-300 overflow-auto max-w-lg">
      <div className="h-32 font-strike text-2xl">
        <TypingAnimation />
      </div>
      <div className="text-roboto">
        I am a seasoned mechanic with 15 years of hands-on experience,
        transitioning into the dynamic field of web development through a Flex
        Full Stack Web Development Bootcamp at the Georgia Institute of
        Technology. Specializing in the MERN stack (MongoDB, Express, React, and
        Node.js), I bring a robust skill set that includes HTML, CSS,
        JavaScript, Bootstrap, jQuery, and server-side rendering with
        Handlebars.js. Proficient in both SQL and NoSQL databases, I excel in
        crafting RESTful APIs, leveraging tools like Postman, and developing
        high-performance applications with React. Having explored TypeScript for
        enhanced code maintainability, I am committed to continuous learning and
        staying at the forefront of technological advancements. My unique blend
        of mechanical and software knowledge equips me with a problem-solving
        mindset, enabling me to approach challenges with creativity and
        innovation. I am eager to take on new challenges, contribute my skills
        to innovative projects, and continue evolving as a software developer.
      </div>
    </div>
  );
};

export default About;
