const assert = require('assert');
const app = require('../../src/app');

describe('\'bitecrowds\' service', () => {
  it('registered the service', () => {
    const service = app.service('bitecrowds');

    assert.ok(service, 'Registered the service');
  });
});
