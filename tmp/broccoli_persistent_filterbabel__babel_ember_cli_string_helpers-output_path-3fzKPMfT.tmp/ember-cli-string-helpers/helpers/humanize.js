define('ember-cli-string-helpers/helpers/humanize', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.humanize = humanize;


  const regex = /_+|-+/g;
  const replacement = ' ';

  // The substituted value will be contained in the result variable
  function humanize([string]) {
    if (Ember.String.isHTMLSafe(string)) {
      string = string.string;
    }

    if (string === undefined || string === null) {
      return '';
    }

    let result = string.toLowerCase().replace(regex, replacement);
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  exports.default = Ember.Helper.helper(humanize);
});