define('ember-ghost-blog/helpers/encode', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.encode = encode;
  function encode(params /*, hash*/) {
    return encodeURIComponent(params);
  }

  exports.default = Ember.Helper.helper(encode);
});