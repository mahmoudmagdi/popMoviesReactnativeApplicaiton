import Realm, {ObjectSchema} from 'realm';
import Genres from './genres';

class Movie extends Realm.Object<Movie> {
  id!: number;
  title?: string;
  adult?: boolean;
  backdrop_path?: string;
  genres?: Genres[];
  original_language?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  revenue?: number;
  tagline?: string;
  vote_average?: number;
  vote_count?: number;

  static schema: ObjectSchema = {
    name: 'Movie',
    properties: {
      id: 'int',
      title: 'string?',
      adult: 'bool?',
      backdrop_path: 'string?',
      genres: 'Genres[]',
      original_language: 'string?',
      overview: 'string?',
      popularity: 'double?',
      poster_path: 'string?',
      release_date: 'string?',
      revenue: 'int?',
      tagline: 'string?',
      vote_average: 'double?',
      vote_count: 'int?',
    },
    primaryKey: 'id',
  };
}

export default Movie;
