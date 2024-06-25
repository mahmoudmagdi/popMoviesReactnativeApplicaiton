import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Theme } from "../../model/settings/Theme";
import { useTheme } from "../../store/context/theme.context";
import { GlobalStyle } from "../../constants/styles.tsx";
import { SelectedFilterContext } from "../../store/context/selected-filter-context.tsx";

type QuickMoviesSelectorProps = { filters: string[]; }

type QuickMovieItemProps = { item: string; }

function getIconColor(theme: Theme, isSelected: boolean): string {
  if (theme === Theme.Dark) {
    return isSelected ? GlobalStyle.colorsDark["background"] : GlobalStyle.colorsDark["accent"];
  } else {
    return isSelected ? GlobalStyle.colorLight["background"] : GlobalStyle.colorLight["accent"];
  }
}

function QuickMoviesSelector({ filters }: QuickMoviesSelectorProps): React.JSX.Element {
  const { theme } = useTheme();
  const selectedFilterContext = useContext(SelectedFilterContext);
  const navigation = useNavigation();

  function QuickMovieItem({ item }: QuickMovieItemProps): React.JSX.Element {
    const isSelected = selectedFilterContext?.selectedFilter == item;

    function QuickMovieItemClickHandler() {
      if (item == "Search") {
        navigation.navigate("SearchScreen" as never);
        return;
      }

      selectedFilterContext?.setSelectedFilter(item);
    }

    let content = (
      <Text
        style={[!isSelected && styles(theme === Theme.Dark).quickMovieItemText, isSelected && styles(theme === Theme.Dark).quickMovieItemSelectedText]}>{item}</Text>
    );

    if (item == "Search") {
      content = (
        <Icon name={"search"} size={14} color={getIconColor(theme, isSelected)} />
      );
    }

    return (
      <Pressable style={styles(theme === Theme.Dark).container} onPress={QuickMovieItemClickHandler}>
        <View
          style={[!isSelected && styles(theme === Theme.Dark).quickMovieItem, isSelected && styles(theme === Theme.Dark).quickMovieItemSelected]}>
          {content}
        </View>
      </Pressable>
    );
  }

  return (
    <FlatList
      style={styles(theme === Theme.Dark).filter}
      data={filters}
      renderItem={QuickMovieItem}
      keyExtractor={(item) => item}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default QuickMoviesSelector;

const styles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50
  },
  filter: {
    height: 50
  },
  quickMovieItem: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    backgroundColor: isDarkMode ? GlobalStyle.colorsDark["background"] : GlobalStyle.colorLight["background"],
    marginVertical: 5,
    borderRadius: 20,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: isDarkMode ? GlobalStyle.colorsDark["accent"] : GlobalStyle.colorLight["accent"]
  },
  quickMovieItemSelected: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    backgroundColor: isDarkMode ? GlobalStyle.colorsDark["accent"] : GlobalStyle.colorLight["accent"],
    marginVertical: 5,
    borderRadius: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: isDarkMode ? GlobalStyle.colorsDark["accent"] : GlobalStyle.colorLight["accent"]
  },
  quickMovieItemText: {
    color: isDarkMode ? GlobalStyle.colorsDark["accent"] : GlobalStyle.colorLight["accent"]
  },
  quickMovieItemSelectedText: {
    color: isDarkMode ? GlobalStyle.colorsDark["background"] : GlobalStyle.colorLight["background"]
  }
});
