define('ember-cli-string-helpers/helpers/truncate', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.truncate = truncate;
  function truncate([string, characterLimit = 140, useEllipsis = true]) {
    let limit = useEllipsis ? characterLimit - 3 : characterLimit;

    if (Ember.String.isHTMLSafe(string)) {
      string = string.string;
    }

    if (string && string.length > limit) {
      return useEllipsis ? `${string.substring(0, limit)}...` : string.substring(0, limit);
    } else {
      return string;
    }
  }

  exports.default = Ember.Helper.helper(truncate);
});