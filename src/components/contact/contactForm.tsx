const ContactForm = () => {
  return (
    <div className="p-4 bg-primary text-base-200 rounded-md shadow-md w-screen">
      <h2 className="text-2xl font-bold">Let's connect</h2>
      <p className="mb-2 font-thin">
        Are you impressed? Ready to hire me? Just want to talk? Please don't
        hesitate to reach out to me! operators are standing by. (actually, it's
        just me so be patient)
      </p>
      <form action="https://formsubmit.co/ivnescbr1989@gmail.com" method="POST" className="w-2/3 flex flex-col justify-center mx-auto">
          <label className="text-primary font-medium input input-bordered flex items-center mb-2">
            Name:<input
            type="text"
            id="name"
            name="name"
            className="grow ml-2"
            required
          />
          </label>
       
          <label className="text-primary font-medium input input-bordered flex items-center mb-2">
            Email:<input
            type="email"
            id="email"
            name="email"
            className="grow ml-2"
            required
          />
          </label>
        <div className="mb-2">
          <label htmlFor="message" className="font-medium text-lg ">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="mt-1 p-2 text-primary border rounded-md w-full"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-accent w-48 m-auto">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
