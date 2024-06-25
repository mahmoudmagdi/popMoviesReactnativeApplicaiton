import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useTheme } from "../../store/context/theme.context";
import { Theme } from "../../model/settings/Theme";
import { GlobalStyle } from "../../constants/styles.tsx";

function LoadingOverlay(): React.JSX.Element {
  const { theme } = useTheme();
  return (
    <View style={styles(theme === Theme.Dark).container}>
      <ActivityIndicator size="large" color={(theme === Theme.Dark) ? "white" : "black"} />
    </View>
  );
}

export default LoadingOverlay;

const styles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: isDarkMode ? GlobalStyle.colorsDark["background"] : GlobalStyle.colorLight["background"]
  }
});
