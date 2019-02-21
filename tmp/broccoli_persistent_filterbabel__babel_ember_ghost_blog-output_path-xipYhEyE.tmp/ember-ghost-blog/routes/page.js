define('ember-ghost-blog/routes/page', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    classNames: ["page-template"],
    model(params) {
      return this.store.queryRecord('page', {
        path: params.id
      });
    }
  });
});