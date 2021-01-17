import React from "react";
import "../styles/movieCard.css";

function MovieCard(props) {
  const clickHandler = (movie) => {
    props.clickHandler(movie);
  };

  let classname = "movieCard";
  if (props.nominated) {
    classname = "nominatedCard";
  }
  return (
    <div className={classname}>
      <div className="title">{props.data.Title}</div>
      <img src={props.data.Poster} alt={props.data.Title} />
      <div>
        {!props.nominated ? (
          <button onClick={() => clickHandler(props.data)}>Nominate</button>
        ) : (
          <button onClick={() => console.log("Delete")}>Delete</button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
