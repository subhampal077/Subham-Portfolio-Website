import React, { useContext } from "react";
import { allProjects } from "../utils/allProjects";

import ProjectCard from "./ProjectCard";
import { ThemeContext } from "../contexts/ThemeContext";

function Work() {
  const [darkTheme] = useContext(ThemeContext);

  return (
    <div
      className={`${
        darkTheme ? "bg-[#13141A] text-white" : "bg-[#edf2f8] text-black"
      }`}
    >
      <div
        id="work"
        className="px-4 py-20 text-center max-w-[1350px] w-full mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16">
          My Creative <span className="text-[#00ffff]">Portfolio</span> Section
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 font-space-grotesk font-medium px-4">
          {allProjects?.length > 0 &&
            allProjects.map((project) => {
              return <ProjectCard project={project} key={project.id} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Work;
