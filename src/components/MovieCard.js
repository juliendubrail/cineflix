import React from "react";

const MovieCard = ({ name, poster }) => {
  return (
    <div>
      <img alt="movies" src={`https://image.tmdb.org/t/p/w300/${poster}`} />
      <p className="movie_title">{name}</p>
    </div>
  );
};

export default MovieCard;
