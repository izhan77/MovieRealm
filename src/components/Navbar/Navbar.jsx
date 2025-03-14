import React from "react";
import { PartyPopper, ArrowBigUp, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
// import DarkMode from '../DarkMode/DarkMode';

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row  justify-between px-4 md:px-14 py-4 md:py-7 items-center">
      <h1 className="text-4xl text-[#8082EF] md:text-4xl font-extrabold scale-y-150 leading-[3rem]">
        MOVIE REALM
      </h1>

      <div className="w-full flex md:flex-row md:w-auto justify-evenly md:justify-between md:space-x-5 fixed md:static bottom-0 leading-[3rem] font-extrabold text-[#8082EF] left-0 bg-[#d7d8f8] md:bg-transparent p-2 md:p-0 z-50">
        {/* <DarkMode/> */}
        <NavLink
          to="/popular"
          className={({ isActive }) =>
            `flex flex-col md:flex-row items-center gap-1 md:gap-3 text-sm md:text-xl transition-all duration-500 p-2 md:p-3 rounded-lg
            ${
              isActive
                ? "text-white bg-[#8082EF] font-bold"
                : "hover:bg-[#ffffff]"
            }`
          }
        >
          <PartyPopper className="w-8 h-8 md:w-6 md:h-6" />
          <span>Popular</span>
        </NavLink>
        <NavLink
          to="/top_rated"
          className={({ isActive }) =>
            `flex flex-col md:flex-row items-center gap-1 md:gap-3 text-sm md:text-xl transition-all duration-500 p-2 md:p-3 rounded-lg
            ${
              isActive
                ? "text-white bg-[#8082EF] font-bold"
                : "hover:bg-[#ffffff]"
            }`
          }
        >
          <ArrowBigUp className="w-8 h-8 md:w-6 md:h-6" />
          <span>TopRated</span>
        </NavLink>
        <NavLink
          to="/upcoming"
          className={({ isActive }) =>
            `flex flex-col md:flex-row items-center gap-1 md:gap-3 text-sm md:text-xl transition-all duration-500 p-2 md:p-3 rounded-lg
            ${
              isActive
                ? "text-white bg-[#8082EF] font-bold"
                : "hover:bg-[#ffffff]"
            }`
          }
        >
          <Star className="w-8 h-8 md:w-6 md:h-6" />
          <span>Upcoming</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
