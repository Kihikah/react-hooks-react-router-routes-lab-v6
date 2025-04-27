// src/pages/Movie.js
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <h1>Loading...</h1>;

  return (
    <>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      {movie.genres.map(genre => (
        <span key={genre}>{genre}</span>
      ))}
    </>
  );
}
export default Movie;