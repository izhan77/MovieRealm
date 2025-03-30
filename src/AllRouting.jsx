import React from "react";

import { PartyPopper, ArrowBigUp, Star } from "lucide-react";
import { Route, Routes, Navigate } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";

const AllRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/popular" />} />
      <Route
        path="/popular"
        element={
          <MovieList type="popular" title="Popular" emoji={<PartyPopper />} />
        }
      />
      <Route
        path="/top_rated"
        element={
          <MovieList
            type="top_rated"
            title="Top Rated"
            emoji={<ArrowBigUp />}
          />
        }
      />
      <Route
        path="/upcoming"
        element={
          <MovieList type="upcoming" title="Upcoming" emoji={<Star />} />
        }
      />
    </Routes>
  );
};

export default AllRouting;
