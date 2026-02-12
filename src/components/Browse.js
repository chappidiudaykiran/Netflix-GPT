import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'  
import { use } from 'react'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';

const Browse = () => {
  
 useNowPlayingMovies(); 
 // Custom hook to fetch now playing movies and update the store 
  return (
    <div>
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
    </div>
  )
}

export default Browse