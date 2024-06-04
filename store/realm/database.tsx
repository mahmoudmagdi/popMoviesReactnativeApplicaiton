import realm from "./realmConfig";
import Movie from "../../model/movie.tsx";

// Add movie to favorites
export const addMovieToFavorites = (movie: Movie | null): void => {
  try {
    realm.write(() => {
      realm.create("Movie", { ...movie });
    });
  } catch (error) {
    console.log("Error on adding movie to favorites: ", error);
  }
};

// Remove movie from favorites
export const removeMovieFromFavorites = (movieId: number): void => {
  try {
    realm.write(() => {
      let movie = realm.objectForPrimaryKey<Movie>("Movie", movieId);
      if (movie) {
        realm.delete(movie);
      } else {
        console.log("Movie not found!");
      }
    });
  } catch (error) {
    console.log("Error on removing movie from favorites: ", error);
  }
};

// Fetch favorite movies
export const getFavoriteMovies = (): Realm.Results<Movie> => {
  try {
    return realm.objects<Movie>("Movie");
  } catch (error) {
    console.log("Error on fetching favorite movies: ", error);
    return [] as any;
  }
};

export const isMovieFavorite = (movieId: number): boolean => {
  try {
    return !!realm.objectForPrimaryKey<Movie>("Movie", movieId);
  } catch (error) {
    console.log("Error on checking if movie is favorite: ", error);
    return false;
  }
};
