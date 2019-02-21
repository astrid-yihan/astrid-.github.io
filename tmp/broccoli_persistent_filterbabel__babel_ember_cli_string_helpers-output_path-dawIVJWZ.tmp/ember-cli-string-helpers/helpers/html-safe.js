define('ember-cli-string-helpers/helpers/html-safe', ['exports', 'ember-cli-string-helpers/-private/create-string-helper'], function (exports, _createStringHelper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.htmlSafe = undefined;
  const htmlSafe = exports.htmlSafe = (0, _createStringHelper.default)(Ember.String.htmlSafe);
  exports.default = Ember.Helper.helper(htmlSafe);
});