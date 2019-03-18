import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ movies, category }) => {
  return (
    <div className="container">
      <h2 className="category_title">{category}</h2>
      <div className="row">
        {movies.map(({title, poster_path, id}) => {
          return (
            <div className="col-md-4" key={id} style={{ marginBottom: "2rem" }}>
              <MovieCard
                name={title}
                poster={poster_path}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesList;
