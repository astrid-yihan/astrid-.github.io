define('ember-ghost-blog/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    classNames: ["index-template", "home-template"],
    store: Ember.inject.service(),
    model() {
      return this.store.query('content', {
        path: 'content'
      });
    }
  });
});