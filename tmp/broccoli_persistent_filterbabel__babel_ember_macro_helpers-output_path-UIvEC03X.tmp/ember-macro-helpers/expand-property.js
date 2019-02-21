define('ember-macro-helpers/expand-property', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (property) {
    let newPropertyList = [];
    Ember.expandProperties(property, expandedProperties => {
      newPropertyList = newPropertyList.concat(expandedProperties);
    });
    return newPropertyList;
  };
});