import Realm, { ObjectSchema } from "realm";

export default class Language extends Realm.Object {
  code!: LanguageCode;
  name!: LanguageName;

  static schema: ObjectSchema = {
    name: "Language",
    properties: {
      code: "string",
      name: "string"
    }
  };
}

export enum LanguageCode {
  EN = "en",
  ES = "es",
  FR = "fr",
  DE = "de",
  AR = "ar"
}

export enum LanguageName {
  EN = "English",
  ES = "Spanish",
  FR = "French",
  DE = "German",
  AR = "Arabic"
}

export const availableLanguages: Language[] = [
  { code: LanguageCode.EN, name: LanguageName.EN } as Language,
  { code: LanguageCode.ES, name: LanguageName.ES } as Language,
  { code: LanguageCode.FR, name: LanguageName.FR } as Language,
  { code: LanguageCode.DE, name: LanguageName.DE } as Language,
  { code: LanguageCode.AR, name: LanguageName.AR } as Language
];
