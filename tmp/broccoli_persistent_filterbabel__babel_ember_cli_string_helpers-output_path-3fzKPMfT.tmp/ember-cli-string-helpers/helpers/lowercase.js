define('ember-cli-string-helpers/helpers/lowercase', ['exports', 'ember-cli-string-helpers/utils/lowercase', 'ember-cli-string-helpers/-private/create-string-helper'], function (exports, _lowercase, _createStringHelper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.lowercase = undefined;
  const lowercase = exports.lowercase = (0, _createStringHelper.default)(_lowercase.default);
  exports.default = Ember.Helper.helper(lowercase);
});