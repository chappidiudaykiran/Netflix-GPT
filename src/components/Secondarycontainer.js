import Movielist from './Movielist'
import { useSelector } from 'react-redux';

const Secondarycontainer = () => {
  const movies = useSelector((store)=> store.movies); // Using memoized selector
  return (
    <div className="relative z-20 text-white -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40">
      <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <Movielist title={"Top Rated"} movies={movies.topRatedMovies}/>
      <Movielist title={"Popular"} movies={movies.popularMovies}/>
      <Movielist title={"Upcoming"} movies={movies.upcomingMovies}/>
      
    </div>
  )
}

export default Secondarycontainer