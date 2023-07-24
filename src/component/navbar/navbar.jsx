import React, { useEffect, useState } from "react";


const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      function applyDarkMode() {
        setIsDarkMode(
          localStorage.getItem("color-theme") === "dark" ||
            (!("color-theme" in localStorage) &&
              window.matchMedia("(prefers-color-scheme: dark)").matches)
        );
      }
  
      applyDarkMode();
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyDarkMode);
  
      return () => {
        window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", applyDarkMode);
      };
    }, []);
  
    useEffect(() => {
      // Fungsi untuk mengatur tema gelap saat isDarkMode berubah
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [isDarkMode]);
  
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
      if (isDarkMode) {
        localStorage.setItem("color-theme", "light");
      } else {
        localStorage.setItem("color-theme", "dark");
      }
    };

  return (
    <header
      className={`fixed top-0 z-50 w-full h-[5rem] bg-slate-50 shadow-gray-500 drop-shadow-md ${
        isDarkMode ? "dark:bg-gray-800 dark:shadow-gray-50 dark:drop-shadow-md" : ""
      }`}
    >
      <div className="flex justify-between">
        <div className="h-[5rem] w-1/5 sm:w-1/2 sm:text-sm lg:text-lg lg:w-1/4 sm:left-4 ml-4">
          <div className="flex items-center">

            <a href='/'> 
              <h2 className="text-slate-800 font-bold uppercase py-8 dark:text-gray-200">
                Al{" "}
                <span className="text-violet-700 dark:text-violet-500">Quran</span>
              </h2>
            </a>
           
         
          </div>
        </div>
        <div className="sm:flex sm:items-center lg:hidden  w-1/2 ">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            className="block absolute right-4 lg:hidden"
          >
            <span className="hamburger-line transition duration-300 origin-top-left" />
            <span className="hamburger-line transition duration-300 " />
            <span className="hamburger-line transition duration-300 origin-bottom-left" />
          </button>
        </div>
        <nav className="xs:hidden sm:hidden lg:flex flex-row mr-6">
          <div className="mx-2 px-4  hover:border-violet-600 hover:border-b-4">
            {/* <a href="#portfolio">
              <h2 className="text-slate-800 pt-8 dark:text-gray-200">Portfolio</h2>
            </a> */}
          </div>
          <div className="mx-2 px-4 hover:border-violet-600 hover:border-b-4">
            {/* <a href="#contact">
              <h2 className="text-slate-800 pt-8 dark:text-gray-200">Contact</h2>
            </a> */}
          </div>
          <div className="mx-2 px-2 hover:border-violet-600 hover:border-b-4">
            <button
              id="theme-toggle"
              type="button"
              onClick={toggleDarkMode}
              className={`mt-5 ${
                isDarkMode
                  ? "dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  : "text-gray-500"
              } ${
                isDarkMode
                  ? "hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200"
                  : ""
              } rounded-lg text-sm p-2.5`}
            >
              {isDarkMode ? (
                <svg
                  className="w-5 h-5 text-gray-400 dark:text-gray-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
