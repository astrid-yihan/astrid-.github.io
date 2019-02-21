define('ember-ghost-blog/adapters/application', ['exports', 'ember-data', 'ember-ghost-blog/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, query) {
      let prefix = _environment.default.apiHost || '';

      if (prefix && _environment.default.apiNamespace) {
        prefix += `/${_environment.default.apiNamespace}`;
      } else if (prefix) {
        prefix += _environment.default.apiNamespace;
      }

      if (requestType === 'queryRecord') {
        return `${prefix}/${modelName}/${query.path}.json`;
      } else if (requestType === 'query') {
        return `${prefix}/${modelName}/${query.path}.json`;
      } else if (requestType === 'findRecord') {
        return `${prefix}/${modelName}/${id}.json`;
      }

      return this._super(...arguments);
    }
  });
});