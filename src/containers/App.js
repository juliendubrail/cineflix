import React, { Component } from "react";
import { ACTION_MOVIES, RECOMENDATIONS } from "../constants/api";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

class App extends Component {
  state = {
    movies: [],
    action: [],
    searchInput: ""
  };

  componentDidMount() {
    // fetch("https://movied.herokuapp.com/discover")
    fetch(RECOMENDATIONS)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        this.setState({ movies: data }, console.log(this.state.movies));
      })
      .catch(error => console.log("error is", error));

    fetch(ACTION_MOVIES)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ action: data }, console.log(this.state.action));
      })
      .catch(error => console.log("error is", error));
  }

  render() {
    const { movies, action } = this.state;
    return (
      <div className="App">
        <SearchBar />
        <MovieList category={`DISCOVER`} movies={movies} />
        <MovieList category={`ACTION`} movies={action} />
      </div>
    );
  }
}

export default App;
