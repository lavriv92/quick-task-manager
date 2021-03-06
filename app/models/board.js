import DS from 'ember-data';
import TimestampMixin from '../mixins/timestamp';

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend(TimestampMixin, {
  name: attr(),
  description: attr(),
  project: belongsTo('project', { async: true, autoSave: true }),
  tasks: hasMany('task', { async: true, dependent: 'destroy' })
});
