define('ember-meta/services/head-data', ['exports', 'ember-get-config'], function (exports, _emberGetConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const emberMetaConfig = _emberGetConfig.default['ember-meta'];

  exports.default = Ember.Service.extend({
    routing: Ember.inject.service('-routing'),

    routeName: Ember.computed.alias('routing.currentRouteName'),

    currentRouteModel: Ember.computed('routeName', function () {
      return Ember.getOwner(this).lookup(`route:${this.get('routeName')}`).get('currentModel');
    }),

    /**
     * Used for og:title, twitter:title as the title to show in the unfurled links
     */
    articleTitle: Ember.computed('routeName', function () {
      return this.get('currentRouteModel.attributes.articleTitle');
    }),
    /**
     * Used for twitter 'written by' meta.
     */
    author: Ember.computed('routeName', function () {
      return this.get('currentRouteModel.attributes.author');
    }),
    /**
     * Used for article:published_time
     */
    date: Ember.computed('routeName', function () {
      return this.get('currentRouteModel.attributes.date');
    }),
    /**
     * Used for <meta name="description">, og:description, twitter:description
     * This is the main content of your page, shown as the conten in the unfurled links
     */
    description: Ember.computed('routeName', function () {
      const content = this.get('currentRouteModel.content');

      if (content && content.substring) {
        return `${content.substring(0, 260)}...`;
      }

      return this.getWithDefault('currentRouteModel.attributes.description', emberMetaConfig.description);
    }),
    /**
     * Not used directly - used by keywords & tags
     */
    categories: Ember.computed('routeName', function () {
      return this.get('currentRouteModel.attributes.categories');
    }),
    /**
     * Used for twitter meta to display 'filed under'
     */
    keywords: Ember.computed('routeName', function () {
      const categories = this.get('categories');
      return categories ? categories.join(', ') : null;
    }),
    /**
     * Used for og:image twitter:image:src, the image to display in your unfurled links
     */
    imgSrc: Ember.computed('routeName', function () {
      return this.getWithDefault('currentRouteModel.attributes.imgSrc', emberMetaConfig.imgSrc);
    }),
    /**
     * Used for og:site_name
     */
    siteName: Ember.computed('routeName', function () {
      return this.getWithDefault('currentRouteModel.attributes.siteName', emberMetaConfig.siteName);
    }),
    /**
     * Used for article:tag
     */
    tags: Ember.computed('routeName', function () {
      return this.get('categories');
    }),
    /**
     * Used for <title>, og:title, twitter:title
     */
    title: Ember.computed('routeName', function () {
      return this.getWithDefault('currentRouteModel.attributes.title', emberMetaConfig.title);
    }),
    /**
     * Used for twitter:site and twitter:creator
     */
    twitterUsername: Ember.computed('routeName', function () {
      return this.getWithDefault('currentRouteModel.attributes.twitterUsername', emberMetaConfig.twitterUsername);
    }),
    /**
     * Used for og:type, defaults to 'website'
     */
    type: Ember.computed('routeName', function () {
      return this.getWithDefault('currentRouteModel.attributes.type', 'website');
    }),
    /**
     * Used for <link rel="canonical">, og:url, twitter:url
     */
    url: Ember.computed('routeName', function () {
      let url = this.getWithDefault('currentRouteModel.attributes.url', emberMetaConfig.url);
      const slug = this.get('currentRouteModel.attributes.slug');
      if (slug) {
        url = `${url}${slug}/`;
      }
      return url;
    }),
    /**
     * Used for <link rel="canonical">
     */
    canonical: Ember.computed('routeName', function () {
      return this.get('currentRouteModel.attributes.canonical');
    })
  });
});