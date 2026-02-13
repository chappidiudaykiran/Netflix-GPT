import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[7%]'>
        <form className='w-full flex items-center justify-center my-4'>
            <input className='w-3/4 md:w-1/2 lg:w-1/3 px-4 py-2 rounded-l-lg bg-white text-red-600 font-bold placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-600' placeholder='what would you like to watch today?'/>
            <button className='px-4 py-2 bg-red-600 text-white rounded-r-lg hover:bg-red-700 transition-colors duration-200 font-semibold'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar