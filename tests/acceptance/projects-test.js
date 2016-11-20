import { test } from 'qunit';
import moduleForAcceptance from 'particle-hack/tests/helpers/module-for-acceptance';
import { hook } from 'ember-hook';

let expected;
let actual;
let message;

moduleForAcceptance('Acceptance | homepage');

test('visiting /', async function(assert) {
  await visit('/');

  message = 'the root URL is preserved at its index route';
  expected = '/';
  actual = currentURL();

  assert.equal(actual, expected, message);

  message = `the "projects" route is mapped to the rootURL`;
  expected = 'projects';
  actual = currentRouteName();

  assert.equal(actual, expected, message);
});

test('showing project cards', async function(assert) {
  await visit('/');

  const projectCardElems = document.querySelectorAll(hook('project-card'));

  expected = server.schema.projects.all().models.length;
  actual = projectCardElems.length;
  message = 'all project cards are shown';

  assert.equal(actual, expected, message);
});
