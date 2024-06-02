import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useContext, useLayoutEffect} from 'react';
import {MoviesContext} from '../store/context/movies-context';
import {SelectedFilterContext} from '../store/context/selected-filter-context';
import Movie from '../model/movie';

import MovieDetails from '../components/moviesOutput/MovieDetails';

type MovieOverViewScreenProps = {
  route: any;
  navigation: any;
};

function MovieDetailsScreen({
  route,
  navigation,
}: MovieOverViewScreenProps): React.JSX.Element {
  const movieCtx = useContext(MoviesContext);
  const selectedFilterCtx = useContext(SelectedFilterContext);
  const selectedFilter = selectedFilterCtx?.selectedFilter;
  const movieId = route.params.movieId;

  let movieItem: Movie | null;

  switch (selectedFilter) {
    case 'Popular':
      movieItem =
        movieCtx?.popularMovies.find(movie => movie.id === movieId) ?? null;
      break;
    case 'Top Rated':
      movieItem =
        movieCtx?.topRatedMovies.find(movie => movie.id === movieId) ?? null;
      break;
    case 'Now Playing':
      movieItem =
        movieCtx?.nowPlayingMovies.find(movie => movie.id === movieId) ?? null;
      break;
    case 'Upcoming':
      movieItem =
        movieCtx?.upcomingMovies.find(movie => movie.id === movieId) ?? null;
      break;
    default:
      movieItem = null;
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: movieItem?.title,
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movieItem?.poster_path}`,
          }}
          style={styles.backdropImage}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{movieItem?.title}</Text>
          <Text style={styles.overview}>{movieItem?.overview}</Text>
          <MovieDetails
            customStyle={styles.movieDetails}
            movie={movieItem}
            direction="row"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdropImage: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  overview: {
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 10,
  },
  movieDetails: {
    marginTop: 10,
  },
});

export default MovieDetailsScreen;
