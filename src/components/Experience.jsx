import React from "react";

function Experience() {
  return (
    <div className="font-space-grotesk">
      <p className="text-end text-xl text-[#00ffff] font-bold mb-1">
        Frontend Dev at Cognizant{" "}
      </p>

      <div className="lg:flex md:flex-row-reverse items-center justify-between mb-1">
        <p className="text-lg font-bold text-end mb-1">
          Feb 2022 - Present
        </p>

        <p className="text-lg font-bold">Roles and responsibilites :</p>
      </div>
      <ul className="list-disc text-[17px] sm:text-lg">
        <li>
          Built responsive, pixel-perfect UIs by collaborating with designers
          and backend teams to ensure seamless user experiences. Developed
          reusable UI components to optimize development efficiency and maintain
          clean, scalable code.
        </li>

        <li className="mt-4">
          Integrated frontend with backend APIs using Axios and Fetch API,
          efficiently handling asynchronous operations and data fetching.
        </li>

        <li className="mt-4">
          Managed state effectively with React’s built-in hooks (useState,
          useEffect) and Redux for complex application flows.
        </li>

        <li className="mt-4">
          Enhanced application performance by implementing lazy loading, code
          splitting, and optimizing re-renders.
        </li>

        <li className="mt-4">
          Maintained clear documentation, ensuring easy collaboration and
          long-term code maintainability.
        </li>
      </ul>
    </div>
  );
}

export default Experience;
