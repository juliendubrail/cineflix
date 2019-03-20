import React, { Component } from "react";
import { ACTION_MOVIES, RECOMENDATIONS } from "../constants/api";
import getData  from "../utils/fetch";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

class App extends Component {
  state = {
    recommendedMovies: null,
    actionMovies: null,
    searchInput: ""
  };

  async componentDidMount() {
    try {
    const recommendedMovies = await getData(RECOMENDATIONS);
    const actionMovies = await getData(ACTION_MOVIES);
    console.log(recommendedMovies);
      this.setState({
        recommendedMovies,
        actionMovies
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { recommendedMovies, actionMovies } = this.state;
    return (
      <div className="App">
        <SearchBar />
        {recommendedMovies && (
      <MovieList category={`DISCOVER`} movies={recommendedMovies} />
      )}
      {actionMovies && (
      <MovieList category={`ACTION`} movies={actionMovies} />
      )}
{/*         <MovieList category={`DISCOVER`} movies={recommendedMovies} />
        <MovieList category={`ACTION`} movies={actionMovies} /> */}
      </div>
    );
  }
}

export default App;
