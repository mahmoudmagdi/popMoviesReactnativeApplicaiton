import React, { createContext, useReducer } from "react";
import Movie from "../../model/movie";

type MoviesContextProps = {
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  upcomingMovies: Movie[];
  nowPlayingMovies: Movie[];

  setPopularMovies: (movie: Movie[]) => void;
  setTopRatedMovies: (movie: Movie[]) => void;
  setUpcomingMovies: (movie: Movie[]) => void;
  setNowPlayingMovies: (movie: Movie[]) => void;
}

type MoviesActionProps = {
  type: string;
  popularMovies: Movie[] | [];
  topRatedMovies: Movie[] | [];
  upcomingMovies: Movie[] | [];
  nowPlayingMovies: Movie[] | [];
}

export const MoviesContext: React.Context<MoviesContextProps | null> = createContext<MoviesContextProps | null>(null);

const moviesReducer = (state: Movie[], action: MoviesActionProps) => {
  switch (action.type) {
    case "ADD_POPULAR_MOVIES":
      return action.popularMovies;
    case "ADD_TOP_RATED_MOVIES":
      return action.topRatedMovies;
    case "ADD_UPCOMING_MOVIES":
      return action.upcomingMovies;
    case "ADD_NOW_PLAYING_MOVIES":
      return action.nowPlayingMovies;
    default:
      return state;
  }
};

function MoviesContextProvider({ children }: any): React.JSX.Element {
  const [popularMoviesState, dispatchPopularMovies] = useReducer(moviesReducer, []);
  const [topRatedMoviesState, dispatchTopRatedMovies] = useReducer(moviesReducer, []);
  const [upcomingMoviesState, dispatchUpcomingMovies] = useReducer(moviesReducer, []);
  const [nowPlayingMoviesState, dispatchNowPlayingMovies] = useReducer(moviesReducer, []);

  const setPopularMovies = (movies: Movie[]) => {
    const moviesActionProps: MoviesActionProps = {
      type: "ADD_POPULAR_MOVIES",
      popularMovies: movies,
      topRatedMovies: [],
      upcomingMovies: [],
      nowPlayingMovies: []
    };
    dispatchPopularMovies(moviesActionProps);
  };

  const setTopRatedMovies = (movies: Movie[]) => {
    const moviesActionProps: MoviesActionProps = {
      type: "ADD_TOP_RATED_MOVIES",
      popularMovies: [],
      topRatedMovies: movies,
      upcomingMovies: [],
      nowPlayingMovies: []
    };
    dispatchTopRatedMovies(moviesActionProps);
  };

  const setUpcomingMovies = (movies: Movie[]) => {
    const moviesActionProps: MoviesActionProps = {
      type: "ADD_UPCOMING_MOVIES",
      popularMovies: [],
      topRatedMovies: [],
      upcomingMovies: movies,
      nowPlayingMovies: []
    };
    dispatchUpcomingMovies(moviesActionProps);
  };

  const setNowPlayingMovies = (movies: Movie[]) => {
    const moviesActionProps: MoviesActionProps = {
      type: "ADD_NOW_PLAYING_MOVIES",
      popularMovies: [],
      topRatedMovies: [],
      upcomingMovies: [],
      nowPlayingMovies: movies
    };
    dispatchNowPlayingMovies(moviesActionProps);
  };

  const value = {
    popularMovies: popularMoviesState,
    topRatedMovies: topRatedMoviesState,
    upcomingMovies: upcomingMoviesState,
    nowPlayingMovies: nowPlayingMoviesState,
    setPopularMovies: setPopularMovies,
    setTopRatedMovies: setTopRatedMovies,
    setUpcomingMovies: setUpcomingMovies,
    setNowPlayingMovies: setNowPlayingMovies
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
}

export default MoviesContextProvider;
