import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movie) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
        API_Options,
      );
      if (!data.ok) {
        console.error("Failed to fetch movie trailer", data.status, data.statusText);
        return;
      }
      const json = await data.json();

      // Add null check for json.results before calling find
      if (!json.results || !Array.isArray(json.results)) {
        return;
      }

      const filterdataa = json.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube",
      );
      const trailer = filterdataa ? filterdataa : json.results[0]; // Check if a trailer was found, otherwise set to first video
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Network error while fetching movie trailer", error);
    }
  }; // Dispatching the trailer video to the Redux store
  useEffect(() => {
    getMovieVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie.id]);
};
export default useMovieTrailer;