define('ember-ghost-blog/helpers/url', ['exports', 'ember-ghost-blog/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.url = url;
  function url(params /*, hash*/) {

    if (!params[0] || params[0].startsWith('//')) {
      return params;
    }

    let prefix = _environment.default.apiHost || '';

    if (prefix && _environment.default.apiNamespace) {
      prefix += `/${_environment.default.apiNamespace}`;
    } else if (prefix) {
      prefix += _environment.default.apiNamespace;
    }

    return prefix + params[0];
  }

  exports.default = Ember.Helper.helper(url);
});