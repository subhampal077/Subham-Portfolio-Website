import React, { useContext, useState } from "react";
import profileImage from "../assets/images/profileImage.png";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import { ThemeContext } from "../contexts/ThemeContext";

function About() {
  const [showAboutme, setShowAboutme] = useState(true);

  const [darkMode] = useContext(ThemeContext);

  return (
    <div
      className={`${
        darkMode ? "bg-[#1C1F26] text-white" : "bg-[#FAFAFA] text-black"
      }`}
    >
      <div
        id="about"
        className="px-4 py-20 text-center max-w-[1350px] w-full mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          All <span className="text-[#00ffff]">About</span> Me And My{" "}
          <span className="text-[#00ffff]">Experience</span>
        </h2>

        <div className="flex justify-center gap-5 my-10">
          <button
            className={`text-[#00ffff] bg-transparent px-4 py-2 border-2 border-[#00ffff] rounded-md font-semibold cursor-pointer hover:text-white hover:bg-gradient-to-l from-[#00ffffe2] to-[#1f2667e6] transition duration-200 ${
              showAboutme
                ? "text-white bg-gradient-to-l from-[#00ffffe2] to-[#1f2667e6]"
                : ""
            }`}
            onClick={() => {
              setShowAboutme(true);
            }}
          >
            About Me
          </button>
          <button
            className={`text-[#00ffff] bg-transparent px-4 py-2 border-2 border-[#00ffff] rounded-md font-semibold cursor-pointer hover:text-white hover:bg-gradient-to-l from-[#00ffffe2] to-[#1f2667e6] transition duration-200 ${
              !showAboutme
                ? "text-white bg-gradient-to-l from-[#00ffffe2] to-[#1f2667e6]"
                : ""
            }`}
            onClick={() => {
              setShowAboutme(false);
            }}
          >
            Experience
          </button>
        </div>

        <div className="px-5 w-full flex flex-col md:flex-row justify-center gap-10 md:gap-20 py-8">
          <div className="flex-2/5 flex md:justify-end items-center justify-center">
            <img
              src={profileImage}
              alt="profile_image"
              className="w-full max-w-64 md:h-64 rounded-full object-cover"
            />
          </div>
          <div className="flex-3/5 text-start">
            {showAboutme ? <AboutMe /> : <Experience />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
