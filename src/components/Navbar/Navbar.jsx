import React from 'react';
import { PartyPopper, ArrowBigUp, Star } from "lucide-react";
// import DarkMode from '../DarkMode/DarkMode';

const Navbar = () => {
  return (
    <nav className='flex flex-col md:flex-row  justify-between px-4 md:px-14 py-4 md:py-7 items-center'>
      <h1 className='text-4xl text-[#8082EF] md:text-4xl font-extrabold scale-y-150 leading-[3rem]'>MOVIE REALM</h1>

      <div className='w-full flex md:flex-row md:w-auto justify-evenly md:justify-between md:space-x-5 fixed md:static bottom-0 leading-[3rem] font-extrabold text-[#8082EF] left-0 bg-[#d7d8f8] md:bg-transparent p-2 md:p-0 z-50'>
        {/* <DarkMode/> */}
        <a href="#popular" className='flex flex-col md:flex-row items-center gap-1 md:gap-3 text-sm md:text-xl  hover:bg-[#ffffff]  rounded-lg transition-all duration-500 p-2 md:p-3'>
          <PartyPopper className="w-8 h-8 md:w-6 md:h-6" />
          <span>Popular</span>
        </a>
        <a href="#top_rated" className='flex flex-col md:flex-row items-center gap-1 md:gap-3 text-sm md:text-xl hover:bg-[#ffffff] rounded-lg transition-all duration-500 p-2 md:p-3'>
          <ArrowBigUp className="w-8 h-8 md:w-6 md:h-6" />
          <span>TopRated</span>
        </a>
        <a href="#upcoming" className='flex flex-col md:flex-row items-center gap-1 md:gap-3 text-sm md:text-xl hover:bg-[#ffffff] rounded-lg transition-all duration-500 p-2 md:p-3'>
          <Star className="w-8 h-8 md:w-6 md:h-6" />
          <span>Latest</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;