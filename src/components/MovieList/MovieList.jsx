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
    <>
      <section
        className="hidden md:px-10 md:flex md:flex-col md:items-center md:justify-between"
        id={type}
      >
        <header className="flex items-center gap-8 p-5 w-full text-[#8082EF] font-semibold">
          <div className="flex items-center gap-3">
            <span className="text-xl">{title}</span>
            {emoji}
          </div>

          <div className="flex items-center gap-x-8 flex-1 justify-end">
            <FilterGroup
              minrate={minrate}
              onRatingClick={handlefilter}
              ratings={[8, 7, 6]}
            />

            <div className="flex items-center gap-x-5">
              <select
                className="bg-transparent text-xl cursor-pointer border-b-2 border-b-transparent transition-colors duration-300"
                name="by"
                id=""
                onChange={handleSort}
                value={sort.by}
              >
                <option className="text-black" value="default">
                  SortBy
                </option>
                <option className="text-black" value="release_date">
                  Date
                </option>
                <option className="text-black" value="vote_average">
                  Rating
                </option>
              </select>

              <select
                className="bg-transparent text-xl cursor-pointer border-b-2 border-b-transparent  transition-colors duration-300"
                name="order"
                id=""
                onChange={handleSort}
                value={sort.order}
              >
                <option className="text-black" value="asc">
                  Ascending
                </option>
                <option className="text-black" value="desc">
                  Descending
                </option>
              </select>
            </div>
          </div>
        </header>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 p-2 sm:p-4 movie_cards justify-center">
        {filtermovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <button
        className="md:hidden absolute left-[1.15rem] sm:left-[2.15rem] top-[1.25rem]"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="w-10 h-10" />
      </button>

      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(false)}
        minrate={minrate}
        handlefilter={handlefilter}
      />
    </>
  );
};

export default MovieList;
