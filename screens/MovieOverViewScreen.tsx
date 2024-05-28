import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useContext, useLayoutEffect} from 'react';
import {MoviesContext} from '../store/context/movies-context';
import Movie from '../model/movie';

import MovieDetails from '../components/moviesOutput/MovieDetails';

function MovieOverViewScreen({route, navigation}): React.JSX.Element {
  const movieCtx = useContext(MoviesContext);
  const movieId = route.params.movieId;
  const movieItem: Movie | null =
    movieCtx.movies.find(movie => movie.id === movieId) ?? null;

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
          <MovieDetails customStyle={styles.movieDetails} {...movieItem} direction="row"/>
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

export default MovieOverViewScreen;
