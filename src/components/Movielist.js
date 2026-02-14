import Moviecard from './Moviecard'

const Movielist = ({ title, movies }) => {
     // Debugging log to check the movies data passed to Movielist
    if (!movies || movies.length === 0) {
        return null;
    }
    return (
        <div className="py-2 px-0 mx-0">
        <h2 className="text-2xl font-bold mb-4 ml-6">{title}</h2>
        <div className="flex items-start gap-4 overflow-x-auto scroll-smooth pb-4 mx-4 scrollbar-hidden">
            {movies.map((movie) => (
                <Moviecard key={movie.id} posterpath={movie.poster_path} />
            ))}
        </div>
    </div>
  )
}

export default Movielist