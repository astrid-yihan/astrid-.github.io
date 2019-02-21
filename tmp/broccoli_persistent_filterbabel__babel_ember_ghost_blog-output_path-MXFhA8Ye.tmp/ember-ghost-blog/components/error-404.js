define('ember-ghost-blog/components/error-404', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    coverImageStyle: Ember.computed('feature_image', function () {
      return `background-image: url(${this.feature_image})`;
    })
  });
});