import { PartyPopper,ArrowBigUp, Star } from "lucide-react";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar/>

      <MovieList type="popular" title="Popular" emoji={<PartyPopper/>} />
      <MovieList type="top_rated" title="Top Rated" emoji={<ArrowBigUp/>} />
      <MovieList type="upcoming" title="Upcoming" emoji={<Star/>} />
    </>
  );
}

export default App;
