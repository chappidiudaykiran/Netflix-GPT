import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { Netflix_Bg } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10 inset-0'>
        <img src={Netflix_Bg} alt="Netflix Background" className="w-full h-full object-cover" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>

    </div>
  )
}

export default GptSearch