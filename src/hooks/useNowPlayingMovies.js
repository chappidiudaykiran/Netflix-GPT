
import { useEffect, useCallback } from 'react';
import { API_Options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';



const useNowPlayingMovies = () => {
    //fetch data from tmdb API AND update store
  const dispatch=useDispatch();
 const getNowPlayingMovies=useCallback(async()=>{
  try {
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_Options);
    if(!data.ok){
      console.error("Failed to fetch now playing movies", data.status, data.statusText);
      return;
    }
    const jsonData=await data.json();
    dispatch(addNowPlayingMovies(jsonData?.results || []));
  } catch (error) {
    console.error("Network error while fetching now playing movies", error);
  }
 },[dispatch]);

 useEffect(()=>{
  getNowPlayingMovies();
  },[getNowPlayingMovies]);  
}

export default useNowPlayingMovies;