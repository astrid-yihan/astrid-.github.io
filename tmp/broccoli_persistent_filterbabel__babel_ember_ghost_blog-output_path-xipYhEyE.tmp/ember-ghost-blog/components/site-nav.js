define('ember-ghost-blog/components/site-nav', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    blog: Ember.inject.service(),
    router: Ember.inject.service(),
    url: Ember.inject.service(),
    tagName: '',

    rssFeed: Ember.computed('blog.host', function () {
      return `https://feedly.com/i/subscription/feed${encodeURIComponent('/' + Ember.get(this, 'blog.host') + '/rss.xml')}`;
    })
  });
});