define('ember-ghost-blog/components/site-navigation', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    blog: Ember.inject.service(),
    tagName: 'ul',
    classNames: ['nav']
  });
});