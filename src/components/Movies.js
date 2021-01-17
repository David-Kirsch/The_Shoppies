import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "../styles/movies.css";

function Movies(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `http://www.omdbapi.com?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${props.search}`
    )
      .then((resp) => resp.json())
      .then((data) => setMovies(data["Search"]));
  }, [props.search]);

  const clickHandler = (movie) => {
    props.clickHandler(movie);
  };

  const deleteMovie = (movie) => {
    props.deleteNomination(movie);
  };

  const renderMovies = () => {
    if (movies) {
      return movies.map((movie) => (
        <MovieCard data={movie} clickHandler={() => clickHandler(movie)} />
      ));
    }
  };

  const renderNominated = () => {
    if (props.nominated) {
      return props.nominated.map((movie) => (
        <MovieCard
          data={movie}
          nominated={true}
          deleteHandler={(movie) => deleteMovie(movie)}
        />
      ));
    }
  };

  return (
    <div className="wrapper">
      <div className="results column">{renderMovies()}</div>
      <div className="column middle">The Shoppies</div>
      <div className="nominated column">
        <div className="nominatedList">
          <span>Nominated List:</span>
          <div>{renderNominated()}</div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
