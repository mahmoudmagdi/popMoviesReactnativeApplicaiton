import { View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { GlobalStyle } from "../../constants/styles";

function Searchbar({ setKeyword }: { setKeyword: (keyword: string) => void }) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Icon name={"search"} size={24} color={GlobalStyle.colors.gray700} />
        <TextInput
          style={styles.input}
          placeholder="Search for a movie"
          autoCapitalize={"none"}
          autoCorrect={false}
          onChangeText={setKeyword}
          numberOfLines={1}
          placeholderTextColor={GlobalStyle.colors.black}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderStyle: "solid",
    backgroundColor: GlobalStyle.colors.white,
    height: 60
  },
  innerContainer: {
    borderColor: GlobalStyle.colors.gray700,
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
    color: GlobalStyle.colors.black,
    fontSize: 16
  }
});

export default Searchbar;
