import Realm from 'realm';
import Movie from '../../model/movie';
import Genres from '../../model/genres';

const realm = new Realm({schema: [Movie, Genres], schemaVersion: 3});

export default realm;
