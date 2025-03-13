import React from "react";

const FilterGroup = ({ minrate, onRatingClick, ratings }) => {
  return (
    <ul className="flex flex-col md:flex-row gap-x-8 text-xl">
      {ratings.map((rate) => (
        <li
          key={rate}
          className={`border-b-2 cursor-pointer transition-colors duration-300 
            ${
              minrate === rate
                ? "border-b-[#8082EF] font-bold text-white md:text-[#8082EF]"
                : "border-b-transparent text-white md:text-[#8082EF]"
            } 
            hover:border-b-white md:hover:border-b-[#8082EF]`}
          onClick={() => onRatingClick(rate)}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
