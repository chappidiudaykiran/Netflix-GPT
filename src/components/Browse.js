import React, { use } from 'react'
import Header from './Header'
import { useEffect } from 'react';
import { API_Options } from '../utils/constants';
const Browse = () => {

 const getNowPlayingMovies=async()=>{
  const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_Options);
  const jsonData=await data.json();
  console.log(jsonData.results);
 };

 useEffect(()=>{
  getNowPlayingMovies();
  },[]);  

  return (
    <div>
      <Header/>
      <h1>Browse Page</h1>
    </div>
  )
}

export default Browse