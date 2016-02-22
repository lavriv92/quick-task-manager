import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Mixin.create({
  timestamp: DS.attr('number', {
    defaultValue() { return Date.now() }
  })
});
