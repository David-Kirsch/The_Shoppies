import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Movies from "../components/Movies";
import "../styles/moviePage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaExpeditedssl } from "react-icons/fa";

function MoviePage(props) {
  const [search, setSearch] = useState("");
  const [nominated, setNominated] = useState([]);

  const clickHandler = (movie) => {
    if (nominated.length !== 5) {
      if (nominated.includes(movie)) {
        toast.error("You already nominated that movie", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        setNominated([movie].concat(nominated));
      }
    } else {
      toast.error(
        "You can only select 5 movies to nominate. Please delete a movie before nominating another.",
        { position: toast.POSITION.TOP_CENTER }
      );
    }
  };

  const deleteNomination = (movie) => {
    setNominated(
      nominated.filter((nominate) => nominate.imdbID !== movie.imdbID)
    );
  };

  const onChangeHandler = (input) => {
    console.log("onchange", input);
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
            deleteNomination={(movie) => deleteNomination(movie)}
          />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
