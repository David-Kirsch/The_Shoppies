import React from "react";
import "../styles/movieCard.css";
import noPoster from "../assets/noPoster.png";

function MovieCard(props) {
  const clickHandler = (movie) => {
    props.clickHandler(movie);
  };

  const deleteHandler = (movie) => {
    props.deleteHandler(movie);
  };

  let classname = "movieCard";
  if (props.nominated) {
    classname = "nominatedCard";
  }

  return (
    <div className={classname}>
      <div className="title">
        {props.data.Title} ({props.data.Year})
      </div>
      {props.data.Poster !== "N/A" ? (
        <img src={props.data.Poster} alt={props.data.Title} />
      ) : (
        <img
          src={noPoster}
          style={{ height: 350, width: 300 }}
          alt="No Poster"
        />
      )}
      <div>
        {!props.nominated ? (
          <button onClick={() => clickHandler(props.data)}>Nominate</button>
        ) : (
          <button onClick={() => deleteHandler(props.data)}>Delete</button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
