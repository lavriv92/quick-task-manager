import DS from 'ember-data';
import TimestampMixin from '../mixins/timestamp';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend(TimestampMixin, {
  name: attr(),
  description: attr(),
  boards: hasMany('board', { async: true, dependent: 'destroy' }),
});
