import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyle } from "../../constants/styles";

import Movie from "../../model/movie";
import MovieDetails from "./MovieDetails";

type MovieCardProps = {
  movie: Movie;
};

function MovieCard({ movie }: MovieCardProps) {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("MovieDetails" as never, {
      movieId: movie.id
    } as never);
  }

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: GlobalStyle.colors.gray100 }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={handlePress}>
        <View style={styles.innerContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            }}
            style={styles.image}
          />
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.releaseDate}>{movie.release_date}</Text>
          <MovieDetails movie={movie} />
          <Text style={styles.overview}>{movie.overview}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MovieCard;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 5,
    elevation: 5,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: GlobalStyle.colors.white
  },
  innerContainer: {
    flexDirection: "column",
    borderColor: GlobalStyle.colors.black,
    justifyContent: "center",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 300,
    overflow: "hidden"
  },
  title: {
    marginTop: 10,
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  releaseDate: {
    textAlign: "center",
    marginTop: 5,
    marginHorizontal: 10,
    fontSize: 12
  },
  overview: {
    fontSize: 14,
    margin: 10,
    maxHeight: 100
  },
  pressed: {
    opacity: 0.5
  }
});
