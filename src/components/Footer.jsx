import React, { useEffect, useState } from "react";

function Footer() {
  const [time, setTime] = useState("");

  function getTime() {
    const currTime = new Date();
    let hours = currTime.getHours();
    let minutes = currTime.getMinutes().toString().padStart(2, "0");
    let amPm = hours <= 12 ? "AM" : "PM";

    hours = hours % 12;
    setTime(`${hours}:${minutes} ${amPm}`);
  }

  useEffect(() => {
    getTime(); // Initial call

    const intervalId = setInterval(() => {
      getTime();
    }, 30000); // Update every 30sec

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="font-medium sm:text flex flex-col-reverse lg:flex-row justify-between mt-10 px-4 uppercase">
      <div className="flex lg:gap-12 items-center justify-between">
        <p>Subham Pal © 2025</p>
        <p>{time} IST</p>
      </div>
      <p className="lg:hidden my-4 h-[3px] bg-[#b0b2c3]"></p>
      <div className="flex lg:gap-12 items-center justify-between">
        <a
          href="https://github.com/subhampal077"
          target="_blank"
          className="hover:text-[#00ffff]"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/subhampal077/"
          target="_blank"
          className="hover:text-[#00ffff]"
        >
          Linkedin
        </a>
        <a
          href="https://x.com/subhampal077"
          target="_blank"
          className="hover:text-[#00ffff]"
        >
          X/Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
