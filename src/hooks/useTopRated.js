import { useEffect, useCallback } from 'react';
import { API_Options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';

const useTopRated = () => {
    //fetch data from tmdb API AND update store
  const dispatch=useDispatch();
 const getTopRatedMovies=useCallback(async()=>{
  try {
    const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_Options);
    if(!data.ok){
      console.error("Failed to fetch top rated movies", data.status, data.statusText);
      return;
    }
    const jsonData=await data.json();
    dispatch(addTopRatedMovies(jsonData?.results || []));
  } catch (error) {
    console.error("Network error while fetching top rated movies", error);
  }
 },[dispatch]);

 useEffect(()=>{
  getTopRatedMovies();
  },[getTopRatedMovies]);  
}

export default useTopRated;