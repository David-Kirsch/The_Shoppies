import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Movies from "../components/Movies";
import "../styles/moviePage.css";
import background from "../assets/movietheater.png";

function MoviePage(props) {
  const [search, setSearch] = useState("");
  const [nominated, setNominated] = useState([]);

  const clickHandler = (movie) => {
    if (nominated.length !== 5) {
      setNominated([movie].concat(nominated));
    } else {
      alert("ONly 5 movies");
    }
  };

  const onChangeHandler = (input) => {
    setSearch(input);
  };

  return (
    <div className="container">
      <div className="searchBarComp">
        <SearchBar onChangeHandler={(input) => onChangeHandler(input)} />
        <div className="resultsContainer">
          <Movies
            search={search}
            nominated={nominated}
            clickHandler={(movie) => clickHandler(movie)}
          />
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
