import { module, test } from 'qunit';
import { setupTest } from 'trivia-app/tests/helpers';

module('Unit | Route | trivia', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:trivia');
    assert.ok(route);
  });
});
