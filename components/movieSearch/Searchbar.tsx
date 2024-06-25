import { View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { GlobalStyle } from "../../constants/styles";
import { Theme } from "../../model/settings/Theme";
import { useTheme } from "../../store/context/theme.context";
import { useLanguage } from "../../store/context/language.context";
import { GlobalContent } from "../../constants/content.ts";

function Searchbar({ setKeyword }: { setKeyword: (keyword: string) => void }) {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <View style={styles(theme === Theme.Dark).outerContainer}>
      <View style={styles(theme === Theme.Dark).innerContainer}>
        <Icon name={"search"} size={24}
              color={(theme === Theme.Dark) ? GlobalStyle.colorsDark["textHint"] : GlobalStyle.colorLight["textHint"]} />
        <TextInput
          style={styles(theme === Theme.Dark).input}
          placeholder={GlobalContent[language.name].searchPlaceholder}
          autoCapitalize={"none"}
          autoCorrect={false}
          onChangeText={setKeyword}
          numberOfLines={1}
          placeholderTextColor={(theme === Theme.Dark) ? GlobalStyle.colorsDark["text"] : GlobalStyle.colorLight["text"]}
        />
      </View>
    </View>
  );
}

const styles = (isDarkMode: boolean) => StyleSheet.create({
  outerContainer: {
    borderStyle: "solid",
    backgroundColor: isDarkMode ? GlobalStyle.colorsDark["background"] : GlobalStyle.colorLight["background"],
    height: 60
  },
  innerContainer: {
    borderColor: isDarkMode ? GlobalStyle.colorsDark["textHint"] : GlobalStyle.colorLight["textHint"],
    borderWidth: 0.8,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    margin: 10,
    padding: 5
  },
  input: {
    height: "100%",
    marginHorizontal: 10,
    color: isDarkMode ? GlobalStyle.colorsDark["text"] : GlobalStyle.colorLight["text"],
    fontSize: 16
  }
});

export default Searchbar;
