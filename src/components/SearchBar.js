import React from "react";
import "../styles/searchBar.css";
import { FaSistrix } from "react-icons/fa";

function SearchBar(props) {
  const searchHandler = (e) => {
    props.onChangeHandler(e.target.value);
  };

  return (
    <div className="searchBarContainer">
      <div>Movie Title</div>
      <div className="searchInputContainer">
        <FaSistrix />
        <input
          placeholder="Enter Movie Name..."
          value={props.search}
          onChange={(e) => searchHandler(e)}
        ></input>
      </div>
    </div>
  );
}

export default SearchBar;
