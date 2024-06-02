import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function FavoritesScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Favorites Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
