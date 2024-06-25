import { View, Text, StyleSheet } from "react-native";

import React, { useState } from "react";
import { GlobalStyle } from "../../constants/styles.tsx";
import { getSettingsFromRealm } from "../../store/realm/settings-database.tsx";
import { Theme } from "../../model/settings/Theme.tsx";
import { useTheme } from "../../store/context/theme.context.tsx";

interface ErrorOverlayProps {
  message: string;
}

function ErrorOverlay({ message }: ErrorOverlayProps): React.JSX.Element {
  const { theme } = useTheme();

  return (
    <View style={styles(theme === Theme.Dark).container}>
      <Text style={[styles(theme === Theme.Dark).text, styles(theme === Theme.Dark).title]}>An error occurred!</Text>
      <Text style={styles(theme === Theme.Dark).text}>{message}</Text>
    </View>
  );
}

export default ErrorOverlay;

const styles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    height: 650
  },
  text: {
    color: isDarkMode ? GlobalStyle.colorsDark["text"] : GlobalStyle.colorLight["text"],
    textAlign: "center",
    marginBottom: 8
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: isDarkMode ? GlobalStyle.colorsDark["text"] : GlobalStyle.colorLight["text"]
  }
});
