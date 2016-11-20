import Component from 'ember-component';
import injectService from 'ember-service/inject';

export default Component.extend({
  tagName: 'header',
  mediaService: injectService('media'),

  classNames: [
    'c-navbar',
    'o-content-box',
    'u-relative'
  ],
  classNameBindings: ['media.classNames']
});
