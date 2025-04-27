// src/pages/Home.js
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} title={movie.title} id={movie.id} />
      ))}
    </>
  );
}
export default Home;