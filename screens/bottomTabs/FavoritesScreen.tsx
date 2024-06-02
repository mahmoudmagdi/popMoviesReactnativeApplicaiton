import React from 'react';
import MoviesList from '../../components/moviesOutput/MoviesList.tsx';
import {useSelector} from 'react-redux';

export default function FavoritesScreen(): React.JSX.Element {
  const favoriteMovies = useSelector(
    (state: any) => state.favoriteMovies.favoriteMovies,
  );

  return <MoviesList movies={favoriteMovies} isFavoritesScreen={true} />;
}
