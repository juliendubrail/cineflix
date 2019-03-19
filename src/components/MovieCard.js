import React from "react";

const MovieCard = ({ name, poster }) => {
  return (
    <>
      <img alt="movies" src={`https://image.tmdb.org/t/p/w300/${poster}`} />
      <p className="movie_title">{name}</p>
    </>
  );
};

export default MovieCard;
