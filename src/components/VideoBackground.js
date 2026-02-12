import { use, useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  //fetch trailer video
  const trailervideo=useSelector(store=>store.movies?.addTrailerVideo); // Accessing the trailer video from the Redux store
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_Options,
    );
    const json = await data.json();
    console.log("Video Data:", json); // Debugging log to check the video data structure

    // Add null check for json.results before calling find
    if (!json.results || !Array.isArray(json.results)) {
      console.log("No results found in video data.");
      return;
    }

    const filterdataa = json.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube",
    );
    const trailer = filterdataa ? filterdataa : json.results[0]; // Check if a trailer was found, otherwise set to first video
    if (trailer) {
      console.log("Trailer Key:", trailer.key); // Debugging log to check the trailer key
      // You can use the trailer key to construct the YouTube URL or embed it in an iframe
    } else {
      console.log("No trailer found for this movie.");
    }
    dispatch(addTrailerVideo(trailer));
  }; // Dispatching the trailer video to the Redux store
  useEffect(() => {
    getMovieVideos();
  }, [id]);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailervideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
