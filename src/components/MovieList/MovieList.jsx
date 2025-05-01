import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Menu } from "lucide-react";

import Sidebar from "../Sidebar/Sidebar";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ type, title, emoji }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [movies, setmovies] = useState([]);
  const [filtermovies, setfiltermovies] = useState([]);
  const [minrate, setminrate] = useState(0);
  const [sort, setsort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, [type]);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filtermovies, [sort.by], [sort.order]);
      setfiltermovies(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = async () => {
    try {
      const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      setmovies(data.results);
      setfiltermovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error.message);
    }
  };

  const handlefilter = (rate) => {
    if (rate === minrate) {
      setminrate(0);
      setfiltermovies(movies);
    } else {
      setminrate(rate);
      const filter = movies.filter((movie) => movie.vote_average >= rate);
      setfiltermovies(filter);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setsort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-sm">
        <div className="flex items-center gap-2 text-[#8082EF] font-semibold">
          <span className="text-lg">{title}</span>
          {React.cloneElement(emoji, { className: "w-5 h-5" })}
        </div>
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Desktop Header */}
      <header className="hidden md:flex items-center justify-between px-4 md:px-6 lg:px-8 xl:px-10 py-3 sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-sm">
        <div className="flex items-center gap-3 text-[#8082EF] font-semibold">
          <span className="text-lg md:text-xl">{title}</span>
          {React.cloneElement(emoji, { className: " w-5 h-5 md:w-6 md:h-6" })}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <FilterGroup
            minrate={minrate}
            onRatingClick={handlefilter}
            ratings={[8, 7, 6]}
          />

          <div className="flex items-center gap-3 md:gap-4">
            <select
              className="bg-transparent text-sm md:text-base cursor-pointer border-b-2 text-[#8082EF] border-transparent hover:border-[#8082EF] focus:border-[#8082EF] transition-colors duration-200 p-1"
              name="by"
              onChange={handleSort}
              value={sort.by}
            >
              <option value="default">Sort By</option>
              <option value="release_date">Date</option>
              <option value="vote_average">Rating</option>
            </select>

            <select
              className="bg-transparent text-sm md:text-base cursor-pointer border-b-2 text-[#8082EF] border-transparent hover:border-[#8082EF] focus:border-[#8082EF] transition-colors duration-200 p-1"
              name="order"
              onChange={handleSort}
              value={sort.order}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 xs:gap-4 sm:gap-5 p-3 xs:p-4 sm:p-5 justify-items-center">
        {filtermovies.length > 0 ? (
          filtermovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              className="w-full max-w-[180px]"
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500 dark:text-gray-400">
            No movies found matching your criteria
          </div>
        )}
      </div>

      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(false)}
        minrate={minrate}
        handlefilter={handlefilter}
      />
    </div>
  );
};

export default MovieList;
