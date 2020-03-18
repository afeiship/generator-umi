'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-umi:config', () => {
  test('creates yo umi:config - without args', (done) => {
    helpers.run(path.join(__dirname, '../generators/config')).then((res) => {
      assert.file(['.yo-rc.json']);
      done();
    });
  });

  test('creates yo umi:config - with prefix', (done) => {
    helpers
      .run(path.join(__dirname, '../generators/config'))
      .withPrompts({ prefix: 'nxx-' })
      .then((res) => {
        assert.fileContent('.yo-rc.json', /"prefix": "nxx-",/);
        done();
      });
  });
});
