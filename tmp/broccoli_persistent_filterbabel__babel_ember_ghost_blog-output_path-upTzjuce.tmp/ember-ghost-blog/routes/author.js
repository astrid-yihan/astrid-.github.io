define('ember-ghost-blog/routes/author', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    classNames: ["author-template"],
    model(params) {
      // load content first for ember-data autopopulation
      return this.store.query('content', {
        path: 'content'
      }).then(() => {
        return this.store.findRecord('author', params.id);
      });
    }
  });
});