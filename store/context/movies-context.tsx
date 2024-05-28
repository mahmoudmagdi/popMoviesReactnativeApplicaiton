import React, { createContext, useReducer } from 'react';
import Movie from '../../model/movie.tsx';

export const MoviesContext = createContext({
  movies: [],
  setPopularMovies: (movies: Movie[]) => {},
});

const moviesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POPULAR_MOVIES':
      return action.movies;
    default:
      return state;
  }
};

function MoviesContextProvider({children}): React.JSX.Element {
  const [moviesState, dispatch] = useReducer(moviesReducer, []);

  const setPopularMovies = (movies: Movie[]) => {
    dispatch({type: 'ADD_POPULAR_MOVIES', movies});
  };

  const value = {
    movies: moviesState,
    setPopularMovies: setPopularMovies,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
}

export default MoviesContextProvider;
