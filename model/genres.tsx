import Realm, {ObjectSchema} from 'realm';

class Genres extends Realm.Object {
  id?: number;
  name?: string;

  static schema: ObjectSchema = {
    name: 'Genres',
    properties: {
      id: 'int',
      name: 'string',
    },
  };
}

export default Genres;
