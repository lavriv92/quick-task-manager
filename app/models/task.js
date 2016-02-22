import DS from 'ember-data';
import TimestampMixin from '../mixins/timestamp';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend(TimestampMixin, {
  title: attr(),
  description: attr(),
  status: attr(),
  priority: attr('number'),
  board: belongsTo('board', { async: true })
});
