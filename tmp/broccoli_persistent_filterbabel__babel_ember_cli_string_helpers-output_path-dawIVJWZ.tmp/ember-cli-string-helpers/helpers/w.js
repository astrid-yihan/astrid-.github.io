define('ember-cli-string-helpers/helpers/w', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.w = w;
  function w([...wordStrings]) {
    return wordStrings.map(Ember.String.w).reduce((words, moreWords) => {
      return words.concat(moreWords);
    }, []);
  }

  exports.default = Ember.Helper.helper(w);
});