import { useEffect, useCallback } from 'react';
import { API_Options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcoming = () => {
    //fetch data from tmdb API AND update store
  const dispatch=useDispatch();
 const getUpcomingMovies=useCallback(async()=>{
  try {
    const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_Options);
    if(!data.ok){
      console.error("Failed to fetch upcoming movies", data.status, data.statusText);
      return;
    }
    const jsonData=await data.json();
    dispatch(addUpcomingMovies(jsonData?.results || []));
  } catch (error) {
    console.error("Network error while fetching upcoming movies", error);
  }
 },[dispatch]);

 useEffect(()=>{
  getUpcomingMovies();
  },[getUpcomingMovies]);  
}

export default useUpcoming;