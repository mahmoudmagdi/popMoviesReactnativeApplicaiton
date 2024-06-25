import React, { useLayoutEffect, useState } from "react";
import Searchbar from "../components/movieSearch/Searchbar.tsx";
import SearchResults from "../components/movieSearch/SearchResults.tsx";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalContent } from "../constants/content.ts";
import { useLanguage } from "../store/context/language.context.tsx";

function SearchScreen(): React.JSX.Element {
  const [keyWord, setKeyWord] = useState<string>("");
  const navigation = useNavigation();
  const { language } = useLanguage();

  useLayoutEffect(() => {
    setKeyWord("");
    navigation.setOptions({ title: GlobalContent[language.name].search });
  });

  function handleSearch(keyword: string): void {
    setKeyWord(keyword);
  }

  return (
    <View style={styles.container}>
      <Searchbar setKeyword={handleSearch} />
      <SearchResults keyword={keyWord} />
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
