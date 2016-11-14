import Component from 'ember-component';
import injectService from 'ember-service/inject';

export default Component.extend({
  mediaService: injectService('media'),
  tagName: 'a',
  classNames: [
    'c-project-card',
    'u-relative',
    'o-flex-grid',
    'o-flex-grid--justifyCenter',
    'o-flex-grid--center',
    'u-pointer',
    'u-overflow-hide'
  ],
  classNameBindings: ['mediaService.classNames'],

  project: null
});
