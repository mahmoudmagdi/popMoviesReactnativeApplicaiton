import realm from "./realmConfig";
import { Theme } from "../../model/settings/Theme";
import Language from "../../model/settings/Language";
import ApplicationSettings from "../../model/settings/ApplicationSettings";

// store settings
const saveSettingsToRealm = (language: Language, theme: Theme): void => {
  realm.write(() => {
    let settings = realm.objects<ApplicationSettings>("Settings")[0];
    if (!settings) {
      realm.create("Settings", {
        _id: new Realm.BSON.ObjectId(),
        language: language,
        theme: theme
      });
    } else {
      settings.language = language;
      settings.theme = theme;
    }

    console.log("Settings saved to Realm: ", settings);
  });
};

const getSettingsFromRealm = () => {
  try {
    return realm.objects("Settings")[0];
  } catch (error) {
    console.log("Error on fetching settings: ", error);
    return null;
  }
};
export { saveSettingsToRealm, getSettingsFromRealm };
