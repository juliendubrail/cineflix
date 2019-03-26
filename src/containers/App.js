import React, { Component } from "react";
import { ACTION_MOVIES, RECOMENDATIONS } from "../constants/api";
import getData  from "../utils/fetch";
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

/* onInputChange = (event) => {
  this.setState({
    searchInput: event.target.value
  }, () => {
    if (this.state.searchInput && this.state.searchInput.length > 1) {
      if (this.state.searchInput.length % 2 === 0) {
        getData(`https://movied.herokuapp.com/search?q=${this.state.searchInput}`)
      }
    } 
  })
} */

async getInfo()  {
  try { 
    const searchResults = await getData(`https://movied.herokuapp.com/search?q=${this.state.searchInput}`);
    this.setState({
      searchResults
    });
  } catch (e) {
    console.log(e)
  }
  
}
  

onInputChange = (event) => {
  this.setState({ 
    searchInput: event.target.value 
  }, () => { 
    if (this.state.searchInput && this.state.searchInput.length > 1) {
      if (this.state.searchInput.length % 2 === 0) {
    this.getInfo();
      }
    }    
  });
}


  render() {
    const { recommendedMovies, actionMovies, searchResults } = this.state;
    /* if(actionMovies != null & recommendedMovies != null){
      const all = recommendedMovies.concat(actionMovies);
      const filteredMovies =  actionMovies.filter(movie =>{return movie.title.toLowerCase().includes(searchInput.toLowerCase());});
      return (
        <div className="App">
        <SearchBar   value={this.state.searchInput} onInputChange={this.onInputChange} />
             <MovieList category={`ACTION`} movies={filteredMovies} />
             <MovieList category={`DISCOVER`} movies={recommendedMovies} />
        </div>
      )
    } */
    return (
      <div className="App">
        <NavBar value={this.state.searchInput} onInputChange={this.onInputChange} />
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
