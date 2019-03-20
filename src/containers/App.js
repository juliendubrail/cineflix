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

  onInputChange = (event) =>{
    this.setState({searchInput: event.target.value}, () => console.log(this.state.searchInput));
  }


  render() {
    const { recommendedMovies, actionMovies, searchInput } = this.state;
    if(actionMovies != null & recommendedMovies != null){
      console.log(recommendedMovies.concat(actionMovies));
      const all = recommendedMovies.concat(actionMovies);
      const filteredMovies =  actionMovies.filter(movie =>{return movie.title.toLowerCase().includes(searchInput.toLowerCase());});
      return (
        <div clasName="App">
        <SearchBar   value={this.state.searchInput} onInputChange={this.onInputChange} />
             <MovieList category={`ACTION`} movies={filteredMovies} />
             <MovieList category={`DISCOVER`} movies={recommendedMovies} />
        </div>
      )
    }
    return (
      <div className="App">
        <SearchBar   value={this.state.searchInput} onInputChange={this.onInputChange} />
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
