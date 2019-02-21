define('ember-cli-string-helpers/utils/uppercase', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = uppercase;
  function uppercase(string = '') {
    if (typeof string !== 'string') {
      throw new TypeError(`Expected a string, got a ${typeof string}`);
    }

    return string.toUpperCase();
  }
});