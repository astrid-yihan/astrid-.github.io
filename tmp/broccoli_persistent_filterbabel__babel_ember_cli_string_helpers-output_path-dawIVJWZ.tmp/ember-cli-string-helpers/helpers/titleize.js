define('ember-cli-string-helpers/helpers/titleize', ['exports', 'ember-cli-string-helpers/utils/titleize', 'ember-cli-string-helpers/-private/create-string-helper'], function (exports, _titleize, _createStringHelper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.titleize = undefined;
  const titleize = exports.titleize = (0, _createStringHelper.default)(_titleize.default);
  exports.default = Ember.Helper.helper(titleize);
});