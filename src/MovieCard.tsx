type MovieProps = {
  movie: {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
  };
};

const MovieCard = ({ movie }: MovieProps) => {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300?text=No+Image"}
        alt={movie.Title}
      />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
