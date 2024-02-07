import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="m-3 p-3 bg-black text-white">
      <form action="https://formsubmit.co/ivnescbr1989@gmail.com" method="POST">
        <div className="mb-4">
          <label htmlFor="name" className="block">
            What is your name?
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="name"
            className="form-input"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">
            What is your E-mail?
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e-mail@domain.com"
            className="form-input"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block">
            What is your professional title?
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="stuntman..."
            className="form-input"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block">
            Do you have any questions, comments, and/or concerns?
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="form-textarea"
          ></textarea>
        </div>
        <button type="submit" className="mt-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
