import Route from 'ember-route';

export default Route.extend({
  activate() {
    window.scrollTo(0, 0);
  }
});
