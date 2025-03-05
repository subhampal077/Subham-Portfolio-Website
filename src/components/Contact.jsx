import React, { useContext } from "react";
import ContactImage from "../assets/images/contact-me.svg?react";
import { ThemeContext } from "../contexts/ThemeContext";
import Footer from "./Footer";

function Contact() {
  const [darkTheme] = useContext(ThemeContext);

  return (
    <div
      className={`${
        darkTheme ? "bg-[#13141A] text-white" : "bg-[#edf2f8] text-black"
      }`}
    >
      <div
        id="contact"
        className="px-4 pt-20 pb-5 max-w-[1350px] w-full mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">
          Take A <span className="text-[#00ffff]">Coffee</span> And{" "}
          <span className="text-[#00ffff]">Chat</span> With Me
        </h2>

        <div className="mt-14 flex flex-col lg:flex-row items-center justify-center gap-10">
          <ContactImage className="w-full max-w-xl h-auto" />

          <form
            className="flex flex-col max-w-lg w-full p-4 text-sm sm:text-base font-medium sm:font-normal"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input
              placeholder="Name"
              name="name"
              className={`mb-5 py-2 px-4 rounded-lg shadow-[0_0_8px_0_rgba(0,0,0,0.2)] outline-none ${
                darkTheme
                  ? "bg-[#1C1F26] placeholder-white"
                  : "bg-white placeholder-black"
              }`}
            />
            <input
              placeholder="Email"
              name="email"
              className={`mb-5 py-2 px-4 rounded-lg shadow-[0_0_8px_0_rgba(0,0,0,0.2)] outline-none ${
                darkTheme
                  ? "bg-[#1C1F26] placeholder-white"
                  : "bg-white placeholder-black"
              }`}
            />
            <input
              placeholder="Phone Number"
              type="number"
              name="phoneNo"
              className={`mb-5 py-2 px-4 rounded-lg shadow-[0_0_8px_0_rgba(0,0,0,0.2)] outline-none ${
                darkTheme
                  ? "bg-[#1C1F26] placeholder-white"
                  : "bg-white placeholder-black"
              }`}
            />
            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              className={`mb-5 py-2 px-4 rounded-lg shadow-[0_0_8px_0_rgba(0,0,0,0.2)] outline-none ${
                darkTheme
                  ? "bg-[#1C1F26] placeholder-white"
                  : "bg-white placeholder-black"
              }`}
            />
            <button
              type="submit"
              className="button text-base cursor-pointer !p-2 !rounded-lg text-white mt-3 !font-semibold !shadow-[0_0_8px_0_rgba(0,0,0,0.2)]"
            >
              Send Message
            </button>
          </form>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Contact;
