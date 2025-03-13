import React from "react";
import { X, PartyPopper } from "lucide-react";
import FilterGroup from "../MovieList/FilterGroup";

const Sidebar = ({ isOpen, toggleSidebar, minrate, handlefilter }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-80 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out p-5`}
    >
      <button className="absolute left-[1rem] top-[1rem]" onClick={toggleSidebar}>
        <X className="w-10 h-10" />
      </button>

      <div className="mx-5 mt-16">
        <header className="flex font-medium gap-3 w-fit p-5 text-xl items-center">
          <span>Popular</span>
          <PartyPopper className="w-8 h-8" />
        </header>

        <div className="flex flex-col items-center gap-y-5">
          <FilterGroup minrate={minrate} onRatingClick={handlefilter} ratings={[8, 7, 6]} className="text-white" />

          <select className="bg-transparent text-lg cursor-pointer border-b-2 border-b-transparent hover:border-b-purple-300 transition-colors duration-300">
            <option className="text-black" value="">Sort By</option>
            <option className="text-black" value="date">Date</option>
            <option className="text-black" value="rating">Rating</option>
          </select>

          <select className="bg-transparent text-lg cursor-pointer border-b-2 border-b-transparent hover:border-b-purple-300 transition-colors duration-300">
            <option className="text-black" value="asc">Ascending</option>
            <option className="text-black" value="desc">Descending</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
