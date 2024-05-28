import { StyleSheet } from "react-native";
import { GlobalStyle } from "../../constants/styles.tsx";

export const errorStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyle.colors.primary700,
  },
  text: {
    color: GlobalStyle.colors.white,
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
