import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { Netflix_Bg } from '../utils/constants'

const GptSearch = () => {
  return (
    <div 
      className='min-h-screen bg-cover bg-center bg-no-repeat bg-fixed'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${Netflix_Bg}")`
      }}
    >
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch