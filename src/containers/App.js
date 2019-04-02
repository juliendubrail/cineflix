import React, { Component } from "react";
import { ACTION_MOVIES, RECOMENDATIONS } from "../constants/api";
import getData from "../utils/fetch";
import NavBar from "../components/NavBar";
import MovieList from "../components/MovieList";

class App extends Component {
  state = {
    recommendedMovies: null,
    actionMovies: null,
    searchInput: "",
    searchResults: null
  };

  async componentDidMount() {
    try {
      const recommendedMovies = await getData(RECOMENDATIONS);
      const actionMovies = await getData(ACTION_MOVIES);
      this.setState({
        recommendedMovies,
        actionMovies
      });
    } catch (e) {
      console.log(e);
    }
  }

  async getInfo() {
    try {
      const searchResults = await getData(
        `https://movied.herokuapp.com/search?q=${this.state.searchInput}`
      );
      this.setState({
        searchResults
      });
    } catch (e) {
      console.log(e);
    }
  }

  resetResults = () => this.setState({ searchResults: null });

  onInputChange = event => {
    this.setState(
      {
        searchInput: event.target.value
      },
      () => {
        const shouldSearch = this.state.searchInput.length > 1;
        return shouldSearch ? this.getInfo() : this.resetResults();
      }
    );
  };

  render() {
    const { recommendedMovies, actionMovies, searchResults } = this.state;
    return (
      <div className="App">
        <NavBar
          value={this.state.searchInput}
          onInputChange={this.onInputChange}
        />
        {searchResults && (
          <MovieList category={`Results`} movies={searchResults} />
        )}
        {recommendedMovies && (
          <MovieList category={`DISCOVER`} movies={recommendedMovies} />
        )}
        {actionMovies && (
          <MovieList category={`ACTION`} movies={actionMovies} />
        )}
      </div>
    );
  }
}

export default App;
