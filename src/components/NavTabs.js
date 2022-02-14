import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className=" fixed w-full z-10 top-0 bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2  sm:px-4 lg:px-4">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
            >
              <svg
                x-show="!showMenu"
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <a
                href="#"
                className="no-underline py-1"
                onClick={() => handlePageChange("Home")}
              >
                <h1 className="text-lg text-white tracking-widest mr-4 ">
                  vahan.martirosyan
                </h1>
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6" id="my-links">
              <div className="flex space-x-12 ml-4 mt-2">
                <a
                  href="#home"
                  onClick={() => handlePageChange("Home")}
                  className={
                    currentPage === "Home"
                      ? "nav-link active"
                      : "nav-link text-white"
                  }
                >
                  Home
                </a>

                <a
                  href="#about"
                  onClick={() => handlePageChange("About")}
                  // className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                  className={
                    currentPage === "About"
                      ? "nav-link active"
                      : "nav-link text-white"
                  }
                >
                  About
                </a>

                <a
                  href="#portfolio"
                  onClick={() => handlePageChange("Portfolio")}
                  // className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                  className={
                    currentPage === "Portfolio"
                      ? "nav-link active"
                      : "nav-link text-white"
                  }
                >
                  Portfolio
                </a>

                <a
                  href="#resume"
                  onClick={() => handlePageChange("Resume")}
                  className={
                    currentPage === "Resume"
                      ? "nav-link active"
                      : "nav-link text-white"
                  }
                >
                  Resume
                </a>

                <a
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                  className={
                    currentPage === "Contact"
                      ? "nav-link active"
                      : "nav-link text-white"
                  }
                >
                  Contacts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden mobile-menu items-center px-2 pt-2 pb-3 space-y-1">
        <a
          href="home"
          className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
        >
          Home
        </a>

        <a
          href="about"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          About
        </a>

        <a
          href="portfolio"
          className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Portfolio
        </a>

        <a
          href="resume"
          className="text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default NavTabs;
