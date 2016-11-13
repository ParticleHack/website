import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  title: attr('string'),
  imageURL: attr('string'),
  projectLinks: attr('array'),
  twitterURL: attr('string'),
  facebookURL: attr('string'),
  githubURL: attr('string'),

  // 📋 TODO: HTMLSafe?
  copy: attr('string')
});
