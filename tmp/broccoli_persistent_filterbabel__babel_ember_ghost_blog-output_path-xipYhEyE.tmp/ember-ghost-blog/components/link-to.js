define('ember-ghost-blog/components/link-to', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.LinkComponent.extend({
    click() {
      if (window.scrollTo) {
        window.scrollTo(0, 0);
      }
    }
  });
});