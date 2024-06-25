import MoviesList from "../moviesOutput/MoviesList.tsx";
import React, { useEffect, useState } from "react";
import Movie from "../../model/movie.tsx";
import { fetchMovies } from "../../services/movies.service.tsx";
import ErrorOverlay from "../UI/ErrorOverlay.tsx";
import LoadingOverlay from "../UI/LoadingOverlay.tsx";
import EmptySearchOverly from "../UI/EmptySearchOverlay.tsx";
import { useLanguage } from "../../store/context/language.context.tsx";
import { GlobalContent } from "../../constants/content.ts";

function SearchResults({ keyword }: { keyword: string }): React.JSX.Element {
  const { language } = useLanguage();
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
  const [moviesList, setMoviesList] = useState<Movie[] | []>([]);

  useEffect(() => {
    async function getMoviesResults() {
      setIsFetching(true);
      try {
        let moviesList = await fetchMovies({
          category: "search",
          page: 1,
          language: language.code,
          query: keyword
        });

        setMoviesList(moviesList);
      } catch (errorMessage) {
        setError("Could not fetch movies: " + errorMessage);
      }

      setIsFetching(false);
    }

    getMoviesResults();
  }, [keyword]);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  if (moviesList.length === 0) {
    return <EmptySearchOverly message={GlobalContent[language.name].writeYourMovie} />;
  }

  return <MoviesList movies={moviesList} withHeader={false} />;
}

export default SearchResults;
