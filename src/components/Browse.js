import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRated from '../hooks/useTopRated'
import useUpcoming from '../hooks/useUpcoming'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
 const showgptsearch=useSelector((state)=>state.gpt.showgptsearch);
 useNowPlayingMovies(); 
 usePopularMovies();
 useTopRated();
 useUpcoming();
 // Custom hook to fetch now playing movies, popular movies, and top-rated movies and update the store 
  return (
    <div className="bg-black overflow-x-hidden">
      <Header/>
      {
        showgptsearch ? (
          <GptSearch/>
         ) : (
          <>
          <Maincontainer/>
          <Secondarycontainer/>
          </> 
        )
      }
  
    </div>
  )
}

export default Browse