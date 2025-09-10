import { NavLink } from "react-router-dom";

import MainLogo from "../../images/logo.svg";
import User from "../../images/image-avatar.png";

import HomeIcon from "../../images/icon-nav-home.svg?react";
import MoviesIcon from "../../images/icon-nav-movies.svg?react";
import SeriesIcon from "../../images/icon-nav-tv-series.svg?react";
import BookmarkIcon from "../../images/icon-nav-bookmark.svg?react";

function Header() {
  return (
    <header className="flex items-center justify-between bg-[var(--clr-accent)] px-5 py-4 sm:rounded-lg lg:fixed lg:h-[95dvh] lg:max-h-240 lg:w-20 lg:flex-col lg:rounded-2xl lg:py-8">
      <img src={MainLogo} alt="Main Logo" className="w-7 sm:w-8" />
      <div>
        <ul className="gap flex items-center lg:h-full lg:translate-y-[-50%] lg:flex-col">
          <li>
            <NavLink to="/">
              {({ isActive }) => (
                <HomeIcon
                  className={`transition-all duration-300 ease-in-out ${
                    isActive
                      ? "text-white"
                      : "text-[var(--clr-icons)] hover:scale-135 hover:text-[var(--clr-red)] hover:drop-shadow-[0_0_6px_var(--clr-red)]"
                  }`}
                />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies">
              {({ isActive }) => (
                <MoviesIcon
                  className={`transition-all duration-300 ease-in-out ${
                    isActive
                      ? "text-white"
                      : "text-[var(--clr-icons)] hover:scale-135 hover:text-[var(--clr-red)] hover:drop-shadow-[0_0_6px_var(--clr-red)]"
                  }`}
                />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/series">
              {({ isActive }) => (
                <SeriesIcon
                  className={`transition-all duration-300 ease-in-out ${
                    isActive
                      ? "text-white"
                      : "text-[var(--clr-icons)] hover:scale-135 hover:text-[var(--clr-red)] hover:drop-shadow-[0_0_6px_var(--clr-red)]"
                  }`}
                />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookmarked">
              {({ isActive }) => (
                <BookmarkIcon
                  className={`transition-all duration-300 ease-in-out ${
                    isActive
                      ? "text-white"
                      : "text-[var(--clr-icons)] hover:scale-135 hover:text-[var(--clr-red)] hover:drop-shadow-[0_0_6px_var(--clr-red)]"
                  }`}
                />
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      <img
        src={User}
        alt="User"
        className="w-7 rounded-full border border-white sm:w-8"
      />
    </header>
  );
}

export default Header;
