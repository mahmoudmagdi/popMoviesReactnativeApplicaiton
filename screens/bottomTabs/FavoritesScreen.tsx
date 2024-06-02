import React, {useEffect, useState} from 'react';
import MoviesList from '../../components/moviesOutput/MoviesList';
import {getFavoriteMovies} from '../../store/realm/database';
import realm from '../../store/realm/realmConfig';
import Movie from '../../model/movie.tsx';

export default function FavoritesScreen(): React.JSX.Element {
  const [favoriteMovies, setFavoriteMovies] = useState<
    Realm.Results<Movie> | []
  >([]);

  useEffect(() => {
    const fetchFavoriteMovies = () => {
      const movies = getFavoriteMovies();
      setFavoriteMovies(movies);
    };

    fetchFavoriteMovies();

    // Optionally, you can set up a listener for database changes
    const realmListener = () => {
      fetchFavoriteMovies();
    };

    realm.addListener('change', realmListener);

    // Clean up the listener on unmount
    return () => {
      realm.removeListener('change', realmListener);
    };
  }, []);

  return (
    <MoviesList movies={favoriteMovies as Movie[]} isFavoritesScreen={true} />
  );
}
