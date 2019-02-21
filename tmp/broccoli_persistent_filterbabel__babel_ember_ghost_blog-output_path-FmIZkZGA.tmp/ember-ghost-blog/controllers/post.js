define('ember-ghost-blog/controllers/post', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    blog: Ember.inject.service(),
    url: Ember.inject.service(),

    init() {
      this._super(...arguments);
      this.postSorting = ['date:desc'];
    },

    sortedPosts: Ember.computed.sort('model.posts', 'postSorting'),
    relatedPosts: Ember.computed('model.post.id', 'sortedPosts', function () {
      return this.sortedPosts.filter(post => {
        if (Ember.get(post, 'id') === Ember.get(this, 'model.post.id')) {
          return false;
        }
        return Ember.get(post, 'primaryTag') === Ember.get(this, 'model.post.primaryTag');
      });
    }),

    prevPost: Ember.computed('model.post.id', 'sortedPosts', function () {
      let index = this.sortedPosts.indexOf(Ember.get(this, 'model.post'));

      if (index > 0) {
        return this.sortedPosts.get(index - 1);
      }
    }),

    nextPost: Ember.computed('model.post.id', 'sortedPosts', function () {
      let index = this.sortedPosts.indexOf(Ember.get(this, 'model.post'));

      if (index < Ember.get(this, 'sortedPosts.length') - 1) {
        return this.sortedPosts.get(index + 1);
      }
    }),

    tagBackgroundImageStyle: Ember.computed(function () {
      if (Ember.get(this, 'model.post.primaryTag.image')) {
        return `background-image: url(${Ember.get(this, 'url.prefix')}${Ember.get(this, 'model.post.primaryTag.image')})`;
      } else if (Ember.get(this, 'blog.coverImage')) {
        return `background-image: url(${Ember.get(this, 'url.prefix')}${Ember.get(this, 'blog.coverImage')})`;
      }
    })
  });
});