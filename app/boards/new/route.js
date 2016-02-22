import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('project');
  },

  actions: {
    save(board) {
      board = this.store.createRecord('board', board);
      board.save();
      this.transitionTo('boards.index');
    }
  }
});
