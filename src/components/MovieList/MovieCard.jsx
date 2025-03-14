import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`https://www.themoviedb.org/movie/${movie.id}`}
      target="_blank"
      className="group movie_card w-[200px] h-[300px] m-[15px] overflow-hidden rounded-lg text-white shadow-[0px_3px_8px_rgba(0,0,0,0.25)] relative hover:scale-[1.08] transition-transform duration-300"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="movie_poster"
        className="movie_poster w-full h-full object-cover"
      />

      <div className="movie_details absolute top-0 w-full h-full p-[10px] bg-gradient-to-b from-transparent to-black flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="movie_details_heading text-[18px] text-[#ffe400] font-bold">
          {movie.original_title}
        </h3>
        <div className="movie_date_rate flex items-center justify-between text-[12px] font-medium">
          <p>{movie.release_date}</p>
          <p className="flex items-center text-md">
            {movie.vote_average.toFixed(1)}
            <Star className="card_emoji w-[20px] h-[20px] ml-2 fill-yellow-400 stroke-none" />
          </p>
        </div>
        <p className="movie_description text-[13px] italic">
          {movie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
