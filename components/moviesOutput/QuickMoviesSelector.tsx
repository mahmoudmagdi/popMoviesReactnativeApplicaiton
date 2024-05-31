import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { SelectedFilterContext } from "../../store/context/selected-filter-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

type QuickMoviesSelectorProps = { filters: string[]; }

type QuickMovieItemProps = { item: string; }

function QuickMoviesSelector({ filters }: QuickMoviesSelectorProps): React.JSX.Element {

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
        style={[!isSelected && styles.quickMovieItemText, isSelected && styles.quickMovieItemSelectedText]}>{item}</Text>
    );

    if (item == "Search") {
      content = (
        <Icon name={"search"} size={14} color={!isSelected ? "#005683" : "#ffffff"} />
      );
    }

    return (
      <Pressable style={styles.container} onPress={QuickMovieItemClickHandler}>
        <View style={[!isSelected && styles.quickMovieItem, isSelected && styles.quickMovieItemSelected]}>
          {content}
        </View>
      </Pressable>
    );
  }

  return (
    <FlatList
      style={styles.filter}
      data={filters}
      renderItem={QuickMovieItem}
      keyExtractor={(item) => item}
      horizontal={true}
    />
  );
}

export default QuickMoviesSelector;

const styles = StyleSheet.create({
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
    backgroundColor: "#f0f0f0",
    marginVertical: 5,
    borderRadius: 20,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#005683"
  },
  quickMovieItemSelected: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    backgroundColor: "#005683",
    marginVertical: 5,
    borderRadius: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#005683"
  },
  quickMovieItemText: {
    color: "#005683"
  },
  quickMovieItemSelectedText: {
    color: "#ffffff"
  }
});
