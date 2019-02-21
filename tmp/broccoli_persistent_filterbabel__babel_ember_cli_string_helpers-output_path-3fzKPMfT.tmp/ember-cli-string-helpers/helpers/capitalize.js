define('ember-cli-string-helpers/helpers/capitalize', ['exports', 'ember-cli-string-helpers/-private/create-string-helper'], function (exports, _createStringHelper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.capitalize = undefined;
  const capitalize = exports.capitalize = (0, _createStringHelper.default)(Ember.String.capitalize);
  exports.default = Ember.Helper.helper(capitalize);
});