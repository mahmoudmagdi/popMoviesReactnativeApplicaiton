import React from "react";
import { FlatList, ScaledSize, useWindowDimensions } from "react-native";
import MovieCard from "./MovieCard";
import Movie from "../../model/movie";
import QuickMoviesSelector from "./QuickMoviesSelector";
import { Filters } from "../../data/filters.tsx";

function renderMovieItem({ item }: { item: Movie }) {
  return <MovieCard movie={item} />;
}

function renderHeaderComponent(): React.JSX.Element {
  return <QuickMoviesSelector filters={Filters} />;
}

interface MoviesListProps {
  movies: Movie[];
  withHeader?: boolean;
}

function MoviesList({ movies, withHeader = true }: MoviesListProps) {
  const windowDimensions: ScaledSize = useWindowDimensions();
  const numberOfColumns: number = windowDimensions.width > 600 ? 4 : 2;
  const key: string = numberOfColumns === 4 ? "landscape-" : "portrait-";

  return (
    <FlatList
      key={key}
      data={movies}
      renderItem={renderMovieItem}
      keyExtractor={item => key + item.id.toString()}
      numColumns={numberOfColumns}
      ListHeaderComponent={withHeader ? renderHeaderComponent : null}
    />
  );
}

export default MoviesList;
