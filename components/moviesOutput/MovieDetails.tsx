import { View, StyleSheet } from "react-native";
import React from "react";
import InformationItem from "./InformationItem";
import Movie from "../../model/Movie";

type MovieDetailsProps = {
  customStyle?: any | undefined;
  direction?: "column" | "row";
  movie: Movie | null;
};

function MovieDetails({
                        customStyle = null,
                        direction = "column",
                        movie: movie
                      }: MovieDetailsProps): React.JSX.Element {
  let content: React.JSX.Element = (
    <>
      <View style={styles.informationContainer}>
        <InformationItem iconName="globe-africa" text={movie?.original_language || ""} />
        <InformationItem iconName="users" text={movie?.popularity?.toString() || ""} />
      </View>
      <View style={styles.informationContainer}>
        <InformationItem
          iconName="star"
          text={`${movie?.vote_average} (${movie?.vote_count})`}
        />
      </View>
    </>
  );

  if (direction === "row") {
    content = (
      <>
        <View style={styles.informationContainer}>
          <InformationItem iconName="globe-africa" text={movie?.original_language || ""} />
          <InformationItem iconName="users" text={movie?.popularity?.toString() || ""} />
          <InformationItem
            iconName="star"
            text={`${movie?.vote_average} (${movie?.vote_count})`}
          />
        </View>
      </>
    );
  }

  return <View style={[styles.outerContainer, customStyle]}>{content}</View>;
}

export default MovieDetails;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  informationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
