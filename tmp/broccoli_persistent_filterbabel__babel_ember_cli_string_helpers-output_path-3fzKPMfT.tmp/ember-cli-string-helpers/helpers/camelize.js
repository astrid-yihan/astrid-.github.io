define('ember-cli-string-helpers/helpers/camelize', ['exports', 'ember-cli-string-helpers/-private/create-string-helper'], function (exports, _createStringHelper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.camelize = undefined;
  const camelize = exports.camelize = (0, _createStringHelper.default)(Ember.String.camelize);
  exports.default = Ember.Helper.helper(camelize);
});