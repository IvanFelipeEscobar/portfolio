import AboutContent from "./aboutContent";

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
      <button
        className="w-full btn btn-accent text-xl md:w-fit"
        onClick={() => {
          const modal = document.getElementById("about-modal")! as HTMLDialogElement
          modal.showModal()}}
      >
        ...continue reading
      </button>
      <dialog id="about-modal" className="modal">
        <div className="modal-box bg-success">
          <AboutContent/>
          <hr/>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default AboutCard;
