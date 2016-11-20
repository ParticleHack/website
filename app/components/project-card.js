import Component from 'ember-component';
import injectService from 'ember-service/inject';

export default Component.extend({
  hook: 'project-card',
  mediaService: injectService('media'),
  classNames: [
    'c-project-card',
    'u-relative',
    'u-overflow-hide'
  ],
  classNameBindings: ['mediaService.classNames'],

  project: null
});
