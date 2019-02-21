define('ember-ghost-blog/controllers/tag', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    coverImageStyle: Ember.computed('tag.feature_image', function () {
      return `background-image: url(${Ember.get(this, 'tag.feature_image')})`;
    })
  });
});