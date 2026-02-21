import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import { useRef, useState } from 'react'
import groq from '../utils/openAi'
import { API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addGptMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch=useDispatch();
  const searchText=useRef(null);
  const [loading, setLoading] = useState(false);
  //Search movie in TMDB
  const searchMovieInTMDB=async(movieName)=>{
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieName)}&include_adult=false&language=en-US&page=1`,API_Options);
        const data = await response.json();
        return data.results;
  };
  
  const handleGptSearchClick = async (e) => {
    e.preventDefault();
    
    if (loading) return; // Prevent multiple calls
    if (!searchText.current.value.trim()) {
      alert("Please enter a movie name");
      return;
    }
    
    setLoading(true);
    console.log("GPT Search Clicked with query:", searchText.current.value);
    
    try {
      const gptQuery="Act as a movie recommendation engine. Suggest me some movies similar to "+searchText.current.value+" .only give me names of 5 movies, comma seperate like the example result given ahead.Example Result: Mirchi,Pokiri,Devara,RRR,Don";
      const gptresults = await groq.chat.completions.create({
          messages:[{role:"user",content:gptQuery}],
          model:"llama-3.3-70b-versatile",
      });
      
      const movieNames = gptresults.choices[0].message.content.split(",");
      console.log("Movie Names:", movieNames);
      
      const promiseArray=movieNames.map((movieName)=>searchMovieInTMDB(movieName.trim()));
      
      const tmdbresults=await Promise.all(promiseArray);
      console.log("TMDB Results:", tmdbresults);
     
      // Here you can dispatch an action to update the Redux store with the search results or handle it as needed
      dispatch(addGptMovieResults({Movienames: movieNames,MovieResults:tmdbresults})); // Assuming you have an action to add GPT search results to the store
    
    } catch (error) {
      console.error("Groq API Error:", error);
      const isInvalidApiKey =
        error?.status === 401 ||
        error?.code === "invalid_api_key" ||
        error?.error?.code === "invalid_api_key" ||
        error?.message?.toLowerCase().includes("invalid api key");

      if (isInvalidApiKey) {
        alert("⚠️ Invalid Groq API key. Update REACT_APP_GROQ_API_KEY in .env, then restart npm start.");
      } else {
        alert("⚠️ Groq API Error: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  
  const langKey=useSelector((state)=>state.config.lang);
  
  return (
    <div className='pt-[10%] sm:pt-[8%] lg:pt-[7%] px-4'>
        <form className='w-full flex flex-col sm:flex-row items-center justify-center my-3 sm:my-4 gap-2 sm:gap-0' onSubmit={handleGptSearchClick}>
            <input 
              ref={searchText} 
              className='w-full sm:w-3/4 lg:w-2/3 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-l-lg bg-white text-red-600 placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-600' 
              placeholder={lang[langKey].gptsearchplaceholder}
              disabled={loading}
            />
            <button 
              type="submit"
              disabled={loading}
              className='w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg sm:rounded-r-lg text-sm sm:text-base hover:bg-red-700 transition-colors duration-200 font-semibold whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {loading ? "Searching..." : lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar