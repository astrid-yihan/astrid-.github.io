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
      return this.get('currentRouteModel.articleTitle');
    }),
    /**
     * Used for twitter 'written by' meta.
     */
    author: Ember.computed('routeName', function () {
      return this.get('currentRouteModel.author');
    }),
    /**
     * Used for <link rel="canonical">
     */
    canonical: Ember.computed('routeName', function () {
      return this.get('currentRouteModel.canonical');
    }),
    /**
     * Internal - used by keywords & tags
     */
    categories: Ember.computed('routeName', function () {
      return this.get('currentRouteModel.categories');
    }),
    /**
     * Internal - optionally used for description
     */
    content: Ember.computed('routeName', function () {
      return this.get('currentRouteModel.content');
    }),
    /**
     * Used for article:published_time
     */
    date: Ember.computed('routeName', function () {
      return this.get('currentRouteModel.date');
    }),
    /**
     * Used for <meta name="description">, og:description, twitter:description
     * This is the main content of your page, shown as the content in the unfurled links
     * If you pass a description, it will be used, otherwise it will truncate your content,
     * and finally it will use the description from the global config.
     */
    description: Ember.computed('routeName', function () {
      const description = this.get('currentRouteModel.description');
      const content = this.get('content');

      if (description) {
        return description;
      } else if (content && content.substring) {
        return `${content.substring(0, 260)}...`;
      }

      return emberMetaConfig.description;
    }),
    /**
     * Used for og:image twitter:image:src, the image to display in your unfurled links
     */
    imgSrc: Ember.computed('routeName', function () {
      return this.getWithDefault('currentRouteModel.imgSrc', emberMetaConfig.imgSrc);
    }),
    /**
     * Used for twitter meta to display 'filed under'
     */
    keywords: Ember.computed('routeName', function () {
      const categories = this.get('categories');
      return categories ? categories.join(', ') : null;
    }),
    /**
     * Used for og:site_name
     */
    siteName: Ember.computed('routeName', function () {
      return this.getWithDefault('currentRouteModel.siteName', emberMetaConfig.siteName);
    }),
    /**
     * Internal - used for url
     */
    slug: Ember.computed('routeName', function () {
      return this.get('currentRouteModel.slug');
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
      return this.getWithDefault('currentRouteModel.title', emberMetaConfig.title);
    }),
    /**
     * Used for twitter:site and twitter:creator
     */
    twitterUsername: Ember.computed('routeName', function () {
      return this.getWithDefault('currentRouteModel.twitterUsername', emberMetaConfig.twitterUsername);
    }),
    /**
     * Used for og:type, defaults to 'website'
     */
    type: Ember.computed('routeName', function () {
      return this.getWithDefault('currentRouteModel.type', 'website');
    }),
    /**
     * Used for <link rel="canonical">, og:url, twitter:url
     */
    url: Ember.computed('routeName', function () {
      let url = this.getWithDefault('currentRouteModel.url', emberMetaConfig.url);
      const slug = this.get('slug');
      if (slug) {
        url = `${url}${slug}/`;
      }
      return url;
    })
  });
});