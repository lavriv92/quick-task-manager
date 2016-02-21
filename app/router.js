import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('projects', function() {
    this.route('new');
    this.route('show', { path: ':postId' });
  });
  this.route('boards', function() {
    this.route('new');
    this.route('show', { path: ':boardId' });
  });
});

export default Router;
