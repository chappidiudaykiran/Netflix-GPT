import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import { Supported_Languages } from '../utils/constants'
const GptSearchBar = () => {
  const langKey=useSelector((state)=>state.config.lang);
  return (
    <div className='pt-[7%] px-4'>
        <form className='w-full flex items-center justify-center my-4'>
            <input className='w-full md:w-3/4 lg:w-2/3 px-4 py-3 text-base rounded-l-lg bg-white text-red-600 placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-600' placeholder={lang[langKey].gptsearchplaceholder}/>
            <button className='px-6 py-3 bg-red-600 text-white rounded-r-lg hover:bg-red-700 transition-colors duration-200 font-semibold whitespace-nowrap'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}


export default GptSearchBar