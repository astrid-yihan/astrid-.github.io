define('ember-cli-string-helpers/-private/create-string-helper', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (stringFunction) {
    return function ([string]) {
      if (Ember.String.isHTMLSafe(string)) {
        string = string.string;
      }

      string = string || '';
      return stringFunction(string);
    };
  };
});