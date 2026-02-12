import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-12 md:px-24 absolute text-white bg-gradient-to-r from-black via-black/80 to-transparent'>
      <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-4'>{title}</h1>
      <p className='hidden md:block py-4 text-sm md:text-base lg:text-lg w-full md:w-1/3 lg:w-1/4 line-clamp-3'>{overview}</p>
      <div className='flex gap-3 mt-4 md:mt-6'>
        <button className='bg-white text-black px-6 py-2 md:px-8 md:py-3 text-base md:text-lg font-bold rounded hover:bg-opacity-80 hover:scale-105 flex items-center gap-2 transition-all duration-200'>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          Play
        </button>
        <button className='bg-gray-500 bg-opacity-50 text-white px-6 py-2 md:px-8 md:py-3 text-base md:text-lg font-bold rounded hover:bg-opacity-30 hover:scale-105 flex items-center gap-2 transition-all duration-200'>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle