define('ember-cli-string-helpers/helpers/classify', ['exports', 'ember-cli-string-helpers/-private/create-string-helper'], function (exports, _createStringHelper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.classify = undefined;
  const classify = exports.classify = (0, _createStringHelper.default)(Ember.String.classify);
  exports.default = Ember.Helper.helper(classify);
});