import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('project');
  },

  actions: {
    delete(projectId) {
      this.store.findRecord('project', projectId).then(post => {
        post.destroyRecord();
      });
    }
  }
});
