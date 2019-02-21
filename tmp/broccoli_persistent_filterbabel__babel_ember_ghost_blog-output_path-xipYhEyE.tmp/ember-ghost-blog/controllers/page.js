define('ember-ghost-blog/controllers/page', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    blog: Ember.inject.service()
  });
});