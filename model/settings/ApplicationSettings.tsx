import Realm, { ObjectSchema } from "realm";
import Language from "./Language";
import { Theme } from "./Theme";

export default class ApplicationSettings extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  language!: Language;
  theme!: Theme;

  static schema: ObjectSchema = {
    name: "Settings",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      language: "Language",
      theme: "string"
    }
  };
}

