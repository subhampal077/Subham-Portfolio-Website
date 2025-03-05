import React, { useContext } from "react";
import EyeIcon from "../assets/icons/eye.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";
import { ThemeContext } from "../contexts/ThemeContext";

function ProjectCard({ project }) {
  const [darkTheme] = useContext(ThemeContext);

  return (
    <div className="overflow-hidden shadow-[0_0_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_16px_0_rgba(0,0,0,0.2)] rounded-xl">
      <div
        className={`text-start p-5 sm:p-4 flex flex-col h-full gap-3.5 hover:scale-[1.025] transition-all duration-200 ${
          darkTheme ? "bg-[#23252D]" : "bg-white"
        }`}
      >
        <a href={project.liveUrl} target="_blank">
          <img
            className="w-full rounded-lg"
            src={project.img}
            alt={project.name}
          />
        </a>

        <p className="text-xl font-bold text-center">{project.name}</p>

        <p className="text-sm">{project.desc}</p>

        <p className="text-sm">
          <span className="font-semibold text-[#00ffff]">Tech Stack: </span>
          {project.stack}
        </p>

        <div className="flex items-center justify-center gap-20 mt-auto">
          <a href={project.liveUrl} target="_blank">
            <div className="p-2 rounded-full hover:bg-[#00ffff] transition-all ease-in-out duration-300">
              <EyeIcon
                className="h-[30px] w-[30px]"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </a>
          <a href={project.github} target="_blank">
            <div className="p-2 rounded-full hover:bg-[#00ffff] transition-all ease-in-out duration-300">
              <GithubIcon
                className="h-[30px] w-[30px]"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
