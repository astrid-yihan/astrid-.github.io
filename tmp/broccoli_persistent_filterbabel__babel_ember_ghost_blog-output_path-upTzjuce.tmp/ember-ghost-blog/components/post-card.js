define('ember-ghost-blog/components/post-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    blog: Ember.inject.service(),
    router: Ember.inject.service(),
    url: Ember.inject.service(),
    tagName: ''
  });
});