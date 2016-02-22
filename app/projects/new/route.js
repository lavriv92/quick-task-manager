import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(project) {
      project = this.store.createRecord('project', project);
      project.save();
      return this.transitionTo('projects.index');
    }
  }
});
