import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  isClosed: DS.attr('boolean'),
  project: DS.belongsTo('project', { async: true, autoSave: true })
});
