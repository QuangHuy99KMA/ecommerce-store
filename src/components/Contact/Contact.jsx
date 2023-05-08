import React from "react";

Contact.propTypes = {};

function Contact(props) {
  return (
    <section className="my-10">
      <div className="text-center">
        <h3 className="text-4xl font-bold py-1 pb-6">Contact with me</h3>
        <form
          action="https://formspree.io/f/xoqznaak"
          method="POST"
          className="contact-input"
        >
          <div>
            <div className="my-5">
              <input
                type="text"
                name="username"
                placeholder="Tên của bạn"
                autoComplete="off"
                className="input input-bordered p-3 rounded-lg w-full max-w-xs shadow-sm bg-gray-50 border border-gray-600"
                required
              />
            </div>
            <div className="my-5">
              <input
                type="email"
                name="email"
                placeholder="Email của bạn"
                autoComplete="off"
                className="input input-bordered p-3 rounded-lg w-full max-w-xs shadow-sm bg-gray-50 border border-gray-600"
                required
              />
            </div>
          </div>

          <div className="my-5">
            <textarea
              name="message"
              cols="20"
              rows={6}
              placeholder="Lời nhắn của bạn"
              className="input input-bordered p-3 rounded-lg w-full max-w-xs shadow-sm bg-gray-50 border border-gray-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white font-bold text-lg	 bg-gradient-to-b from-gray-700 via-gray-900 to-black hover:from-gray-700 hover:to-yellow-700 px-4 py-2 rounded-md"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
