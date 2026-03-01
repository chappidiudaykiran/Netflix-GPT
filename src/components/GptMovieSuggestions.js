import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist'

const GptMovieSuggestions = () => {
  const {Movienames, MovieResults} = useSelector((store) => store.gpt);
  
  if (!Movienames) {
    return null;
  }
  
  return (
    <div className='p-2 sm:p-3 md:p-4 m-2 sm:m-3 md:m-4 bg-slate-900/50 border border-slate-700/60 backdrop-blur-sm text-white rounded-lg'>
      <div>
        {Movienames.map((movieName, index) => (
          <Movielist 
            key={movieName} 
            title={movieName} 
            movies={MovieResults[index]} 
          />
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestions