define('ember-cli-string-helpers/utils/lowercase', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = lowercase;
  function lowercase(string = '') {
    if (typeof string !== 'string') {
      throw new TypeError(`Expected a string, got a ${typeof string}`);
    }

    return string.toLowerCase();
  }
});