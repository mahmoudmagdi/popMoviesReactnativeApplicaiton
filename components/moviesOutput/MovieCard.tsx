import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyle } from "../../constants/styles";

import Movie from "../../model/movie";
import MovieDetails from "./MovieDetails";
import { useTheme } from "../../store/context/theme.context";
import { Theme } from "../../model/settings/Theme.tsx";
import { useLanguage } from "../../store/context/language.context.tsx";
import Language from "../../model/settings/Language.tsx";

type MovieCardProps = {
  movie: Movie;
};

function MovieCard({ movie }: MovieCardProps) {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("MovieDetails" as never, {
      movieId: movie.id
    } as never);
  }

  return (
    <View style={styles(theme, language).gridItem}>
      <Pressable
        android_ripple={{ color: (theme === Theme.Dark) ? GlobalStyle.colorsDark["accent"] : GlobalStyle.colorLight["accent"] }}
        style={({ pressed }) => (pressed ? styles(theme, language).pressed : null)}
        onPress={handlePress}>
        <View style={styles(theme, language).innerContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            }}
            style={styles(theme, language).image}
          />
          <Text style={styles(theme, language).title}>{movie.title}</Text>
          <Text style={styles(theme, language).releaseDate}>{movie.release_date}</Text>
          <MovieDetails movie={movie} />
          <Text style={styles(theme, language).overview}>{movie.overview}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MovieCard;

const styles = (theme: Theme, language: Language) => StyleSheet.create({
  gridItem: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 5,
    elevation: 20,
    shadowColor: (theme === Theme.Dark) ? GlobalStyle.colorsDark["text"] : GlobalStyle.colorLight["text"],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: (theme === Theme.Dark) ? GlobalStyle.colorsDark["cardBackground"] : GlobalStyle.colorLight["cardBackground"]
  },
  innerContainer: {
    flexDirection: "column",
    borderColor: (theme === Theme.Dark) ? GlobalStyle.colorsDark["text"] : GlobalStyle.colorLight["text"],
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
    textAlign: "center",
    direction: (language.code === "ar") ? "rtl" : "ltr",
    color: (theme === Theme.Dark) ? GlobalStyle.colorsDark["text"] : GlobalStyle.colorLight["text"]
  },
  releaseDate: {
    textAlign: "center",
    marginTop: 5,
    marginHorizontal: 10,
    fontSize: 12,
    color: (theme === Theme.Dark) ? GlobalStyle.colorsDark["textSecondary"] : GlobalStyle.colorLight["textSecondary"]
  },
  overview: {
    fontSize: 14,
    margin: 10,
    maxHeight: 100,
    textAlign: (language.code === "ar") ? "right" : "left",
    color: (theme === Theme.Dark) ? GlobalStyle.colorsDark["textSecondary"] : GlobalStyle.colorLight["textSecondary"]
  },
  pressed: {
    opacity: 0.5
  }
});
