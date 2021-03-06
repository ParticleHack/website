import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects', { path: '/' });
  // this.route('projects', { path: '/' }, function () {
  //   this.route('project', { path: '/:project_id' });
  // });

  this.route('project', { path: '/project/:project_id' });

  this.route('about');
});

export default Router;
