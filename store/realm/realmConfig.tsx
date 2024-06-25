import Realm from "realm";
import Movie from "../../model/movie";
import Genres from "../../model/genres";
import ApplicationSettings from "../../model/settings/ApplicationSettings";
import Language from "../../model/settings/Language";

const realm = new Realm({ schema: [Movie, Genres, ApplicationSettings, Language], schemaVersion: 6 });

export default realm;
