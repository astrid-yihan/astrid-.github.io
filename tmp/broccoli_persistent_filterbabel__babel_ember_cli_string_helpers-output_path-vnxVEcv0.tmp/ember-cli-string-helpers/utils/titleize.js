define('ember-cli-string-helpers/utils/titleize', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = titleize;
  function titleize(string = '') {
    if (typeof string !== 'string') {
      throw new TypeError(`Expected a string, got a ${typeof string}`);
    }

    return string.toLowerCase().replace(/(?:^|\s|-|\/)\S/g, function (m) {
      return m.toUpperCase();
    });
  }
});