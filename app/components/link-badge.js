import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['url:href', 'target'],

  classNames: [
    'c-link-badge',
    'u-p-inset-squish',
    'o-grid',
    'o-grid--align-middle',
    'g-link-reset'
  ],

  target: '_blank',

  url: '',
  title: ''
});
