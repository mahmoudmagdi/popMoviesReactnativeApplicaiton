import Language, { availableLanguages, LanguageCode, LanguageName } from "../model/settings/Language.tsx";
import { GlobalContent } from "../constants/content.ts";
import { useLanguage } from "../store/context/language.context.tsx";

// export function getByKey(language: Language, key: string): string {
//   return GlobalContent[language.name][];
// }

export function getSelectedFilterKey(selectedFilter: string): string {
  switch (selectedFilter) {
    case "Popular":
      return "popular";
    case "Top Rated":
      return "top_rated";
    case "Upcoming":
      return "upcoming";
    case "Now Playing":
      return "now_playing";
    default:
      return "popular";
  }
}

export const getLanguageByCode = (code: string | null): Language => {
  return availableLanguages.find(lang => lang.code === code) ?? {
    code: LanguageCode.EN,
    name: LanguageName.EN
  } as Language;
};
