import React, { useEffect } from "react";
import { NavLinks } from "../utils/Links";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useMyContext } from "../context/ToggleContext";
import Icon from "./Icon";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useMyContext();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsSidebarOpen]);

  if (!isSidebarOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 bg-slate-50 dark:bg-slate-800 md:hidden w-full sm:w-[50%] h-full z-50">
      <div className="relative w-full h-full p-4">
        <IoClose
          className="absolute top-4 right-4 h-6 w-6 cursor-pointer dark:text-white"
          onClick={() => setIsSidebarOpen(false)}
        />
        <div className="flex items-center justify-center mt-5">
          <Icon />
        </div>
        <ul className="flex flex-col items-center gap-y-4 mt-10 text-sm font-semibold dark:text-[#fff]">
          {NavLinks.map((navLink) => (
            <li key={navLink.id}>
              <Link to={navLink.path} onClick={() => setIsSidebarOpen(false)}>
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
