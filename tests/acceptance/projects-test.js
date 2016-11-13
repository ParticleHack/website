import { test } from 'qunit';
import moduleForAcceptance from 'particle-hack/tests/helpers/module-for-acceptance';
import { hook } from 'ember-hook';
import jQuery from 'jquery';

let expected;
let actual;
let message;

moduleForAcceptance('Acceptance | homepage', {

});

test('visiting /', async function(assert) {
  await visit('/');

  const url = currentURL();
  const routeName = currentRouteName();

  message = 'the root URL is preserved at its index route';
  expected = '/';
  actual = url;

  assert.equal(actual, expected, message);

  message = `the "projects" route is mapped to the rootURL`;
  expected = 'projects';
  actual = routeName.slice(0, routeName.indexOf('.'));

  assert.equal(actual, expected, message);
});

// test('showing project cards', async function(assert) {
//   await visit('/');

//   const expected = server.schema.projects.all().models.length;
//   debugger;
//   const projects = jQuery(hook('project-card')).length;
// });
