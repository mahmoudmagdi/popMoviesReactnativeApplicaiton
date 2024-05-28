import React from 'react';
import {FlatList, useWindowDimensions} from 'react-native';
import MovieCard from './MovieCard';
import Movie from '../../model/movie';

function renderMovieItem({item}: {item: Movie}) {
  return <MovieCard movie={item} />;
}
interface Props {
  movies: Movie[];
  actors?: string[];
}

function MoviesList({movies, actors}: Props) {
  const windowDimensions = useWindowDimensions();
  const numberOfColumns = windowDimensions.width > 600 ? 4 : 2;
  const key = numberOfColumns === 4 ? 'landscape-' : 'portrait-';
  return (
    <FlatList
      key={key}
      data={movies}
      renderItem={renderMovieItem}
      keyExtractor={item => key + item.id.toString()}
      numColumns={numberOfColumns}
    />
  );
}

export default MoviesList;
