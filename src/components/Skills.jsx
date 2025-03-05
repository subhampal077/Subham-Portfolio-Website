import React, { useContext } from "react";
import { allSkills } from "../utils/allSkills";
import { ThemeContext } from "../contexts/ThemeContext";

function Skills() {
  const [darkTheme] = useContext(ThemeContext);

  return (
    <div
      className={`${
        darkTheme ? "bg-[#1C1F26] text-white" : "bg-[#FAFAFA] text-black"
      }`}
    >
      <div
        id="skills"
        className="px-4 py-20 text-center max-w-[1350px] w-full mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16">
          My <span className="text-[#00ffff]">Technical</span> Skills
        </h2>

        <div className="flex flex-wrap gap-x-10 md:gap-x-16 gap-y-16 items-center justify-center p-5 max-w-[1130px] w-full mx-auto">
          {allSkills.map((item) => {
            return (
              <div
                key={item.id}
                className={`relative p-5 sm:p-6 rounded-2xl shadow-[0_0_8px_0_rgba(0,0,0,0.2)] cursor-pointer group ${
                  darkTheme ? "bg-[#0b111b]" : "bg-[#edf2f8]"
                }`}
              >
                {<item.img className="w-20 h-20" />}
                {/* hover me instruction */}
                {item.hover ? (
                  <span className="text-xs font-bold absolute bottom-1 left-1/2 -translate-x-1/2 text-[#00ffff]">
                    {item.hover}
                  </span>
                ) : (
                  ""
                )}

                {/* Tooltip */}
                <span
                  className="opacity-0 -top-1 absolute px-4 py-2 text-white text-sm font-semibold left-1/2 
              -translate-x-1/2 rounded-full   group-hover:opacity-100 group-hover:-top-14 pointer-events-none [transition:all_0.2s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)]"
                  style={{ backgroundColor: item.bgColor }}
                >
                  {item.name}

                  {/* Tooltip Arrow  */}
                  <span className="absolute w-3 h-3 bg-inherit left-1/2 -translate-x-1/2 rotate-45 bottom-[-5px]"></span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
