import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("selectedTheme") === "dark"
  );
  const darkMode = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
    setIsDarkMode(true);
  };
  const lightMode = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    localStorage.setItem("selectedTheme", "light");
    setIsDarkMode(false);
  };
  return (
    <>
      <nav className="navbar bg-body-tertiary shadow">
        <div className="container">
          <p className="navbar-brand fw-bold mt-2">Where in the world?</p>

          <div>
            <div
              onClick={() => (isDarkMode ? lightMode() : darkMode())}
              className="cursor-pointer"
            >
              {isDarkMode ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}
            </div>
            {/* <div>
              {
                <p className="font-medium">
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </p>
              }
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
