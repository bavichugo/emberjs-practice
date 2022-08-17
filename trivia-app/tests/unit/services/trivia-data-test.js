import { module, test } from 'qunit';
import { setupTest } from 'trivia-app/tests/helpers';

module('Unit | Service | trivia-data', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:trivia-data');
    assert.ok(service);
  });
});
