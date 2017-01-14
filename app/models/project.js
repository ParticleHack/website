import DS from 'ember-data';
import { notEmpty } from 'ember-computed';

const { Model, attr } = DS;

export default Model.extend({
  title: attr('string'),
  imageURL: attr('string'),
  projectLinks: attr('array'),
  socialLinks: attr('array'),

  // 📋 TODO: HTMLSafe?
  copy: attr('string'),

  hasSocialLinks: notEmpty('socialLinks')
});
