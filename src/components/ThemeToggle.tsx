import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {theme === "light" ? (
        <button
          onClick={toggleTheme}
          className="p-2  text-gray-800 grid items-center dark:text-gray-200 rounded"
        >
          <MdDarkMode  className="h-5 w-5"/>
        </button>
      ) : (
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-800 grid items-center dark:text-gray-200 rounded"
        >
          <MdLightMode className="w-5 h-5"/>
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
