import React, { useContext, useEffect, useState } from "react";
import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import HamburgerIcon from "../assets/icons/hamburger.svg?react";
import CloseIcon from "../assets/icons/close.svg?react";
import Scrollspy from "react-scrollspy";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [darkMode, setdarkMode] = useContext(ThemeContext);

  function toggleDarkMode() {
    setdarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  }

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the clicked element is NOT inside the menu
      if (!event.target.closest(".menu-container")) {
        setToggleMenu(false);
      }
    }

    if (toggleMenu) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleMenu]);

  return (
    <div className="fixed top-0 z-10 font-medium shadow-md w-full backdrop-blur-[20px]">
      <div className="w-full flex items-center justify-between px-4 py-3 max-w-[1400px] mx-auto text-[#b0b2c3]">
        <a href="#" className="text-3xl font-bold">
          Sub<span className="text-[#00ffff]">ham</span>
        </a>

        <div className="flex items-center gap-7 md:gap-9">
          <Scrollspy
            items={["home", "about", "work", "skills", "contact"]}
            currentClassName="active-nav"
            offset={-61}
            className={`menu-container ${
              toggleMenu ? "right-14" : ""
            } absolute w-40 p-5 md:p-0 md:w-auto ${
              darkMode ? "bg-[#0b111b]" : "bg-[#FFFFFF]"
            } rounded-md md:bg-transparent top-2 -right-52 md:static flex flex-col md:flex-row md:items-center gap-3 md:gap-9 transition-[right] duration-200 ease-in-out`}
          >
            <li>
              <a href="#home" className="hover:text-[#00ffff]">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#00ffff]">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-[#00ffff]">
                WORK
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-[#00ffff]">
                SKILLS
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#00ffff]">
                CONTACT
              </a>
            </li>

            <CloseIcon
              onClick={(e) => {
                setToggleMenu(false);
                e.stopPropagation();
              }}
              className="absolute top-3 right-3.5 w-5 h-5 md:hidden cursor-pointer hover:text-[#00ffff]"
            />
          </Scrollspy>

          <div className="flex items-center gap-7 md:gap-9">
            <HamburgerIcon
              onClick={(e) => {
                setToggleMenu(true);
                e.stopPropagation();
              }}
              className={`${
                toggleMenu ? "hidden" : ""
              } cursor-pointer md:hidden hover:text-[#00ffff]`}
            />

            {darkMode ? (
              <SunIcon
                className="cursor-pointer hover:text-[#00ffff] w-6"
                onClick={toggleDarkMode}
              />
            ) : (
              <MoonIcon
                className="cursor-pointer hover:text-[#00ffff] w-6"
                onClick={toggleDarkMode}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
