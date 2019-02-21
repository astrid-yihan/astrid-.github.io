define('ember-ghost-blog/controllers/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    blog: Ember.inject.service(),
    url: Ember.inject.service(),

    coverImageStyle: Ember.computed('blog.coverImage', function () {
      return Ember.String.htmlSafe(`background-image: url(${Ember.get(this, 'url.prefix')}${Ember.get(this, 'blog.coverImage')})`);
    })
  });
});