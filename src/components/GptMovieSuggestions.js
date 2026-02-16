import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist'

const GptMovieSuggestions = () => {
  const {Movienames, MovieResults} = useSelector((store) => store.gpt);
  
  if (!Movienames) {
    return null;
  }
  
  return (
    <div className='p-4 m-4 bg-black/50 backdrop-blur-sm text-white rounded-lg'>
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