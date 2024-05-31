import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { GlobalStyle } from "../../constants/styles";

type InformationItemProps = {
  iconName: string;
  text: string;
};

function InformationItem({ iconName, text }: InformationItemProps): React.JSX.Element {
  return (
    <View style={styles.itemContainer}>
      <Icon
        style={styles.icon}
        name={iconName}
        size={12}
        color={GlobalStyle.colors.accent600}
      />
      <Text>{text}</Text>
    </View>
  );
}

export default InformationItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 2
  },
  icon: {
    marginHorizontal: 3
  }
});
