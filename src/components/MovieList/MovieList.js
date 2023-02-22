import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({AllMovies, deletedMov, updateMov}) => {
  return (
    <>
      <div className="thank">
        {AllMovies.map((movie, i) => (
          <MovieCard updateMov={updateMov} deletedMov={deletedMov} movie={movie} key={i}></MovieCard>
        ))}
      </div>
    </>
  );
};

export default MovieList;
