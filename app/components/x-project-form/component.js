import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var project = this.getProperties('name', 'description');
      return this.sendAction('onSave', project);
    }
  }
});
