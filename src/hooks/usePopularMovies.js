import { useEffect, useCallback } from 'react';
import { API_Options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
    //fetch data from tmdb API AND update store
  const dispatch=useDispatch();
 const getPopularMovies=useCallback(async()=>{
  try {
    const data=await fetch("https://api.themoviedb.org/3/movie/popular?page=1",API_Options);
    if(!data.ok){
      console.error("Failed to fetch popular movies", data.status, data.statusText);
      return;
    }
    const jsonData=await data.json();
    dispatch(addPopularMovies(jsonData?.results || []));
  } catch (error) {
    console.error("Network error while fetching popular movies", error);
  }
 },[dispatch]);

 useEffect(()=>{
  getPopularMovies();
  },[getPopularMovies]);  
}

export default usePopularMovies;