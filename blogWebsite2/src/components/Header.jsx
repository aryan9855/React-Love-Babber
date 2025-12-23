import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(AppContext);
  const isDark = theme === "dark";

  return (
    <header
      className={`py-4 border-b shadow-md fixed top-0 inset-x-0 z-10 transition-colors duration-200 ${
        isDark ? "bg-gray-900 border-gray-800 shadow-gray-900/60" : "bg-white border-gray-200"
      }`}
    >
      <div className="relative flex items-center justify-center max-w-5xl mx-auto px-4">
        <h1 className={`font-bold text-3xl uppercase text-center ${isDark ? "text-blue-200" : "text-blue-600"}`}>
          Code Canvas
        </h1>

        <label className="theme-switch theme-switch--sm absolute right-4" aria-label="Toggle theme">
          <input
            type="checkbox"
            className="theme-switch__checkbox"
            checked={isDark}
            onChange={toggleTheme}
          />
          <div className="theme-switch__container">
            <div className="theme-switch__circle-container">
              <div className="theme-switch__sun-moon-container">
                <div className="theme-switch__moon">
                  <div className="theme-switch__spot" />
                  <div className="theme-switch__spot" />
                  <div className="theme-switch__spot" />
                </div>
              </div>
              <div className="theme-switch__clouds" />
              <svg
                className="theme-switch__stars-container"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <g fill="currentColor">
                  <circle cx="20" cy="30" r="3" />
                  <circle cx="50" cy="20" r="2" />
                  <circle cx="70" cy="40" r="3" />
                  <circle cx="40" cy="60" r="2.5" />
                  <circle cx="80" cy="25" r="1.8" />
                </g>
              </svg>
            </div>
          </div>
        </label>
      </div>
    </header>
  );
}
