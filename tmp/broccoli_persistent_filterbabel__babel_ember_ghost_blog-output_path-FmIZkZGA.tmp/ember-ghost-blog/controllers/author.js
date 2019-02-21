define('ember-ghost-blog/controllers/author', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    coverImageStyle: Ember.computed('model.coverImage', function () {
      return `background-image: url(${Ember.get(this, 'model.coverImage')})`;
    })
  });
});