import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { selectNowPlayingMovies } from "../utils/moviesSlice";

const Maincontainer = () => {
  const movies = useSelector(selectNowPlayingMovies); // Using memoized selector
  if (movies.length === 0) return null;
  
  const mainmovie=movies[0]; // Assuming the first movie in the list is the main movie to be displayed
  // Debugging log to check the main movie data
  const {original_title,overview,id}=mainmovie; // Destructuring the main movie data to get the title and overview
  return (
    <div className="relative">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default Maincontainer;