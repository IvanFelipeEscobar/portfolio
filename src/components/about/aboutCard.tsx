import AboutModal from "./aboutModal";

const AboutCard = () => {
  return (
    <>
      <h3 className="mb-4 font-bold text-xl md:text-2xl">
        From Mechanic to Modern Web Developer
      </h3>
      <p className="mb-8 md:text-2xl">
        I bring a unique perspective to software development, having
        transitioned from a fulfilling 15-year career in automotive repair,
        modifications and maint. My passion for problem-solving and building led
        me to the world of web development, where I honed my skills through a
        rigorous Flex Full Stack Web Development Bootcamp at the Georgia
        Institute of Technology.
      </p>
      <AboutModal/>
    </>
  );
};

export default AboutCard;
