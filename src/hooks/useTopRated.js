import { useEffect, useCallback } from 'react';
import { API_Options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';

const useTopRated = () => {
    //fetch data from tmdb API AND update store
  const dispatch=useDispatch();
 const getTopRatedMovies=useCallback(async()=>{
  const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_Options);
  const jsonData=await data.json();
  console.log(jsonData.results);
  dispatch(addTopRatedMovies(jsonData.results));
 },[dispatch]);

 useEffect(()=>{
  getTopRatedMovies();
  },[getTopRatedMovies]);  
}

export default useTopRated;