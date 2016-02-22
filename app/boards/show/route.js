import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('board', params.boardId);
  },

  actions: {
    close() {
      let board = this.currentModel();
      board.set('isOpened', true);
      return board.save();
    }
  }
});
