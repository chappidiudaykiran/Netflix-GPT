import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='text-lg mt-4'>{overview}</p>
      <div className='mt-6'>
        <button className='bg-red-600 text-white px-4 py-2 rounded'>  Play</button>
        <button className='bg-gray-700 text-white px-4 py-2 rounded ml-2'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle