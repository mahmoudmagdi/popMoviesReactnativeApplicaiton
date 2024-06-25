import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { GlobalStyle } from "../../constants/styles";
import { Theme } from "../../model/settings/Theme.tsx";
import { useTheme } from "../../store/context/theme.context.tsx";

type InformationItemProps = {
  iconName: string;
  text: string;
};

function InformationItem({ iconName, text }: InformationItemProps): React.JSX.Element {
  const { theme } = useTheme();

  return (
    <View style={styles(theme === Theme.Dark).itemContainer}>
      <Icon
        style={styles(theme === Theme.Dark).icon}
        name={iconName}
        size={12}
        color={(theme === Theme.Dark) ? GlobalStyle.colorsDark["accent"] : GlobalStyle.colorLight["accent"]}
      />
      <Text style={styles(theme === Theme.Dark).text}>{text}</Text>
    </View>
  );
}

export default InformationItem;

const styles = (isDarkMode: boolean) => StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 2
  },
  text: {
    color: isDarkMode ? GlobalStyle.colorsDark["text"] : GlobalStyle.colorLight["text"]
  },
  icon: {
    marginHorizontal: 3
  }
});
