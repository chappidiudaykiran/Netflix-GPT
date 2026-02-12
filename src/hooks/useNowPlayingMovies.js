
import { useEffect, useCallback } from 'react';
import { API_Options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';



const useNowPlayingMovies = () => {
    //fetch data from tmdb API AND update store
  const dispatch=useDispatch();
 const getNowPlayingMovies=useCallback(async()=>{
  const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_Options);
  const jsonData=await data.json();
  console.log(jsonData.results);
  dispatch(addNowPlayingMovies(jsonData.results));
 },[dispatch]);

 useEffect(()=>{
  getNowPlayingMovies();
  },[getNowPlayingMovies]);  
}

export default useNowPlayingMovies;