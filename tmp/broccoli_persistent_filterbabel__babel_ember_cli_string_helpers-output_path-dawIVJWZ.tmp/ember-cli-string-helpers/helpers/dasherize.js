define('ember-cli-string-helpers/helpers/dasherize', ['exports', 'ember-cli-string-helpers/-private/create-string-helper'], function (exports, _createStringHelper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.dasherize = undefined;
  const dasherize = exports.dasherize = (0, _createStringHelper.default)(Ember.String.dasherize);
  exports.default = Ember.Helper.helper(dasherize);
});