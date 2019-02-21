define('ember-cli-string-helpers/utils/trim', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = trim;
  function trim(string = '') {
    if (typeof string !== 'string') {
      throw new TypeError(`Expected a string, got a ${typeof string}`);
    }

    return string.trim();
  }
});