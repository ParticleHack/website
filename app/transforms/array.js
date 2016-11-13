import DS from 'ember-data';
import { isEmberArray, A } from 'ember-array/utils';

const { Transform } = DS;

export default Transform.extend({
  deserialize(serialized) {
    return isEmberArray(serialized) ? serialized : A(serialized);
  },

  serialize(deserialized) {
    return isEmberArray(deserialized) ? deserialized : A(deserialized);
  }
});
