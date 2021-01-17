import React, { useState } from "react";
import "../styles/searchBar.css";
import { FaSistrix } from "react-icons/fa";

function SearchBar(props) {
  let [input, setInput] = useState("");

  const searchHandler = (e) => {
    console.log("source ", e.target.value);
    setInput(e.target.value);
    props.onChangeHandler(input);
  };

  return (
    <div className="searchBarContainer">
      <div>Movie Title</div>
      <div className="searchInputContainer">
        <FaSistrix />
        <input
          placeholder="Enter Movie Name..."
          value={input}
          onChange={(e) => searchHandler(e)}
        ></input>
      </div>
    </div>
  );
}

export default SearchBar;
