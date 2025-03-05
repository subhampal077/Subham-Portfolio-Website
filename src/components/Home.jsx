import React, { useContext } from "react";
import LinkedinIcon from "../assets/icons/linkedin.svg?react";
import TwitterIcon from "../assets/icons/twitter-x.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";
import EmailIcon from "../assets/icons/email.svg?react";
import WhatsappIcon from "../assets/icons/whatsapp.svg?react";
import DownArrow from "../assets/icons/down-arrow.svg?react";
import TypingEffect from "./TypingEffect";
import { ThemeContext } from "../contexts/ThemeContext";

function Home() {
  const [darkMode] = useContext(ThemeContext);

  return (
    <div
      id="home"
      className={`h-screen px-4 flex flex-col justify-center relative pointer-events-none sm:text-white ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="flex items-center justify-between gap-5 pl-3 md:pl-16 lg:pl-24 font-bold">
        <div className="max-w-[1350px] mx-auto w-full">
          <p className="text-2xl sm:text-3xl">Hey there, It's</p>
          <h1 className="text-5xl sm:text-6xl sm:pl-10 font-extrabold my-4">
            Subham Pal
          </h1>

          <TypingEffect />

          <button className="button mt-8 sm:ml-32">
            <a
              href="https://drive.google.com/file/d/1suqTjZX8A1tJqeYZ7zYPtgJG_j2cr3Nb/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </button>
        </div>

        <div>
          <ul className="flex flex-col gap-4 sm:gap-5 items-end justify-center text-[#b0b2c3]">
            <li>
              <a href="https://github.com/subhampal077" target="_blank">
                <GithubIcon className="w-6 sm:w-7 hover:text-white pointer-events-auto" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/subhampal077/"
                target="_blank"
              >
                <LinkedinIcon className="w-6 sm:w-7 hover:text-white pointer-events-auto" />
              </a>
            </li>
            <li>
              <a href="http://bit.ly/4i45e9U" target="_blank">
                <WhatsappIcon className="w-6 sm:w-7 hover:text-white pointer-events-auto" />
              </a>
            </li>
            <li>
              <a
                href="mailto:subhampal077@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Subham,%20I%20found%20you%20on%20your%20portfolio!"
                target="_blank"
              >
                <EmailIcon className="w-6 sm:w-7 hover:text-white pointer-events-auto" />
              </a>
            </li>
            <li>
              <a href="https://x.com/subhampal077" target="_blank">
                <TwitterIcon className="w-6 sm:w-7 hover:text-white pointer-events-auto" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
        <a href="#about">
          <button className="button">Explore</button>
        </a>
        <DownArrow className="animate-bounce text-[#b0b2c3]" />
      </div>
    </div>
  );
}

export default Home;
