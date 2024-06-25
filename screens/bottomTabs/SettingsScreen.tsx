import React, { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { getSettingsFromRealm, saveSettingsToRealm } from "../../store/realm/settings-database";
import Language from "../../model/settings/Language";
import { Theme } from "../../model/settings/Theme";
import { getLanguageByCode } from "../../utils/Utils";
import { useTheme } from "../../store/context/theme.context";
import { useLanguage } from "../../store/context/language.context";
import { GlobalStyle } from "../../constants/styles";
import { GlobalContent } from "../../constants/content";

const SettingsScreen: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const [items, setItems] = useState(
    [
      { label: "English", value: "en" },
      { label: "Español", value: "es" },
      { label: "Français", value: "fr" },
      { label: "Deutsch", value: "de" },
      { label: "Arabic", value: "ar" }
    ]
  );

  useEffect(() => {
    // Load the saved settings from the Realm database when the component mounts
    const settings = getSettingsFromRealm();
    if (settings) {
      setLanguage(settings.language as Language);
      setTheme(settings.theme as Theme);
    }
  }, []);

  const handleLanguageChange = (code: string | null) => {
    console.log("Selected language: ", code);
    const selectedLanguage = getLanguageByCode(code);
    setLanguage(selectedLanguage);
    saveSettingsToRealm(selectedLanguage, theme);
  };

  const handleThemeChange = (value: boolean) => {
    const newTheme = value ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
    saveSettingsToRealm(language, newTheme);
  };

  return (
    <View style={styles(theme === Theme.Dark).container}>

      <View style={styles(theme === Theme.Dark).settingItem}>
        <Text style={styles(theme === Theme.Dark).label}>
          {GlobalContent[language.name].darkMode}
        </Text>
        <Switch
          value={theme === Theme.Dark}
          onValueChange={handleThemeChange}
        />
      </View>

      <View style={styles(theme === Theme.Dark).settingItem}>
        <Text style={styles(theme === Theme.Dark).label}>
          {GlobalContent[language.name].language}
        </Text>
        <DropDownPicker
          open={open}
          value={language.code}
          items={items}
          setOpen={setOpen}
          setValue={(callback) => {
            handleLanguageChange(callback(items));
          }}
          setItems={setItems}
          containerStyle={styles(theme === Theme.Dark).dropDownContainer}
          style={styles(theme === Theme.Dark).dropDown}
          dropDownContainerStyle={styles(theme === Theme.Dark).dropDownList}
          labelStyle={styles(theme === Theme.Dark).label}
          theme={theme === Theme.Dark ? "DARK" : "LIGHT"}
        />
      </View>
    </View>
  );
};

const styles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    height: 40
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    maxWidth: "50%",
    alignItems: "center",
    color: isDarkMode ? GlobalStyle.colorsDark["text"] : GlobalStyle.colorLight["text"]
  },
  dropDownContainer: {
    height: 40,
    maxWidth: "50%",
    verticalAlign: "middle"
  },
  dropDown: {
    backgroundColor: isDarkMode ? GlobalStyle.colorsDark["background"] : GlobalStyle.colorLight["background"],
    alignItems: "center",
    verticalAlign: "middle",
    borderColor: isDarkMode ? GlobalStyle.colorsDark["text"] : GlobalStyle.colorLight["text"]
  },
  dropDownList: {
    backgroundColor: isDarkMode ? GlobalStyle.colorsDark["background"] : GlobalStyle.colorLight["background"],
    verticalAlign: "middle",
    borderColor: isDarkMode ? GlobalStyle.colorsDark["text"] : GlobalStyle.colorLight["text"]
  }
});

export default SettingsScreen;
