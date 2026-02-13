import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const Moviecard = ({ posterpath }) => {
  return (
    <div className='w-20 md:w-24 lg:w-32 h-24 md:h-32 lg:h-40 shrink-0 overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-200'>
        <img className='w-full h-full object-cover' alt='Movie Card' src={IMG_CDN_URL + posterpath}/>
    </div>
  )
}

export default Moviecard