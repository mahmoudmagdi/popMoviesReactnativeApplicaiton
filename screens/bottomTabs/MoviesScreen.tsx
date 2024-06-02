import React, { useContext, useEffect, useState } from "react";
import { SelectedFilterContext } from "../../store/context/selected-filter-context";
import { MoviesContext } from "../../store/context/movies-context";
import Movie from "../../model/movie";
import MoviesList from "../../components/moviesOutput/MoviesList";
import { fetchMovies } from "../../services/movies.service";
import { getSelectedFilterKey } from "../../utils/Utils";

import ErrorOverlay from "../../components/UI/ErrorOverlay";
import LoadingOverlay from "../../components/UI/LoadingOverlay";

export default function MoviesScreen(): React.JSX.Element {

  const selectedFilterCtx = useContext(SelectedFilterContext);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
  const moviesCtx = useContext(MoviesContext);
  const selectedFilter = selectedFilterCtx?.selectedFilter || "Popular";

  function renderRequiredMovies({ selectedFilter }: { selectedFilter: string }): React.JSX.Element {
    let movies: Movie[];
    switch (selectedFilter) {
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

  function storeSelectedMovies({ selectedFilter, moviesList }: { selectedFilter: string, moviesList: Movie[] }): void {
    switch (selectedFilter) {
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
          category: getSelectedFilterKey(selectedFilter),
          page: 1,
          language: "en-us"
        });
        storeSelectedMovies({ selectedFilter, moviesList });
      } catch (errorMessage) {
        setError("Could not fetch movies: " + errorMessage);
      }

      setIsFetching(false);
    }

    getSelectedMovies().then(
      () => console.log("Movies fetched successfully"),
      (error) => console.error("Error fetching movies: ", error)
    );
  }, [selectedFilter]);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return renderRequiredMovies({ selectedFilter });
}
