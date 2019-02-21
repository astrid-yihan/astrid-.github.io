define('ember-ghost-blog/services/url', ['exports', 'ember-ghost-blog/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    prefix: Ember.computed(function () {
      let prefix = _environment.default.apiHost || '';

      if (prefix && _environment.default.apiNamespace) {
        prefix += `/${_environment.default.apiNamespace}`;
      } else if (prefix) {
        prefix += _environment.default.apiNamespace;
      }

      return prefix;
    })
  });
});