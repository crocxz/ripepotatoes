import React from "react";
import "./Main.css";
import Navigation from "./navigation/Navigation";
import Movies from "./movies/Movies";

class Main extends React.Component {
  state = {
    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=651925d45022d1ae658063b443c99784&language=en-US`,
    moviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=651925d45022d1ae658063b443c99784&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
    page: 1, 
    total_pages: 1,
    genre: "Comedy",
    genres: [],
    movies: [],
    year: {
      label: "year",
      min: 1990,
      max: 2017,
      step: 1,
      value: { min: 2000, max: 2017 }
    },
    rating: {
      label: "rating",
      min: 0,
      max: 10,
      step: 1,
      value: { min: 8, max: 10 }
    },
    runtime: {
      label: "runtime",
      min: 0,
      max: 300,
      step: 15,
      value: { min: 60, max: 120 }
    }
  }
//generate api call
  generateUrl = params => {
    const {genres, year, rating, runtime, page } = params;
    const selectedGenre = genres.find( genre => genre.name === params.genre);
    const genreId = selectedGenre.id;
//${process.env.REACT_APP_TMDB_API_KEY}
    const moviesUrl = `https://api.themoviedb.org/3/discover/movie?` +
      `api_key=3e4feefa6ae5684b7396d21b1c9e4dbe&` +
      `language=en-US&sort_by=popularity.desc&` +
      `with_genres=${genreId}&` +
      `primary_release_date.gte=${year.value.min}-01-01&` +
      `primary_release_date.lte=${year.value.max}-12-31&` +
      `vote_average.gte=${rating.value.min}&` +
      `vote_average.lte=${rating.value.max}&` +
      `with_runtime.gte=${runtime.value.min}&` +
      `with_runtime.lte=${runtime.value.max}&` +
      `page=${page}`;

    this.setState({ moviesUrl });
  }
  // refreshes to pg 1, gens url
  onSearchButtonClick = () => {
    this.setState({page : 1});
    this.generateUrl(this.state);
  }
  // sets genre in state from event
  onGenreChange = event => {
    this.setState({ genre: event.target.value });
  }
  //retrieve genres into state
  setGenres = genres => {
    this.setState({genres});
  }
  // refresh state data to rerender
  onChange = data => {
    this.setState({
      [data.type]: {
        ...this.state[data.type],
        value: data.value
      }
    });
  };
  //increase page num in state
  onPageIncrease = () => {
    const { page, total_pages } = this.state
    const nextPage = page + 1;
    if (nextPage <= total_pages) {
      this.setState({ page: nextPage })
    }
  }
  // decrease page num in state
  onPageDecrease = () => {
    const nextPage = this.state.page - 1;
    if ( nextPage > 0 ) {
      this.setState({ page: nextPage })
    }
  }
  //if state empty or no movies
  componentDidMount(){
    const savedState = this.getStateFromLocalStorage();
    if ( !savedState || (savedState && !savedState.movies.length)) {
      this.fetchMovies(this.state.moviesUrl);
    } else {
      this.setState({ ...savedState });
      this.generateUrl(savedState);
    }
  }
  
  // ensures state changes will be reacted to
  componentWillUpdate(nextProps, nextState) {
    this.saveStateToLocalStorage();
  if (this.state.moviesUrl !== nextState.moviesUrl) {
    this.fetchMovies(nextState.moviesUrl);
  }
  if (this.state.page !== nextState.page) {
    this.generateUrl(nextState);
  }
  }
  //store retrieve movies in state
  storeMovies = data => {
    const movies = data.results.map( result => {
      const  { vote_count, id, genre_ids, poster_path, title, vote_average, release_date } = result;
        return { vote_count, id, genre_ids, poster_path, title, vote_average, release_date };
      });
    this.setState({ movies, total_pages: data.total_pages });
  }
  // ajax request to fetch movies from api
  fetchMovies = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => this.storeMovies(data))
      .catch(error => console.log(error));
  }
  
  saveStateToLocalStorage = () => {
    localStorage.setItem("ripepotatoes.params", JSON.stringify(this.state));
  }
  
  getStateFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("ripepotatoes.params"));
  }

  render() {
    return (
      <section className="main">
        <Navigation
          onChange={this.onChange}
          onGenreChange={this.onGenreChange}
          setGenres={this.setGenres}
          onSearchButtonClick={this.onSearchButtonClick}
          {...this.state} />
        <Movies
          movies={this.state.movies}
          page={this.state.page}
          onPageIncrease={this.onPageIncrease}
          onPageDecrease={this.onPageDecrease}
        />
      </section>
    )
  }
}

export default Main;