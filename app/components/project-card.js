import Component from 'ember-component';
import injectService from 'ember-service/inject';

export default Component.extend({
  mediaService: injectService('media'),
  classNames: [
    'c-project-card',
    'u-relative',
    'u-overflow-hide'
  ],
  classNameBindings: ['mediaService.classNames'],

  project: null
});
