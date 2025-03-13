import { PartyPopper,ArrowBigUp, Star } from "lucide-react";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Navbar/>

      <MovieList type="popular" title="Popular" emoji={<PartyPopper/>} />
      <MovieList type="top_rated" title="Top Rated" emoji={<ArrowBigUp/>} />
      <MovieList type="upcoming" title="Upcoming" emoji={<Star/>} />
      <Analytics />
    </>
  );
}

export default App;
