import React from "react";
import SearchBar from "../components/SearchBar";
import "../styles/moviePage.css";

function MoviePage(props) {
  const onChangeHandler = (input) => {
    console.log("movie", input);
  };

  return (
    <div className="container">
      <div className="searchBarComp">
        <SearchBar onChangeHandler={(input) => onChangeHandler(input)} />
      </div>
    </div>
  );
}

export default MoviePage;
