import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovie] = useState([]);
  const [isLoading, setLoading] = useState(false);

  async function fetchMovieHandler() {
    setLoading(true);
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();

    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        date: movieData.release_date,
      };
    });
    setMovie(transformedMovies);
    setLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No movies found.</p>}
        {isLoading && <h1>Loading...</h1>}
      </section>
    </React.Fragment>
  );
}

export default App;
