import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Movie from "../model/movie";

import MovieDetails from "../components/moviesOutput/MovieDetails";
import Icon from "react-native-vector-icons/FontAwesome";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
import {
  addMovieToFavorites,
  isMovieFavorite,
  removeMovieFromFavorites
} from "../store/realm/database";
import { fetchMovieDetails } from "../services/movies.service";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { useDispatch } from "react-redux";

type MovieOverViewScreenProps = {
  route: any;
  navigation: any;
};

function MovieDetailsScreen(
  {
    route,
    navigation
  }: MovieOverViewScreenProps): React.JSX.Element {
  const movieId = route.params.movieId ?? 0;

  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
  const [movieItem, setMovieItem] = useState<Movie | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  if (movieId == 0) {
    return <ErrorOverlay message="Invalid movie id!" />;
  }

  useEffect(() => {
    let isFav = movieId ? isMovieFavorite(movieId) : false;
    setIsFavorite(isFav);
  }, []);

  function renderMovieDetails() {
    useEffect(() => {
      async function getMovieDetails() {
        setIsFetching(true);
        try {
          let movie = await fetchMovieDetails({
            movieId: movieId,
            language: "en-us"
          });

          setMovieItem(movie);
        } catch (errorMessage) {
          setError("Could not fetch movies: " + errorMessage);
        }

        setIsFetching(false);
      }

      getMovieDetails();
    }, []);

    if (error && !isFetching) {
      return <ErrorOverlay message={error} />;
    }

    if (isFetching) {
      return <LoadingOverlay />;
    }
  }

  renderMovieDetails();

  function changeFavoriteStatusHandler() {
    if (isFavorite) {
      // remove from favorites
      dispatch(removeFavorite(movieItem));

      // remove from realm
      movieItem?.id && removeMovieFromFavorites(movieItem?.id);

      // update favorite status
      setIsFavorite(false);
    } else {
      // add to favorites
      dispatch(addFavorite(movieItem));

      // add to realm
      addMovieToFavorites(movieItem);

      // update favorite status
      setIsFavorite(true);
    }
  }

  useLayoutEffect(() => {
    let title = movieItem?.title ?? "Movie Details";
    navigation.setOptions({
      title: title,
      headerRight: () => {
        return (
          <Icon
            name={isFavorite ? "heart" : "heart-o"}
            size={25}
            color={"red"}
            style={{ marginRight: 10 }}
            onPress={changeFavoriteStatusHandler}
          />
        );
      }
    });
  }, [isFavorite, changeFavoriteStatusHandler]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movieItem?.poster_path}`
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
    flex: 1
  },
  backdropImage: {
    width: "100%",
    height: 300
  },
  detailsContainer: {
    padding: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center"
  },
  overview: {
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 10
  },
  movieDetails: {
    marginTop: 10
  }
});

export default MovieDetailsScreen;
