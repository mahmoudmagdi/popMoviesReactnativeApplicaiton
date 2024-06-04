import React, { useState } from "react";
import Searchbar from "../components/movieSearch/Searchbar.tsx";
import SearchResults from "../components/movieSearch/SearchResults.tsx";
import { View, StyleSheet } from "react-native";

function SearchScreen(): React.JSX.Element {
  const [keyWord, setKeyWord] = useState<string>("");

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
