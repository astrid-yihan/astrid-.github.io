define('ember-cli-string-helpers/helpers/underscore', ['exports', 'ember-cli-string-helpers/-private/create-string-helper'], function (exports, _createStringHelper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.underscore = undefined;
  const underscore = exports.underscore = (0, _createStringHelper.default)(Ember.String.underscore);
  exports.default = Ember.Helper.helper(underscore);
});