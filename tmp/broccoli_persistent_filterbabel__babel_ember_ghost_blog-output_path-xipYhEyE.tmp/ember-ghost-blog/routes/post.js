define('ember-ghost-blog/routes/post', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    classNames: ["post-template"],

    model(params) {
      return Ember.RSVP.hash({
        post: this.store.queryRecord('content', {
          path: params.id
        }),
        posts: this.store.query('content', {
          path: 'content'
        })
      }).then(result => {
        return Ember.get(result, 'post.author').then(author => this.store.findRecord('author', author.id)).then(() => result);
      });
    }
  });
});