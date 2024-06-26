import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../store/context/movies.context.tsx";
import Movie from "../../model/movie";
import MoviesList from "../../components/moviesOutput/MoviesList";
import { fetchMovies } from "../../services/movies.service";
import { getSelectedFilterKey } from "../../utils/Utils";

import ErrorOverlay from "../../components/UI/ErrorOverlay";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import { useLanguage } from "../../store/context/language.context.tsx";
import { SelectedFilterContext } from "../../store/context/selected-filter-context";
import { Filter, Filters } from "../../data/filters";

function MoviesScreen(): React.JSX.Element {

  const { language } = useLanguage();
  const selectedFilterCtx = useContext(SelectedFilterContext);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
  const moviesCtx = useContext(MoviesContext);
  const selectedFilter = selectedFilterCtx?.selectedFilter || Filters[0];

  useEffect(() => {
    if (moviesCtx) {
      moviesCtx.setPopularMovies([]);
      moviesCtx.setTopRatedMovies([]);
      moviesCtx.setUpcomingMovies([]);
      moviesCtx.setNowPlayingMovies([]);
    }

    if (selectedFilterCtx) {
      selectedFilterCtx.setSelectedFilter(Filters[0]);
    }
  }, [language]);

  function renderRequiredMovies({ selectedFilter }: { selectedFilter: Filter }): React.JSX.Element {
    let movies: Movie[];
    switch (selectedFilter.keyword) {
      case "Popular":
        movies = moviesCtx?.popularMovies || [];
        break;
      case "Top Rated":
        movies = moviesCtx?.topRatedMovies || [];
        break;
      case "Upcoming":
        movies = moviesCtx?.upcomingMovies || [];
        break;
      case "Now Playing":
        movies = moviesCtx?.nowPlayingMovies || [];
        break;
      default:
        movies = moviesCtx?.popularMovies || [];
    }

    return (
      <MoviesList movies={movies} />
    );
  }

  function storeSelectedMovies({ selectedFilter, moviesList }: { selectedFilter: Filter, moviesList: Movie[] }): void {
    switch (selectedFilter.keyword) {
      case "Popular":
        moviesCtx?.setPopularMovies(moviesList);
        break;
      case "Top Rated":
        moviesCtx?.setTopRatedMovies(moviesList);
        break;
      case "Upcoming":
        moviesCtx?.setUpcomingMovies(moviesList);
        break;
      case "Now Playing":
        moviesCtx?.setNowPlayingMovies(moviesList);
        break;
      default:
        moviesCtx?.setPopularMovies(moviesList);
    }
  }

  useEffect(() => {
    async function getSelectedMovies() {
      setIsFetching(true);
      try {
        let moviesList: Movie[];
        moviesList = await fetchMovies({
          category: getSelectedFilterKey(selectedFilter.keyword),
          page: 1,
          language: language.code
        });
        storeSelectedMovies({ selectedFilter, moviesList });
      } catch (errorMessage) {
        setError("Could not fetch movies: " + errorMessage);
      }

      setIsFetching(false);
    }

    getSelectedMovies();
  }, [selectedFilter, language]);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return renderRequiredMovies({ selectedFilter });
}

export default MoviesScreen;
