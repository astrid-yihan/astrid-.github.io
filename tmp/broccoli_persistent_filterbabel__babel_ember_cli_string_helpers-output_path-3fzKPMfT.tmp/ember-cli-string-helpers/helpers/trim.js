define('ember-cli-string-helpers/helpers/trim', ['exports', 'ember-cli-string-helpers/utils/trim', 'ember-cli-string-helpers/-private/create-string-helper'], function (exports, _trim, _createStringHelper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.trim = undefined;
  const trim = exports.trim = (0, _createStringHelper.default)(_trim.default);
  exports.default = Ember.Helper.helper(trim);
});