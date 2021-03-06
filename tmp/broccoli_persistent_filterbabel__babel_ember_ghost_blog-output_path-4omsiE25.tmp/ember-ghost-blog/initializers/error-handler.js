define('ember-ghost-blog/initializers/error-handler', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'error-handler',

    initialize: function (application) {
      if (!Ember.onerror) {
        // if no onerror handler is defined, define one for fastboot environments
        Ember.onerror = function (err) {
          let errorMessage = `There was an error running your app in fastboot. More info about the error: \n ${err.stack || err}`;
          Ember.Logger.error(errorMessage);
        };
      }
    }
  };
});