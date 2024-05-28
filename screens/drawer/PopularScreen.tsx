import React, {useContext, useEffect, useState} from 'react';
import {fetchPopularMovies} from '../../services/movies.service';
import {MoviesContext} from '../../store/context/movies-context';
import {View, StyleSheet} from 'react-native';

import ErrorOverlay from '../../components/UI/ErrorOverlay';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import MoviesList from '../../components/moviesOutput/MoviesList';

export default function PopularScreen(): React.JSX.Element {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');

  const moviesCtx = useContext(MoviesContext);

  useEffect(() => {
    async function getPopularMovies() {
      setIsFetching(true);
      try {
        const moviesList = await fetchPopularMovies();
        moviesCtx.setPopularMovies(moviesList);
      } catch (errorMessage) {
        setError('Could not fetch popular movies!');
      }

      setIsFetching(false);
    }

    getPopularMovies();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const movies = moviesCtx.movies;
  return (
    <View style={styles.container}>
      <MoviesList movies={movies} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
