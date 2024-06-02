import React from 'react';
import {FlatList, ScaledSize, useWindowDimensions} from 'react-native';
import MovieCard from './MovieCard';
import Movie from '../../model/movie';
import QuickMoviesSelector from './QuickMoviesSelector';
import {FILTERS} from '../../data/filters';

function renderMovieItem({item}: {item: Movie}) {
  return <MovieCard movie={item} />;
}

function renderHeaderComponent(): React.JSX.Element {
  return <QuickMoviesSelector filters={FILTERS} />;
}

interface MoviesListProps {
  movies: Movie[];
  isFavoritesScreen?: boolean;
}

function MoviesList({movies, isFavoritesScreen = false}: MoviesListProps) {
  const windowDimensions: ScaledSize = useWindowDimensions();
  const numberOfColumns: number = windowDimensions.width > 600 ? 4 : 2;
  const key: string = numberOfColumns === 4 ? 'landscape-' : 'portrait-';

  return (
    <FlatList
      key={key}
      data={movies}
      renderItem={renderMovieItem}
      keyExtractor={item => key + item.id.toString()}
      numColumns={numberOfColumns}
      ListHeaderComponent={!isFavoritesScreen ? renderHeaderComponent : null}
    />
  );
}

export default MoviesList;
