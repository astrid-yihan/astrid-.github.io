define('ember-ghost-blog/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    blog: Ember.inject.service(),
    now: Ember.computed(function () {
      return new Date();
    })
  });
});