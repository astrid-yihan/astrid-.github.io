define('ember-ghost-blog/routes/tag', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model(params) {
      return Ember.RSVP.hash({
        tag: params.id,
        posts: this.store.query('content', {
          path: 'content'
        }).then(posts => posts.filter(post => {
          if (Ember.get(post, 'tags')) {
            return Ember.get(post, 'tags').includes(params.id);
          }
        }))
      });
    }
  });
});