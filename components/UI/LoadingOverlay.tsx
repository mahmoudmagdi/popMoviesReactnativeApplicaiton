import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyle } from "../../constants/styles";

function LoadingOverlay(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24
  }
});
