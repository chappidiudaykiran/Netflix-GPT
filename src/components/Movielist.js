import Moviecard from './Moviecard'

const Movielist = ({ title, movies }) => {
     // Debugging log to check the movies data passed to Movielist
    if (!movies || movies.length === 0) {
        return null;
    }
    return (
        <div className="py-2 px-0 mx-0">
        <h2 className="text-sm sm:text-lg lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 ml-3 sm:ml-4 lg:ml-6">{title}</h2>
        <div className="flex items-start gap-2 sm:gap-3 lg:gap-4 overflow-x-auto scroll-smooth pb-3 sm:pb-4 mx-2 sm:mx-3 lg:mx-4 scrollbar-hidden">
            {movies.map((movie) => (
                <Moviecard key={movie.id} posterpath={movie.poster_path} />
            ))}
        </div>
    </div>
  )
}

export default Movielist