import { BiMessageSquareDetail } from "react-icons/bi";
const ContactForm = () => {
  return (
    <>
      <button
        className="w-full btn btn-primary text-accent text-xl md:w-fit"
        onClick={() => {
          const modal = document.getElementById(
            "contact-form"
          )! as HTMLDialogElement;
          return modal.showModal();
        }}
      >
        Drop Me a Line<BiMessageSquareDetail />
      </button>
      <dialog id="contact-form" className="modal modal-bottom md:modal-middle">
        <div className="modal-box bg-primary ">
          <p className="py-4 text-base-200">
            Press ESC key or click outside to close
          </p>
          <hr />
          <div className="p-4 text-base-200 rounded-md shadow-md">
            <h2 className="text-2xl font-bold">Let's connect</h2>
            <p className="mb-6 text-balance font-thin">
              Are you impressed? Ready to hire me? Just want to talk? Please
              don't hesitate to reach out to me! operators are standing by.
              (actually, it's just me so be patient)
            </p>
            <form
              action="https://formsubmit.co/a9093e4038d5fa31d57f271fe4852939"
              method="POST"
              className="w-2/3 md:w-full flex flex-col justify-center mx-auto"
            >
              <label className="text-primary font-medium input input-bordered flex items-center mb-2">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="grow ml-2"
                  required
                />
              </label>

              <label className="text-primary font-medium input input-bordered flex items-center mb-2">
                Email:
                <input
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
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ContactForm;
