import Ember from 'ember';

export default Ember.Component.extend({
  selectedProject: null,
  actions: {
    save() {
      var board = this.getProperties('name', 'description', 'projectId');
      board.project = this.get('selectedProject');
      return this.sendAction('onSave', board);
    }
  }
});
