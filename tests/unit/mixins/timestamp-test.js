import Ember from 'ember';
import TimestampMixin from 'quick-project-manager/mixins/timestamp';
import { module, test } from 'qunit';

module('Unit | Mixin | timestamp');

// Replace this with your real tests.
test('it works', function(assert) {
  let TimestampObject = Ember.Object.extend(TimestampMixin);
  let subject = TimestampObject.create();
  assert.ok(subject);
});
